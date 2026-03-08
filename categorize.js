const fs = require('fs');
const path = 'c:\\Users\\İmran\\.gemini\\antigravity\\scratch\\car-problems-site\\script.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\{ title: "(.*?)", desc/g, (match, title) => {
    let t = title.toLowerCase();
    let category = "mekanik";
    
    if (t.includes("ekran") || t.includes("multimedya") || t.includes("kör nokta") || 
        t.includes("sos") || t.includes("travel") || t.includes("tesisat") || 
        t.includes("city") || t.includes("beyn") || t.includes("el freni") || 
        t.includes("kilit") || t.includes("ergocomfort") || t.includes("tahrik") || 
        t.includes("adblue") || t.includes("kamera") || t.includes("r-link") || t.includes("multimedia")) {
        category = "yazilim";
    } else if (t.includes("trim") || t.includes("göçük") || t.includes("döşeme") || 
               t.includes("boya") || t.includes("yalıtım") || t.includes("deri") || 
               t.includes("soyulma") || t.includes("rüzgar") || t.includes("fitil") || 
               t.includes("plastik") || t.includes("buğulanma") || t.includes("sarkması") || 
               t.includes("yırtılması") || t.includes("su alma") || t.includes("bagaj") || 
               t.includes("angel")) {
        category = "kozmetik";
    }
    
    return '{ title: "' + title + '", category: "' + category + '", desc';
});

fs.writeFileSync(path, content, 'utf8');
