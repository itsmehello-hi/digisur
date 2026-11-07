/* ==========================================
   DiGiSUR Main JavaScript
   ========================================== */

// Default 12 Products
const defaultProducts = [
  {
    id: 1,
    name: "Hikvision 8MP Camera",
    category: "Surveillance",
    price: 1490,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-HD 4K outdoor IP camera with night vision and smart motion detection."
  },
  {
    id: 2,
    name: "Dahua PTZ Camera",
    category: "Surveillance",
    price: 2850,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    description: "32X Optical Zoom PTZ dome security camera with AI perimeter protection."
  },
  {
    id: 3,
    name: "Hikvision NVR",
    category: "Surveillance",
    price: 3200,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    description: "16-Channel 4K Network Video Recorder with pre-installed 2TB surveillance HDD."
  },
  {
    id: 4,
    name: "HP ProBook i7 Laptop",
    category: "Computers",
    price: 9900,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    description: "Intel Core i7, 16GB RAM, 512GB SSD enterprise laptop for secure executive workflows."
  },
  {
    id: 5,
    name: "Dell Latitude i5 Laptop",
    category: "Computers",
    price: 7400,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    description: "Intel Core i5, 8GB RAM, 256GB SSD robust business laptop."
  },
  {
    id: 6,
    name: "Lenovo ThinkPad",
    category: "Computers",
    price: 12500,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    description: "ThinkPad legendary durability, Intel i7, 32GB RAM, fingerprint reader."
  },
  {
    id: 7,
    name: "Dell Server",
    category: "Computers",
    price: 24900,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "PowerEdge rack server dual Xeon processors for enterprise data center hosting."
  },
  {
    id: 8,
    name: "Alarm Kit AJAX",
    category: "Security",
    price: 4900,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3d6f?auto=format&fit=crop&w=600&q=80",
    description: "Wireless professional security system with hub, motion detectors, and siren."
  },
  {
    id: 9,
    name: "Fire Detector",
    category: "Security",
    price: 890,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    description: "Photoelectric smoke and heat fire safety sensor with wireless alert transmitter."
  },
  {
    id: 10,
    name: "Biometric ZKTeco",
    category: "Security",
    price: 3400,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    description: "Access control terminal with fingerprint, RFID card, and facial recognition."
  },
  {
    id: 11,
    name: "PoE Switch",
    category: "Electronics",
    price: 1850,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    description: "8-Port Gigabit PoE+ switch for reliable camera and IP phone power distribution."
  },
  {
    id: 12,
    name: "UPS 3KVA",
    category: "Electronics",
    price: 5200,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    description: "Online double-conversion uninterruptible power supply for servers and CCTV."
  }
];

// State Management
let currentCurrency = 'MAD';
let currentLang = 'en';
let quoteItems = JSON.parse(localStorage.getItem('digisur_quote')) || [];

// Currency Exchange Rates (Base MAD)
const exchangeRates = {
  MAD: { rate: 1, symbol: 'DH' },
  EUR: { rate: 0.092, symbol: '€' },
  USD: { rate: 0.10, symbol: '$' }
};

// Translations Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_solutions: "Solutions",
    nav_products: "Products",
    nav_projects: "Projects",
    nav_process: "Process",
    nav_contact: "Contact",
    nav_quote: "Quote",
    hero_badge: "Premier Security & IT Infrastructure in Morocco",
    hero_title: "Engineered Security. <span>Intelligent Technology.</span>",
    hero_subtitle: "Import, supply, and installation of elite computer hardware, advanced electronics, enterprise surveillance cameras, and high-security alarm systems across Agadir, Casablanca, Marrakech, Rabat & Tangier.",
    hero_btn_explore: "Explore Products",
    hero_btn_consult: "Request Consultation",
    stat_projects: "Enterprise Projects",
    stat_years: "Years Excellence",
    stat_support: "Expert Support",
    sol_subtitle: "What We Offer",
    sol_title: "Enterprise Solutions & Engineering",
    prod_subtitle: "Catalog",
    prod_title: "High-End Hardware & Security Inventory",
    proj_subtitle: "Portfolio",
    proj_title: "Landmark Moroccan Installations",
    proc_subtitle: "How We Work",
    proc_title: "Our 4-Step Engineering Protocol",
    cont_subtitle: "Get In Touch",
    cont_title: "Request a Custom Engineering Quote",
    cont_info_title: "Let's Secure Your Enterprise",
    cont_info_desc: "Our engineering consultants across Agadir, Casablanca, Marrakech, Rabat, and Tangier are ready to design your optimal technology infrastructure.",
    cont_hq: "Headquarters",
    cont_phone: "Phone & WhatsApp",
    cont_email: "Email",
    cont_wa_btn: "Chat on WhatsApp",
    form_name: "Full Name / Company",
    form_phone: "Phone Number",
    form_city: "City",
    form_service: "Service / Solution",
    form_msg: "Project Details & Requirements",
    form_submit: "Submit Quote Request",
    footer_desc: "Morocco's premier luxury technology and security integrator. Elite hardware, certified installation, and uncompromised protection.",
    footer_quick: "Quick Links",
    footer_hubs: "Morocco Hubs",
    footer_brands: "Partner Brands"
  },
  fr: {
    nav_home: "Accueil",
    nav_solutions: "Solutions",
    nav_products: "Produits",
    nav_projects: "Projets",
    nav_process: "Processus",
    nav_contact: "Contact",
    nav_quote: "Devis",
    hero_badge: "Sécurité & Infrastructure IT de Premier Ordre au Maroc",
    hero_title: "Sécurité Ingénierée. <span>Technologie Intelligente.</span>",
    hero_subtitle: "Importation, fourniture et installation de matériel informatique d'élite, d'électronique avancée, de caméras de surveillance et de systèmes d'alarme à Agadir, Casablanca, Marrakech, Rabat & Tanger.",
    hero_btn_explore: "Explorer les Produits",
    hero_btn_consult: "Demander une Consultation",
    stat_projects: "Projets Entreprises",
    stat_years: "Ans d'Excellence",
    stat_support: "Support 24/7",
    sol_subtitle: "Ce Que Nous Offrons",
    sol_title: "Solutions Entreprises & Ingénierie",
    prod_subtitle: "Catalogue",
    prod_title: "Inventaire Matériel & Sécurité Haut de Gamme",
    proj_subtitle: "Réalisations",
    proj_title: "Installations Phares au Maroc",
    proc_subtitle: "Notre Méthode",
    proc_title: "Notre Protocole en 4 Étapes",
    cont_subtitle: "Contactez-Nous",
    cont_title: "Demander un Devis d'Ingénierie Personnalisé",
    cont_info_title: "Sécurisez Votre Entreprise",
    cont_info_desc: "Nos consultants en ingénierie à Agadir, Casablanca, Marrakech, Rabat et Tanger sont prêts à concevoir votre infrastructure technologique optimale.",
    cont_hq: "Siège Social",
    cont_phone: "Téléphone & WhatsApp",
    cont_email: "E-mail",
    cont_wa_btn: "Discuter sur WhatsApp",
    form_name: "Nom complet / Société",
    form_phone: "Numéro de Téléphone",
    form_city: "Ville",
    form_service: "Service / Solution",
    form_msg: "Détails & Exigences du Projet",
    form_submit: "Soumettre la Demande de Devis",
    footer_desc: "Le premier intégrateur de technologie et de sécurité de luxe au Maroc. Matériel d'élite, installation certifiée et protection sans compromis.",
    footer_quick: "Liens Rapides",
    footer_hubs: "Agences Maroc",
    footer_brands: "Marques Partenaires"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_solutions: "الحلول",
    nav_products: "المنتجات",
    nav_projects: "المشاريع",
    nav_process: "خطوات العمل",
    nav_contact: "اتصل بنا",
    nav_quote: "طلب عرض سعر",
    hero_badge: "الأمن المتقدم البنية التحتية لتكنولوجيا المعلومات في المغرب",
    hero_title: "أمن هندسي. <span>تكنولوجيا ذكية.</span>",
    hero_subtitle: "استيراد وتوريد وتركيب معدات الكمبيوتر الفاخرة، والإلكترونيات المتقدمة، وكاميرات المراقبة، ونظام الإنذار الأمني في أكادير، الدار البيضاء، مراكش، الرباط وطنجة.",
    hero_btn_explore: "استكشاف المنتجات",
    hero_btn_consult: "طلب استشارة",
    stat_projects: "مشروع مؤسسي",
    stat_years: "سنوات من التميز",
    stat_support: "دعم فني 24/7",
    sol_subtitle: "ما نقدمه",
    sol_title: "حلول المؤسسات والهندسة",
    prod_subtitle: "الكتالوج",
    prod_title: "أرقى الأجهزة والمعدات الأمنية",
    proj_subtitle: "أعمالنا",
    proj_title: "مشاريع كبرى في المغرب",
    proc_subtitle: "كيف نعمل",
    proc_title: "بروتوكول الهندسة من 4 خطوات",
    cont_subtitle: "تواصل معنا",
    cont_title: "طلب عرض سعر هندسي مخصص",
    cont_info_title: "دعنا نامن مؤسستك",
    cont_info_desc: "استشاريونا الهندسيون في أكادير والدار البيضاء ومراكش والرباط وطنجة مستعدون لتصميم بنيتك التحتية المثلى.",
    cont_hq: "المقر الرئيسي",
    cont_phone: "الهاتف والواتساب",
    cont_email: "البريد الإلكتروني",
    cont_wa_btn: "تحدث عبر واتساب",
    form_name: "الاسم الكامل / اسم الشركة",
    form_phone: "رقم الهاتف",
    form_city: "المدينة",
    form_service: "الخدمة / الحل",
    form_msg: "تفاصيل ومتطلبات المشروع",
    form_submit: "إرسال طلب عرض السعر",
    footer_desc: "المدمج الرائد للتكنولوجيا والأمن الفاخر في المغرب. أجهزة متطورة وتركيب معتمد وحماية بلا تمييز.",
    footer_quick: "روابط سريعة",
    footer_hubs: "فروعنا بالمغرب",
    footer_brands: "العلامات التجارية"
  }
};

// Initialize Products in localStorage if none
function initProducts() {
  if (!localStorage.getItem('digisur_products')) {
    localStorage.setItem('digisur_products', JSON.stringify(defaultProducts));
  }
}

function getProducts() {
  return JSON.parse(localStorage.getItem('digisur_products')) || defaultProducts;
}

// Format Price according to currency
function formatPrice(priceInMAD) {
  const curr = exchangeRates[currentCurrency];
  const converted = Math.round(priceInMAD * curr.rate);
  return `${converted.toLocaleString()} ${curr.symbol}`;
}

// Render Products
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const products = getProducts();
  const searchTerm = document.getElementById('productSearch').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortSelect').value;

  // Filter
  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sort
  if (sort === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No products found matching your criteria.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <span class="product-category-badge">${p.category}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-content">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="product-actions">
            <button class="btn-icon" onclick="addQuoteItem(${p.id})" title="Add to Quote"><i class="fas fa-file-invoice-dollar"></i></button>
            <a href="https://wa.me/212661000000?text=Hello%20DiGiSUR,%20I%20want%20to%20order%20${encodeURIComponent(p.name)}%20priced%20at%20${p.price}%20DH" target="_blank" class="btn-icon" style="background: rgba(37,211,102,0.1); color: #25D366; border-color: rgba(37,211,102,0.3);" title="Order via WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Quote Cart Functions
window.addQuoteItem = function(id) {
  const products = getProducts();
  const product = products.find(p => p.id === id);
  if (!product) return;

  quoteItems.push(product);
  localStorage.setItem('digisur_quote', JSON.stringify(quoteItems));
  updateQuoteCount();
  showNotification(`Added "${product.name}" to your quote list.`);
}

function updateQuoteCount() {
  const countEl = document.getElementById('quoteCount');
  if (countEl) countEl.textContent = quoteItems.length;
}

function renderQuoteModal() {
  const listEl = document.getElementById('quoteItemsList');
  const totalEl = document.getElementById('quoteModalTotal');
  if (!listEl || !totalEl) return;

  if (quoteItems.length === 0) {
    listEl.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">Your quote list is currently empty.</p>`;
    totalEl.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  listEl.innerHTML = quoteItems.map((item, index) => {
    total += item.price;
    return `
      <div class="quote-item-row">
        <div class="quote-item-info">
          <h4>${item.name}</h4>
          <span>${formatPrice(item.price)}</span>
        </div>
        <button class="quote-item-remove" onclick="removeQuoteItem(${index})"><i class="fas fa-trash-alt"></i></button>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatPrice(total);
}

window.removeQuoteItem = function(index) {
  quoteItems.splice(index, 1);
  localStorage.setItem('digisur_quote', JSON.stringify(quoteItems));
  updateQuoteCount();
  renderQuoteModal();
}

function showNotification(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: var(--accent-gold);
    color: var(--bg-primary);
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 700;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
    z-index: 3000;
    animation: fadeInDown 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Language and Currency switchers
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.setAttribute('dir', 'ltr');
  }
}

function setCurrency(curr) {
  currentCurrency = curr;
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-curr') === curr);
  });
  renderProducts();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initProducts();
  renderProducts();
  updateQuoteCount();

  // Search and filter listeners
  const searchInput = document.getElementById('productSearch');
  const catFilter = document.getElementById('categoryFilter');
  const sortSel = document.getElementById('sortSelect');

  if (searchInput) searchInput.addEventListener('input', renderProducts);
  if (catFilter) catFilter.addEventListener('change', renderProducts);
  if (sortSel) sortSel.addEventListener('change', renderProducts);

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // Currency buttons
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => setCurrency(btn.getAttribute('data-curr')));
  });

  // Quote Modal Toggle
  const modal = document.getElementById('quoteModal');
  const openModalBtn = document.getElementById('openQuoteModalBtn');
  const closeModalBtn = document.getElementById('closeQuoteModal');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      renderQuoteModal();
      modal.classList.add('active');
    });
  }
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Send Quote WhatsApp Button
  const submitQuoteBtn = document.getElementById('submitQuoteOrderBtn');
  if (submitQuoteBtn) {
    submitQuoteBtn.addEventListener('click', () => {
      if (quoteItems.length === 0) {
        alert('Your quote list is empty.');
        return;
      }
      let itemsText = quoteItems.map(i => `- ${i.name} (${i.price} DH)`).join('%0A');
      let total = quoteItems.reduce((acc, curr) => acc + curr.price, 0);
      let waUrl = `https://wa.me/212621248191?text=Hello%20DiGiSUR,%20I%20would%20like%20to%20request%20a%20quote%20for%20the%20following%20items:%0A${itemsText}%0A%0ATotal:%20${total}%20DH`;
      window.open(waUrl, '_blank');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('quoteRequestForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const city = document.getElementById('clientCity').value;
      const service = document.getElementById('clientService').value;
      const msg = document.getElementById('clientMessage').value;

      let waText = `Hello DiGiSUR,%0A*New Quote Request*%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*City:* ${encodeURIComponent(city)}%0A*Service:* ${encodeURIComponent(service)}%0A*Details:* ${encodeURIComponent(msg)}`;
      window.open(`https://wa.me/212621248191?text=${waText}`, '_blank');
      showNotification('Quote request transmitted successfully!');
      contactForm.reset();
    });
  }
});
