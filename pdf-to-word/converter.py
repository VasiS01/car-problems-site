"""PDF -> Word (.docx) dönüştürme çekirdeği.

pdf2docx kullanır: metin, yazı tipleri, renkler, tablolar, resimler,
sütun düzeni, üst/alt bilgi ve köprüler korunur. Taranmış (resim olan)
sayfalar resim olarak Word'e eklenir, böylece hiçbir sayfa kaybolmaz.

Komut satırından da kullanılabilir:
    python converter.py dosya1.pdf dosya2.pdf -o cikti_klasoru
"""
from __future__ import annotations

import argparse
import logging
import os
import sys
from dataclasses import dataclass, field
from typing import Callable, Optional

import pymupdf as fitz  # PyMuPDF
from pdf2docx import Converter

# pdf2docx çok ayrıntılı log basıyor; sessize al.
logging.getLogger().setLevel(logging.ERROR)


class PasswordRequired(Exception):
    """PDF şifreli ve şifre verilmedi / yanlış."""


@dataclass
class PdfInfo:
    pages: int
    encrypted: bool
    scanned_pages: list[int] = field(default_factory=list)  # 1 tabanlı


def inspect_pdf(path: str, password: Optional[str] = None) -> PdfInfo:
    """Sayfa sayısını, şifreyi ve metinsiz (taranmış) sayfaları tespit eder."""
    with fitz.open(path) as doc:
        encrypted = doc.needs_pass
        if encrypted and not (password and doc.authenticate(password)):
            raise PasswordRequired(path)
        scanned = [
            i + 1 for i, page in enumerate(doc)
            if not page.get_text("text").strip() and page.get_images()
        ]
        return PdfInfo(pages=doc.page_count, encrypted=encrypted, scanned_pages=scanned)


def output_path_for(pdf_path: str, out_dir: Optional[str]) -> str:
    base = os.path.splitext(os.path.basename(pdf_path))[0]
    folder = out_dir or os.path.dirname(os.path.abspath(pdf_path))
    target = os.path.join(folder, base + ".docx")
    n = 1
    while os.path.exists(target):  # mevcut dosyanın üzerine yazma
        target = os.path.join(folder, f"{base} ({n}).docx")
        n += 1
    return target


def _rasterize_pages(pdf_path: str, page_ids: list[int], password: Optional[str], dpi: int = 200) -> str:
    """Belirtilen sayfaları yüksek çözünürlüklü resme çevirip geçici bir PDF yazar.

    pdf2docx'in çözümleyemediği sayfalar bu sayede resim olarak Word'e girer
    ve hiçbir sayfa atlanmaz.
    """
    import tempfile

    src = fitz.open(pdf_path)
    if src.needs_pass:
        src.authenticate(password or "")
    out = fitz.open()
    for i, page in enumerate(src):
        if i in page_ids:
            pix = page.get_pixmap(dpi=dpi)
            new_page = out.new_page(width=page.rect.width, height=page.rect.height)
            new_page.insert_image(new_page.rect, pixmap=pix)
        else:
            out.insert_pdf(src, from_page=i, to_page=i)
    fd, tmp = tempfile.mkstemp(suffix=".pdf")
    os.close(fd)
    out.save(tmp)
    out.close()
    src.close()
    return tmp


SETTINGS = dict(
    multi_processing=False,
    ignore_page_error=False,
    raw_exceptions=True,
    delete_end_line_hyphen=False,  # metni birebir koru
    extract_stream_table=True,     # kenarlıksız tabloları da yakala
    parse_lattice_table=True,
    parse_stream_table=True,
)


def _run(pdf_path, docx_path, password, on_page, stop_flag, total, progress_offset=0, progress_total=None):
    """pdf2docx ile sayfa sayfa çözümler. Başarısız sayfa indekslerini döndürür."""
    cv = Converter(pdf_path, password=password)
    failed: list[int] = []
    try:
        settings = cv.default_settings
        settings.update(SETTINGS)
        cv.load_pages().parse_document(**settings)
        for page in cv.pages:
            if stop_flag and stop_flag():
                raise InterruptedError("İptal edildi")
            try:
                page.parse(**settings)
            except Exception:  # noqa: BLE001
                failed.append(page.id)
            if on_page:
                on_page(progress_offset + page.id + 1, progress_total or total)
        if failed:
            return failed
        cv.make_docx(docx_path, **settings)
        return []
    finally:
        cv.close()


def convert_pdf(
    pdf_path: str,
    out_dir: Optional[str] = None,
    password: Optional[str] = None,
    on_page: Optional[Callable[[int, int], None]] = None,
    stop_flag: Optional[Callable[[], bool]] = None,
) -> tuple[str, list[int]]:
    """Tek bir PDF'i dönüştürür.

    Döndürür: (docx_yolu, resim_olarak_eklenen_sayfalar[1 tabanlı]).
    on_page(tamamlanan_sayfa, toplam_sayfa) ilerleme için çağrılır.
    """
    info = inspect_pdf(pdf_path, password)
    docx_path = output_path_for(pdf_path, out_dir)
    os.makedirs(os.path.dirname(docx_path), exist_ok=True)
    total = info.pages

    failed = _run(pdf_path, docx_path, password, on_page, stop_flag, total)
    if not failed:
        return docx_path, []

    # Bazı sayfalar çözümlenemedi: onları resme çevirip tekrar dene (sayfa kaybı olmasın).
    tmp = _rasterize_pages(pdf_path, failed, password)
    try:
        again = _run(tmp, docx_path, None, on_page, stop_flag, total)
        if again:
            raise RuntimeError(f"Sayfalar dönüştürülemedi: {[p + 1 for p in again]}")
    finally:
        os.remove(tmp)
    return docx_path, [p + 1 for p in failed]


def _cli() -> int:
    ap = argparse.ArgumentParser(description="PDF dosyalarını Word'e (.docx) dönüştürür.")
    ap.add_argument("pdfs", nargs="+", help="PDF dosyaları")
    ap.add_argument("-o", "--out", help="Çıktı klasörü (varsayılan: PDF'in yanı)")
    ap.add_argument("-p", "--password", help="Şifreli PDF'ler için şifre")
    args = ap.parse_args()

    failed = 0
    for pdf in args.pdfs:
        try:
            info = inspect_pdf(pdf, args.password)
            out, fallback = convert_pdf(
                pdf, args.out, args.password,
                on_page=lambda d, t: print(f"\r  {os.path.basename(pdf)}: {d}/{t} sayfa", end=""),
            )
            print(f"\n  -> {out}")
            if fallback:
                print(f"  Not: {fallback} numaralı sayfalar metin olarak çözülemedi, resim olarak eklendi.")
            if info.scanned_pages:
                print(f"  Not: {len(info.scanned_pages)} sayfa taranmış, resim olarak eklendi.")
        except PasswordRequired:
            failed += 1
            print(f"HATA: {pdf} şifreli. -p ile şifre verin.")
        except Exception as e:  # noqa: BLE001
            failed += 1
            print(f"\nHATA: {pdf}: {e}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(_cli())
