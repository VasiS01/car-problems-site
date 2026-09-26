@echo off
REM Windows icin tek dosyalik .exe olusturur (dist\PDF2Word.exe)
python -m pip install --upgrade pip
python -m pip install -r requirements.txt pyinstaller
python -m PyInstaller --noconfirm --onefile --windowed --name PDF2Word ^
  --collect-all pdf2docx --collect-all tkinterdnd2 app.py
echo.
echo Hazir: dist\PDF2Word.exe
pause
