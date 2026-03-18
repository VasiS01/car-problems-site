# 🚗 Kroniği BUL — Araç Kronik Sorunları Rehberi

Alacağınız veya mevcut aracınızın **gizli kalmış hastalıklarını** keşfedin. Motor, şanzıman ve kasa bazlı kronik arızalar tek bir platformda.

🔗 **Canlı Demo:** [kronigibul.com](https://VasiS01.github.io/car-problems-site) *(GitHub Pages)*

---

## ✨ Özellikler

- 🏷️ **20+ Marka, 80+ Model** — VW, BMW, Toyota, Renault, Ford, Fiat, Opel, Hyundai, Peugeot, Skoda, Dacia, Honda, Nissan, Kia, Mercedes-Benz, Seat, Citroën, Audi, Volvo, Cupra ve daha fazlası
- 🔍 **Gelişmiş Filtreleme** — Marka, model, motor tipi, şanzıman türü, yıl ve sıralama seçenekleri
- 🔎 **Kelime Arama** — Herhangi bir arıza veya parça adını aratarak sonuç bulma (örn: *DSG*, *turbo*, *göçük*)
- ⚖️ **Araç Karşılaştırma** — Birden fazla aracı yan yana karşılaştırma
- 🎲 **Rastgele Araç** — Rastgele bir araç keşfetme
- 📊 **İstatistikler** — Toplam araç, sorun sayısı, kritik sorun ve en sorunlu marka bilgileri
- 🔥 **En Çok Sorunlu Araçlar** — Ana sayfada öne çıkan araçlar
- 🌗 **Karanlık / Aydınlık Tema** — Tercihe göre tema değiştirme
- 📱 **PWA Desteği** — Mobilde uygulama gibi kullanılabilir
- 🎨 **Modern & Responsive Tasarım** — Mobil, tablet ve masaüstünde uyumlu

---

## 📸 Ekran Görüntüleri

> *Yakında eklenecek.*

---

## 🛠️ Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| HTML5     | Sayfa yapısı & SEO |
| CSS3      | Responsive tasarım, animasyonlar, tema |
| JavaScript (Vanilla) | Filtreleme, arama, karşılaştırma ve tüm etkileşimler |
| Service Worker | Offline destek (PWA) |

> Hiçbir framework veya build aracı kullanılmamıştır. Tamamen saf HTML/CSS/JS ile geliştirilmiştir.

---

## 🚀 Kurulum & Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Repo'yu klonlayın
git clone https://github.com/VasiS01/car-problems-site.git

# 2. Klasöre girin
cd car-problems-site

# 3. Herhangi bir live server ile açın
#    VS Code: "Live Server" eklentisi ile index.html'i açın
#    veya Python ile:
python -m http.server 8000
```

Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

---

## 📁 Proje Yapısı

```
car-problems-site/
├── index.html          # Ana sayfa
├── styles.css          # Tüm stiller (tema, animasyon, responsive)
├── script.js           # Tüm uygulama mantığı (filtreleme, arama, modal vb.)
├── data.js             # Araç verileri (markalar, modeller, sorunlar)
├── data.json           # JSON formatında veri
├── manifest.json       # PWA manifest dosyası
├── sw.js               # Service Worker (offline destek)
├── sitemap.xml         # SEO sitemap
├── images/             # Araç görselleri (80+ PNG)
└── README.md           # Bu dosya
```

---

## ⚠️ Feragatname

Bu platform, araç sahiplerinin ve ustaların tecrübelerine dayanan verileri derlemektedir. **Kesinlik ifade etmez.** Araç satın alma kararlarınızda profesyonel bir mekanikere danışmanız önerilir.

---

## 📄 Lisans

© 2026 KroniğiBUL. Tüm hakları saklıdır.
