"""PDF -> Word dönüştürücü masaüstü uygulaması (Tkinter).

Çalıştırma:  python app.py
"""
from __future__ import annotations

import os
import queue
import subprocess
import sys
import threading
import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog, ttk

from converter import PasswordRequired, convert_pdf, inspect_pdf

try:  # Sürükle-bırak isteğe bağlı (pip install tkinterdnd2)
    from tkinterdnd2 import DND_FILES, TkinterDnD
    BaseTk = TkinterDnD.Tk
except ImportError:  # pragma: no cover
    DND_FILES = None
    BaseTk = tk.Tk


class App(BaseTk):
    def __init__(self):
        super().__init__()
        self.title("PDF → Word Dönüştürücü")
        self.geometry("760x520")
        self.minsize(620, 420)

        self.files: list[str] = []
        self.out_dir = tk.StringVar(value="")
        self.same_folder = tk.BooleanVar(value=True)
        self.events: queue.Queue = queue.Queue()
        self.worker: threading.Thread | None = None
        self.cancel = threading.Event()
        self.passwords: dict[str, str] = {}

        self._build_ui()
        self.after(100, self._poll)

    # ---------- Arayüz ----------
    def _build_ui(self):
        pad = dict(padx=10, pady=6)

        top = ttk.Frame(self)
        top.pack(fill="x", **pad)
        ttk.Button(top, text="PDF Ekle…", command=self.add_files).pack(side="left")
        ttk.Button(top, text="Klasör Ekle…", command=self.add_folder).pack(side="left", padx=6)
        ttk.Button(top, text="Seçileni Kaldır", command=self.remove_selected).pack(side="left")
        ttk.Button(top, text="Listeyi Temizle", command=self.clear).pack(side="left", padx=6)

        lst = ttk.Frame(self)
        lst.pack(fill="both", expand=True, padx=10)
        self.tree = ttk.Treeview(lst, columns=("sayfa", "durum"), selectmode="extended")
        self.tree.heading("#0", text="Dosya")
        self.tree.heading("sayfa", text="Sayfa")
        self.tree.heading("durum", text="Durum")
        self.tree.column("#0", width=380)
        self.tree.column("sayfa", width=60, anchor="center")
        self.tree.column("durum", width=240)
        sb = ttk.Scrollbar(lst, orient="vertical", command=self.tree.yview)
        self.tree.configure(yscrollcommand=sb.set)
        self.tree.pack(side="left", fill="both", expand=True)
        sb.pack(side="right", fill="y")
        if DND_FILES:
            self.tree.drop_target_register(DND_FILES)
            self.tree.dnd_bind("<<Drop>>", self._on_drop)

        hint = "PDF'leri buraya sürükleyip bırakabilirsiniz." if DND_FILES else \
            "İpucu: sürükle-bırak için 'pip install tkinterdnd2' kurun."
        ttk.Label(self, text=hint, foreground="#666").pack(anchor="w", padx=10)

        out = ttk.LabelFrame(self, text="Çıktı konumu")
        out.pack(fill="x", **pad)
        ttk.Checkbutton(out, text="Word dosyasını PDF ile aynı klasöre kaydet",
                        variable=self.same_folder, command=self._toggle_out).pack(anchor="w", padx=6)
        row = ttk.Frame(out)
        row.pack(fill="x", padx=6, pady=4)
        self.out_entry = ttk.Entry(row, textvariable=self.out_dir, state="disabled")
        self.out_entry.pack(side="left", fill="x", expand=True)
        self.out_btn = ttk.Button(row, text="Seç…", command=self.pick_out, state="disabled")
        self.out_btn.pack(side="left", padx=6)

        bottom = ttk.Frame(self)
        bottom.pack(fill="x", **pad)
        self.progress = ttk.Progressbar(bottom, mode="determinate")
        self.progress.pack(fill="x", side="left", expand=True)
        self.start_btn = ttk.Button(bottom, text="Dönüştür", command=self.start)
        self.start_btn.pack(side="left", padx=6)
        self.cancel_btn = ttk.Button(bottom, text="İptal", command=self.cancel.set, state="disabled")
        self.cancel_btn.pack(side="left")
        self.status = ttk.Label(self, text="Hazır")
        self.status.pack(anchor="w", padx=10, pady=(0, 8))

    def _toggle_out(self):
        state = "disabled" if self.same_folder.get() else "normal"
        self.out_entry.configure(state=state)
        self.out_btn.configure(state=state)

    # ---------- Dosya listesi ----------
    def _add(self, paths):
        for p in paths:
            p = os.path.abspath(p)
            if p.lower().endswith(".pdf") and p not in self.files and os.path.isfile(p):
                self.files.append(p)
                self.tree.insert("", "end", iid=p, text=os.path.basename(p), values=("", "Bekliyor"))
        self.status.configure(text=f"{len(self.files)} dosya listede")

    def add_files(self):
        self._add(filedialog.askopenfilenames(title="PDF seçin", filetypes=[("PDF dosyaları", "*.pdf")]))

    def add_folder(self):
        folder = filedialog.askdirectory(title="PDF klasörü seçin")
        if folder:
            found = [os.path.join(r, f) for r, _, fs in os.walk(folder) for f in fs if f.lower().endswith(".pdf")]
            self._add(sorted(found))

    def _on_drop(self, event):
        paths = self.tk.splitlist(event.data)
        expanded = []
        for p in paths:
            if os.path.isdir(p):
                expanded += [os.path.join(r, f) for r, _, fs in os.walk(p) for f in fs]
            else:
                expanded.append(p)
        self._add(expanded)

    def remove_selected(self):
        if self._busy():
            return
        for iid in self.tree.selection():
            self.files.remove(iid)
            self.tree.delete(iid)

    def clear(self):
        if self._busy():
            return
        self.files.clear()
        self.tree.delete(*self.tree.get_children())

    def pick_out(self):
        d = filedialog.askdirectory(title="Çıktı klasörü")
        if d:
            self.out_dir.set(d)

    def _busy(self):
        return self.worker is not None and self.worker.is_alive()

    # ---------- Dönüştürme ----------
    def start(self):
        if self._busy():
            return
        if not self.files:
            messagebox.showinfo("Bilgi", "Önce PDF dosyası ekleyin.")
            return
        out_dir = None if self.same_folder.get() else self.out_dir.get().strip()
        if out_dir == "":
            messagebox.showwarning("Uyarı", "Bir çıktı klasörü seçin.")
            return

        # Şifreli dosyaların şifrelerini baştan sor (işlem sırasında pencere açılmasın).
        for f in self.files:
            try:
                inspect_pdf(f, self.passwords.get(f))
            except PasswordRequired:
                while True:
                    pw = simpledialog.askstring("Şifreli PDF", f"{os.path.basename(f)} için şifre:", show="*", parent=self)
                    if pw is None:
                        break
                    try:
                        inspect_pdf(f, pw)
                        self.passwords[f] = pw
                        break
                    except PasswordRequired:
                        messagebox.showerror("Hata", "Şifre yanlış.")
            except Exception:  # noqa: BLE001  – bozuk dosya; işleyici hatayı raporlar
                pass

        self.cancel.clear()
        self.start_btn.configure(state="disabled")
        self.cancel_btn.configure(state="normal")
        self.progress.configure(value=0, maximum=len(self.files) * 100)
        self.worker = threading.Thread(target=self._work, args=(list(self.files), out_dir), daemon=True)
        self.worker.start()

    def _work(self, files, out_dir):
        ok = fail = 0
        last_out = None
        for idx, f in enumerate(files):
            if self.cancel.is_set():
                self.events.put(("row", f, "", "İptal edildi"))
                continue
            self.events.put(("row", f, "", "Dönüştürülüyor…"))

            def on_page(done, total, f=f, idx=idx):
                self.events.put(("row", f, f"{done}/{total}", "Dönüştürülüyor…"))
                self.events.put(("progress", idx * 100 + int(done / total * 100)))

            try:
                info = inspect_pdf(f, self.passwords.get(f))
                path, fallback = convert_pdf(f, out_dir, self.passwords.get(f), on_page, self.cancel.is_set)
                notes = []
                if info.scanned_pages:
                    notes.append(f"{len(info.scanned_pages)} taranmış sayfa resim olarak")
                if fallback:
                    notes.append(f"s.{','.join(map(str, fallback))} resim olarak")
                status = "✔ Tamamlandı" + (f" ({'; '.join(notes)})" if notes else "")
                self.events.put(("row", f, f"{info.pages}/{info.pages}", status))
                ok += 1
                last_out = path
            except PasswordRequired:
                fail += 1
                self.events.put(("row", f, "", "✖ Şifre gerekli"))
            except InterruptedError:
                self.events.put(("row", f, "", "İptal edildi"))
            except Exception as e:  # noqa: BLE001
                fail += 1
                self.events.put(("row", f, "", f"✖ Hata: {e}"))
            self.events.put(("progress", (idx + 1) * 100))
        self.events.put(("done", ok, fail, last_out))

    def _poll(self):
        try:
            while True:
                ev = self.events.get_nowait()
                if ev[0] == "row":
                    _, f, pages, status = ev
                    if self.tree.exists(f):
                        self.tree.item(f, values=(pages, status))
                elif ev[0] == "progress":
                    self.progress.configure(value=ev[1])
                elif ev[0] == "done":
                    _, ok, fail, last_out = ev
                    self.start_btn.configure(state="normal")
                    self.cancel_btn.configure(state="disabled")
                    self.status.configure(text=f"Bitti: {ok} başarılı, {fail} hatalı")
                    if ok and last_out and messagebox.askyesno(
                            "Tamamlandı", f"{ok} dosya dönüştürüldü, {fail} hata.\n\nÇıktı klasörü açılsın mı?"):
                        open_folder(os.path.dirname(last_out))
        except queue.Empty:
            pass
        self.after(100, self._poll)


def open_folder(path):
    if sys.platform.startswith("win"):
        os.startfile(path)  # type: ignore[attr-defined]
    elif sys.platform == "darwin":
        subprocess.Popen(["open", path])
    else:
        subprocess.Popen(["xdg-open", path])


if __name__ == "__main__":
    App().mainloop()
