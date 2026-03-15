// ==============================
// KronigiBUL - Script.js
// ==============================

// carsData data.js dosyasından geliyor

// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const modelFilter = document.getElementById('modelFilter');
const modal = document.getElementById('problemModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
const engineFilter = document.getElementById('engineFilter');
const transmissionFilter = document.getElementById('transmissionFilter');
const yearFilter = document.getElementById('yearFilter');
const sortFilter = document.getElementById('sortFilter');
const resultCount = document.getElementById('resultCount');
const themeToggle = document.getElementById('themeToggle');
const backToTopBtn = document.getElementById('backToTop');
const logoBtn = document.getElementById('logoBtn');
const randomBtn = document.getElementById('randomBtn');
const compareBar = document.getElementById('compareBar');
const compareCountEl = document.getElementById('compareCount');
const compareBtn = document.getElementById('compareBtn');
const compareClearBtn = document.getElementById('compareClearBtn');
const compareModal = document.getElementById('compareModal');
const compareBody = document.getElementById('compareBody');
const compareCloseBtn = document.querySelector('.compare-close-btn');

const WRENCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="wrench-icon"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>`;

// ==============================
// COMPARE LIST
// ==============================
let compareList = [];

// ==============================
// BRAND LOGOS (Simple SVG)
// ==============================
const BRAND_LOGOS = {
    // Volkswagen - VW interlocking letters in circle
    'Volkswagen': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="0.8"/><path d="M12.5 10 L20 28 L27.5 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M9.5 10 L16.5 22 M23.5 22 L30.5 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>`,

    // BMW - Quartered circle with BMW text
    'BMW': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="20" cy="20" r="14.5" fill="none" stroke="currentColor" stroke-width="0.8"/><line x1="20" y1="5.5" x2="20" y2="34.5" stroke="currentColor" stroke-width="0.8"/><line x1="5.5" y1="20" x2="34.5" y2="20" stroke="currentColor" stroke-width="0.8"/><text x="20" y="8.5" text-anchor="middle" font-size="4.5" font-weight="800" fill="currentColor" letter-spacing="0.5">BMW</text></svg>`,

    // Honda - Bold H badge
    'Honda': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M10 8 L10 32 L14 32 L14 22 L26 22 L26 32 L30 32 L30 8 L26 8 L26 18 L14 18 L14 8 Z" fill="currentColor"/></svg>`,

    // Renault - Diamond
    'Renault': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M20 3 L7 20 L20 37 L33 20 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 9 L12 20 L20 31 L28 20 Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,

    // Peugeot - Standing lion silhouette (simplified)
    'Peugeot': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M20 4 C20 4 15 8 15 14 C15 18 17 20 18 22 L14 32 L18 32 L20 26 L22 32 L26 32 L22 22 C23 20 25 18 25 14 C25 8 20 4 20 4 Z" fill="currentColor"/><line x1="12" y1="35" x2="28" y2="35" stroke="currentColor" stroke-width="1.5"/></svg>`,

    // Skoda - Winged arrow
    'Skoda': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 22 C14 14 20 11 26 14 L30 10 L18 16 L10 22 Z" fill="currentColor"/><circle cx="25" cy="15" r="1.5" fill="currentColor"/></svg>`,

    // Toyota - Triple ellipses
    'Toyota': `<svg class="brand-logo" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="11" fill="none" stroke="currentColor" stroke-width="1.8"/><ellipse cx="20" cy="20" rx="7" ry="17" fill="none" stroke="currentColor" stroke-width="1.8"/><ellipse cx="20" cy="17" rx="4" ry="7" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,

    // Fiat - Letters in rounded rectangle
    'Fiat': `<svg class="brand-logo" viewBox="0 0 40 40"><rect x="3" y="8" width="34" height="24" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="20" y="24.5" text-anchor="middle" font-size="10" font-weight="700" font-family="serif" fill="currentColor" letter-spacing="1.5">FIAT</text></svg>`,

    // Ford - Oval with script text
    'Ford': `<svg class="brand-logo" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="11" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="20" y="24" text-anchor="middle" font-size="11.5" font-style="italic" font-weight="600" font-family="serif" fill="currentColor">Ford</text></svg>`,

    // Opel - Lightning bolt in circle
    'Opel': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 20 L34 20" stroke="currentColor" stroke-width="2"/><path d="M8 17 Q20 8 32 17" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>`,

    // Hyundai - Slanted H in oval
    'Hyundai': `<svg class="brand-logo" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="18" ry="13" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 28 L16 12 M16 12 Q20 22 24 12 M24 12 L28 28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M14 20 Q20 26 26 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

    // Dacia - New modern linked D
    'Dacia': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M5 12 L14 12 L14 28 L5 28 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="miter"/><path d="M14 12 L26 12 C32 12 35 16 35 20 C35 24 32 28 26 28 L14 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,

    // Seat - S with horizontal line
    'Seat': `<svg class="brand-logo" viewBox="0 0 40 40"><text x="20" y="27" text-anchor="middle" font-size="10.5" font-weight="800" letter-spacing="2" fill="currentColor">SEAT</text><path d="M6 11 L20 11 L34 11" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M6 33 L34 33" fill="none" stroke="currentColor" stroke-width="1"/></svg>`,

    // Nissan - Bar through circle
    'Nissan': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="2"/><rect x="4" y="16" width="32" height="8" rx="1" fill="var(--card-bg-solid, #1e293b)" stroke="currentColor" stroke-width="1.5"/><text x="20" y="23" text-anchor="middle" font-size="6.5" font-weight="800" fill="currentColor" letter-spacing="0.8">NISSAN</text></svg>`,

    // Kia - Modern angular KIA
    'Kia': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M5 28 L5 12 L10 12 L10 18 L18 12 L24 12 L14 20 L24 28 L18 28 L10 22 L10 28 Z" fill="currentColor"/><rect x="26" y="12" width="4" height="16" fill="currentColor"/><path d="M32 12 L39 12 L36.5 20 L39 28 L32 28 L34.5 20 Z" fill="currentColor"/></svg>`,

    // Audi - Four interlocking rings
    'Audi': `<svg class="brand-logo" viewBox="0 0 44 40"><circle cx="8" cy="20" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="20" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="28" cy="20" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="36" cy="20" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,

    // Mercedes-Benz - Three-pointed star in circle
    'Mercedes-Benz': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="14.5" fill="none" stroke="currentColor" stroke-width="0.6"/><path d="M20 6 L20 20 L8.5 32 M20 20 L31.5 32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>`,

    // Citroën - Double chevron
    'Citroën': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M10 15 L20 5 L30 15" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M10 27 L20 17 L30 27" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/></svg>`,

    // Cupra - Tribal angular shape
    'Cupra': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M6 30 L20 6 L34 30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M13 30 L20 16 L27 30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,

    // Volvo - Iron symbol (circle with arrow)
    'Volvo': `<svg class="brand-logo" viewBox="0 0 40 40"><circle cx="20" cy="22" r="14" fill="none" stroke="currentColor" stroke-width="2"/><line x1="20" y1="8" x2="20" y2="2" stroke="currentColor" stroke-width="2.5"/><line x1="16" y1="5" x2="24" y2="5" stroke="currentColor" stroke-width="2.5"/><path d="M6 22 L34 22" stroke="currentColor" stroke-width="1.5"/></svg>`,

    // MG - Octagonal badge with MG
    'MG': `<svg class="brand-logo" viewBox="0 0 40 40"><polygon points="13,4 27,4 36,13 36,27 27,36 13,36 4,27 4,13" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="20" y="26" text-anchor="middle" font-size="13" font-weight="800" font-family="serif" fill="currentColor">MG</text></svg>`,

    // Mitsubishi - Three diamonds
    'Mitsubishi': `<svg class="brand-logo" viewBox="0 0 40 40"><path d="M20 4 L12 18 L20 18 Z" fill="currentColor"/><path d="M20 4 L28 18 L20 18 Z" fill="currentColor"/><path d="M20 18 L12 32 L20 32 Z" fill="currentColor"/><path d="M20 18 L28 32 L20 32 Z" fill="currentColor"/><path d="M4 18 L12 32 L12 18 Z" fill="currentColor"/><path d="M36 18 L28 32 L28 18 Z" fill="currentColor"/></svg>`,
};

// Brand gradient colors for card stripe
const BRAND_GRADIENTS = {
    'Volkswagen': 'linear-gradient(90deg, #00437a, #1a73e8)',
    'BMW': 'linear-gradient(90deg, #0066b1, #00c6ff)',
    'Honda': 'linear-gradient(90deg, #cc0000, #ff4444)',
    'Renault': 'linear-gradient(90deg, #ffcc00, #ffe066)',
    'Peugeot': 'linear-gradient(90deg, #1b3d6d, #4a90d9)',
    'Skoda': 'linear-gradient(90deg, #4ba82e, #7bc74a)',
    'Toyota': 'linear-gradient(90deg, #eb0a1e, #ff6b6b)',
    'Fiat': 'linear-gradient(90deg, #96002e, #d4004a)',
    'Ford': 'linear-gradient(90deg, #003399, #4a8cff)',
    'Opel': 'linear-gradient(90deg, #f7e600, #ffd700)',
    'Hyundai': 'linear-gradient(90deg, #002c5f, #4a90d9)',
    'Dacia': 'linear-gradient(90deg, #646b52, #8fae78)',
    'Seat': 'linear-gradient(90deg, #e3000f, #ff4444)',
    'Nissan': 'linear-gradient(90deg, #c3002f, #ff4466)',
    'Kia': 'linear-gradient(90deg, #05141f, #bb162b)',
    'Audi': 'linear-gradient(90deg, #bb0a30, #ff1744)',
    'Mercedes-Benz': 'linear-gradient(90deg, #00adef, #66d4ff)',
    'Citroën': 'linear-gradient(90deg, #ac1826, #d4364c)',
    'Cupra': 'linear-gradient(90deg, #003340, #007a8a)',
    'Volvo': 'linear-gradient(90deg, #003057, #1a73b5)',
    'MG': 'linear-gradient(90deg, #d4002a, #ff3355)',
    'Mitsubishi': 'linear-gradient(90deg, #cc0000, #ff4444)',
};

function getBrandLogo(brand) {
    return BRAND_LOGOS[brand] || '';
}

// ==============================
// SLUG HELPER (SEO URL)
// ==============================
function slugify(brand, model) {
    return (brand + '-' + model)
        .toLowerCase()
        .replace(/\s*\(|\)/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// ==============================
// DARK / LIGHT THEME
// ==============================
function initTheme() {
    const saved = localStorage.getItem('kronigi-theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
    updateThemeIcon();
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('kronigi-theme', next);
    updateThemeIcon();
}

function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    icon.style.transform = 'rotate(360deg)';
    setTimeout(() => { icon.style.transform = ''; }, 400);
}

themeToggle.addEventListener('click', toggleTheme);
initTheme();

// ==============================
// BACK TO TOP
// ==============================
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==============================
// LOGO RESET
// ==============================
function resetAllFilters() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    searchInput.value = '';
    brandFilter.value = '';
    modelFilter.value = '';
    modelFilter.disabled = true;
    modelFilter.innerHTML = '<option value="">Model Seçin (Kasa Kodu)</option>';
    engineFilter.value = '';
    engineFilter.disabled = true;
    engineFilter.innerHTML = '<option value="">Motor</option>';
    transmissionFilter.value = '';
    transmissionFilter.disabled = true;
    transmissionFilter.innerHTML = '<option value="">Şanzıman / Tümü</option>';
    yearFilter.value = '';
    sortFilter.value = 'default';
    // Clear compare
    compareList = [];
    updateCompareBar();
    applyFilters();
    window.location.hash = '';
    // Collapse filter panel
    collapseFilterPanel();
    updateFilterBadge();
}

logoBtn.addEventListener('click', resetAllFilters);
logoBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); resetAllFilters(); }
});

// ==============================
// SEARCH HIGHLIGHTING
// ==============================
function highlightText(text, term) {
    if (!term || term.length < 2) return text;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// ==============================
// SEVERITY RENDERING
// ==============================
function renderSeverity(severity) {
    const config = {
        high: { filled: 5, label: 'Kritik', colorClass: 'high' },
        medium: { filled: 3, label: 'Orta', colorClass: 'medium' },
        low: { filled: 1, label: 'Hafif', colorClass: 'low' }
    };

    const { filled, label, colorClass } = config[severity] || config.low;

    let wrenches = '';
    for (let i = 0; i < filled; i++) {
        wrenches += `<span class="wrench-filled-${colorClass}">${WRENCH_SVG}</span>`;
    }

    return `<span class="severity-rating"><span class="wrench-container">${wrenches}</span><span class="severity-label severity-label-${colorClass}">${label}</span></span>`;
}

// ==============================
// RENDER CARS
// ==============================
function renderCars(cars) {
    const term = searchInput.value.toLowerCase();
    carsGrid.innerHTML = '';

    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div class="empty-state">
                <h3>Aramanıza uygun araç bulunamadı</h3>
                <p>Lütfen farklı filtreler veya arama kelimeleri deneyin.</p>
            </div>
        `;
        return;
    }

    cars.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${car.brand} ${car.model} - ${car.problems.length} bilinen sorun`);
        // Görüntüleme bug'ını önlemek için delay'i sınırla (max 0.5s)
        card.style.animationDelay = `${Math.min(index, 10) * 0.05}s`;
        card.style.position = 'relative';

        // Brand gradient stripe
        if (BRAND_GRADIENTS[car.brand]) {
            card.style.setProperty('--brand-gradient', BRAND_GRADIENTS[car.brand]);
        }

        // Kritik sorun sayısını hesapla
        const criticalCount = car.problems.filter(p => p.severity === 'high').length;
        const criticalBadge = criticalCount > 0
            ? `<span class="critical-badge" data-action="critical-only" style="cursor:pointer; z-index:2; position:relative;">🔴 ${criticalCount} Kritik</span>`
            : '';

        const modelText = highlightText(car.model, term);
        const brandText = highlightText(car.brand, term);
        const logo = getBrandLogo(car.brand);

        const isCompared = compareList.some(c => c.brand === car.brand && c.model === car.model);

        card.innerHTML = `
            <div class="compare-checkbox-wrapper">
                <div class="compare-checkbox${isCompared ? ' checked' : ''}" data-brand="${car.brand}" data-model="${car.model}" title="Karşılaştırmaya ekle">${isCompared ? '✓' : ''}</div>
            </div>
            <div class="car-image" data-bg="${car.imageUrl}" style="background-color: var(--border-color);"></div>
            <div class="car-info">
                <div class="car-brand">${logo}${brandText}</div>
                <h3 class="car-model">${modelText}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.3rem;">Model Yılları: ${car.years}</p>
                <div style="display:flex; gap: 0.5rem; flex-wrap:wrap; margin-top:0.8rem;">
                    <span style="font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 0.2rem 0.5rem; border-radius: 4px; color: var(--text-muted);">
                        ⚙️ ${car.engines ? car.engines.length + ' Motor Seçeneği' : 'Belirtilmemiş'}
                    </span>
                    <span style="font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 0.2rem 0.5rem; border-radius: 4px; color: var(--text-muted);">
                        🕹️ ${car.transmissions ? car.transmissions.length + ' Şanzıman Tipi' : 'Belirtilmemiş'}
                    </span>
                </div>
            </div>
            <div class="car-footer">
                <span class="problem-count">${car.problems.length} Bilinen Sorun</span>
                ${criticalBadge}
            </div>
        `;

        // 3D Tilt / Parallax Effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            card.classList.add('tilt-active');
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('tilt-active');
            card.style.transform = '';
        });

        // Compare checkbox click
        const checkbox = card.querySelector('.compare-checkbox');
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCompare(car, checkbox);
        });

        const critBadgeEl = card.querySelector('.critical-badge');
        if (critBadgeEl) {
            critBadgeEl.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(car, 'high');
            });
        }

        card.addEventListener('click', (e) => {
            if (e.target.closest('.compare-checkbox-wrapper')) return;
            openModal(car);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(car); }
        });
        carsGrid.appendChild(card);
    });

    // Lazy load görseller
    lazyLoadImages();
}

// ==============================
// MODAL
// ==============================
function openModal(car, initialSeverity = '') {
    const term = searchInput.value.toLowerCase();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // SEO Hash URL
    const newHash = '#' + slugify(car.brand, car.model);
    if (window.location.hash !== newHash) {
        history.replaceState(null, null, window.location.pathname + window.location.search + newHash);
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
                <h2>${getBrandLogo(car.brand)} ${car.brand} ${car.model}</h2>
                <button class="share-btn" id="shareBtn">📎 Paylaş</button>
            </div>
            <p>Üretim Yılları: ${car.years}</p>
        </div>
        <div class="modal-car-image" style="background-image: url('${car.imageUrl}')"></div>
        
        <div class="modal-filters">
            <div class="select-wrapper">
                <select id="modalEngineFilter" aria-label="Modal Motor Filtresi">
                    <option value="">Tüm Motorlar</option>
                    ${car.engines ? car.engines.map(eng => `<option value="${eng}">${eng}</option>`).join('') : ''}
                </select>
            </div>
            <div class="select-wrapper">
                <select id="modalTransFilter" aria-label="Modal Şanzıman Filtresi">
                    <option value="">Tüm Şanzımanlar</option>
                     ${car.transmissions ? car.transmissions.map(trans => `<option value="${trans}">${trans}</option>`).join('') : ''}
                </select>
            </div>
            <div class="select-wrapper">
                <select id="modalSeverityFilter" aria-label="Modal Ciddiyet Filtresi">
                    <option value="">Tüm Ciddiyet</option>
                    <option value="high">🔴 Sadece Kritik</option>
                    <option value="medium">🟡 Sadece Orta</option>
                    <option value="low">🟢 Sadece Hafif</option>
                </select>
            </div>
        </div>

        <div class="problems-list" id="modalProblemsList">
        </div>
    `;

    const modalEngineFilter = document.getElementById('modalEngineFilter');
    const modalTransFilter = document.getElementById('modalTransFilter');
    const modalSeverityFilter = document.getElementById('modalSeverityFilter');
    const modalProblemsList = document.getElementById('modalProblemsList');

    // Motor-Şanzıman uyumluluğu
    function updateTransmissionOptions() {
        const selectedEngine = modalEngineFilter.value;
        let availableTransmissions = car.transmissions || [];
        if (selectedEngine && car.engineTransMap && car.engineTransMap[selectedEngine]) {
            availableTransmissions = car.engineTransMap[selectedEngine];
        }

        if (availableTransmissions.length === 1) {
            modalTransFilter.innerHTML = `<option value="${availableTransmissions[0]}">${availableTransmissions[0]}</option>`;
            modalTransFilter.value = availableTransmissions[0];
            modalTransFilter.disabled = true;
            modalTransFilter.style.opacity = '0.6';
        } else {
            modalTransFilter.innerHTML = '<option value="">Tüm Şanzımanlar</option>';
            availableTransmissions.forEach(trans => {
                const option = document.createElement('option');
                option.value = trans;
                option.textContent = trans;
                modalTransFilter.appendChild(option);
            });
            modalTransFilter.disabled = false;
            modalTransFilter.style.opacity = '1';
            modalTransFilter.value = '';
        }
    }

    // Sayfa filtrelerinden ön değer al
    if (engineFilter && engineFilter.value) {
        const hasEngineOpt = Array.from(modalEngineFilter.options).some(opt => opt.value === engineFilter.value);
        if (hasEngineOpt) {
            modalEngineFilter.value = engineFilter.value;
            updateTransmissionOptions();
        }
    }

    if (transmissionFilter && transmissionFilter.value) {
        const hasTransOpt = Array.from(modalTransFilter.options).some(opt => opt.value === transmissionFilter.value);
        if (hasTransOpt) modalTransFilter.value = transmissionFilter.value;
    }

    let severityFilterManuallyChanged = false;

    if (initialSeverity) {
        modalSeverityFilter.value = initialSeverity;
        // Force the element to recognize the value visually
        Array.from(modalSeverityFilter.options).forEach(opt => {
            if (opt.value === initialSeverity) opt.selected = true;
        });
    }

    modalSeverityFilter.addEventListener('change', () => {
        severityFilterManuallyChanged = true;
    });

    function getCategory(title, desc) {
        const text = (title + " " + desc).toLowerCase();
        if (text.match(/su pompası|devridaim|yağ eksiltme|yağ yakma|hararet|piston|şanzıman|kavrama|mekatronik/)) return 'mekanik';
        if (text.match(/ekran|multimedya|multimedia|r-link|sos|kör nokta|kilit|akü|elektrik|elektronik|city|kamera|beyin|yazılım|sensör|tuş takımı|tahrik|iletişim|bluetooth/)) return 'elektronik';
        if (text.match(/trim|göçük|döşeme|yalıtım|boya|deri|rüzgar|fitil|su alma|plastik|zırıltı|çıtırtı|soyulma|buğu|sarkma|kozmetik/)) return 'kozmetik';
        return 'mekanik';
    }

    function renderModalProblems() {
        const selectedEng = modalEngineFilter.value;
        const selectedTrans = modalTransFilter.value;
        let selectedSeverity = modalSeverityFilter.value;

        // Only fallback to initialSeverity if the user hasn't explicitly changed it
        // AND the DOM somehow lost the initial value right after opening
        if (!severityFilterManuallyChanged && initialSeverity && selectedSeverity === "") {
            selectedSeverity = initialSeverity;
            modalSeverityFilter.value = initialSeverity;
        }

        const filteredProblems = car.problems.filter(prob => {
            const matchEng = selectedEng === "" || prob.relatedEngine === "Tümü" || prob.relatedEngine.includes(selectedEng);
            const matchTrans = selectedTrans === "" || prob.relatedTransmission === "Tümü" || prob.relatedTransmission.includes(selectedTrans);
            const matchSeverity = selectedSeverity === "" || prob.severity === selectedSeverity;
            return matchEng && matchTrans && matchSeverity;
        });

        if (filteredProblems.length === 0) {
            modalProblemsList.innerHTML = `
                <div class="modal-empty">
                    🎉 Harika! Seçtiğiniz filtre kombinasyonu için bilinen kronik bir sorun kaydımız bulunmamaktadır.
                </div>
            `;
            return;
        }

        const mekanik = [];
        const elektronik = [];
        const kozmetik = [];

        filteredProblems.forEach(prob => {
            const cat = getCategory(prob.title, prob.desc);
            if (cat === 'elektronik') elektronik.push(prob);
            else if (cat === 'kozmetik') kozmetik.push(prob);
            else mekanik.push(prob);
        });

        const renderGroup = (title, items, icon, categoryClass) => {
            if (items.length === 0) return '';
            const html = items.map(prob => `
                <div class="problem-item severity-border-${prob.severity}">
                    <h3>${highlightText(prob.title, term)} ${renderSeverity(prob.severity)}</h3>
                    <div style="margin-bottom: 0.5rem; font-size: 0.8rem; display: flex; gap: 1rem; color: #64748b;">
                        ${prob.relatedEngine ? `<span><b>Motor:</b> ${prob.relatedEngine}</span>` : ''}
                        ${prob.relatedTransmission ? `<span><b>Şanzıman:</b> ${prob.relatedTransmission}</span>` : ''}
                    </div>
                    <p>${highlightText(prob.desc, term)}</p>
                </div>
            `).join('');

            return `
                <h3 class="category-header category-${categoryClass}">${icon} ${title}</h3>
                ${html}
            `;
        };

        modalProblemsList.innerHTML =
            renderGroup('Mekanik ve Motor Sorunları', mekanik, '⚙️', 'mekanik') +
            renderGroup('Elektronik ve Yazılım Sorunları', elektronik, '⚡', 'elektronik') +
            renderGroup('Kozmetik ve İç Trim Sorunları', kozmetik, '✨', 'kozmetik');
    }

    renderModalProblems();

    modalEngineFilter.addEventListener('change', () => {
        updateTransmissionOptions();
        renderModalProblems();
    });
    modalTransFilter.addEventListener('change', renderModalProblems);
    modalSeverityFilter.addEventListener('change', renderModalProblems);

    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = window.location.href;
            const title = `${car.brand} ${car.model} - Kronik Sorunları`;
            if (navigator.share) {
                navigator.share({ title, url }).catch(() => { });
            } else {
                navigator.clipboard.writeText(url).then(() => {
                    const tip = document.createElement('span');
                    tip.className = 'share-tooltip';
                    tip.textContent = '✓ Link kopyalandı!';
                    shareBtn.style.position = 'relative';
                    shareBtn.appendChild(tip);
                    setTimeout(() => tip.remove(), 1500);
                });
            }
        });
    }
}

// ==============================
// MODAL CLOSE
// ==============================
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Clear hash when closing modal
    if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
    }
};

closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeModal(); }
});
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

// ==============================
// FILTERS
// ==============================
function initFilters() {
    const brandModels = {};
    carsData.forEach(car => {
        if (!brandModels[car.brand]) brandModels[car.brand] = [];
        if (!brandModels[car.brand].includes(car.model)) brandModels[car.brand].push(car.model);
    });

    Object.keys(brandModels).sort().forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    brandFilter.addEventListener('change', (e) => {
        const selectedBrand = e.target.value;
        modelFilter.innerHTML = '<option value="">Tüm Modeller</option>';
        engineFilter.innerHTML = '<option value="">Önce Model Seçin</option>';
        transmissionFilter.innerHTML = '<option value="">Önce Model Seçin</option>';
        engineFilter.disabled = true;
        transmissionFilter.disabled = true;

        if (selectedBrand) {
            modelFilter.disabled = false;
            brandModels[selectedBrand].sort().forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelFilter.appendChild(option);
            });
        } else {
            modelFilter.innerHTML = '<option value="">Model Seçin (Kasa Kodu)</option>';
            modelFilter.disabled = true;
        }
        applyFilters();
        updateYearFilter();
    });

    modelFilter.addEventListener('change', (e) => {
        const selectedModel = e.target.value;
        const selectedBrand = brandFilter.value;
        engineFilter.innerHTML = '<option value="">Tüm Motorlar</option>';
        transmissionFilter.innerHTML = '<option value="">Tüm Şanzımanlar</option>';

        if (selectedModel) {
            const currentCar = carsData.find(c => c.brand === selectedBrand && c.model === selectedModel);
            if (currentCar) {
                engineFilter.disabled = false;
                transmissionFilter.disabled = false;
                sortFilter.value = 'default';
                sortFilter.disabled = true;
                sortFilter.style.opacity = '0.5';
                if (currentCar.engines) {
                    currentCar.engines.forEach(engine => {
                        const opt = document.createElement('option');
                        opt.value = engine;
                        opt.textContent = engine;
                        engineFilter.appendChild(opt);
                    });
                }
                if (currentCar.transmissions) {
                    currentCar.transmissions.forEach(trans => {
                        const opt = document.createElement('option');
                        opt.value = trans;
                        opt.textContent = trans;
                        transmissionFilter.appendChild(opt);
                    });
                }
            }
        } else {
            engineFilter.innerHTML = '<option value="">Önce Model Seçin</option>';
            transmissionFilter.innerHTML = '<option value="">Önce Model Seçin</option>';
            engineFilter.disabled = true;
            transmissionFilter.disabled = true;
            sortFilter.disabled = false;
            sortFilter.style.opacity = '1';
        }
        applyFilters();
        updateYearFilter();
    });

    engineFilter.addEventListener('change', () => {
        const selectedEngine = engineFilter.value;
        const selectedBrand = brandFilter.value;
        const selectedModel = modelFilter.value;
        const currentCar = carsData.find(c => c.brand === selectedBrand && c.model === selectedModel);

        if (currentCar) {
            let availableTransmissions = currentCar.transmissions || [];
            if (selectedEngine && currentCar.engineTransMap && currentCar.engineTransMap[selectedEngine]) {
                availableTransmissions = currentCar.engineTransMap[selectedEngine];
            }

            if (availableTransmissions.length === 1) {
                transmissionFilter.innerHTML = `<option value="${availableTransmissions[0]}">${availableTransmissions[0]}</option>`;
                transmissionFilter.value = availableTransmissions[0];
                transmissionFilter.disabled = true;
                transmissionFilter.style.opacity = '0.6';
            } else {
                transmissionFilter.innerHTML = '<option value="">Tüm Şanzımanlar</option>';
                availableTransmissions.forEach(trans => {
                    const opt = document.createElement('option');
                    opt.value = trans;
                    opt.textContent = trans;
                    transmissionFilter.appendChild(opt);
                });
                transmissionFilter.disabled = false;
                transmissionFilter.style.opacity = '1';
                transmissionFilter.value = '';
            }
        }
        applyFilters();
    });

    transmissionFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
}

// ==============================
// APPLY FILTERS + SORT + COUNT
// ==============================
function applyFilters() {
    const term = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedModel = modelFilter.value;
    const selectedEngine = engineFilter.value;
    const selectedTrans = transmissionFilter.value;
    const selectedYear = yearFilter.value;
    const sortBy = sortFilter.value;

    let filtered = carsData.filter(car => {
        const matchBrand = selectedBrand === "" || car.brand === selectedBrand;
        const matchModel = selectedModel === "" || car.model === selectedModel;
        const matchEngine = selectedEngine === "" || (car.engines && car.engines.includes(selectedEngine));
        const matchTrans = selectedTrans === "" || (car.transmissions && car.transmissions.includes(selectedTrans));
        const matchText = term === "" ||
            car.brand.toLowerCase().includes(term) ||
            car.model.toLowerCase().includes(term) ||
            car.problems.some(p => p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));

        // Year filter
        let matchYear = true;
        if (selectedYear) {
            const yearNum = parseInt(selectedYear);
            const yearParts = car.years.replace(/Günümüz/i, new Date().getFullYear().toString()).split(/\s*-\s*/);
            const startYear = parseInt(yearParts[0]);
            const endYear = parseInt(yearParts[1]) || new Date().getFullYear();
            matchYear = yearNum >= startYear && yearNum <= endYear;
        }

        return matchBrand && matchModel && matchText && matchEngine && matchTrans && matchYear;
    });

    // Sıralama
    if (sortBy === 'problems-desc') {
        filtered.sort((a, b) => b.problems.length - a.problems.length);
    } else if (sortBy === 'problems-asc') {
        filtered.sort((a, b) => a.problems.length - b.problems.length);
    } else if (sortBy === 'critical-desc') {
        filtered.sort((a, b) => {
            const aCrit = a.problems.filter(p => p.severity === 'high').length;
            const bCrit = b.problems.filter(p => p.severity === 'high').length;
            return bCrit - aCrit;
        });
    }

    renderCars(filtered);

    // Araç sayacını güncelle
    const total = carsData.length;
    if (filtered.length === total) {
        resultCount.innerHTML = `Toplam <span class="highlight-number">${total}</span> araç listeleniyor`;
    } else {
        resultCount.innerHTML = `<span class="highlight-number">${filtered.length}</span> / ${total} araç gösteriliyor`;
    }

    updateURL();
    updateFilterBadge();
}

// ==============================
// URL Params
// ==============================
function updateURL() {
    const params = new URLSearchParams();
    if (brandFilter.value) params.set('marka', brandFilter.value);
    if (modelFilter.value) params.set('model', modelFilter.value);
    if (engineFilter.value) params.set('motor', engineFilter.value);
    if (transmissionFilter.value) params.set('sanziman', transmissionFilter.value);
    if (yearFilter.value) params.set('yil', yearFilter.value);
    if (searchInput.value) params.set('ara', searchInput.value);
    if (sortFilter.value !== 'default') params.set('sirala', sortFilter.value);

    const newURL = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
    window.history.replaceState({}, '', newURL + window.location.hash);
}

function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('marka');
    const model = params.get('model');
    const engine = params.get('motor');
    const trans = params.get('sanziman');
    const search = params.get('ara');
    const sort = params.get('sirala');
    const year = params.get('yil');

    if (sort) sortFilter.value = sort;
    if (year) yearFilter.value = year;

    if (brand) {
        brandFilter.value = brand;
        brandFilter.dispatchEvent(new Event('change'));
        if (model) {
            setTimeout(() => {
                modelFilter.value = model;
                modelFilter.dispatchEvent(new Event('change'));
                if (engine) {
                    setTimeout(() => { engineFilter.value = engine; applyFilters(); }, 50);
                }
                if (trans) {
                    setTimeout(() => { transmissionFilter.value = trans; applyFilters(); }, 50);
                }
            }, 50);
        }
    }

    if (search) {
        searchInput.value = search;
        applyFilters();
    }

    // Hash URL - aç modal otomatik
    loadFromHash();

    // Expand filter panel if any filter is active from URL
    updateFilterBadge();
    if (getActiveFilterCount() > 0) {
        expandFilterPanel();
    }
}

// ==============================
// LAZY LOADING
// ==============================
function lazyLoadImages() {
    const imageEls = document.querySelectorAll('.car-image[data-bg]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.backgroundImage = `url('${el.dataset.bg}')`;
                    el.removeAttribute('data-bg');
                    observer.unobserve(el);
                }
            });
        }, { rootMargin: '200px' });

        imageEls.forEach(el => observer.observe(el));
    } else {
        imageEls.forEach(el => {
            el.style.backgroundImage = `url('${el.dataset.bg}')`;
            el.removeAttribute('data-bg');
        });
    }
}

// ==============================
// SEARCH EVENT
// ==============================
searchInput.addEventListener('input', applyFilters);

// ==============================
// HASH ROUTING
// ==============================
function loadFromHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const car = carsData.find(c => slugify(c.brand, c.model) === hash);
    if (car) openModal(car);
}

window.addEventListener('hashchange', loadFromHash);

// ==============================
// RANDOM CAR
// ==============================
randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * carsData.length);
    openModal(carsData[randomIndex]);
});

// ==============================
// COMPARE FEATURE
// ==============================
function toggleCompare(car, checkboxEl) {
    const idx = compareList.findIndex(c => c.brand === car.brand && c.model === car.model);
    if (idx >= 0) {
        compareList.splice(idx, 1);
        checkboxEl.classList.remove('checked');
        checkboxEl.textContent = '';
    } else {
        if (compareList.length >= 3) {
            // Flash the bar
            compareBar.style.animation = 'shake 0.3s ease';
            setTimeout(() => compareBar.style.animation = '', 300);
            return;
        }
        compareList.push(car);
        checkboxEl.classList.add('checked');
        checkboxEl.textContent = '✓';
    }
    updateCompareBar();
}

function updateCompareBar() {
    if (compareList.length > 0) {
        compareBar.classList.add('visible');
        compareCountEl.textContent = `${compareList.length} araç seçildi`;
        compareBtn.disabled = compareList.length < 2;
    } else {
        compareBar.classList.remove('visible');
    }
}

compareBtn.addEventListener('click', openCompareModal);
compareClearBtn.addEventListener('click', () => {
    compareList = [];
    updateCompareBar();
    // Uncheck all checkboxes
    document.querySelectorAll('.compare-checkbox.checked').forEach(cb => {
        cb.classList.remove('checked');
        cb.textContent = '';
    });
});

function openCompareModal() {
    if (compareList.length < 2) return;
    compareModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const cols = compareList.length;
    let html = `<h2 style="margin-bottom:0.5rem;">🔍 Araç Karşılaştırma</h2>`;
    html += `<div class="compare-grid cols-${cols}">`;

    // Find max problems for highlighting
    const maxProblems = Math.max(...compareList.map(c => c.problems.length));
    const minProblems = Math.min(...compareList.map(c => c.problems.length));
    const maxCritical = Math.max(...compareList.map(c => c.problems.filter(p => p.severity === 'high').length));

    compareList.forEach(car => {
        const totalP = car.problems.length;
        const criticalP = car.problems.filter(p => p.severity === 'high').length;
        const mediumP = car.problems.filter(p => p.severity === 'medium').length;
        const lowP = car.problems.filter(p => p.severity === 'low').length;
        const isWorst = totalP === maxProblems && cols > 1 && maxProblems !== minProblems;

        html += `
            <div class="compare-column">
                <div class="compare-image" style="background-image: url('${car.imageUrl}')"></div>
                <div class="compare-brand">${getBrandLogo(car.brand)} ${car.brand}</div>
                <h3>${car.model}</h3>
                <p style="color:var(--text-muted);font-size:0.8rem;margin-bottom:1rem;">${car.years}</p>

                <div class="compare-stat-row">
                    <span class="label">Toplam Sorun</span>
                    <span class="value ${isWorst ? 'highlight' : ''}">${totalP}</span>
                </div>
                <div class="compare-stat-row">
                    <span class="label">🔴 Kritik</span>
                    <span class="value" style="color:${criticalP === maxCritical && criticalP > 0 ? '#ef4444' : 'inherit'}">${criticalP}</span>
                </div>
                <div class="compare-stat-row">
                    <span class="label">🟡 Orta</span>
                    <span class="value">${mediumP}</span>
                </div>
                <div class="compare-stat-row">
                    <span class="label">🟢 Hafif</span>
                    <span class="value">${lowP}</span>
                </div>
                <div class="compare-stat-row">
                    <span class="label">Motor Seçeneği</span>
                    <span class="value">${car.engines ? car.engines.length : 0}</span>
                </div>

                <div class="compare-problems-section">
                    <h4>Sorunlar</h4>
                    ${car.problems.map(p => `<span class="compare-problem-tag severity-${p.severity}">${p.title}</span>`).join('')}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    compareBody.innerHTML = html;
}

compareCloseBtn.addEventListener('click', () => {
    compareModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});
window.addEventListener('click', (e) => {
    if (e.target === compareModal) {
        compareModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ==============================
// STATISTICS
// ==============================
function renderStats() {
    const totalCars = carsData.length;
    const totalProblems = carsData.reduce((sum, car) => sum + car.problems.length, 0);
    const criticalProblems = carsData.reduce((sum, car) => sum + car.problems.filter(p => p.severity === 'high').length, 0);

    // Find most problematic brand (Average problems per car)
    const brandStats = {};
    carsData.forEach(car => {
        if (!brandStats[car.brand]) {
            brandStats[car.brand] = { problems: 0, cars: 0 };
        }
        brandStats[car.brand].problems += car.problems.length;
        brandStats[car.brand].cars += 1;
    });

    let topBrandName = '-';
    let highestRatio = -1;
    for (const [brand, stats] of Object.entries(brandStats)) {
        const ratio = stats.problems / stats.cars;
        if (ratio > highestRatio) {
            highestRatio = ratio;
            topBrandName = brand;
        }
    }

    // Animated countUp
    animateCount('statTotalCars', totalCars);
    animateCount('statTotalProblems', totalProblems);
    animateCount('statCriticalProblems', criticalProblems);
    document.getElementById('statTopBrand').textContent = topBrandName;
}

function animateCount(elementId, target) {
    const el = document.getElementById(elementId);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ==============================
// YEAR FILTER INIT
// ==============================
function updateYearFilter() {
    const prevValue = yearFilter.value;
    yearFilter.innerHTML = '<option value="">Yıl</option>';

    const selectedBrand = brandFilter.value;
    const selectedModel = modelFilter.value;

    // Filter cars based on current brand/model selection
    let relevantCars = carsData;
    if (selectedBrand) {
        relevantCars = relevantCars.filter(c => c.brand === selectedBrand);
    }
    if (selectedModel) {
        relevantCars = relevantCars.filter(c => c.model === selectedModel);
    }

    const years = new Set();
    relevantCars.forEach(car => {
        const parts = car.years.replace(/Günümüz/i, new Date().getFullYear().toString()).split(/\s*-\s*/);
        const startYear = parseInt(parts[0]);
        const endYear = parseInt(parts[1]) || new Date().getFullYear();
        for (let y = startYear; y <= endYear; y++) years.add(y);
    });
    const sortedYears = [...years].sort((a, b) => b - a);
    sortedYears.forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        yearFilter.appendChild(opt);
    });

    // Restore previous value if still valid
    if (prevValue && sortedYears.includes(parseInt(prevValue))) {
        yearFilter.value = prevValue;
    }
}

// ==============================
// FILTER TOGGLE PANEL
// ==============================
const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterPanel = document.getElementById('filterPanel');
const filterBadge = document.getElementById('filterBadge');

function getActiveFilterCount() {
    let count = 0;
    if (brandFilter.value) count++;
    if (modelFilter.value) count++;
    if (engineFilter.value) count++;
    if (transmissionFilter.value) count++;
    if (yearFilter.value) count++;
    if (searchInput.value.trim()) count++;
    if (sortFilter.value !== 'default') count++;
    return count;
}

function updateFilterBadge() {
    const count = getActiveFilterCount();
    if (count > 0) {
        filterBadge.textContent = count;
        filterBadge.style.display = 'inline-flex';
    } else {
        filterBadge.style.display = 'none';
    }
}

function expandFilterPanel() {
    filterPanel.classList.remove('collapsed');
    filterToggleBtn.classList.add('active');
    filterToggleBtn.setAttribute('aria-expanded', 'true');
}

function collapseFilterPanel() {
    filterPanel.classList.add('collapsed');
    filterToggleBtn.classList.remove('active');
    filterToggleBtn.setAttribute('aria-expanded', 'false');
}

function toggleFilterPanel() {
    if (filterPanel.classList.contains('collapsed')) {
        expandFilterPanel();
    } else {
        collapseFilterPanel();
    }
}

filterToggleBtn.addEventListener('click', toggleFilterPanel);

// ==============================
// SKELETON LOADING
// ==============================
function showSkeletonLoading() {
    carsGrid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.style.animationDelay = `${i * 0.05}s`;
        skeleton.innerHTML = `
            <div class="skeleton-image"></div>
            <div class="skeleton-text narrow" style="margin-top:1rem;"></div>
            <div class="skeleton-text title wide"></div>
            <div class="skeleton-text medium"></div>
            <div class="skeleton-text wide"></div>
            <div class="skeleton-badge"></div>
        `;
        carsGrid.appendChild(skeleton);
    }
}

// ==============================
// POPULAR CARS SECTION
// ==============================
function renderPopularCars() {
    const popularSection = document.getElementById('popularSection');
    if (!popularSection) return;

    // En çok sorunlu araçlardan seçim (en çok problemi olan 8 araç)
    const sorted = [...carsData].sort((a, b) => b.problems.length - a.problems.length);
    const topCars = sorted.slice(0, 8);

    const scrollContainer = popularSection.querySelector('.popular-scroll');
    if (!scrollContainer) return;

    scrollContainer.innerHTML = '';
    topCars.forEach(car => {
        const item = document.createElement('div');
        item.className = 'popular-item';
        item.innerHTML = `
            <div class="popular-item-image" style="background-image: url('${car.imageUrl}');"></div>
            <div class="popular-item-info">
                <div class="popular-brand">${getBrandLogo(car.brand)} ${car.brand}</div>
                <div class="popular-model">${car.model}</div>
                <div class="popular-problems">${car.problems.length} Sorun</div>
            </div>
        `;
        item.addEventListener('click', () => openModal(car));
        scrollContainer.appendChild(item);
    });
}

// ==============================
// INIT
// ==============================
// Araçları rastgele (karışık) sırala
carsData.sort(() => Math.random() - 0.5);

// Skeleton göster
showSkeletonLoading();

initFilters();
updateYearFilter();
// Remove duplicate listener — only bind once
yearFilter.removeEventListener('change', applyFilters);
yearFilter.addEventListener('change', applyFilters);
renderStats();

// Skeleton'dan gerçek içeriğe geçiş
setTimeout(() => {
    renderCars(carsData);
    renderPopularCars();
    loadFiltersFromURL();
    resultCount.innerHTML = `Toplam <span class="highlight-number">${carsData.length}</span> araç listeleniyor`;
}, 600);
