# PDF → Word Dönüştürücü (Masaüstü)

PDF dosyalarını düzeni bozmadan Word (`.docx`) dosyasına çeviren masaüstü uygulaması.
Windows, macOS ve Linux'ta çalışır; dönüşüm tamamen bilgisayarınızda yapılır (internet gerekmez).

## Neler korunur
- Metin, yazı tipi, boyut, renk, kalın/italik, Türkçe karakterler
- Tablolar (kenarlıklı ve kenarlıksız), resimler, çok sütunlu düzen
- Üst/alt bilgi, köprüler, sayfa boyutu ve kenar boşlukları
- **Hiçbir sayfa atlanmaz:** metin olarak çözülemeyen bir sayfa olursa o sayfa yüksek
  çözünürlüklü (200 DPI) resim olarak eklenir. Taranmış sayfalar da resim olarak gelir.
- Şifreli PDF'ler (şifre sorulur)

## Özellikler
- Birden çok PDF veya komple klasör ekleyip toplu dönüştürme
- Sürükle-bırak
- Sayfa sayfa ilerleme, iptal
- Çıktıyı PDF'in yanına veya seçilen klasöre kaydetme; var olan dosyanın üzerine yazmaz

## Kurulum ve çalıştırma
Python 3.9+ gerekir.

```bash
pip install -r requirements.txt
python app.py
```

macOS/Linux'ta kısaca `./run.sh`.

### Windows için tek tıklık .exe
`build_windows.bat` dosyasına çift tıklayın. Bittiğinde `dist\PDF2Word.exe` oluşur;
bu dosyayı Python kurulu olmayan bilgisayarlarda da çalıştırabilirsiniz.

## Komut satırı
```bash
python converter.py belge1.pdf belge2.pdf -o cikti_klasoru
python converter.py sifreli.pdf -p SIFRE
```

## Not
Taranmış (fotoğraf/tarayıcı çıktısı) PDF'lerde yazı bir resimdir; Word'de görünür ama
düzenlenemez. Düzenlenebilir metin için önce OCR gerekir.
