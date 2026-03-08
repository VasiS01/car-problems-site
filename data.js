const carsData = [
    {
        "brand": "Volkswagen",
        "model": "Jetta (Mk6)",
        "years": "2011 - 2018",
        "imageUrl": "images/vw_jetta_mk6.png",
        "engines": ["1.2 TSI", "1.4 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (Kuru)"],
        "engineTransMap": {
            "1.2 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (Kuru)"]
        },
        "problems": [
            { "title": "DSG Şanzıman Titremesi & Kavrama Bitişi", "desc": "DQ200 kuru kavramalı 7 ileri DSG şanzımanlarda düşük hızlarda (1'den 2. vitese geçerken) titreme ve vuruntu. Dur-kalk trafikte kavrama balatalarının erken aşınması ve mekatronik arızaları da sık görülür.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "Su Pompası Kaçağı", "desc": "1.2 ve 1.4 TSI motorlarda plastik su pompası gövdesinin zamanla çatlayıp soğutma devridaim sıvısını sızdırması.", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Trim Sesleri", "desc": "Bozuk yollarda kapı içlerinden ve özellikle ön konsol plastiğinden gelen tıkırtı sesleri.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Turbo Wastegate Zırıltısı", "desc": "1.2 ve 1.4 TSI motorlarda turbo wastegate valfinin belirli devirlerde rezonans yaparak metalik zırıltı sesi çıkarması.", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "1.6 TDI Enjektör Şakırdaması", "desc": "Erken üretim 1.6 TDI motorlarda ilk çalıştırmada ve hızlanmalarda çok belirgin enjektör şakırtısı ve kurum bağlama.", "severity": "medium", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Scirocco",
        "years": "2008 - 2017",
        "imageUrl": "images/scirocco.png",
        "engines": ["1.4 TSI (122 / 125 PS)", "1.4 TSI (160 PS Twincharger)", "2.0 TSI (210 / 280 PS)"],
        "transmissions": ["Manuel", "7 İleri DSG (Kuru)", "6 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.4 TSI (122 / 125 PS)": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.4 TSI (160 PS Twincharger)": ["Manuel", "7 İleri DSG (Kuru)"],
            "2.0 TSI (210 / 280 PS)": ["6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "DSG 7 İleri Titreme & Mekatronik", "desc": "1.4 TSI motorlarla gelen 7 ileri kuru DSG (DQ200) şanzımanlarda kalkış ve düşük hızlarda titreme, kavrama ömrünün kısa olması ve mekatronik arızası.", "severity": "high", "relatedEngine": "1.4 TSI (122 / 125 PS) / 1.4 TSI (160 PS Twincharger)", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "1.4 TSI (160 PS) Piston Kırma", "desc": "Özellikle 160 beygirlik kompresör + turbo (Twincharger) motorlarda kronik olarak 3. piston segman kırma veya piston çatlatma sorunu. Yakıt/ateşleme uyumsuzlukları motoru yemektedir.", "severity": "high", "relatedEngine": "1.4 TSI (160 PS Twincharger)", "relatedTransmission": "Tümü" },
            { "title": "Triger Zinciri Uzaması", "desc": "1.4 TSI motorlarda (122 ve 160 PS) ilk kasalarda özellikle triger zincirinin zamanla uzayıp soğuk çalıştırmada şakırtı sesi yapması.", "severity": "high", "relatedEngine": "1.4 TSI (122 / 125 PS) / 1.4 TSI (160 PS Twincharger)", "relatedTransmission": "Tümü" },
            { "title": "Su Pompası Arızası", "desc": "Su pompasından rulman sesi gelmesi veya gövdeden antifriz kaçırması oldukça yaygındır.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Çerçevesiz Kapı Cam Düşmesi / Rüzgar Sesi", "desc": "Çerçevesiz kapılardan dolayı zamanla cam fitillerinin aşınıp yüksek hızda rüzgar sesi alması veya kışın donmalarda camın yuvadan çıkması/mekanizma bozması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Golf (Mk7)",
        "years": "2012 - 2017",
        "imageUrl": "images/golf_mk7.png",
        "engines": ["1.0 TSI", "1.2 TSI", "1.4 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.2 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"]
        },
        "problems": [
            { "title": "DSG Şanzıman Titremesi & Kavrama Bitişi", "desc": "DQ200 kuru kavramalı 7 ileri DSG şanzımanlarda düşük hızlarda (1'den 2. vitese geçerken) titreme ve vuruntu. Dur-kalk trafikte kavrama balatalarının erken aşınması ve mekatronik arızaları da sık görülür.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Su Pompası Kaçağı", "desc": "1.2 ve 1.4 TSI motorlarda plastik su pompası gövdesinin zamanla çatlayıp soğutma devridaim sıvısını sızdırması.", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Trim Sesleri", "desc": "Bozuk yollarda kapı içlerinden ve özellikle varsa sunroof panellerinden gelen tıkırtı sesleri.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Özellikle stabilize ve parke taşlı yollarda direksiyon kutusundan gelen rahatsız edici tıkırtı sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Turbo Wastegate Zırıltısı", "desc": "1.2 ve 1.4 TSI motorlarda turbo wastegate valfinin belirli devirlerde rezonans yaparak metalik zırıltı sesi çıkarması. Genellikle 2000-3000 devir arasında belirginleşir.", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Arka Fren Disklerinde Aşırı Pas", "desc": "Arka fren disklerinin çok az kullanılması sebebiyle kısa sürede yoğun korozyon tutması, fren yaparken gürültü ve titreşim oluşması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Golf (Mk7.5 Makyajlı)",
        "years": "2017 - 2020",
        "imageUrl": "images/golf_mk7_5.png",
        "engines": ["1.0 TSI", "1.4 TSI", "1.5 TSI Evo", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 TSI Evo": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"]
        },
        "problems": [
            { "title": "DSG Mekatronik Arızası", "desc": "Mk7'ye göre şanzıman yazılımı iyileştirilmiş olsa da, DQ200 kuru kavramalı DSG'lerde mekatronik kartının veya basınç tüpünün patlaması sorunu devam etmektedir.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Devridaim Pompası / Termostat Arızası", "desc": "1.0 ve 1.5 TSI motorlarda su pompası bloğu ve termostatın erken deformasyonu, antifriz kaçağı.", "severity": "medium", "relatedEngine": "1.0 TSI / 1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Ekranı Kararması", "desc": "Büyük dokunmatik (Discover Pro vb.) ekranların aşırı sıcakta dokunmatiğinin takılması veya reset atması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Yağ Eksiltme (1.5 TSI)", "desc": "1.5 TSI Evo motorlarda, özellikle ilk üretim yıllarında belirli bir kilometreye kadar normalden fazla yağ eksiltmesi.", "severity": "medium", "relatedEngine": "1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Kör Nokta Asistanı Hatası", "desc": "Arka tamponda biriken çamur veya sensör kirlenmesi kaynaklı kör nokta uyarı sisteminin devreden çıkması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI Silindir Kapatma (ACT) Titreşimi", "desc": "1.5 TSI Evo motorlarda enerji tasarrufu için 2 silindirin devre dışı bırakılması sırasında belirgin titreşim ve ses hissedilmesi, özellikle sabit hızda seyirde.", "severity": "medium", "relatedEngine": "1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "LED Stop Bandı Arızası", "desc": "Arka LED stop bandının kısmen sönmesi veya içindeki LED modüllerinin yanması, komple arka lamba ünitesi değişimi gerektirmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Passat (B6)",
        "years": "2005 - 2010",
        "imageUrl": "images/vw_passat_b6.png",
        "engines": ["1.6 MPI", "1.4 TSI", "1.6 FSI", "2.0 FSI", "1.9 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "6 İleri DSG (Islak)", "7 İleri DSG (Kuru)", "Tiptronic"],
        "engineTransMap": {
            "1.6 MPI": ["Manuel"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 FSI": ["Manuel", "6 İleri DSG (Islak)"],
            "2.0 FSI": ["Manuel", "6 İleri DSG (Islak)", "Tiptronic"],
            "1.9 TDI": ["Manuel", "6 İleri DSG (Islak)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "2.0 TDI PD Enjektör & Yağ Pompası", "desc": "Erken üretim 2.0 TDI (PD/Pompe Düse) motorlarda enjektör arızaları ve yağ pompası modülünün altıköşe milinin sıyırması (motor yiyebilir).", "severity": "high", "relatedEngine": "2.0 TDI", "relatedTransmission": "Tümü" },
            { "title": "Elektromekanik El Freni Arızası", "desc": "Arka kaliperlerdeki el freni motorlarının zamanla bozulması, aracın el frenini bırakmaması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.4 TSI Triger Zinciri Uzaması", "desc": "1.4 TSI benzinli ilk nesil motorlarda triger zincirinin uzaması, ilk çalıştırmada ses yapması ve dişli atlama riski.", "severity": "high", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Tavan Döşemesi Sarkması", "desc": "Kronik VW/Audi sorunu olarak aracın tavan kumaşının zamanla süngerinden ayrılıp sarkması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Klima Yönlendirme Motorları (Klape) Sesleri", "desc": "Konsol içindeki klima motorlarının (klapeler) kontak açıldığında sürekli çıt-çıt tarzında rahatsız edici sesler çıkarması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Cam Krikosu Arızası", "desc": "Ön ve arka cam krikolarının kablo kopartması veya motor dişlisinin aşınması sonucu camın inip kalkmaması veya yarıda kalması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Alt Kolu Burçları", "desc": "Ön alt travers burçlarının Türkiye yol koşullarında erken aşınıp bozuk yollarda tak-tuk sesi yapması, direksiyon hissinin bozulması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Passat (B7)",
        "years": "2010 - 2014",
        "imageUrl": "images/vw_passat_b7.png",
        "engines": ["1.4 TSI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (Kuru)", "6 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (Kuru)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "1.6 TDI Enjektör Şakırdaması", "desc": "Özellikle CAYC kodlu 1.6 TDI motorlarda ilk çalıştırmada ve hızlanmalarda çok belirgin enjektör şakırtısı ve kurum bağlama.", "severity": "medium", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" },
            { "title": "DSG 7 İleri Kavrama & Mekatronik", "desc": "Kuru tip DSG şanzımanda düşük hızda titreme (1'den 2'ye geçerken) ve mekatronik basınç tüpü arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "Devridaim (Su Pompası) Kaçağı", "desc": "Özellikle TSI motorlarda su pompasının zamanla deforme olup sessizce antifriz eksiltmesine neden olması.", "severity": "medium", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Kapı Kilit Mekanizması Arızası", "desc": "Kapı kilit motorlarının bozulması, içeriden veya dışarıdan kapının açılmaması, merkezi kilit sorunu.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim ve Göğüs Zırıltıları", "desc": "Orta konsol, teyp çerçevesi ve gösterge paneli etrafındaki sert plastiklerin bozuk yollarda cızırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.4 TSI Triger Zinciri Uzaması", "desc": "B6'dan miras kalan 1.4 TSI motorlardaki triger zinciri uzaması sorunu bu kasada da devam etmektedir. Soğuk çalıştırmada çıngırak sesi duyulur.", "severity": "high", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Fren Vakum Pompası Sızıntısı", "desc": "Fren destek vakum pompasının contalarından yağ sızması, fren pedalının sertleşmesi ve fren mesafesinin uzaması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Passat (B8)",
        "years": "2014 - 2019",
        "imageUrl": "images/vw_passat_b8.png",
        "engines": ["1.4 TSI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (Kuru)", "6 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (Kuru)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "1.6 TDI Su Eksiltme / Termostat", "desc": "Soğutma sistemi ve EGR soğutucusu üzerinden su eksiltme, sinsi hararet problemleri.", "severity": "high", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Manevralarda ve tırtıklı yollarda direksiyon kutusu/elektrik motoru mafsalından gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DSG Titreme ve Mekatronik Arızası", "desc": "Tüm kuru kavrama modellerde olduğu gibi mekatronik kart yanması veya kalkışta silkeleme (Özellikle Highline donanımların ağır olmasından dolayı kavrama kısa ömürlü).", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "ErgoComfort Koltuk Şişirme Arızası", "desc": "Sürücü koltuğundaki bel destek (ve varsa masaj) sisteminin çalışmamaya başlaması veya şişip o şekilde kalması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Sunroof (Cam Tavan) Su Alma ve Tıkırtı", "desc": "Cam tavanlı versiyonlarda, fitillerden gelen aşırı tıkırtı ve tahliye kanallarının tıkanmasıyla araç içine su yürümesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "AdBlue Enjektörü Kristalleşmesi", "desc": "Dizel modellerde AdBlue enjektörünün zamanla kristalleşip tıkanması, motor arıza lambası yanması ve güç kısıtlamasına girmesi.", "severity": "high", "relatedEngine": "1.6 TDI / 2.0 TDI", "relatedTransmission": "Tümü" },
            { "title": "DPF (Partikül Filtresi) Tıkanması", "desc": "Şehir içi kısa mesafe kullanımda dizel partikül filtresinin rejenerasyon yapamayıp tıkanması, motor arıza lambası ve güç kaybı.", "severity": "medium", "relatedEngine": "1.6 TDI / 2.0 TDI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Passat (B8.5 Makyajlı)",
        "years": "2019 - 2023",
        "imageUrl": "images/vw_passat_b8_5.png",
        "engines": ["1.5 TSI Evo", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["7 İleri DSG (Kuru)", "7 İleri DSG (Islak - 2.0 TDI)"],
        "engineTransMap": {
            "1.5 TSI Evo": ["7 İleri DSG (Kuru)"],
            "1.6 TDI": ["7 İleri DSG (Kuru)"],
            "2.0 TDI": ["7 İleri DSG (Islak - 2.0 TDI)"]
        },
        "problems": [
            { "title": "Travel Assist (Direksiyon Tuş Takımı) Hatası", "desc": "Ekranda sürekli 'Travel Assist şu anda kullanılamıyor' uyarısı. Direksiyon simidinin kapasitif devreleri bozulur, komple veya tuş takımı değişimi gerektirir.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI Evo Yağ Eksiltme", "desc": "Özellikle yeni nesil 1.5 motorlarda segman ve yüksek basınç sebebiyle sürekli yağ takviyesi gerektiren tüketim (Kitapçıkta da yazar).", "severity": "medium", "relatedEngine": "1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Donma ve Resetleme (MIB3)", "desc": "Yeni nesil dokunmatik ekranlı Discover Pro sisteminin donup kalması veya sürüş sırasında kendini yeniden başlatması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "SOS Acil Çağrı Modülü Uyarısı", "desc": "SOS anteni veya pili arızası nedeniyle göstergede çıkan ve gitmeyen kırmızı sistem arızası ikazı.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Yüksek Rüzgar Sesi", "desc": "Özellikle 120 km/h üzerinde, camların incelmesinden dolayı eskiye nazaran aracın daha fazla rüzgar ve asfalt (yol) sesi alması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Dijital Cockpit Donma / Gecikme", "desc": "Dijital gösterge panelinin (Active Info Display) gecikmeli tepki vermesi, kısa süreli donması veya grafiklerde takılma yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Park Asistanı Sensör Hatası", "desc": "Ultrasonik park sensörlerinin buz, çamur veya kirlenme sebebiyle sürekli hatalı uyarı vermesi veya tamamen devre dışı kalması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "BMW",
        "model": "3 Serisi (F30)",
        "years": "2012 - 2015",
        "imageUrl": "images/bmw_f30.png",
        "engines": ["1.6 (320i ED)", "2.0 (320d)", "2.0 (328i)"],
        "transmissions": ["8 İleri ZF Tork Konvertörlü Otomatik"],
        "problems": [
            { "title": "N20 Triger Zinciri Uzaması", "desc": "Erken üretim N20 (2.0 litre benzinli) motorlarda triger zinciri plastik kılavuzlarının kırılması ve zincirin uzayıp kopma riski yaratması (Motoru tamamen yiyebilir).", "severity": "high", "relatedEngine": "2.0 (328i)", "relatedTransmission": "Tümü" },
            { "title": "Makyajsız F30 Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda direksiyon kutusundan gelen mekanik boşluk tıkırtı sesleri. Genellikle tamir takımı değişimi gerektirir.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kapı İçi Su Alma", "desc": "Kapı içindeki yalıtım bariyerinin (bütil bant) zamanla özelliğini yitirip yağmur ve yıkama sularını paspas altına sızdırması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Yağ Soğutucu Kaçağı", "desc": "N13 kodlu 1.6 motorlarda motor yağı soğutucusunun contalarının çürüyip yağı suya veya dışarıya sızdırması.", "severity": "high", "relatedEngine": "1.6 (320i ED)", "relatedTransmission": "Tümü" },
            { "title": "Tavan Döşemesi Sarkması", "desc": "Sıcak iklimlerde ve uzun süreli güneş altında kalan araçlarda tavan kumaşının süngerden ayrılıp sarkması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Motor Takozları (Kulakları) Erken Aşınması", "desc": "Özellikle 320d dizel motorlarda motor takozlarının titreşimden dolayı erken deforme olup kabine titreşim aktarması.", "severity": "medium", "relatedEngine": "2.0 (320d)", "relatedTransmission": "Tümü" },
            { "title": "Klima Kompresörü Kavrama Arızası", "desc": "Klima kompresörünün elektromanyetik kavrama bobininin yanması, klimanın soğutma yapmaması ve kompresör kilidi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "BMW",
        "model": "3 Serisi (F30 LCI Makyajlı)",
        "years": "2015 - 2019",
        "imageUrl": "images/bmw_f30_lci.png",
        "engines": ["1.5 (318i)", "1.6 (320i ED)", "2.0 (320d)", "2.0 (330i)"],
        "transmissions": ["8 İleri ZF Tork Konvertörlü Otomatik"],
        "problems": [
            { "title": "B38/B48 Motor Su Eksiltme", "desc": "Makyajlı kasalardaki (LCI) yeni nesil B serisi motorlarda kronik soğutma sıvısı eksiltmesi, yedek su deposu çatlağı veya hortum kaçakları.", "severity": "medium", "relatedEngine": "1.5 (318i) / 2.0 (330i)", "relatedTransmission": "Tümü" },
            { "title": "LED Far Gündüz Farları (Angel) Sararması", "desc": "Uzatılmış garanti veya iyi niyetle değiştirilebilen, farların içindeki fiber optik gündüz aydınlatma halkalarının ısıdan eriyip sararması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kapı Kolu Trimlerinin Eriyip Yapışkanlaşması", "desc": "Kapı içi tutamaklarının kauçuk malzemesinin sıcak havalarla birlikte eriyerek eli siyaha boyaması / yapış yapış olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Tahrik Uyarısı (Drive Train)", "desc": "Özellikle 3 silindirli 1.5 motorlarda bobin, buji veya yazılım sebepli aniden beliren güç kaybı ve tahrik uyarısı.", "severity": "medium", "relatedEngine": "1.5 (318i)", "relatedTransmission": "Tümü" },
            { "title": "EGR Valfi ve Soğutucu Sorunu", "desc": "B47 kodlu yeni nesil dizel motorlarda EGR soğutucusunun delinip manifolta zarar vermesi (Büyük bir BMW geri çağırmasıdır).", "severity": "high", "relatedEngine": "2.0 (320d)", "relatedTransmission": "Tümü" },
            { "title": "ZF 8HP Şanzıman Mechatronic Uyarısı", "desc": "Şanzıman yağ değişimi ihmal edildiğinde 8 ileri ZF otomatik şanzımanda sert vites geçişleri, titreşim ve nihayetinde mechatronic birim arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "8 İleri ZF Tork Konvertörlü Otomatik" },
            { "title": "Motor Takozu Yıpranması", "desc": "B serisi motorlarda da devam eden erken motor takozu deformasyonu, rölantide ve düşük devirlerde kabine yansıyan titreşim.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Honda",
        "model": "Civic (FC5)",
        "years": "2016 - 2021",
        "imageUrl": "images/honda_civic_fc5.png",
        "engines": ["1.6 i-VTEC", "1.5 VTEC Turbo", "1.6 i-DTEC Dizel"],
        "transmissions": ["Manuel", "CVT Sürekli Değişken Oranlı", "9 İleri ZF Otomatik (Dizel)"],
        "engineTransMap": {
            "1.6 i-VTEC": ["Manuel", "CVT Sürekli Değişken Oranlı"],
            "1.5 VTEC Turbo": ["Manuel", "CVT Sürekli Değişken Oranlı"],
            "1.6 i-DTEC Dizel": ["9 İleri ZF Otomatik (Dizel)"]
        },
        "problems": [
            { "title": "C Sütunu Göçükleri", "desc": "Arka C sütununda (bagajın üst yan kısımları) durduk yere veya kasislerde esneme sonucu oluşan dalgalanma/göçükler. Fabrika çıkışı sac zayıflığıdır.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Takılması", "desc": "Direksiyonda takılma hissi, düz yolda giderken aracı düz tutabilmek için sürekli mikro düzeltmeler yapma zorunluluğu hissettirmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İnce Boya Kalitesi", "desc": "Boya tabakasının oldukça ince olması sebebiyle kaputta taş izlerine ve ufak temaslarda çizilmelere karşı çok hassas olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Yetersiz Ses Yalıtımı", "desc": "Japon araç geneli olmasına rağmen bu kasada özellikle tekerlek davlumbazlarından çok fazla yol ve uğultu sesi alması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "LPG'li Modellerde Subap Erimesi", "desc": "LPG takılan 1.6 i-VTEC motorlarda yaklaşık 60-80 bin km sonrasında magnezyum alaşımlı subapların erimesi/uzaması.", "severity": "high", "relatedEngine": "1.6 i-VTEC", "relatedTransmission": "Tümü" },
            { "title": "Klima Kompresörü Sesi", "desc": "Start-stop sistemi sonrası klimanın devreye girmesinde kompresörden gelen belirgin tıkırtı/vuruntu sesi. Özellikle sıcak havalarda rahatsız edici olabilir.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 Turbo Yağ Seyrelmesi", "desc": "1.5 VTEC Turbo motorlarda kısa mesafe kullanımda yakıtın yağa karışarak yağ seviyesinin yükselmesi (yağ seyrelmesi), motor yağının koruma özelliğini yitirmesi.", "severity": "high", "relatedEngine": "1.5 VTEC Turbo", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Renault",
        "model": "Megane 4",
        "years": "2016 - 2024",
        "imageUrl": "images/renault_megane_4.png",
        "engines": ["1.2 TCe", "1.3 TCe", "1.5 dCi", "1.6 dCi"],
        "transmissions": ["Manuel", "7 İleri EDC Çift Kavrama (Benzin)", "6 İleri EDC Çift Kavrama (Dizel)"],
        "engineTransMap": {
            "1.2 TCe": ["Manuel", "7 İleri EDC Çift Kavrama (Benzin)"],
            "1.3 TCe": ["Manuel", "7 İleri EDC Çift Kavrama (Benzin)"],
            "1.5 dCi": ["Manuel", "6 İleri EDC Çift Kavrama (Dizel)"],
            "1.6 dCi": ["Manuel", "6 İleri EDC Çift Kavrama (Dizel)"]
        },
        "problems": [
            { "title": "EDC Şanzıman Beyni Arızası", "desc": "Otomatik vites (EDC) modellerde vites kutusu hararet uyarısı vermesi, vites geçişlerinde kararsızlık ve nihayetinde şanzıman beyni (TCM) yanması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Takım Erken Aşınması", "desc": "Özellikle kasislerden ve çukurlardan geçerken ön takımdan gelen lak-luk sesleri, erken Z rot ve salıncak burcu aşınması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "R-Link Ekran Donması", "desc": "Multimedya sisteminin aniden kararması, kitlenmesi veya Bluetooth bağlantısının kendiliğinden kopması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.2 TCe Yağ Yakma", "desc": "Eski nesil 1.2 TCe motorlarda segman sorunu kaynaklı aşırı yağ tüketimi ve motor kilitlenmesine varan sorunlar.", "severity": "high", "relatedEngine": "1.2 TCe", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Gıcırtısı", "desc": "Kış aylarında veya soğuk havalarda ilk hareket esnasında ön amortisör takozlarından gelen lastik gıcırdaması sesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.3 TCe Turbo Basınç Hortumu Çatlağı", "desc": "Turbo ile intercooler arasındaki basınç hortumunun zamanla çatlayıp patlaması, aniden güç kaybı ve turbo basınç hatası vermesi. Mercedes ile ortak üretilen bu motorda sık görülür.", "severity": "high", "relatedEngine": "1.3 TCe", "relatedTransmission": "Tümü" },
            { "title": "1.3 TCe Su Pompası / Termostat", "desc": "1.3 TCe motorlarda su pompasının veya termostatın erken bozulup antifriz kaçırması, hararet riski.", "severity": "medium", "relatedEngine": "1.3 TCe", "relatedTransmission": "Tümü" },
            { "title": "Elektrikli El Freni Arızası", "desc": "Elektronik park freni motorunun bozularak kaliperde takılı kalması, arka tekerleklerin sürüklenip ısınması veya el freninin çalışmaması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Peugeot",
        "model": "3008 (2. Nesil)",
        "years": "2016 - 2023",
        "imageUrl": "images/peugeot_3008_facelift.png",
        "engines": ["1.2 PureTech", "1.6 THP / PureTech", "1.5 BlueHDi", "1.6 BlueHDi"],
        "transmissions": ["EAT6 Tam Otomatik", "EAT8 Tam Otomatik"],
        "engineTransMap": {
            "1.2 PureTech": ["EAT6 Tam Otomatik", "EAT8 Tam Otomatik"],
            "1.6 THP / PureTech": ["EAT6 Tam Otomatik", "EAT8 Tam Otomatik"],
            "1.5 BlueHDi": ["EAT6 Tam Otomatik", "EAT8 Tam Otomatik"],
            "1.6 BlueHDi": ["EAT6 Tam Otomatik"]
        },
        "problems": [
            { "title": "1.2 PureTech Triger Kayışı", "desc": "Yağ içinde çalışan triger kayışının erken aşınıp dökülmesi ve bu parçaların yağ pompasını tıkayarak motor basıncını düşürmesi veya motor kitlenmesi.", "severity": "high", "relatedEngine": "1.2 PureTech", "relatedTransmission": "Tümü" },
            { "title": "AdBlue Deposu Arızası", "desc": "1.5 BlueHDi ve 1.6 BlueHDi dizel motorlarda AdBlue deposunun/pompasının bozulması sonucu komple depo değişim maliyeti çıkması.", "severity": "high", "relatedEngine": "1.5 BlueHDi / 1.6 BlueHDi", "relatedTransmission": "Tümü" },
            { "title": "1.5 BlueHDi Egzantrik Zinciri Kopması", "desc": "1.5 litrelik dizel motorlarda ince eksantrik zincirinin koparak supaplara ve motora ağır hasar vermesi. (Daha sonra 8mm ile revize edilse de riskli yıllar mevcuttur).", "severity": "high", "relatedEngine": "1.5 BlueHDi", "relatedTransmission": "Tümü" },
            { "title": "Fren Vakum Pompası (1.2 Motor)", "desc": "Trigerden kopan kauçuk parçacıklarının fren vakum pompasını tıkayarak frenin sertleşmesine ve tutmamasına yol açması.", "severity": "high", "relatedEngine": "1.2 PureTech", "relatedTransmission": "Tümü" },
            { "title": "1.6 THP / PureTech Turbo Yağ Kaçağı", "desc": "1.6 litre turbo benzinli motorlarda turbo giriş ve çıkış contalarından yağ sızıntısı, zamanla turbo verimliliğinin düşmesi.", "severity": "high", "relatedEngine": "1.6 THP / PureTech", "relatedTransmission": "Tümü" },
            { "title": "Ön Amortisör Yağ Sızıntısı", "desc": "Ön amortisörlerin 40-60 bin km civarında yağ sızdırmaya başlaması, süspansiyonun sertleşip yol tutuşunun bozulması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DPF Tıkanması (Dizel)", "desc": "Şehir içi kısa mesafe kullanımda dizel partikül filtresinin rejenerasyon yapamayıp tıkanması, motor uyarı lambası ve limp moda geçme.", "severity": "medium", "relatedEngine": "1.5 BlueHDi / 1.6 BlueHDi", "relatedTransmission": "Tümü" },
            { "title": "Bağaj Kapağı / Konsol Trim Sesi", "desc": "Elektrikli bagaj olan modellerde bozuk yollarda bagaj tarafından gelen sürtünme sesi ve piyano siyahı orta konsoldan gelen tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Multimedia Resetlenmesi", "desc": "Sürüş esnasında ekranın kendi kendine kapanıp yeniden başlaması, CarPlay/Android Auto bağlantısının kopması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Şerit Takip Kamerası Hatası", "desc": "Ön camdaki kameranın buğulanma veya direkt güneş ışığı sebebiyle körleşmesi ve güvenlik asistanlarının devre dışı kalması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Octavia (A7)",
        "years": "2013 - 2017",
        "imageUrl": "images/skoda_octavia_mk3.png",
        "engines": ["1.2 TSI", "1.4 TSI", "1.6 MPI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip", "6 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.2 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 MPI": ["Manuel"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "DSG Kavrama & Mekatronik Arızası", "desc": "VW grubu kroniği olan kuru tip DSG'de sıkça yaşanan düşük hız titremesi, mekatronik kart yanması veya basınç tüpü arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "1.2 TSI Triger Zinciri Uzaması", "desc": "Erken üretim 1.2 TSI motorlarda triger zincirinin uzaması, soğuk çalıştırmada çıngırak sesi ve motor hasarı riski.", "severity": "high", "relatedEngine": "1.2 TSI", "relatedTransmission": "Tümü" },
            { "title": "Su Pompası Kaçağı", "desc": "TSI motorlarda plastik gövdeli su pompasının çatlayıp antifriz kaçırması, gizli hararet riski.", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Cam Krikosu Arızası", "desc": "Ön cam krikolarının tel kopartması veya motor dişlisinin sıyırması, camın yarıda kalması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda direksiyon kutusundan gelen boşluk tıkırtıları, park manevralarında belirginleşir.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim Sesleri", "desc": "Bozuk yollarda kapı panelleri ve B sütunu çevresinden gelen plastik tıkırtıları.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Turbo Wastegate Zırıltısı", "desc": "1.2 ve 1.4 TSI motorlarda turbo wastegate valfinden gelen metalik rezonans sesi, 2000-3000 devir arası.", "severity": "low", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Octavia (A7 Makyajlı)",
        "years": "2017 - 2020",
        "imageUrl": "images/skoda_octavia_mk3_5.png",
        "engines": ["1.0 TSI", "1.6 TDI", "1.4 TSI", "1.5 TSI ACT"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "problems": [
            { "title": "Kavrama & Mekatronik Arızası", "desc": "VW grubu kroniği olan kuru tip DSG'de sıkça yaşanan düşük hız titremesi, mekatronik kart yanması veya basınç tüpü arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Trim Sesi", "desc": "Özellikle bozuk Türkiye yollarında kapı pandizotları ve B sütunu çevresinden gelen plastik tıkırtıları.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Su Pompası / Antifriz Eksiltme", "desc": "TSI motorlarda devridaim kütüğünün/su pompasının zamanla kılcal çatlaklar oluşturup soğutma suyu kaçırması.", "severity": "medium", "relatedEngine": "1.0 TSI / 1.4 TSI / 1.5 TSI ACT", "relatedTransmission": "Tümü" },
            { "title": "Cam Kiriko Arızası", "desc": "Ön cam krikolarının tel kopartması veya motor dişlisinin sıyırması (camın inip kalkmaması).", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Yalıtım Eksikliği (Rüzgar Sesi)", "desc": "120 km/h ve üzeri hızlarda aynalardan ve A sütunundan belirgin şekilde rüzgar sesi alınması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Stop Lambası Su Alma", "desc": "Stop lambası contalarından nem ve su sızması, LED'lerin kısa devre yapıp yanması veya buğulanması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI ACT Silindir Kapatma Titreşimi", "desc": "Aktif silindir yönetimi (ACT) devreye girdiğinde belirgin titreşim ve uğultu sesi, özellikle 60-80 km/h sabit hızda seyirde.", "severity": "medium", "relatedEngine": "1.5 TSI ACT", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Superb (B8)",
        "years": "2015 - 2023",
        "imageUrl": "images/skoda_superb_b8.png",
        "engines": ["1.4 TSI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (Kuru)", "6 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (Kuru)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "DSG Mekatronik / Kavrama Arızası", "desc": "1.4 TSI ve 1.6 TDI modellerde kuru kavramalı DSG'de düşük hızda titreme, kavrama aşınması ve mekatronik kart yanması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "1.6 TDI Su Eksiltme / Termostat", "desc": "1.6 TDI motorlarda soğutma sistemi ve EGR soğutucusu üzerinden gizli su eksiltme, hararet riski.", "severity": "high", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Manevralarda ve tırtıklı yollarda direksiyon kutusundan gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Panoramik Cam Tavan Su Sızıntısı", "desc": "Panoramik cam tavanlı modellerde tahliye kanallarının tıkanmasıyla araç içine su sızması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Cam Krikosu Arızası", "desc": "Cam kriko motorlarının veya kablo raylarının bozulması, camın yarıda kalması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Elektronik El Freni Arızası", "desc": "Elektronik el freni motorlarının bozulup el frenini bırakmaması veya uyarı vermesi.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Stop Lambası Su Alma", "desc": "Stop lambası contalarından su sızıp LED'lerin arızalanması veya buğulanması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Scala",
        "years": "2019 - Günümüz",
        "imageUrl": "images/skoda_scala.png",
        "engines": ["1.0 TSI", "1.5 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 TSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"]
        },
        "problems": [
            { "title": "DSG Kavrama Titremesi", "desc": "DQ200 kuru kavramalı DSG şanzımanda düşük hızlarda titreme ve dur-kalk trafikte sarsıntı.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "1.0 TSI Su Pompası / Termostat Arızası", "desc": "1.0 TSI motorlarda plastik gövdeli su pompasının çatlayıp antifriz kaçırması.", "severity": "medium", "relatedEngine": "1.0 TSI", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI Yağ Eksiltme", "desc": "1.5 TSI motorlarda segman yapısından kaynaklı kronik yağ tüketimi.", "severity": "medium", "relatedEngine": "1.5 TSI", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Donması", "desc": "Infotainment ekranının zaman zaman donması veya siyah ekranda kalması, reset gerektirmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Süspansiyon Sertliği", "desc": "Bükülme çubuğu tipi arka süspansiyonun bozuk yollarda sert çalışıp yolcuları rahatsız etmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kapı Fitili Rüzgar Sesi", "desc": "Ön kapı fitillerinin 100 km/h üzeri hızlarda rüzgar sesi geçirmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Kamiq",
        "years": "2019 - Günümüz",
        "imageUrl": "images/skoda_kamiq.png",
        "engines": ["1.0 TSI", "1.5 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 TSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"]
        },
        "problems": [
            { "title": "DSG Kavrama Titremesi", "desc": "DQ200 kuru kavramalı DSG şanzımanda düşük hızlarda titreme ve sarsıntı, özellikle dur-kalk trafikte.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "1.0 TSI Su Pompası Arızası", "desc": "1.0 TSI motorlarda su pompasının çatlayıp soğutma sıvısı kaçırması, gizli hararet riski.", "severity": "medium", "relatedEngine": "1.0 TSI", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI Yağ Eksiltme", "desc": "1.5 TSI motorlarda kronik yağ tüketimi, düzenli yağ ikmali gerektirmesi.", "severity": "medium", "relatedEngine": "1.5 TSI", "relatedTransmission": "Tümü" },
            { "title": "Arka Kamera Buğulanması", "desc": "Geri görüş kamerasının soğuk ve nemli havalarda buğulanıp görüntü kalitesinin düşmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Park manevralarında ve bozuk yollarda direksiyon kutusundan gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim ve Plastik Sesleri", "desc": "Bozuk yollarda torpido ve kapı panellerinden gelen plastik tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Toyota",
        "model": "Corolla (E210)",
        "years": "2019 - Günümüz",
        "imageUrl": "images/toyota_corolla_e210.png",
        "engines": ["1.5 Dynamic Force (Benzin)", "1.6 Valvematic (Benzin)", "1.8 Hybrid"],
        "transmissions": ["6 İleri Manuel", "Multidrive S (CVT)", "e-CVT (Hybrid)"],
        "engineTransMap": {
            "1.5 Dynamic Force (Benzin)": ["6 İleri Manuel", "Multidrive S (CVT)"],
            "1.6 Valvematic (Benzin)": ["6 İleri Manuel", "Multidrive S (CVT)"],
            "1.8 Hybrid": ["e-CVT (Hybrid)"]
        },
        "problems": [
            { "title": "Sos (Acil Çağrı) Batarya Hatası", "desc": "Sistemdeki SOS acil çağrı düğmesinin küçük bataryasının zamanla ömrünü yitirmesi ve ekranda sürekli hata mesajı vermesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kötü Ses Yalıtımı", "desc": "Japon otomobillerinin genel karakteristiği olarak yüksek hızlarda araç içine fazla yol ve rüzgar sesi alması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İnce ve Kırılgan Boya", "desc": "Özellikle kaput ve tampon köşelerinde kuş pisliği yanıklarına karşı aşırı hassasiyet, çok kolay taş izi (gamze) oluşması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "CVT Isınma / Tepkime Gecikmesi", "desc": "Özellikle 1.5 litre 3 silindirli motorlarda dik rampalarda veya yüklü durumdayken şanzımanın gücü gecikmeli aktarması / devir çevirip gitmeme hissi.", "severity": "medium", "relatedEngine": "1.5 Dynamic Force (Benzin)", "relatedTransmission": "Multidrive S (CVT)" },
            { "title": "Direksiyon Derisi Soyulması", "desc": "Direksiyon simidinin derisinin 30-40 bin km gibi erken bir sürede güneşten matlaşıp soyulmaya başlaması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Hybrid Batarya Fan Gürültüsü", "desc": "Hybrid modellerde batarya soğutma fanının yüksek devirde dönüp arka koltuktan belirgin uğultu sesi gelmesi, özellikle yaz aylarında.", "severity": "low", "relatedEngine": "1.8 Hybrid", "relatedTransmission": "e-CVT (Hybrid)" }
        ]
    },
    {
        "brand": "Renault",
        "model": "Clio 5",
        "years": "2019 - Günümüz",
        "imageUrl": "images/renault_clio_5.png",
        "engines": ["1.0 Sce (Atmosferik)", "1.0 TCe (Turbolu)", "1.3 TCe", "1.5 Blue dCi", "E-Tech Hybrid"],
        "transmissions": ["5/6 İleri Manuel", "X-Tronic (CVT)", "EDC (Çift Kavrama)"],
        "engineTransMap": {
            "1.0 Sce (Atmosferik)": ["5/6 İleri Manuel"],
            "1.0 TCe (Turbolu)": ["5/6 İleri Manuel", "X-Tronic (CVT)"],
            "1.3 TCe": ["EDC (Çift Kavrama)"],
            "1.5 Blue dCi": ["5/6 İleri Manuel"],
            "E-Tech Hybrid": ["EDC (Çift Kavrama)"]
        },
        "problems": [
            { "title": "Easy Link Multimedya Sorunları", "desc": "Ekranın ara sıra donması, siyah ekranda kalması veya Apple CarPlay / Android Auto bağlantısının sürüş sırasında kendiliğinden kopması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Park manevraları yaparken direksiyondan gelen ufak tıkırtı veya sürtünme tarzı ses.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.0 TCe Wastegate Zırıltısı", "desc": "Gaza basıp bırakıldığında özellikle 2000-3000 devir arası gelen belirgin metalik zırıltı/titreşim sesi.", "severity": "medium", "relatedEngine": "1.0 TCe (Turbolu)", "relatedTransmission": "Tümü" },
            { "title": "Kapı İçi Trim ve Gıcırtılar", "desc": "Özellikle kapı panellerindeki sert plastiklerin sıcaklığa bağlı esnemesi sonucu yolda bol miktarda tıkırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Far Buğulanması", "desc": "LED farların soğuk havalarda içeriden terleme/buğulanma yapması (Nem çıkış kanallarının yetersizliği).", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Fren Disk Korozyonu", "desc": "Arka fren disklerinin çok az kullanılması sebebiyle kısa sürede aşırı pas tutup fren yaparken gürültü ve titreşim yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Fiat",
        "model": "Egea",
        "years": "2015 - Günümüz",
        "imageUrl": "images/fiat_egea.png",
        "engines": ["1.4 Fire (Atmosferik)", "1.6 E-Torq", "1.3 Multijet", "1.6 Multijet", "1.5 T4 Hybrid"],
        "transmissions": ["Manuel", "Tam Otomatik (AT6)", "DCT (Çift Kavrama)"],
        "engineTransMap": {
            "1.4 Fire (Atmosferik)": ["Manuel"],
            "1.6 E-Torq": ["Tam Otomatik (AT6)"],
            "1.3 Multijet": ["Manuel"],
            "1.6 Multijet": ["Manuel", "DCT (Çift Kavrama)"],
            "1.5 T4 Hybrid": ["DCT (Çift Kavrama)"]
        },
        "problems": [
            { "title": "Yağ Eksiltme", "desc": "Özellikle 1.4 Fire benzinli motorlarda kronik olarak 10.000 km'de ortalama 1-1.5 litre yağ eksiltmesi normal kabul edilmektedir.", "severity": "medium", "relatedEngine": "1.4 Fire (Atmosferik)", "relatedTransmission": "Tümü" },
            { "title": "1.6 E-Torq Supap Kapağı Yağ Sızıntısı", "desc": "1.6 E-Torq motorlarda supap kapağı contasının sertleşip yağ sızdırması, motor üstünde yağ birikintisi ve yanık kokusu. Genellikle 80-100 bin km civarında başlar.", "severity": "medium", "relatedEngine": "1.6 E-Torq", "relatedTransmission": "Tümü" },
            { "title": "Alt Takım Zayıflığı", "desc": "Ön travers burçları, Z rotları ve amortisör takozlarının bozuk yollarda çabuk deforme olup ses yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Fren Disk Deformasyonu", "desc": "Orijinal fren disklerinin sıcak-soğuk değişimlerinde aniden çarpılıp direksiyonda titremeye yol açması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Plastik Soyulması", "desc": "Teyp çerçevesi ve direksiyon kenarlarındaki boyalı plastiklerin erken aşınarak beyaz/siyah alt katmanının görünmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.3 Multijet Turbo Arızası", "desc": "1.3 Multijet dizel motorlarda turbonun mil aşınması veya yağ kaçırması, güç kaybı ve aşırı duman yapması.", "severity": "high", "relatedEngine": "1.3 Multijet", "relatedTransmission": "Tümü" },
            { "title": "Arka Stop Lambası Su Alma", "desc": "Stop lambası contalarının zamanla gevşeyip bagaj bölümüne su sızdırması, elektrik aksam arızasına yol açması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DCT Şanzıman Sarsıntısı", "desc": "Yeni nesil DCT (çift kavrama) otomatik şanzımanda düşük hızlarda titreme ve sarsıntı, dur-kalk trafikte belirgin hissedilmesi.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "DCT (Çift Kavrama)" }
        ]
    },
    {
        "brand": "Fiat",
        "model": "Linea",
        "years": "2007 - 2016",
        "imageUrl": "images/fiat_linea.png",
        "engines": ["1.4 Fire", "1.4 T-Jet", "1.3 Multijet", "1.6 Multijet"],
        "transmissions": ["Manuel", "Dualogic (Robotize)"],
        "engineTransMap": {
            "1.4 Fire": ["Manuel"],
            "1.4 T-Jet": ["Manuel"],
            "1.3 Multijet": ["Manuel", "Dualogic (Robotize)"],
            "1.6 Multijet": ["Manuel", "Dualogic (Robotize)"]
        },
        "problems": [
            { "title": "Dualogic Şanzıman Sarsması", "desc": "Robotize Dualogic şanzımanda vites geçişlerinde sert sarsma ve gecikme, dur-kalk trafikte aşırı hırçınlaşma.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Dualogic (Robotize)" },
            { "title": "1.3 Multijet Turbo Arızası", "desc": "1.3 Multijet dizel motorlarda turbonun mil aşınması veya yağ kaçırması, güç kaybı ve duman.", "severity": "high", "relatedEngine": "1.3 Multijet", "relatedTransmission": "Tümü" },
            { "title": "Elektrik Tesisatı Sorunları", "desc": "Cam silecek motoru, far rölesi ve gösterge paneli aydınlatması gibi elektrik aksam arızalarının sık yaşanması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Alt Takım Erken Aşınması", "desc": "Z rotları, salıncak burçları ve amortisör takozlarının Türkiye yollarında çok çabuk deforme olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Supap Kapağı Yağ Sızıntısı", "desc": "Benzinli 1.4 Fire motorlarda supap kapağı contasının sertleşip yağ sızdırması, motor üstünde yağlanma.", "severity": "medium", "relatedEngine": "1.4 Fire", "relatedTransmission": "Tümü" },
            { "title": "Kapı Fitili ve Su Sızıntısı", "desc": "Kapı fitillerinin zamanla sertleşip su geçirmesi, yağmurda araç içine su damlaması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Fiat",
        "model": "Punto (Grande/Evo)",
        "years": "2006 - 2018",
        "imageUrl": "images/fiat_punto.png",
        "engines": ["1.2 Fire", "1.4 Fire", "1.4 T-Jet", "1.3 Multijet"],
        "transmissions": ["Manuel", "Dualogic (Robotize)"],
        "engineTransMap": {
            "1.2 Fire": ["Manuel"],
            "1.4 Fire": ["Manuel"],
            "1.4 T-Jet": ["Manuel"],
            "1.3 Multijet": ["Manuel", "Dualogic (Robotize)"]
        },
        "problems": [
            { "title": "Pas ve Korozyon", "desc": "Özellikle tekerlek davlumbazları, bagaj kenarları ve kapı altlarında erken başlayan ve hızla yayılan korozyon.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.3 Multijet Turbo Arızası", "desc": "1.3 Multijet motorlarda turbonun yağlama yetersizliğinden mil aşınması, güç kaybı ve aşırı duman.", "severity": "high", "relatedEngine": "1.3 Multijet", "relatedTransmission": "Tümü" },
            { "title": "Dualogic Şanzıman Arızası", "desc": "Robotize şanzımanda aktüatör ve beyin arızaları, vites takılması ve dur-kalk trafikte sert davranış.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Dualogic (Robotize)" },
            { "title": "Elektrik ve Sigorta Sorunları", "desc": "Cam krikosu, merkezi kilit ve gösterge paneli aydınlatmasında sık yaşanan elektrik kesintileri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Alt Takım Zayıflığı", "desc": "Ön salıncak burçları ve Z rotlarının çok çabuk aşınıp ses yapması, bozuk yollarda lak-luk sesleri.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Pompası Arızası", "desc": "Hidrolik direksiyonlu modellerde direksiyon pompasının kaçak yapması, direksiyon ağırlaşması ve vınlama sesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.4 Fire Yağ Eksiltme", "desc": "1.4 Fire motorlarda kronik yağ tüketimi, 5000-7000 km'de yağ ikmali gerektirmesi.", "severity": "medium", "relatedEngine": "1.4 Fire", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Ford",
        "model": "Focus (Mk3.5 Makyajlı)",
        "years": "2014 - 2018",
        "imageUrl": "images/ford_focus_mk3_5.png",
        "engines": ["1.6 Ti-VCT", "1.0 EcoBoost", "1.5 TDCi", "1.6 TDCi"],
        "transmissions": ["Manuel", "6 İleri Otomatik", "PowerShift (Çift Kavrama)"],
        "engineTransMap": {
            "1.6 Ti-VCT": ["Manuel", "6 İleri Otomatik", "PowerShift (Çift Kavrama)"],
            "1.0 EcoBoost": ["Manuel", "PowerShift (Çift Kavrama)"],
            "1.5 TDCi": ["Manuel", "6 İleri Otomatik"],
            "1.6 TDCi": ["Manuel"]
        },
        "problems": [
            { "title": "PowerShift Şanzıman Silkelesmesi", "desc": "Benzinli modellerdeki kuru kavrama PowerShift şanzımanlarda kalkışlarda titreme, kararsızlık ve nihayetinde kavrama/beyin arızası. Hem 1.6 hem 1.0 EcoBoost versiyonlarda yaşanır.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "PowerShift (Çift Kavrama)" },
            { "title": "1.0 EcoBoost Hararet ve Hortum Çatlaması", "desc": "Soğutma sistemi hortumlarının çabuk deforme olup delinmesi ve motorun gizli hararet yapıp kapak/conta yakması.", "severity": "high", "relatedEngine": "1.0 EcoBoost", "relatedTransmission": "Tümü" },
            { "title": "Kapı Fitilleri Düşmesi", "desc": "Kapı alt fitillerinin zamanla yapışkanını yitirip sarkması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Katalitik Konvertör Arızası", "desc": "Benzinli ve LPG'li modellerde konvertör ömrünün kısa olması, sık sık motor arıza lambası (P0420) yanması.", "severity": "medium", "relatedEngine": "1.6 Ti-VCT", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Mekanik yapıdan dolayı park manevralarında veya tırtıklı yollarda direksiyon milinden gelen hafif tıkırtı.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Panoramik Cam Tavan Su Sızıntısı", "desc": "Panoramik cam tavanlı modellerde tahliye kanallarının tıkanmasıyla araç içine su sızması, tavan döşemesinin ıslanıp kokuşması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Süspansiyon Burç Sertleşmesi", "desc": "Arka travers burçlarının zamanla sertleşip kasislerden geçerken gıcırtı ve takırtı sesi çıkarması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Opel",
        "model": "Astra (K)",
        "years": "2015 - 2021",
        "imageUrl": "images/opel_astra_k.png",
        "engines": ["1.0 Turbo", "1.2 Turbo", "1.4 T (Turbo Benzin)", "1.6 Turbo", "1.5 Dizel", "1.6 CDTI (Dizel)"],
        "transmissions": ["Manuel", "6 İleri Tam Otomatik", "CVT (Sürekli Değişken)"],
        "engineTransMap": {
            "1.0 Turbo": ["Manuel"],
            "1.2 Turbo": ["Manuel", "CVT (Sürekli Değişken)"],
            "1.4 T (Turbo Benzin)": ["Manuel", "6 İleri Tam Otomatik"],
            "1.6 Turbo": ["Manuel", "6 İleri Tam Otomatik"],
            "1.5 Dizel": ["Manuel", "CVT (Sürekli Değişken)"],
            "1.6 CDTI (Dizel)": ["Manuel", "6 İleri Tam Otomatik"]
        },
        "problems": [
            { "title": "1.4 Turbo Piston Kırma (LSPI)", "desc": "1.4 turbo benzinli motorlarda düşük hızda ani hızlanmalarda erken ateşleme (LSPI) sebebiyle piston ve sekman kırılması.", "severity": "high", "relatedEngine": "1.4 T (Turbo Benzin)", "relatedTransmission": "Tümü" },
            { "title": "Egzantrik Zincir Sesi / Zincir Uzaması", "desc": "Dizel motorlarda (1.6 CDTI ve 1.5 Dizel) kronik olarak egzantrik zincir gergi sesinin çok erken kilometrelerde başlaması ve zincir uzaması. Motorun şakırtılı çalışması.", "severity": "medium", "relatedEngine": "1.5 Dizel / 1.6 CDTI (Dizel)", "relatedTransmission": "Tümü" },
            { "title": "Akü ve Elektrik Tesisatı (IntelliLink)", "desc": "Start-stoplu modellerde akünün çok erken ölmesi, multimedya sisteminin reset atması ve far sensörü arızası.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Debriyaj Merkezi Arızası", "desc": "Manuel şanzımanlı versiyonlarda hidrolik debriyaj merkezinin kaçak yapıp pedala basılı kalması/boşa düşmesi.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Manuel" },
            { "title": "Turbo Valfi/Hortum Zırıltısı", "desc": "1.4 T motorlarda belirli devirlerde turbodan kopuk bir parça varmış gibi gelen rezonans zırıltı sesi.", "severity": "medium", "relatedEngine": "1.4 T (Turbo Benzin)", "relatedTransmission": "Tümü" },
            { "title": "Su Pompası / Termostat Kaçağı", "desc": "Benzinli motorlarda (özellikle 1.4 T ve yeni 1.2 Turbo) su pompası ve termostatın çatlayıp/bozulup sıvı kaçırması, gizli hararet riski.", "severity": "high", "relatedEngine": "1.2 Turbo / 1.4 T (Turbo Benzin)", "relatedTransmission": "Tümü" },
            { "title": "1.6 Turbo Yağ Hortumu Sızıntısı", "desc": "1.6 Turbo benzinli motorlarda turbo yağ dönüş hortumunun bağlantı noktalarından yağ sızdırması, zamanla turbo yağlamasının bozulması ve hararet riski.", "severity": "high", "relatedEngine": "1.6 Turbo", "relatedTransmission": "Tümü" },
            { "title": "CVT Şanzıman Gecikmesi", "desc": "CVT otomatik şanzımanda hızlanmalarda motorun yüksek devirde kalıp geç tepki vermesi, kayış sesi benzeri uğultu.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "CVT (Sürekli Değişken)" },
            { "title": "Klima Start-Stop Gecikmesi", "desc": "Makyajlı kasalarda start-stop sistemi devreye girdikten sonra klimanın geç devreye girmesi, sıcak havalarda araç içinin hızla ısınması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Opel",
        "model": "Astra (J)",
        "years": "2009 - 2015",
        "imageUrl": "images/opel_astra_j.png",
        "engines": ["1.4 (Atmosferik)", "1.4 Turbo", "1.6 (Atmosferik)", "1.3 CDTI", "1.6 CDTI", "1.7 CDTI"],
        "transmissions": ["Manuel", "6 İleri Tam Otomatik"],
        "engineTransMap": {
            "1.4 (Atmosferik)": ["Manuel"],
            "1.4 Turbo": ["Manuel", "6 İleri Tam Otomatik"],
            "1.6 (Atmosferik)": ["Manuel", "6 İleri Tam Otomatik"],
            "1.3 CDTI": ["Manuel"],
            "1.6 CDTI": ["Manuel", "6 İleri Tam Otomatik"],
            "1.7 CDTI": ["Manuel", "6 İleri Tam Otomatik"]
        },
        "problems": [
            { "title": "1.6 Benzinli Su Pompası Arızası", "desc": "1.6 atmosferik benzinli motorlarda su pompasının erken bozulup antifriz kaçırması, motorun hararet yapması.", "severity": "high", "relatedEngine": "1.6 (Atmosferik)", "relatedTransmission": "Tümü" },
            { "title": "1.4 Turbo Triger Zinciri Uzaması", "desc": "1.4 Turbo motorlarda triger zincirinin erken uzaması, soğuk çalıştırmada çıngırak sesi ve dişli atlama riski. Ciddi motor hasarına yol açabilir.", "severity": "high", "relatedEngine": "1.4 Turbo", "relatedTransmission": "Tümü" },
            { "title": "1.3 CDTI EGR Valfi Kurum Bağlaması", "desc": "Şehir içi kullanımda EGR valfinin kurum bağlayıp tıkanması, motor arıza lambası ve güç kaybı.", "severity": "medium", "relatedEngine": "1.3 CDTI", "relatedTransmission": "Tümü" },
            { "title": "Klima Kompresörü Arızası", "desc": "Klima kompresör bobininin veya kavrama dişlisinin bozulması, klimanın soğutma yapmaması ve kompresör kilidi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Debriyaj Merkezi Kaçağı", "desc": "Hidrolik debriyaj merkezinin iç kaçak yapması sonucu debriyaj pedalının boşa düşmesi, vites geçişi yapamama.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Manuel" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Bozuk yollarda ve park manevralarında elektrikli direksiyon kutusundan gelen tıkırtı ve boşluk sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Far Buğulanması", "desc": "Farların soğuk ve yağmurlu havalarda içeriden yoğun buğulanması, aydınlatma performansının düşmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.7 CDTI Enjektör Sızıntısı", "desc": "1.7 CDTI dizel motorlarda enjektör keçelerinin zamanla sertlesşip yakıt sızdırması, silindir kapağı çevresinde yağlanma.", "severity": "medium", "relatedEngine": "1.7 CDTI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Renault",
        "model": "Clio 4",
        "years": "2012 - 2020",
        "imageUrl": "images/renault_clio_4_transparent.png",
        "engines": ["1.2 16V", "0.9 TCe", "1.2 TCe", "1.5 dCi"],
        "transmissions": ["Manuel", "EDC Çift Kavrama Otomatik"],
        "engineTransMap": {
            "1.2 16V": ["Manuel"],
            "0.9 TCe": ["Manuel"],
            "1.2 TCe": ["Manuel", "EDC Çift Kavrama Otomatik"],
            "1.5 dCi": ["Manuel", "EDC Çift Kavrama Otomatik"]
        },
        "problems": [
            { "title": "Aşırı Rüzgar Sesi", "desc": "Ön kelebek camı fitillerinin dizaynından ötürü 90 km/h hızdan itibaren oldukça fazla rüzgar sesi alması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "EDC Kavrama Titremesi / Beyin", "desc": "Megane'a benzer şekilde EDC otomatik şanzımanın dur-kalk trafikte çok ısınması ve titretmesi, ilerleyen evrede beyin arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "EDC Çift Kavrama Otomatik" },
            { "title": "Ön Takım (Z Rot - Salıncak)", "desc": "Ön amortisör ve Z rotlarının zayıf olması sebebiyle ufak çukurlarda dahi çok çabuk lak-luk seslerine başlaması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Bagaj Su Alması", "desc": "Bagaj fitillerinin veya stop lambası contalarının arasına sızan suyun bagaj havuzunda gölet oluşturması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Soyulan Deri Direksiyon", "desc": "Araç 30-40 bin kilometrelere geldiğinde direksiyon simidinin derisinin ufak ufak dökülmeye başlaması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "0.9 TCe Turbo Erken Ömür Bitimi", "desc": "Küçük hacimli 0.9 TCe turbonun yağlama yetersizliği sebebiyle 80-100 bin km civarında arızalanması, güç kaybı ve duman.", "severity": "high", "relatedEngine": "0.9 TCe", "relatedTransmission": "Tümü" },
            { "title": "Arka Amortisör Takoz Gıcırtısı", "desc": "Soğuk havalarda arka amortisör üst takozlarından gelen lastik gıcırdaması sesi, özellikle ilk hareketlerde belirginleşir.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Hyundai",
        "model": "Tucson (NX4)",
        "years": "2021 - Günümüz",
        "imageUrl": "images/hyundai_tucson_nx4.png",
        "engines": ["1.6 T-GDI", "1.6 CRDi", "1.6 T-GDI Hybrid"],
        "transmissions": ["6 İleri Manuel", "7 İleri DCT (Çift Kavrama)", "6 İleri Otomatik (Hybrid)"],
        "engineTransMap": {
            "1.6 T-GDI": ["6 İleri Manuel", "7 İleri DCT (Çift Kavrama)"],
            "1.6 CRDi": ["6 İleri Manuel", "7 İleri DCT (Çift Kavrama)"],
            "1.6 T-GDI Hybrid": ["6 İleri Otomatik (Hybrid)"]
        },
        "problems": [
            { "title": "DCT Şanzıman Sarsıntısı", "desc": "7 ileri çift kavrama (DCT) şanzımanda düşük hızlarda özellikle 1-2 vites geçişlerinde titreme ve sarsıntı hissedilmesi, dur-kalk trafikte belirgin.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DCT (Çift Kavrama)" },
            { "title": "Dizel Enjektör Sesi", "desc": "1.6 CRDi dizel motorlarda soğuk çalıştırmada ve rölantide belirgin enjektör şakırtı sesi.", "severity": "low", "relatedEngine": "1.6 CRDi", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Sistemi Donma", "desc": "10.25 inç dokunmatik ekranın donması, geri görüş kamerasının gecikmeli gelmesi veya navigasyonun kilitlenmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Fren Disk Deformasyonu", "desc": "Orijinal fren disklerinin ısı değişimlerinden dolayı erken çarpılıp direksiyonda titreme hissi vermesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Süspansiyon Gıcırtısı", "desc": "Soğuk havalarda veya nemli ortamlarda ön süspansiyondan gelen gıcırtı ve cızırtı sesleri, salıncak burçlarından kaynaklanır.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kapı İçi Su Birikimi", "desc": "Kapı tahliye deliklerinin tıkanmasıyla kapı panel içinde su birikmesi ve açma/kapama sırasında şıpırtı sesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Dacia",
        "model": "Duster (2. Nesil)",
        "years": "2018 - Günümüz",
        "imageUrl": "images/dacia_duster.png",
        "engines": ["1.0 TCe", "1.3 TCe", "1.5 dCi", "1.5 Blue dCi"],
        "transmissions": ["Manuel", "EDC Otomatik", "CVT (X-Tronic)"],
        "engineTransMap": {
            "1.0 TCe": ["Manuel"],
            "1.3 TCe": ["Manuel", "EDC Otomatik", "CVT (X-Tronic)"],
            "1.5 dCi": ["Manuel"],
            "1.5 Blue dCi": ["Manuel", "EDC Otomatik"]
        },
        "problems": [
            { "title": "Süspansiyon Sertliği", "desc": "Arka süspansiyonun bozuk yollarda aşırı sert çalışıp yolcuları rahatsız etmesi, burulma çubuğu dizaynından kaynaklı.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim ve İç Mekan Sesleri", "desc": "Bütçe segmenti plastik kalitesi sebebiyle bozuk yollarda kapı panelleri, torpido ve arka koltuktan gelen bol miktarda tıkırtı.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "CVT Şanzıman Uğultusu", "desc": "CVT (X-Tronic) otomatik şanzımanda hızlanmalarda lastiği kayan araba hissi ve yüksek devirde uğultu.", "severity": "medium", "relatedEngine": "1.3 TCe", "relatedTransmission": "CVT (X-Tronic)" },
            { "title": "1.3 TCe Turbo Hortum Çatlağı", "desc": "Renault/Dacia ortak motoru olan 1.3 TCe'de turbo basınç hortumunun çatlayıp güç kaybı yapması.", "severity": "high", "relatedEngine": "1.3 TCe", "relatedTransmission": "Tümü" },
            { "title": "Rüzgar Sesi (A Sütunu)", "desc": "100 km/h üzeri hızlarda A sütunu ve ayna çevresinden belirgin rüzgar sesi, yalıtım kalitesi düşük.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 dCi EGR Valfi Tıkanması", "desc": "Şehir içi kullanımda EGR valfinin kurum bağlayıp tıkanması, motor arıza lambası ve performans düşüşü.", "severity": "medium", "relatedEngine": "1.5 dCi / 1.5 Blue dCi", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Seat",
        "model": "Leon (5F)",
        "years": "2012 - 2020",
        "imageUrl": "images/seat_leon_5f.png",
        "engines": ["1.0 TSI", "1.2 TSI", "1.4 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "problems": [
            { "title": "DSG Mekatronik / Kavrama Arızası", "desc": "VW grubu ortak sorunu olan DQ200 kuru kavrama DSG'de düşük hızda titreme, mekatronik kart yanması veya basınç tüpü patlaması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Su Pompası Kaçağı", "desc": "TSI motorlarda plastik su pompası gövdesinin çatlayıp antifriz kaçırması, gizli hararet riski (VW grubu ortak).", "severity": "medium", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda ve park manevralarında direksiyon kutusundan gelen mekanik boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Cam Krikosu Arızası", "desc": "Ön ve arka cam krikolarının kablo kopartması veya dişli aşınması, camın yarıda kalması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Turbo Wastegate Zırıltısı", "desc": "1.2 ve 1.4 TSI motorlarda turbo wastegate valfinden gelen metalik rezonans sesi, 2000-3000 devir arası.", "severity": "low", "relatedEngine": "1.2 TSI / 1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Kapı İç Trim Aşınması", "desc": "Kapı kolları ve pencere çıtası çevresindeki plastik kaplamaların matlaşıp soyulması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Polo (AW)",
        "years": "2017 - Günümüz",
        "imageUrl": "images/vw_polo_aw.png",
        "engines": ["1.0 MPI", "1.0 TSI", "1.6 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 MPI": ["Manuel"],
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"]
        },
        "problems": [
            { "title": "DSG Şanzıman Titremesi", "desc": "Küçük araç ağırlığına rağmen DQ200 kuru kavramalı DSG'de kalkışlarda ve 1-2 vites geçişlerinde titreme.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Su Pompası / Termostat Arızası", "desc": "1.0 TSI motorlarda su pompasının veya termostatın erken deforme olup soğutma sıvısı kaçırması.", "severity": "medium", "relatedEngine": "1.0 TSI", "relatedTransmission": "Tümü" },
            { "title": "EPC Uyarı Lambası", "desc": "Elektronik gaz pedalı kontrolü (EPC) uyarısının ani güç kesintisiyle birlikte yanması, genellikle gaz kelebek gövdesinden kaynaklanır.", "severity": "high", "relatedEngine": "1.0 TSI", "relatedTransmission": "Tümü" },
            { "title": "Trim ve Plastik Sesleri", "desc": "Küçük araç segmenti kalitesi sebebiyle gösterge çerçevesi, kapı panelleri ve arka koltuktan gelen sürekli tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Fren Disk Korozyonu", "desc": "Arka fren disklerinin çok az çalışması sebebiyle kısa sürede yoğun pas tutup fren performansını düşürmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Toyota",
        "model": "Yaris (XP210)",
        "years": "2020 - Günümüz",
        "imageUrl": "images/toyota_yaris_xp210.png",
        "engines": ["1.0 (Benzin)", "1.5 (Benzin)", "1.5 Hybrid"],
        "transmissions": ["Manuel", "CVT", "e-CVT (Hybrid)"],
        "engineTransMap": {
            "1.0 (Benzin)": ["Manuel"],
            "1.5 (Benzin)": ["Manuel", "CVT"],
            "1.5 Hybrid": ["e-CVT (Hybrid)"]
        },
        "problems": [
            { "title": "Hybrid Batarya Fan Gürültüsü", "desc": "Hybrid modellerde arka koltuk altındaki batarya soğutma fanının yüksek devirde dönüp belirgin uğultu yapması.", "severity": "low", "relatedEngine": "1.5 Hybrid", "relatedTransmission": "e-CVT (Hybrid)" },
            { "title": "CVT Uğultusu / Lastik Sesi Hissi", "desc": "CVT şanzımanlı modellerde hızlanmalarda motorun yüksek devirde kalıp lastik sesi benzeri uğultu yapması.", "severity": "medium", "relatedEngine": "1.5 (Benzin)", "relatedTransmission": "CVT" },
            { "title": "İnce Boya Kalitesi", "desc": "Toyota genel sorunu olarak boya tabakasının ince olup taş izlerine, kuş pisliğine ve çizilmelere karşı hassas olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Süspansiyon Sertliği", "desc": "Burulma çubuğu arka süspansiyonun bozuk yollarda çok sert tepki vermesi, arka koltukta rahatsızlık.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ses Yalıtımı Eksikliği", "desc": "Küçük araç segmenti olmasına rağmen 100 km/h üzeri hızlarda beklenenin üzerinde yol ve rüzgar sesi alması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Hyundai",
        "model": "i20 (BC3)",
        "years": "2020 - Günümüz",
        "imageUrl": "images/hyundai_i20.png",
        "engines": ["1.0 T-GDI", "1.2 MPI", "1.4 MPI"],
        "transmissions": ["Manuel", "7 İleri DCT (Çift Kavrama)", "IVT (Sürekli Değişken)"],
        "engineTransMap": {
            "1.0 T-GDI": ["Manuel", "7 İleri DCT (Çift Kavrama)"],
            "1.2 MPI": ["Manuel"],
            "1.4 MPI": ["Manuel", "IVT (Sürekli Değişken)"]
        },
        "problems": [
            { "title": "DCT Şanzıman Titremesi", "desc": "7 ileri DCT çift kavrama şanzımanda kalkışlarda ve düşük hızlarda sarsıntı, vites geçiş kararsızlığı.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DCT (Çift Kavrama)" },
            { "title": "IVT Uğultusu", "desc": "IVT (CVT benzeri) şanzımanda hızlanmalarda belirgin uğultu ve motorun yüksek devirde takılı kalma hissi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "IVT (Sürekli Değişken)" },
            { "title": "Direksiyon Sesi", "desc": "Park manevralarında ve düşük hızlarda elektrikli direksiyondan gelen vınlama veya motor sesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Trim Plastik Kalitesi", "desc": "Alt donanımlarda ve kapı panellerinde kullanılan sert plastiklerin bozuk yollarda tıkırtı ve gıcırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Far Buğulanması", "desc": "LED farların soğuk ve nemli havalarda içeriden buğulanıp aydınlatma performansını düşürmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Nissan",
        "model": "Qashqai (J11)",
        "years": "2014 - 2021",
        "imageUrl": "images/nissan_qashqai_j11.png",
        "engines": ["1.2 DIG-T", "1.5 dCi", "1.6 dCi"],
        "transmissions": ["Manuel", "CVT (X-Tronic)"],
        "engineTransMap": {
            "1.2 DIG-T": ["Manuel", "CVT (X-Tronic)"],
            "1.5 dCi": ["Manuel"],
            "1.6 dCi": ["Manuel", "CVT (X-Tronic)"]
        },
        "problems": [
            { "title": "CVT Şanzıman Isınması", "desc": "CVT (X-Tronic) şanzımanın uzun yokuşlarda veya sıcak havalarda aşırı ısınıp koruma moduna geçmesi, güç kesintisi.", "severity": "high", "relatedEngine": "1.2 DIG-T", "relatedTransmission": "CVT (X-Tronic)" },
            { "title": "DPF Tıkanması (Dizel)", "desc": "Şehir içi kısa mesafe kullanımda dizel partikül filtresinin rejenerasyon yapamayıp tıkanması ve motor arıza lambası.", "severity": "high", "relatedEngine": "1.5 dCi / 1.6 dCi", "relatedTransmission": "Tümü" },
            { "title": "1.2 DIG-T Triger Zinciri", "desc": "1.2 litre benzinli turbo motorlarda triger zincirinin uzaması, soğuk çalıştırmada çıngırak sesi ve motor hasarı riski.", "severity": "high", "relatedEngine": "1.2 DIG-T", "relatedTransmission": "Tümü" },
            { "title": "Panoramik Cam Tavan Sızıntısı", "desc": "Panoramik cam tavanlı modellerde tahliye kanallarının tıkanmasıyla araç içine su sızması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda elektrikli direksiyon kutusundan gelen rahatsız edici tıkırtı sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Fren Kaliper Tutukluk", "desc": "Arka fren kaliperlerinin zamanla tutukluk yapıp sürtünme oluşturması, yakıt tüketiminde artış ve fren ısınması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Dacia",
        "model": "Sandero (3. Nesil)",
        "years": "2021 - Günümüz",
        "imageUrl": "images/dacia_sandero.png",
        "engines": ["1.0 SCe", "1.0 TCe", "1.0 TCe ECO-G (LPG)"],
        "transmissions": ["Manuel", "CVT (X-Tronic)"],
        "engineTransMap": {
            "1.0 SCe": ["Manuel"],
            "1.0 TCe": ["Manuel", "CVT (X-Tronic)"],
            "1.0 TCe ECO-G (LPG)": ["Manuel"]
        },
        "problems": [
            { "title": "CVT Şanzıman Gürültüsü", "desc": "CVT otomatik şanzımanda hızlanmalarda motorun yüksek devirde sabit kalıp uğultu yapması, kayış sesi.", "severity": "medium", "relatedEngine": "1.0 TCe", "relatedTransmission": "CVT (X-Tronic)" },
            { "title": "Trim ve Plastik Tıkırtıları", "desc": "Bütçe segmenti malzeme kalitesi sebebiyle torpido, kapı panelleri ve arka koltuktan gelen kronik tıkırtı.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Sertliği", "desc": "Maliyet odaklı süspansiyon ayarının bozuk yollarda aşırı sert çalışıp konfor düşürmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "ECO-G LPG Sistem Arızası", "desc": "Fabrika çıkışı LPG'li (ECO-G) modellerde LPG/benzin geçiş sorunları, beyinden kaynaklı gaz kesmeleri.", "severity": "high", "relatedEngine": "1.0 TCe ECO-G (LPG)", "relatedTransmission": "Tümü" },
            { "title": "İnce Boya Kalitesi", "desc": "Boya tabakasının çok ince olması sebebiyle kaputta taş izleri ve ufak temaslarda kolay çizilme.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "T-Roc",
        "years": "2017 - Günümüz",
        "imageUrl": "images/vw_t_roc.png",
        "engines": ["1.0 TSI", "1.5 TSI Evo", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip", "7 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.0 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 TSI Evo": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "2.0 TDI": ["Manuel", "7 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "DSG Kavrama Titremesi (DQ200)", "desc": "Kuru kavramalı 7 ileri DSG'de düşük hızlarda titreme, kavrama aşınması ve dur-kalk trafikte sarsıntı.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "1.5 TSI Evo Yağ Eksiltme", "desc": "1.5 TSI Evo motorlarda segman yapısından kaynaklı kronik yağ tüketimi, düzenli yağ ikmali gerektirmesi.", "severity": "medium", "relatedEngine": "1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Su Pompası / Termostat Arızası", "desc": "TSI motorlarda plastik gövdeli su pompası ve termostatın erken deforme olup soğutma sıvısı kaçırması.", "severity": "medium", "relatedEngine": "1.0 TSI / 1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda ve park manevralarında direksiyon kutusundan gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Sistemi Donması", "desc": "Composition / Discover multimedya sisteminin sürüş sırasında donması veya kendini resetlemesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Bagaj Kapağı Su Sızıntısı", "desc": "Arka lamba contalarından veya bagaj fitilinden su sızması, bagaj havuzunda su birikmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 TSI Silindir Kapatma Titreşimi", "desc": "1.5 TSI Evo motorlarda ACT (silindir kapatma) devreye girdiğinde belirgin titreşim ve uğultu sesi.", "severity": "medium", "relatedEngine": "1.5 TSI Evo", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Renault",
        "model": "Taliant",
        "years": "2021 - Günümüz",
        "imageUrl": "images/renault_taliant.png",
        "engines": ["1.0 SCe (Atmosferik)", "1.0 TCe (Turbolu)", "1.0 TCe ECO-G (LPG)"],
        "transmissions": ["Manuel", "CVT (X-Tronic)"],
        "engineTransMap": {
            "1.0 SCe (Atmosferik)": ["Manuel"],
            "1.0 TCe (Turbolu)": ["Manuel", "CVT (X-Tronic)"],
            "1.0 TCe ECO-G (LPG)": ["Manuel"]
        },
        "problems": [
            { "title": "CVT Şanzıman Uğultusu", "desc": "CVT (X-Tronic) şanzımanda hızlanmalarda motorun yüksek devirde kalıp uğultu yapması ve güç gecikmesi hissi.", "severity": "medium", "relatedEngine": "1.0 TCe (Turbolu)", "relatedTransmission": "CVT (X-Tronic)" },
            { "title": "ECO-G LPG Geçiş Sorunu", "desc": "Fabrika çıkışı LPG'li modellerde benzinden gaza geçişte sarsıntı, gaz kesmeler ve LPG sistem arızası.", "severity": "high", "relatedEngine": "1.0 TCe ECO-G (LPG)", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Sertliği", "desc": "Maliyet odaklı süspansiyon kalibrasyonunun bozuk yollarda aşırı sert çalışması, özellikle arka koltukta.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim ve Plastik Sesleri", "desc": "Bütçe segmenti malzeme kalitesi nedeniyle torpido, kapı panelleri ve arka koltuktan gelen kronik tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İnce Boya Kalitesi", "desc": "Boya tabakasının ince olması sebebiyle kaputta ve tamponlarda taş izlerine karşı aşırı hassasiyet.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Elektrikli direksiyon sisteminden gelen vınlama sesi, park manevralarında ve düşük hızlarda belirginleşir.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Fiat",
        "model": "500X",
        "years": "2014 - 2023",
        "imageUrl": "images/fiat_500x.png",
        "engines": ["1.6 E-Torq", "1.4 MultiAir Turbo", "1.3 Multijet", "1.6 Multijet"],
        "transmissions": ["Manuel", "6 İleri Otomatik (AT6)", "9 İleri ZF Otomatik"],
        "engineTransMap": {
            "1.6 E-Torq": ["Manuel", "6 İleri Otomatik (AT6)"],
            "1.4 MultiAir Turbo": ["Manuel", "6 İleri Otomatik (AT6)"],
            "1.3 Multijet": ["Manuel"],
            "1.6 Multijet": ["Manuel", "9 İleri ZF Otomatik"]
        },
        "problems": [
            { "title": "1.4 MultiAir Ünitesi Arızası", "desc": "1.4 MultiAir turbo motorlarda valf kontrol ünitesinin arızalanması, düzensiz rölanti, güç kaybı ve motor arıza lambası.", "severity": "high", "relatedEngine": "1.4 MultiAir Turbo", "relatedTransmission": "Tümü" },
            { "title": "1.3 Multijet Turbo Arızası", "desc": "1.3 Multijet dizel motorlarda turbonun mil aşınması veya yağ kaçırması, güç kaybı ve aşırı duman.", "severity": "high", "relatedEngine": "1.3 Multijet", "relatedTransmission": "Tümü" },
            { "title": "9 İleri ZF Şanzıman Kararsızlığı", "desc": "9 ileri otomatik şanzımanda sürekli vites arama, kararsız geçişler ve bazen sert vuruntu.", "severity": "medium", "relatedEngine": "1.6 Multijet", "relatedTransmission": "9 İleri ZF Otomatik" },
            { "title": "Elektrik Tesisatı Sorunları", "desc": "Gösterge paneli hataları, park sensörü yanlış uyarıları ve UConnect multimedya sistemi donmaları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Alt Takım Erken Aşınması", "desc": "Ön salıncak burçları, Z rotları ve amortisör takozlarının Türkiye yollarında hızla deforme olması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Klima Kompresörü Arızası", "desc": "Klima kompresör kavrama bobininin yanması veya kompresörün kilitlenmesi, klimanın soğutma yapamaması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Toyota",
        "model": "C-HR",
        "years": "2016 - 2024",
        "imageUrl": "images/toyota_c_hr.png",
        "engines": ["1.2 Turbo", "1.8 Hybrid"],
        "transmissions": ["Manuel", "CVT (Multidrive S)", "e-CVT (Hybrid)"],
        "engineTransMap": {
            "1.2 Turbo": ["Manuel", "CVT (Multidrive S)"],
            "1.8 Hybrid": ["e-CVT (Hybrid)"]
        },
        "problems": [
            { "title": "CVT / e-CVT Uğultusu", "desc": "Hızlanmalarda motorun yüksek devire çıkıp lastik kayan araba hissi vermesi, özellikle rampalarda.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Hybrid Batarya Fan Gürültüsü", "desc": "Hybrid modellerde batarya soğutma fanının yüksek devirde dönüp arka koltuktan belirgin uğultu gelmesi.", "severity": "low", "relatedEngine": "1.8 Hybrid", "relatedTransmission": "e-CVT (Hybrid)" },
            { "title": "İnce Boya Kalitesi", "desc": "Toyota genel sorunu olarak boya tabakasının ince olması, taş izlerine ve kuş pisliğine karşı aşırı hassasiyet.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Görüş Kısıtı", "desc": "Tasarım gereği arka cam ve C sütunlarının çok küçük olması sebebiyle arka görüşün oldukça kısıtlı olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Sertliği", "desc": "Sportif ayarlı süspansiyonun bozuk Türkiye yollarında sert çalışıp yolcuları rahatsız etmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kötü Ses Yalıtımı", "desc": "Yüksek hızlarda ayna ve A sütunu çevresinden belirgin rüzgar sesi, tekerlek davlumbazlarından yol sesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.2 Turbo Yağ Eksiltme", "desc": "1.2 Turbo benzinli motorlarda uzun süreli şehir içi kullanımda normalin üzerinde yağ tüketimi.", "severity": "medium", "relatedEngine": "1.2 Turbo", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Hyundai",
        "model": "Bayon",
        "years": "2021 - Günümüz",
        "imageUrl": "images/hyundai_bayon.png",
        "engines": ["1.2 MPI", "1.0 T-GDI", "1.4 MPI"],
        "transmissions": ["Manuel", "7 İleri DCT (Çift Kavrama)", "IVT (Sürekli Değişken)"],
        "engineTransMap": {
            "1.2 MPI": ["Manuel"],
            "1.0 T-GDI": ["Manuel", "7 İleri DCT (Çift Kavrama)"],
            "1.4 MPI": ["Manuel", "IVT (Sürekli Değişken)"]
        },
        "problems": [
            { "title": "DCT Şanzıman Titremesi", "desc": "7 ileri DCT çift kavrama şanzımanda kalkışlarda ve düşük hızlarda sarsıntı, vites geçiş kararsızlığı.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DCT (Çift Kavrama)" },
            { "title": "IVT Uğultusu", "desc": "IVT şanzımanda hızlanmalarda belirgin uğultu ve motorun yüksek devirde takılı kalma hissi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "IVT (Sürekli Değişken)" },
            { "title": "Arka Süspansiyon Sertliği", "desc": "Burulma çubuğu arka süspansiyonun bozuk yollarda sert tepki vermesi, arka koltukta konfor düşüklüğü.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim ve Plastik Sesleri", "desc": "Kapı panelleri ve torpido çevresindeki sert plastiklerin bozuk yollarda tıkırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Sesi", "desc": "Park manevralarında ve düşük hızlarda elektrikli direksiyondan gelen vınlama sesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Far Buğulanması", "desc": "LED farların soğuk ve nemli havalarda içeriden buğulanıp aydınlatma performansını düşürmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Hyundai",
        "model": "Kona (OS)",
        "years": "2017 - 2023",
        "imageUrl": "images/hyundai_kona_os.png",
        "engines": ["1.0 T-GDI", "1.6 T-GDI", "1.6 CRDi"],
        "transmissions": ["6 İleri Manuel", "7 İleri DCT (Çift Kavrama)"],
        "engineTransMap": {
            "1.0 T-GDI": ["6 İleri Manuel"],
            "1.6 T-GDI": ["7 İleri DCT (Çift Kavrama)"],
            "1.6 CRDi": ["6 İleri Manuel", "7 İleri DCT (Çift Kavrama)"]
        },
        "problems": [
            { "title": "DCT Şanzıman Sarsıntısı", "desc": "7 ileri DCT çift kavrama şanzımanda düşük hızlarda sarsıntı ve titreme, dur-kalk trafikte belirginleşir.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DCT (Çift Kavrama)" },
            { "title": "1.6 T-GDI Turbo Arızası", "desc": "1.6 T-GDI motorlarda turbo wastegate arızası ve yağ kaçırması, güç kaybı.", "severity": "high", "relatedEngine": "1.6 T-GDI", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Sistemi Donma", "desc": "Dokunmatik ekranın donması, navigasyonun kilitlenmesi veya geri görüş kamerasının gecikmeli gelmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Fren Disk Deformasyonu", "desc": "Orijinal fren disklerinin ısı değişimlerinden dolayı erken çarpılıp direksiyonda titreme vermesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Süspansiyon Gıcırtısı", "desc": "Soğuk havalarda ön süspansiyondan gelen gıcırtı sesleri, salıncak burçlarından kaynaklanır.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Dizel Enjektör Sesi", "desc": "1.6 CRDi dizel motorlarda soğuk çalıştırmada ve rölantide belirgin enjektör şakırtı sesi.", "severity": "low", "relatedEngine": "1.6 CRDi", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Ford",
        "model": "Kuga (Mk3)",
        "years": "2020 - Günümüz",
        "imageUrl": "images/ford_kuga_mk3.png",
        "engines": ["1.5 EcoBoost", "1.5 EcoBlue", "2.0 EcoBlue"],
        "transmissions": ["Manuel", "8 İleri Otomatik"],
        "engineTransMap": {
            "1.5 EcoBoost": ["Manuel", "8 İleri Otomatik"],
            "1.5 EcoBlue": ["Manuel", "8 İleri Otomatik"],
            "2.0 EcoBlue": ["Manuel", "8 İleri Otomatik"]
        },
        "problems": [
            { "title": "1.5 EcoBoost Soğutma Sistemi", "desc": "1.5 EcoBoost motorlarda soğutma hortumlarının ve su pompasının erken arızalanması, gizli hararet.", "severity": "high", "relatedEngine": "1.5 EcoBoost", "relatedTransmission": "Tümü" },
            { "title": "SYNC 3 Multimedya Donması", "desc": "SYNC 3 multimedya sisteminin donması, gecikmeli tepki vermesi veya CarPlay/Android Auto bağlantı kopmaları.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Panoramik Cam Tavan Su Sızıntısı", "desc": "Panoramik cam tavanlı modellerde tahliye kanallarının tıkanmasıyla araç içine su sızması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Fren Disk Deformasyonu", "desc": "Ağır SUV olmasından dolayı ön fren disklerinin erken çarpılıp direksiyonda titreme vermesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Koltuk Gıcırtısı", "desc": "Arka koltuk ISOFIX bağlantı noktaları çevresinden ve koltuk raylarından gelen gıcırtı sesleri.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Ford",
        "model": "Tourneo Courier",
        "years": "2014 - Günümüz",
        "imageUrl": "images/ford_tourneo_courier.png",
        "engines": ["1.0 EcoBoost", "1.5 TDCi", "1.6 TDCi"],
        "transmissions": ["Manuel"],
        "engineTransMap": {
            "1.0 EcoBoost": ["Manuel"],
            "1.5 TDCi": ["Manuel"],
            "1.6 TDCi": ["Manuel"]
        },
        "problems": [
            { "title": "1.6 TDCi Enjektör Arızası", "desc": "1.6 TDCi dizel motorlarda enjektörlerin zamanla arızalanması, motor silkme ve güç kaybı.", "severity": "high", "relatedEngine": "1.6 TDCi", "relatedTransmission": "Tümü" },
            { "title": "1.0 EcoBoost Soğutma Hortumu", "desc": "1.0 EcoBoost motorlarda soğutma hortumlarının çatlayıp delinmesi ve motorun hararet yapması.", "severity": "high", "relatedEngine": "1.0 EcoBoost", "relatedTransmission": "Tümü" },
            { "title": "Sürgülü Kapı Mekanizması", "desc": "Arka sürgülü kapının raylarının veya kilit mekanizmasının zamanla bozulması, kapının tam kapanmaması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Sesi", "desc": "Bozuk yollarda ve park manevralarında direksiyon kutusundan gelen tıkırtı sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DPF Tıkanması (Dizel)", "desc": "Şehir içi kısa mesafe kullanımda dizel partikül filtresinin rejenerasyon yapamayıp tıkanması.", "severity": "medium", "relatedEngine": "1.5 TDCi / 1.6 TDCi", "relatedTransmission": "Tümü" },
            { "title": "Ön Amortisör Erken Aşınması", "desc": "Yüklü kullanım ve bozuk yollarda ön amortisörlerin erken yağ sızdırıp sertleşmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Plastik Kalitesi", "desc": "Ticari araç kökenli olması sebebiyle iç mekan plastiklerinin çabuk çizilmesi ve tıkırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Peugeot",
        "model": "2008 (2. Nesil)",
        "years": "2019 - Günümüz",
        "imageUrl": "images/peugeot_2008.png",
        "engines": ["1.2 PureTech", "1.5 BlueHDi"],
        "transmissions": ["Manuel", "EAT8 Tam Otomatik"],
        "engineTransMap": {
            "1.2 PureTech": ["Manuel", "EAT8 Tam Otomatik"],
            "1.5 BlueHDi": ["Manuel", "EAT8 Tam Otomatik"]
        },
        "problems": [
            { "title": "1.2 PureTech Triger Kayışı Sorunu", "desc": "Yağ içinde çalışan triger kayışının erken aşınıp dökülmesi, yağ pompasını tıkayarak motor arızasına yol açma riski. PSA grubunun kronik sorunu.", "severity": "high", "relatedEngine": "1.2 PureTech", "relatedTransmission": "Tümü" },
            { "title": "Fren Vakum Pompası (1.2 PureTech)", "desc": "Trigerden kopan kauçuk parçacıklarının fren vakum pompasını tıkayarak frenin sertleşmesine ve tutmamasına yol açması.", "severity": "high", "relatedEngine": "1.2 PureTech", "relatedTransmission": "Tümü" },
            { "title": "EAT8 Şanzıman Sert Geçiş", "desc": "EAT8 otomatik şanzımanda soğuk havalarda sert vites geçişleri ve patinaj hissi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "EAT8 Tam Otomatik" },
            { "title": "1.5 BlueHDi AdBlue Arızası", "desc": "AdBlue deposu veya enjektörünün kristalleşip arızalanması, motor arıza lambası ve güç kısıtlaması.", "severity": "high", "relatedEngine": "1.5 BlueHDi", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Resetlenmesi", "desc": "Sürüş esnasında dokunmatik ekranın kendi kendine kapanıp yeniden başlaması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Süspansiyon Sesi", "desc": "Ön amortisör üst takozlarından ve alt kol burçlarından gelen gıcırtı ve tıkırtı sesleri.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Peugeot",
        "model": "308 (T9)",
        "years": "2013 - 2021",
        "imageUrl": "images/peugeot_308_t9.png",
        "engines": ["1.2 PureTech", "1.6 THP", "1.5 BlueHDi", "1.6 BlueHDi"],
        "transmissions": ["Manuel", "EAT6 Tam Otomatik", "EAT8 Tam Otomatik"],
        "engineTransMap": {
            "1.2 PureTech": ["Manuel", "EAT6 Tam Otomatik"],
            "1.6 THP": ["Manuel", "EAT6 Tam Otomatik"],
            "1.5 BlueHDi": ["Manuel", "EAT8 Tam Otomatik"],
            "1.6 BlueHDi": ["Manuel", "EAT6 Tam Otomatik"]
        },
        "problems": [
            { "title": "1.2 PureTech Triger Kayışı", "desc": "Yağ içinde çalışan triger kayışının erken dökülmesi ve yağ pompasını tıkayarak motor basıncını düşürmesi. PSA kronik sorunu.", "severity": "high", "relatedEngine": "1.2 PureTech", "relatedTransmission": "Tümü" },
            { "title": "1.6 THP Turbo Yağ Kaçağı", "desc": "1.6 THP turbo benzinli motorlarda turbo giriş/çıkış contalarından yağ sızıntısı ve turbo verimliliğinin düşmesi.", "severity": "high", "relatedEngine": "1.6 THP", "relatedTransmission": "Tümü" },
            { "title": "1.6 THP Triger Zinciri Uzaması", "desc": "1.6 THP motorlarda triger zincirinin uzaması, soğuk çalıştırmada çıngırak sesi ve motor hasarı riski.", "severity": "high", "relatedEngine": "1.6 THP", "relatedTransmission": "Tümü" },
            { "title": "EAT6 Şanzıman Sert Geçiş", "desc": "EAT6 otomatik şanzımanda soğuk havalarda sert vites geçişleri ve D-R arası geçişlerde vuruntu.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "EAT6 Tam Otomatik" },
            { "title": "Multimedya Sistemi Donması", "desc": "Dokunmatik ekranın donması, kararması veya CarPlay/Android Auto bağlantısının sürekli kopması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DPF Tıkanması (Dizel)", "desc": "Şehir içi kısa mesafe kullanımda dizel partikül filtresinin tıkanması, motor uyarı lambası.", "severity": "medium", "relatedEngine": "1.5 BlueHDi / 1.6 BlueHDi", "relatedTransmission": "Tümü" },
            { "title": "Ön Amortisör Yağ Sızıntısı", "desc": "Ön amortisörlerin 40-60 bin km civarında yağ sızdırmaya başlaması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Citroën",
        "model": "C3 (3. Nesil)",
        "years": "2016 - Günümüz",
        "imageUrl": "images/citroen_c3.png",
        "engines": ["1.2 PureTech (Atmosferik)", "1.2 PureTech Turbo", "1.5 BlueHDi"],
        "transmissions": ["Manuel", "EAT6 Tam Otomatik"],
        "engineTransMap": {
            "1.2 PureTech (Atmosferik)": ["Manuel"],
            "1.2 PureTech Turbo": ["Manuel", "EAT6 Tam Otomatik"],
            "1.5 BlueHDi": ["Manuel"]
        },
        "problems": [
            { "title": "1.2 PureTech Triger Kayışı Sorunu", "desc": "Yağ içinde çalışan triger kayışının erken dökülmesi, yağ pompasını tıkayarak motor arızasına yol açması. PSA grubu kronik sorunu.", "severity": "high", "relatedEngine": "1.2 PureTech Turbo", "relatedTransmission": "Tümü" },
            { "title": "Fren Vakum Pompası Tıkanması", "desc": "Trigerden kopan parçacıkların fren vakum pompasını tıkayarak fren pedalının sertleşmesine yol açması.", "severity": "high", "relatedEngine": "1.2 PureTech Turbo", "relatedTransmission": "Tümü" },
            { "title": "Süspansiyon Sertliği", "desc": "Süspansiyon kalibrasyonunun bozuk yollarda sert çalışması, özellikle arka koltukta rahatsızlık.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Resetlenmesi", "desc": "Dokunmatik ekranın sürüş sırasında kararıp yeniden başlaması, Mirror Screen bağlantısının kopması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Takım Erken Aşınması", "desc": "Z rotları ve salıncak burçlarının bozuk yollarda çabuk deforme olup ses yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Kapı Fitili Rüzgar Sesi", "desc": "100 km/h üzeri hızlarda ön kapı fitillerinden belirgin rüzgar sesi geçirmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Citroën",
        "model": "C-Elysée",
        "years": "2012 - 2020",
        "imageUrl": "images/citroen_c_elysee.png",
        "engines": ["1.2 VTi", "1.6 VTi", "1.6 HDi"],
        "transmissions": ["Manuel", "EAT6 Tam Otomatik"],
        "engineTransMap": {
            "1.2 VTi": ["Manuel"],
            "1.6 VTi": ["Manuel", "EAT6 Tam Otomatik"],
            "1.6 HDi": ["Manuel"]
        },
        "problems": [
            { "title": "1.6 VTi Triger Zinciri Uzaması", "desc": "1.6 VTi benzinli motorlarda triger zincirinin erken uzaması, soğuk çalıştırmada çıngırak sesi ve motor hasarı riski.", "severity": "high", "relatedEngine": "1.6 VTi", "relatedTransmission": "Tümü" },
            { "title": "1.6 HDi EGR Valfi Tıkanması", "desc": "Dizel motorlarda şehir içi kullanımda EGR valfinin kurum bağlayıp tıkanması, güç kaybı ve arıza lambası.", "severity": "medium", "relatedEngine": "1.6 HDi", "relatedTransmission": "Tümü" },
            { "title": "Debriyaj Merkezi Arızası", "desc": "Manuel şanzımanlı modellerde debriyaj merkezinin iç kaçak yapıp pedalın boşa düşmesi.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Manuel" },
            { "title": "Elektrik Tesisatı Sorunları", "desc": "Cam krikosu, merkezi kilit ve gösterge paneli aydınlatmasında zaman zaman yaşanan elektrik sorunları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Alt Takım Erken Aşınması", "desc": "Z rotları, salıncak burçları ve rotbaşlarının Türkiye yollarında hızla deforme olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Plastik Kalitesi", "desc": "Bütçe segmenti plastik kalitesi sebebiyle torpido ve kapı panellerinden gelen tıkırtılar ve çizilmeler.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Tiguan (AD1)",
        "years": "2016 - Günümüz",
        "imageUrl": "images/vw_tiguan_ad1.png",
        "engines": ["1.4 TSI", "1.5 TSI Evo", "2.0 TSI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip", "7 İleri DSG (Islak)"],
        "engineTransMap": {
            "1.4 TSI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 TSI Evo": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "2.0 TSI": ["7 İleri DSG (Islak)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
            "2.0 TDI": ["Manuel", "7 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "DSG Kavrama Titremesi (DQ200)", "desc": "1.4 TSI ve 1.6 TDI modellerde kuru kavramalı DSG'de düşük hızlarda titreme ve kavrama aşınması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Su Pompası / Termostat Arızası", "desc": "TSI motorlarda plastik su pompası ve termostatın zamanla deforme olup antifriz kaçırması.", "severity": "medium", "relatedEngine": "1.4 TSI / 1.5 TSI Evo", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda ve park manevralarında direksiyon kutusundan gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Panoramik Cam Tavan Su Alma", "desc": "Panoramik cam tavanlı modellerde tahliye kanallarının tıkanmasıyla araç içine su sızması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "AdBlue Sistemi Arızası (Dizel)", "desc": "Dizel modellerde AdBlue enjektörünün kristalleşip tıkanması, motor arıza lambası ve güç kısıtlaması.", "severity": "high", "relatedEngine": "1.6 TDI / 2.0 TDI", "relatedTransmission": "Tümü" },
            { "title": "1.4 TSI Turbo Wastegate Zırıltısı", "desc": "1.4 TSI motorlarda turbo wastegate valfinden belirli devirlerde gelen metalik rezonans sesi.", "severity": "low", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Donma / Gecikme", "desc": "Discover Pro ekranının donması veya gecikmeli tepki vermesi, özellikle navigasyon kullanırken.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "BMW",
        "model": "5 Serisi (G30)",
        "years": "2017 - 2023",
        "imageUrl": "images/bmw_5_g30.png",
        "engines": ["2.0 (520i)", "2.0 (530i)", "2.0 (520d)", "3.0 (530d)"],
        "transmissions": ["8 İleri ZF Tork Konvertörlü Otomatik"],
        "engineTransMap": {
            "2.0 (520i)": ["8 İleri ZF Tork Konvertörlü Otomatik"],
            "2.0 (530i)": ["8 İleri ZF Tork Konvertörlü Otomatik"],
            "2.0 (520d)": ["8 İleri ZF Tork Konvertörlü Otomatik"],
            "3.0 (530d)": ["8 İleri ZF Tork Konvertörlü Otomatik"]
        },
        "problems": [
            { "title": "B48 Motor Su Eksiltme", "desc": "B48 2.0 litre benzinli motorlarda kronik soğutma sıvısı eksiltmesi, yedek su deposu çatlağı veya hortum kaçakları.", "severity": "medium", "relatedEngine": "2.0 (520i) / 2.0 (530i)", "relatedTransmission": "Tümü" },
            { "title": "ZF 8HP Şanzıman Mechatronic", "desc": "8 ileri ZF otomatik şanzımanda yağ değişimi ihmal edildiğinde sert vites geçişleri ve mechatronic birim arızası.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "8 İleri ZF Tork Konvertörlü Otomatik" },
            { "title": "LED Far / Gündüz Farı Arızası", "desc": "LED gündüz farı modüllerinin veya angel eye halkalarının yanması, komple far ünitesi değişimi gerektirmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "EGR Soğutucu Arızası (Dizel)", "desc": "B47 dizel motorlarda EGR soğutucusunun delinip manifolta zarar vermesi. BMW geri çağırma konusudur.", "severity": "high", "relatedEngine": "2.0 (520d)", "relatedTransmission": "Tümü" },
            { "title": "Hava Süspansiyonu Arızası", "desc": "Hava süspansiyonlu modellerde kompresör veya körüklerin zamanla delinerek aracın bir tarafa yatması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "iDrive Donma / Gecikme", "desc": "iDrive multimedya sisteminin zaman zaman donması, dokunmatik ekranın geç tepki vermesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Motor Takozu Erken Aşınması", "desc": "Motor takozlarının titreşimden dolayı erken deforme olup kabine titreşim aktarması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mercedes-Benz",
        "model": "C Serisi (W205)",
        "years": "2014 - 2021",
        "imageUrl": "images/mercedes_c_w205.png",
        "engines": ["1.6 Turbo (C180)", "2.0 Turbo (C200)", "2.0 Turbo (C250)", "2.1 CDI (C220d)", "2.0 Dizel (C220d Yeni)"],
        "transmissions": ["6 İleri Manuel", "7G-Tronic Plus Otomatik", "9G-Tronic Otomatik"],
        "engineTransMap": {
            "1.6 Turbo (C180)": ["6 İleri Manuel", "7G-Tronic Plus Otomatik"],
            "2.0 Turbo (C200)": ["9G-Tronic Otomatik"],
            "2.0 Turbo (C250)": ["7G-Tronic Plus Otomatik"],
            "2.1 CDI (C220d)": ["7G-Tronic Plus Otomatik"],
            "2.0 Dizel (C220d Yeni)": ["9G-Tronic Otomatik"]
        },
        "problems": [
            { "title": "9G-Tronic Şanzıman Sarsıntısı", "desc": "9 ileri otomatik şanzımanda düşük hızlarda sert vites geçişleri, özellikle 1-2-3 arası geçişlerde titreme.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "9G-Tronic Otomatik" },
            { "title": "M274 Motor Triger Zinciri", "desc": "M274 kodlu 2.0 turbo benzinli motorlarda triger zincirinin uzaması, soğuk çalıştırmada çıngırak sesi.", "severity": "high", "relatedEngine": "2.0 Turbo (C200) / 2.0 Turbo (C250)", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Bozuk yollarda ve park manevralarında direksiyon kutusundan gelen mekanik boşluk tıkırtı sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Hava Süspansiyonu Arızası", "desc": "AirMatic süspansiyonlu modellerde hava körüklerinin veya kompresörün zamanla bozulup aracın yatması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "COMAND / MBUX Donma", "desc": "Multimedya sisteminin donması, navigasyonun kilitlenmesi veya Bluetooth bağlantı sorunları.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "OM651 Enjektör Sızıntısı (Dizel)", "desc": "2.1 CDI dizel motorlarda enjektör keçelerinin sertleşip yakıt sızdırması, silindir kapağı çevresinde karbon birikimi.", "severity": "medium", "relatedEngine": "2.1 CDI (C220d)", "relatedTransmission": "Tümü" },
            { "title": "Kapı Kolu Krom Kaplaması Soyulması", "desc": "Kapı kollarındaki krom kaplamanın zamanla kabarcık yapıp soyulması, estetik bozulma.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Hyundai",
        "model": "i20 (GB)",
        "years": "2014 - 2020",
        "imageUrl": "images/hyundai_i20_gb.png",
        "engines": ["1.2 MPI", "1.4 MPI", "1.0 T-GDI", "1.4 CRDi"],
        "transmissions": ["Manuel", "4 İleri Otomatik", "7 İleri DCT (Çift Kavrama)"],
        "engineTransMap": {
            "1.2 MPI": ["Manuel"],
            "1.4 MPI": ["Manuel", "4 İleri Otomatik"],
            "1.0 T-GDI": ["Manuel", "7 İleri DCT (Çift Kavrama)"],
            "1.4 CRDi": ["Manuel"]
        },
        "problems": [
            { "title": "4 İleri Otomatik Şanzıman Gecikmesi", "desc": "Eski nesil 4 ileri otomatik şanzımanda vites geçişlerinde belirgin gecikme ve yüksek yakıt tüketimi.", "severity": "medium", "relatedEngine": "1.4 MPI", "relatedTransmission": "4 İleri Otomatik" },
            { "title": "DCT Şanzıman Titremesi", "desc": "7 ileri DCT çift kavrama şanzımanda kalkışlarda ve düşük hızlarda sarsıntı.", "severity": "high", "relatedEngine": "1.0 T-GDI", "relatedTransmission": "7 İleri DCT (Çift Kavrama)" },
            { "title": "Direksiyon Sesi", "desc": "Elektrikli direksiyondan park manevralarında ve düşük hızlarda gelen vınlama veya motor sesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Fren Kampana Gıcırtısı", "desc": "Arka kampanalı fren sisteminin zamanla gıcırdaması ve fren performansının düşmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Klima Kompresörü Arızası", "desc": "Klima kompresör kavrama bobininin veya kompresörün erken arızalanması, soğutma yapamaması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Trim Plastik Kalitesi", "desc": "Kapı panelleri ve torpidodaki sert plastiklerin bozuk yollarda tıkırtı ve gıcırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Golf (Mk5)",
        "years": "2003 - 2008",
        "imageUrl": "images/vw_golf_mk5.png",
        "engines": ["1.6 MPI", "1.4 TSI", "1.9 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "6 İleri Otomatik", "6 İleri DSG (Islak)", "7 İleri DSG (Kuru)"],
        "engineTransMap": {
            "1.6 MPI": ["Manuel", "6 İleri Otomatik"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.9 TDI": ["Manuel", "6 İleri DSG (Islak)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "1.4 TSI Triger Zinciri Uzaması", "desc": "İlk nesil TSI motorlarda (özellikle 140/170 HP) triger zincirinin erken uzaması, ilk çalıştırmada zincir şakırtısı ve motor hasarı riski.", "severity": "high", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "DSG Şanzıman Mekatronik ve Kavrama Arızası", "desc": "Özellikle 7 ileri kuru DSG (DQ200) şanzımanda titreme, mekatronik kart yanması ve vites geçiş kararsızlıkları.", "severity": "high", "relatedEngine": "1.4 TSI", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "Tavan Döşemesi Sarkması", "desc": "Zamanla sıcaklık ve nemin etkisiyle tavan kumaşının süngerden ayrılıp komple sarkması. VW grubunun bu yıllardaki kronik sorunlarındandır.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Soyulan Plastikler (Soft Touch)", "desc": "Kapı tutamaçları, cam açma düğmeleri ve far anahtarı çevresindeki kauçuksu kaplamanın (soft touch) kolayca soyulması ve yapışkan hale gelmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "EGR Valfi ve Turbo Sorunları (TDI)", "desc": "1.9 TDI ve 2.0 TDI motorlarda EGR valfinin kurum bağlayıp tıkanması, turbo kanatçıklarında kurum birikimi ve limp mode (koruma modu) geçişi.", "severity": "medium", "relatedEngine": "1.9 TDI / 2.0 TDI", "relatedTransmission": "Tümü" },
            { "title": "Klima Klape Motorları Arızası", "desc": "Klima yönlendirme kapaklarını kontrol eden küçük motorların bozulması sonucu kontak açıldığında veya klima devreye girdiğinde tık-tık-tık şeklinde sürekli ses gelmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Golf (Mk6)",
        "years": "2008 - 2012",
        "imageUrl": "images/vw_golf_mk6.png",
        "engines": ["1.6 MPI", "1.4 TSI", "1.6 TDI", "2.0 TDI"],
        "transmissions": ["Manuel", "6 İleri DSG (Islak)", "7 İleri DSG (Kuru)"],
        "engineTransMap": {
            "1.6 MPI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.4 TSI": ["Manuel", "7 İleri DSG (Kuru)"],
            "1.6 TDI": ["Manuel", "7 İleri DSG (Kuru)"],
            "2.0 TDI": ["Manuel", "6 İleri DSG (Islak)"]
        },
        "problems": [
            { "title": "1.6 TDI Enjektör Şakırdaması", "desc": "Erken üretim 1.6 TDI motorlarda ilk çalıştırmada ve hızlanmalarda çok belirgin enjektör şakırtısı, kurum bağlama ve enjektör işemesi.", "severity": "high", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" },
            { "title": "DSG 7 İleri Titreme ve Mekatronik Arızası", "desc": "DQ200 kodlu 7 ileri kuru kavramalı DSG'lerde düşük hızlarda sarsıntı, kavramanın erken bitmesi ve mekatronik basınç tüpü patlaması.", "severity": "high", "relatedEngine": "1.6 MPI / 1.4 TSI / 1.6 TDI", "relatedTransmission": "7 İleri DSG (Kuru)" },
            { "title": "Su Pompası / Devridaim Sızıntısı", "desc": "TSI motorlarda, özellikle 1.4 TSI'da devridaim pompasının zamanla deforme olup sessizce antifriz eksiltmesine neden olması.", "severity": "medium", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "1.4 TSI Triger Zinciri Uzaması", "desc": "Erken dönem Mk6 1.4 TSI motorlarda triger zincirinin uzayarak soğuk çalıştırmalarda metalik sürtünme sesine neden olması ve sente atlama riski.", "severity": "high", "relatedEngine": "1.4 TSI", "relatedTransmission": "Tümü" },
            { "title": "EGR Soğutucusu Sızıntısı (TDI)", "desc": "1.6 TDI motorlarda EGR soğutucusunun arızalanması veya delinerek antifrizin egzoz gazına karışması tarzı su eksiltme sorunu.", "severity": "medium", "relatedEngine": "1.6 TDI", "relatedTransmission": "Tümü" },
            { "title": "Kapı Kilit Mekanizması Arızası", "desc": "Özellikle arka kapı kilidinin dışarıdan veya içeriden açılmamasına yol açan elektronik kilit modülü (mikro şalter) arızası.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mitsubishi",
        "model": "Lancer",
        "years": "2007 - 2017",
        "imageUrl": "images/mitsubishi_lancer.png",
        "engines": ["1.5 (Benzin)", "1.6 (Benzin)", "1.8 (Benzin)"],
        "transmissions": ["Manuel", "4 İleri Otomatik", "INVECS-III CVT"],
        "engineTransMap": {
            "1.5 (Benzin)": ["Manuel", "4 İleri Otomatik"],
            "1.6 (Benzin)": ["Manuel", "4 İleri Otomatik"],
            "1.8 (Benzin)": ["Manuel", "INVECS-III CVT"]
        },
        "problems": [
            { "title": "CVT Şanzıman Isınması ve Uğultu", "desc": "Özellikle 1.8 motorlardaki CVT şanzımanın uzun sürekli yüksek hızlarda veya yokuş tırmanışlarında aşırı ısınıp koruma moduna geçmesi ve belirgin uğultu yapması.", "severity": "high", "relatedEngine": "1.8 (Benzin)", "relatedTransmission": "INVECS-III CVT" },
            { "title": "Zayıf Ses Yalıtımı", "desc": "Japon arabalarının genel karakteristiği olmasına rağmen Lancer'da özellikle otoyol hızlarında kabin içine aşırı yol, lastik ve rüzgar sesi alması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Trim ve Plastik Sesleri", "desc": "Göğüs, kapı kaplamaları ve orta konsolda kullanılan sert plastiklerin bozuk yollarda fazlasıyla tıkırtı ve gıcırtı yapması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İnce Boya Tabakası", "desc": "Boya kalitesinin düşük ve katmanının ince olması sebebiyle, araç kaputunda ve tampon köşelerinde taş vuruklarının, çiziklerin çok kolay oluşması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Rölanti Dalgalanması ve Gaz Kelebeği", "desc": "Özellikle 1.5 motorlarda gaz kelebeği kirlenmesine bağlı rölanti devrinin düşüp dalgalanması, stop etme eğilimi göstermesi.", "severity": "medium", "relatedEngine": "1.5 (Benzin)", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mitsubishi",
        "model": "Colt",
        "years": "2004 - 2013",
        "imageUrl": "images/mitsubishi_colt.png",
        "engines": ["1.3 (Benzin)", "1.5 (Benzin)"],
        "transmissions": ["Manuel", "AMT (Yarı Otomatik)"],
        "engineTransMap": {
            "1.3 (Benzin)": ["Manuel", "AMT (Yarı Otomatik)"],
            "1.5 (Benzin)": ["Manuel", "AMT (Yarı Otomatik)"]
        },
        "problems": [
            { "title": "AMT Şanzıman Vites Geçiş Kararsızlığı", "desc": "Robotize (AMT) yarı otomatik şanzımanda, özellikle yokuşlarda ve dur-kalk trafikte çok sarsıntılı vites geçişleri, kararsızlık ve baskı balata ömrünün kısa olması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "AMT (Yarı Otomatik)" },
            { "title": "Sert Süspansiyon", "desc": "Aracın süspansiyon ayarlarının yapısı gereği bozuk yollarda içerideki yolcuları fazlasıyla sarsması ve darbe emişinin zayıf olması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Trim Sesi ve Yakıt Göstergesi Sorunu", "desc": "Kalitesiz sert panellerden gelen tıkırtılar ve kronik olarak şamandıra sensörü hatası kaynaklı yakıt seviyesinin yanlış/eksik gösterilmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mercedes-Benz",
        "model": "C Serisi (W204)",
        "years": "2007 - 2014",
        "imageUrl": "images/mercedes_c_w204.png",
        "engines": ["1.6 Kompressor (C180)", "1.6 Turbo (C180)", "2.1 CDI (C220 CDI)"],
        "transmissions": ["5G-Tronic Otomatik", "7G-Tronic Plus Otomatik"],
        "engineTransMap": {
            "1.6 Kompressor (C180)": ["5G-Tronic Otomatik"],
            "1.6 Turbo (C180)": ["7G-Tronic Plus Otomatik"],
            "2.1 CDI (C220 CDI)": ["5G-Tronic Otomatik", "7G-Tronic Plus Otomatik"]
        },
        "problems": [
            { "title": "M271 Egzantrik Dişli Aşınması (Zincir Uzaması)", "desc": "M271 kodlu 1.6 Kompressor ve erken Turbo motorlarda egzantrik dişlilerinin erken aşınması, zincir uzaması ve soğuk çalıştırmada 3-4 saniye süren şiddetli metalik şakırtı sesi. Çok masraflı bir kronik sorundur.", "severity": "high", "relatedEngine": "1.6 Kompressor (C180) / 1.6 Turbo (C180)", "relatedTransmission": "Tümü" },
            { "title": "ESL (Elektronik Direksiyon Kilidi) Arızası", "desc": "Kontağı taktığınızda direksiyon kilidinin açılmasını sağlayan motorun kömürlerinin bitmesi/yanması sonucu kilidin takılı kalması ve aracın kesinlikle çalışmaması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Arka Stop Lambası Şase/Erime Sorunu", "desc": "Arka stop lambalarının duy kısmındaki topraklama kablosunun aşırı ısınıp erimesi, sinyal ve frene basınca uyarı vermesi veya stop lambasının zayıf yanması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Takım (Salıncak Burcu) Aşınması", "desc": "Ağır bir araç olduğundan ötürü ön alt ve üst salıncak burçlarının Türkiye yollarında çabuk yırtılması ve bozuk yollarda takırtı yapması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Düğme Soyulmaları", "desc": "Özellikle makyajsız (2007-2011) kasalarda cam açma düğmeleri ve radyo tuşlarındaki yumuşak kaplamanın çizilip soyulması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Termostat Arızası", "desc": "Motor soğutma suyu termostatının açık kalıp aracın geç ısınmasına veya çok soğuk havalarda hararetin düşmesine sebep olması.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mercedes-Benz",
        "model": "E Serisi (W212)",
        "years": "2009 - 2016",
        "imageUrl": "images/mercedes_e_w212.png",
        "engines": ["1.6 Turbo (E180)", "2.0 Turbo (E250)", "2.1 CDI (E220/E250 CDI)"],
        "transmissions": ["5G-Tronic Otomatik", "7G-Tronic Plus Otomatik"],
        "engineTransMap": {
            "1.6 Turbo (E180)": ["7G-Tronic Plus Otomatik"],
            "2.0 Turbo (E250)": ["5G-Tronic Otomatik", "7G-Tronic Plus Otomatik"],
            "2.1 CDI (E220/E250 CDI)": ["5G-Tronic Otomatik", "7G-Tronic Plus Otomatik"]
        },
        "problems": [
            { "title": "OM651 Dizel Motor Zincir Sesi ve Uzaması", "desc": "2.1 litrelik OM651 kodlu dizel motorlarda triger zincirinin aracın arkasına yakın konumlandırılmış olması ve erken uzayarak soğuk çalıştırmada şakırdaması. Değişimi zor ve masraflıdır.", "severity": "high", "relatedEngine": "2.1 CDI (E220/E250 CDI)", "relatedTransmission": "Tümü" },
            { "title": "AirMatic (Hava Süspansiyonu) Arızası", "desc": "Özellikle arka aks veya tüm aksta bulunan havalı süspansiyon körüklerinin zamanla delinmesi sonucu aracın yere çökmesi ve kompresörün sürekli çalışarak yanması.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "OM651 Enjektör ve Su Pompası (Devridaim) Sızıntıları", "desc": "Dizel modellerde su pompasının (devridaim) sızdırması ve erken üretim yıllarında Delphi marka enjektörlerin sık sık arıza vermesi (Geri çağırma yapılmıştı).", "severity": "high", "relatedEngine": "2.1 CDI (E220/E250 CDI)", "relatedTransmission": "Tümü" },
            { "title": "İç Ahşap Süslemelerin Solması ve Çatlaması", "desc": "Konsolda ve kapı içlerinde kullanılan gerçek ahşap (özellikle açık ceviz rengi) trimlerin güneş gördükçe UV ışınlarından dolayı sararıp solması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "7G-Tronic Vuruntulu Geçiş (1-2 ve D-R arası)", "desc": "7 ileri otomatik şanzımanda, şanzıman yağı düzenli değişmediyse, düşük hızlarda (1. vites ile 2. vites arasında) ve geri vitese geçişlerde sert vuruntu hissi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "7G-Tronic Plus Otomatik" },
            { "title": "Kör Nokta Asistanı (Sensör) Arızası", "desc": "Arka tampondaki radar sensörlerinin su veya çamur alması sonucu arıza yapıp ekranda \"Kör Nokta Asistanı Çalışmıyor\" uyarısı vermesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Mercedes-Benz",
        "model": "A Serisi (W176)",
        "years": "2012 - 2018",
        "imageUrl": "images/mercedes_a_w176.png",
        "engines": ["1.6 Turbo (A180/A200)", "1.5 Dizel (A180d)"],
        "transmissions": ["6 İleri Manuel", "7G-DCT (Çift Kavrama)"],
        "engineTransMap": {
            "1.6 Turbo (A180/A200)": ["6 İleri Manuel", "7G-DCT (Çift Kavrama)"],
            "1.5 Dizel (A180d)": ["6 İleri Manuel", "7G-DCT (Çift Kavrama)"]
        },
        "problems": [
            { "title": "7G-DCT Şanzıman Vuruntusu ve Kararsızlık", "desc": "7 ileri çift kavrama (DCT) şanzımanda ilk ve ikinci viteslere geçişlerde sert vuruntular yaşanması. Kavrama ömrü VW grubuna göre daha uzun olsa da yazılımsal ve mekatronik sarsıntılar kroniktir.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7G-DCT (Çift Kavrama)" },
            { "title": "Panoramik Cam Tavan Tıkırtısı ve Rüzgar Sesi", "desc": "Özellikle bozuk yollarda geniş cam tavandan gelen ciddi boyutlarda esneme tıkırtıları ile 120 km/h üstü hızlarda fitillerin deformasyonu sonucu kabin içine ıslık şeklinde rüzgar sesi girmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "LED Gündüz Farı Sararması", "desc": "Farların içindeki kaş şeklindeki LED fiber optik şeritlerin aşırı ısınmadan dolayı eriyerek zamanla renginin beyazdan sarıya/sönüğe dönmesi.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Aşırı Sert Süspansiyon", "desc": "Özellikle AMG donanım (büyük jant ve spor helezon) olan versiyonlarda süspansiyonun çok sert olup en küçük çukurda bile yüksek darbe hissettirmesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ekran Donması (Audio 20)", "desc": "Multimedya sisteminin ara sıra kilitlenip reset atması veya geri görüş kamerasının siyah ekranda kalması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Trim ve Göğüs Sesleri", "desc": "Dashboard ve kapı pandizotlarında kullanılan plastik malzemelerin birleşim yerlerinden bozuk yollarda gelen sürekli gıcırtı ve tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Opel",
        "model": "Insignia (A)",
        "years": "2008 - 2017",
        "imageUrl": "images/opel_insignia_a.png",
        "engines": ["1.4 Turbo", "1.6 Turbo", "1.6 CDTI", "2.0 CDTI"],
        "transmissions": ["6 İleri Manuel", "6 İleri Tam Otomatik"],
        "engineTransMap": {
            "1.4 Turbo": ["6 İleri Manuel"],
            "1.6 Turbo": ["6 İleri Manuel", "6 İleri Tam Otomatik"],
            "1.6 CDTI": ["6 İleri Manuel", "6 İleri Tam Otomatik"],
            "2.0 CDTI": ["6 İleri Tam Otomatik"]
        },
        "problems": [
            { "title": "Piston Kırma (LSPI)", "desc": "1.4 ve 1.6 Turbo benzinli motorlarda düşük devirde ani yüklenmelerde erken ateşleme (LSPI) sonucu sekman/piston kırma sorunu.", "severity": "high", "relatedEngine": "1.4 Turbo / 1.6 Turbo", "relatedTransmission": "Tümü" },
            { "title": "1.6 CDTI Zincir Sesi", "desc": "1.6 dizel motorlarda egzantrik zincirinin uzaması ve özellikle ilk çalıştırmada veya düşük devirlerde belirgin şakırtı yapması.", "severity": "high", "relatedEngine": "1.6 CDTI", "relatedTransmission": "Tümü" },
            { "title": "2.0 CDTI Yağ Pompası Contası", "desc": "2.0 dizel motorlarda yağ pompası contasının sertleşmesi sonucu motorun yeterli yağlama yapamaması ve yatak sarması.", "severity": "high", "relatedEngine": "2.0 CDTI", "relatedTransmission": "Tümü" },
            { "title": "Direksiyon Kutusu Tıkırtısı", "desc": "Ağır bir araç olmasından dolayı bozuk yollarda direksiyon kutusundan gelen boşluk tıkırtıları.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Turbo Hortumu Çatlaması", "desc": "Dizel modellerde turbo basınç hortumunun zamanla çatlayıp yırtılması, güç kaybı ve ıslık sesine neden olması.", "severity": "medium", "relatedEngine": "1.6 CDTI / 2.0 CDTI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Opel",
        "model": "Insignia (B Grand Sport)",
        "years": "2017 - 2022",
        "imageUrl": "images/opel_insignia_b.png",
        "engines": ["1.5 Turbo", "1.6 CDTI", "1.5 Dizel"],
        "transmissions": ["Manuel", "6 İleri Otomatik", "8 İleri Otomatik"],
        "engineTransMap": {
            "1.5 Turbo": ["Manuel", "6 İleri Otomatik"],
            "1.6 CDTI": ["Manuel", "6 İleri Otomatik"],
            "1.5 Dizel": ["8 İleri Otomatik"]
        },
        "problems": [
            { "title": "1.5 T Yağ Eksiltme ve Piston", "desc": "1.5 Turbo benzinli motorlarda segman sorunu kaynaklı yağ eksiltme ve ilerleyen aşamalarda piston arızaları görülebilmektedir.", "severity": "high", "relatedEngine": "1.5 Turbo", "relatedTransmission": "Tümü" },
            { "title": "1.6 CDTI Zincir Sesi", "desc": "Önceki nesilden miras kalan 1.6 dizel motorlarda egzantrik zincirinin erken uzaması ve şakırtı yapması.", "severity": "high", "relatedEngine": "1.6 CDTI", "relatedTransmission": "Tümü" },
            { "title": "Multimedya Donması", "desc": "IntelliLink multimedya ekranının ara sıra kilitlenmesi, geri görüş kamerasının siyah ekranda takılması.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Ön Takım (Rot/Salıncak) Tıkırtıları", "desc": "Bozuk yollarda ön düzenden (amortisör takozları veya rot kollarından) gelen lok-lok sesleri.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Şanzıman Kararsızlığı", "desc": "Otomatik şanzımanlı versiyonlarda özellikle düşük hızlarda vites düşürürken sarsıntı veya kararsızlık hissi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "6 İleri Otomatik / 8 İleri Otomatik" }
        ]
    },
    {
        "brand": "Volkswagen",
        "model": "Golf (Mk8)",
        "years": "2020 - Günümüz",
        "imageUrl": "images/vw_golf_mk8.png",
        "engines": ["1.0 eTSI", "1.5 eTSI", "1.0 TSI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 eTSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 eTSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.0 TSI": ["Manuel"]
        },
        "problems": [
            { "title": "Yazılım / Multimedya (MIB3) Çökmesi", "desc": "Bilgi eğlence ekranının donması, kendi kendine kapanıp açılması veya sistemin aşırı yavaş tepki vermesi oldukça yaygın bir kroniktir.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Travel Assist (Hız Sabitleyici) Hatası", "desc": "Direksiyon simidindeki kapasitif sensörlerin bozulması sonucu ekranda sürekli uyarı vermesi. Genellikle komple direksiyon simidi değişimi gerektirir.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DSG Kavrama Titremesi", "desc": "DQ200 kuru tip DSG'de klasikleşen ilk kalkışlarda veya yavaşlarken titreme/sarsıntı sorunu.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "SOS (Acil Çağrı) Uyarısı", "desc": "Tavan modülündeki acil çağrı sisteminin hata verip ekranda kırmızı ışık yakması ve uyarı sesleri vermesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "İç Mekan Kalite Düşüşü (Trim Sesleri)", "desc": "Önceki nesil (Mk7) sonrası kapı panelleri ve konsolda kullanılan sert plastikler yüzünden bozuk yolda artan tıkırtılar.", "severity": "low", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 eTSI Yağ Eksiltme", "desc": "1.5 litrelik eTSI motorlarda düzenli periyotlarla yağ uyarısı yakacak kadar yağ eksiltilmesi.", "severity": "medium", "relatedEngine": "1.5 eTSI", "relatedTransmission": "Tümü" },
            { "title": "1.5 eTSI Alternatör Arızası", "desc": "Mild-hybrid (mHEV) sistemine bağlı 48V alternatörün arızalanması sonucu aracın yolda kalması ve yüksek maliyetli onarım gerektirmesi.", "severity": "high", "relatedEngine": "1.5 eTSI", "relatedTransmission": "Tümü" }
        ]
    },
    {
        "brand": "Skoda",
        "model": "Octavia (Mk4/A8)",
        "years": "2020 - Günümüz",
        "imageUrl": "images/skoda_octavia_mk4.png",
        "engines": ["1.0 eTSI", "1.5 eTSI", "1.0 TSI"],
        "transmissions": ["Manuel", "7 İleri DSG (DQ200) Kuru Tip"],
        "engineTransMap": {
            "1.0 eTSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.5 eTSI": ["7 İleri DSG (DQ200) Kuru Tip"],
            "1.0 TSI": ["Manuel"]
        },
        "problems": [
            { "title": "Multimedya Donması / Reset Atması", "desc": "Ekranın tamamen siyah kalması, donması veya sürüş esnasında kendini yeniden başlatması (Golf 8 ile benzer MIB3 yazılım sorunu).", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "Travel Assist Uyarısı", "desc": "Akıllı direksiyon simidindeki algılayıcıların bozulmasıyla 'Travel Assist şu anda kullanılamıyor' şeklinde sürekli çıkan sesli ve yazılı uyarı.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "DSG Şanzıman Sarsıntısı", "desc": "Kuru kavramalı 7 ileri DSG şanzımanda kalkışlarda, 1-2 vites geçişlerinde titreme.", "severity": "high", "relatedEngine": "Tümü", "relatedTransmission": "7 İleri DSG (DQ200) Kuru Tip" },
            { "title": "Alt Takım (Süspansiyon) Vuruntusu", "desc": "Özellikle arka süspansiyondan ve amortisörlerden kasis veya çukurlarda gelen yüksek sönümleme (lok) sesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "SOS Sistemi Arızası", "desc": "Acil durum arama modülünün bağlantı veya anten sorunu nedeniyle kırmızı uyarı vermesi.", "severity": "medium", "relatedEngine": "Tümü", "relatedTransmission": "Tümü" },
            { "title": "1.5 eTSI Yağ Eksiltme", "desc": "1.5 eTSI motorlarda ilk üretimden itibaren kronik olan yüksek yağ tüketimi.", "severity": "medium", "relatedEngine": "1.5 eTSI", "relatedTransmission": "Tümü" },
            { "title": "1.5 eTSI Alternatör (Marş Dinamosu) Arızası", "desc": "48V hafif hibrit sistemindeki alternatörün bozulmasıyla aracın elektrik sistemlerini kapatıp yolda kalması, marş basmaması.", "severity": "high", "relatedEngine": "1.5 eTSI", "relatedTransmission": "Tümü" }
        ]
    }
]
    ;