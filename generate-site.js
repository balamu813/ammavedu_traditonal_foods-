// Amma Veedu Traditional Foods - Page & Asset Generator Script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, PRODUCTS_RAW } from './products-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PRODUCTS_DIR = path.resolve(__dirname, 'products');
const CATEGORY_DIR = path.resolve(__dirname, 'category');

// SKU Category Codes
const CATEGORY_CODES = {
  "cereals": "CER",
  "dry-fruits": "DFR",
  "flour": "FLO",
  "millets": "MIL",
  "oil": "OIL",
  "oil-seeds": "OLS",
  "pulses": "PUL",
  "rice": "RIC",
  "salt": "SLT",
  "seeds": "SED",
  "spices": "SPC",
  "health-powders": "HLP",
  "sweeteners": "SWT"
};

// Key Features templates by category
const KEY_FEATURES_TEMPLATES = {
  "cereals": [
    "100% natural, whole grain product with no synthetic polish.",
    "Flattened using traditional roller processes to retain nutrition.",
    "High in easily digestible carbohydrates for quick energy.",
    "Sourced directly from local farms practicing pesticide-free agriculture.",
    "Free from artificial preservatives, chemicals, or additives."
  ],
  "dry-fruits": [
    "Selected premium grade dry fruits with uniform size.",
    "Sorted and cleaned under strict hygienic quality controls.",
    "Rich source of plant-based healthy fats and antioxidants.",
    "Perfect for nutritious snacking, baking, and garnishing.",
    "Packed in moisture-resistant sealing to preserve freshness."
  ],
  "flour": [
    "Stone-ground slow-milling process to prevent heat damage.",
    "Retains all natural dietary fiber and vital nutrients.",
    "Sourced from pesticide-free crop harvests in India.",
    "100% pure whole-grain flour with zero additives or starches.",
    "Perfect for making soft flatbreads, porridges, and baking."
  ],
  "millets": [
    "Ancient native grain cultivated under sustainable rain-fed farming.",
    "De-husked and cleaned using traditional gentle processes.",
    "Low glycemic index staple, perfect for sugar regulation.",
    "Gluten-free alternative packed with essential trace minerals.",
    "Extremely versatile for replacing white rice in daily meals."
  ],
  "oil": [
    "Traditional wood-pressed extraction at low temperatures.",
    "Zero chemical refining, bleaching, or deodorizing agents.",
    "Rich in natural aroma, color, and essential fatty acids.",
    "Sourced from premium quality seeds under direct inspection.",
    "Healthier cooking medium preserving all natural antioxidants."
  ],
  "oil-seeds": [
    "Premium grade whole raw seeds sorted for size consistency.",
    "Naturally sun-dried under clean, hygienic farm conditions.",
    "Outstanding source of vegetable protein and healthy lipids.",
    "Free from chemical fumigants, preservatives, or artificial washing.",
    "Multi-purpose use for roasting, cooking, or oil extraction."
  ],
  "pulses": [
    "Unpolished premium dals with no synthetic oil or water wash.",
    "Sourced from natural fields using sustainable farming methods.",
    "High plant-based protein content and rich in dietary fiber.",
    "Sorted for cleanliness, ensuring uniform and quick cooking.",
    "Free from synthetic coloring, additives, or preservatives."
  ],
  "rice": [
    "Traditional heirloom rice variety with unpolished grain texture.",
    "Sourced from pesticide-free wetlands practicing organic farming.",
    "Rich in dietary fibers, essential minerals, and antioxidants.",
    "Low glycemic properties compared to modern hybrid white rice.",
    "Perfect for everyday rice meals, steamed idlis, and porridges."
  ],
  "salt": [
    "Pristine hand-mined crystals from deep Himalayan deposits.",
    "Contains 84 natural trace minerals for electrolyte balance.",
    "100% natural, unrefined, and free from synthetic additives.",
    "No chemical bleaching agents or anti-caking additives.",
    "Excellent seasoning choice for everyday culinary preparations."
  ],
  "seeds": [
    "100% raw premium quality seeds packed with vital minerals.",
    "Rich source of dietary fiber and essential plant Omega-3.",
    "Naturally processed and sorted to ensure ultimate purity.",
    "No synthetic colorants, preservatives, or chemical washes.",
    "Perfect superfood addition to yogurt, smoothies, and baking."
  ],
  "spices": [
    "Premium quality spices harvested from regional specialty farms.",
    "Sun-dried and slow-ground to preserve volatile essential oils.",
    "Pure, unadulterated spice with zero fillers or color additives.",
    "High sensory potency, offering deep aroma and rich taste.",
    "Formulated following traditional grandmother spice recipes."
  ],
  "health-powders": [
    "Made from fresh organic shade-dried moringa leaves.",
    "Finely ground under low-temperature conditions.",
    "Rich in Vitamin A, Vitamin C, and calcium.",
    "100% raw herbal health powder.",
    "No synthetic additives, fillers, or colors."
  ],
  "sweeteners": [
    "Made from pure cane sugar juice processed traditionally.",
    "Clarified without sulphur dioxide or toxic chemicals.",
    "Retains iron, magnesium, and essential trace minerals.",
    "Natural unrefined flavor with smooth, balanced sweetness.",
    "Clean food grade packaging protecting from humidity."
  ]
};

// Word counter check helper
function countWords(str) {
  return str.split(/\s+/).filter(Boolean).length;
}

// Short description builder (target: 40-60 words)
function generateShortDesc(name, categoryName) {
  const text = `Discover the premium quality and authentic taste of our wholesome ${name} by Amma Veedu Traditional Foods. Sourced directly from local Indian farmers practicing pesticide-free agriculture, this high-grade ${categoryName} staple is processed using traditional stone-ground or wood-pressed techniques to preserve all its natural minerals, vitamins, and health benefits.`;
  const count = countWords(text);
  if (count < 40 || count > 60) {
    throw new Error(`Word count check failed! Short desc for '${name}' has ${count} words.`);
  }
  return text;
}

// Detailed description builder (target: 150-250 words)
function generateDetailedDesc(name, categoryName, benefits, usage) {
  const text = `Incorporate the pure goodness of Amma Veedu Traditional Foods ${name} into your daily meals for a healthier lifestyle. Grown in pesticide-free soils by local farming cooperatives across India, this premium-grade ${categoryName} product represents our dedication to supporting sustainable agriculture and reviving native food traditions. Every batch is sourced directly from farms and packaged under hygienic conditions to ensure that you receive the highest possible quality for your kitchen.

Our careful, low-temperature processing methods are designed to protect the integrity of the grain, ensuring that essential macronutrients, dietary fibers, and minerals remain completely intact. Unlike mass-produced alternatives that undergo heavy chemical bleaching, our unrefined ${name} retains its native flavor profile and natural nutritional structure. This makes it an ideal choice for health-conscious families looking for clean, chemical-free food staples.

This versatile ingredient is extremely easy to use in your daily culinary routine. You can prepare delicious traditional recipes such as ${usage.toLowerCase()}, offering a delightful flavor and satisfying texture. With positive health properties that assist in ${benefits.toLowerCase()}, it provides daily nourishment for the entire family. Our products contain zero artificial colors, synthetic flavors, or chemical preservatives, bringing grandmother's kitchen-fresh purity straight to your home.`;

  const count = countWords(text);
  if (count < 150 || count > 250) {
    throw new Error(`Word count check failed! Detailed desc for '${name}' has ${count} words.`);
  }
  return text;
}

// Generate Beautiful SVG Image Placeholder
function generateProductSvg(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FAF7F0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F4F0E6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" rx="12" />
  <rect x="15" y="15" width="470" height="470" fill="none" stroke="#C2A278" stroke-width="2" stroke-dasharray="8 6" rx="8" />
  <path d="M250,140 C280,180 320,200 320,250 C320,300 280,340 250,340 C220,340 180,300 180,250 C180,200 220,180 250,140 Z" fill="#2E5A44" opacity="0.06" />
  <text x="50%" y="45%" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="bold" fill="#5C3E21">${name}</text>
  <text x="50%" y="54%" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="500" fill="#8C6239" letter-spacing="2">AMMA VEEDU TRADITIONAL FOODS</text>
  <text x="50%" y="85%" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="12" fill="#6B5B52">100% Pure &amp; Natural</text>
</svg>`;
}

// Generate SVG Barcode Placeholder
function generateBarcodeSvg(sku) {
  let lines = '';
  let x = 40;
  for (let i = 0; i < 35; i++) {
    const width = (i % 3 === 0) ? 4 : (i % 5 === 0) ? 6 : 2;
    const spacing = (i % 4 === 0) ? 5 : 3;
    lines += `<rect x="${x}" y="20" width="${width}" height="60" fill="#2C2520" />`;
    x += width + spacing;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#FFFFFF" rx="4" />
  ${lines}
  <text x="50%" y="92%" text-anchor="middle" font-family="'Outfit', monospace" font-size="12" fill="#2C2520" letter-spacing="3">${sku}</text>
</svg>`;
}

// Helper to create directory recursively if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Header & Footer HTML content provider
function getCommonLayout(title, metaDesc, contentHtml, bodyAttrs = '') {
  // We construct the HTML that mirrors index.html, using absolute paths for assets/CSS/JS.
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Amma Veedu Traditional Foods</title>
    <meta name="description" content="${metaDesc}">
    <meta name="author" content="Amma Veedu Traditional Foods">
    
    <!-- Favicon -->
    <link rel="icon" type="image/jpeg" href="/assets/logo.jpg">
    
    <!-- Open Graph for Social Sharing -->
    <meta property="og:title" content="${title} | Amma Veedu">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:image" content="/assets/logo.jpg">
    <meta property="og:type" content="website">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="/index.css">
</head>
<body ${bodyAttrs}>

    <!-- Header & Navigation -->
    <header class="main-header" id="main-header">
        <div class="header-container">
            <a href="/" class="brand-logo-area" id="brand-logo-link">
                <img src="/assets/logo.jpg" alt="Amma Veedu Logo" class="header-logo" id="header-logo-img">
                <div class="brand-text">
                    <span class="brand-name">Amma Veedu</span>
                    <span class="brand-tagline">Traditional Foods</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="nav-bar" id="navigation-bar">
                <a href="/" class="nav-link" id="nav-home">Home</a>
                <div class="nav-dropdown" id="nav-store-dropdown">
                    <a href="/#store-section" class="nav-link" id="nav-store">Store <i class="fa-solid fa-chevron-down" style="font-size:0.75rem; margin-left:2px;"></i></a>
                    <div class="dropdown-content">
                        ${Object.values(CATEGORIES).map(c => `<a href="/category/${c.slug}/">${c.name}</a>`).join('\n                        ')}
                    </div>
                </div>
                <a href="/#heritage-section" class="nav-link" id="nav-heritage">Our Heritage</a>
                <a href="/#contact-section" class="nav-link" id="nav-contact">Contact</a>
            </nav>

            <!-- Action Controls -->
            <div class="header-actions">
                <!-- Search bar in header -->
                <div class="header-search-box" id="header-search-container">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" placeholder="Search traditional foods..." id="store-search-input" aria-label="Search products">
                </div>

                <!-- Theme Toggle Button -->
                <button class="theme-toggle-btn" id="theme-toggle-btn" title="Toggle Light/Dark Theme" aria-label="Toggle dark mode">
                    <i class="fa-solid fa-moon theme-icon-dark"></i>
                    <i class="fa-solid fa-sun theme-icon-light"></i>
                </button>

                <!-- Floating Cart Handle -->
                <button class="cart-trigger-btn" id="cart-trigger-btn" aria-label="Open shopping cart">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span class="cart-count-badge" id="cart-count-badge">0</span>
                </button>

                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open mobile menu">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay">
        <div class="mobile-nav-content">
            <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Close menu">&times;</button>
            <div class="mobile-logo-wrapper">
                <img src="/assets/logo.jpg" alt="Amma Veedu Logo" class="mobile-menu-logo">
                <h3>Amma Veedu</h3>
            </div>
            <nav class="mobile-nav-links">
                <a href="/" class="mobile-nav-link" id="mob-nav-home">Home</a>
                <a href="/#store-section" class="mobile-nav-link" id="mob-nav-store">Store</a>
                ${Object.values(CATEGORIES).map(c => `<a href="/category/${c.slug}/" class="mobile-nav-link" style="padding-left: 15px; font-size: 0.95rem; border-color: rgba(0,0,0,0.05);">${c.name}</a>`).join('\n                ')}
                <a href="/#heritage-section" class="mobile-nav-link" id="mob-nav-heritage">Our Heritage</a>
                <a href="/#contact-section" class="mobile-nav-link" id="mob-nav-contact">Contact</a>
            </nav>
            <div class="mobile-search-wrapper">
                <input type="text" placeholder="Search product..." id="mobile-search-input">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>

    <!-- Main Content Container -->
    <div class="page-main-container">
        ${contentHtml}
    </div>

    <!-- Cart Slide-out Drawer Panel -->
    <div class="cart-drawer-backdrop" id="cart-drawer-backdrop">
        <div class="cart-drawer-container" id="cart-drawer-container">
            <div class="cart-drawer-header">
                <h3><i class="fa-solid fa-basket-shopping"></i> Your Basket</h3>
                <button class="cart-close-btn" id="cart-close-btn" aria-label="Close cart drawer">&times;</button>
            </div>

            <!-- Cart Body -->
            <div class="cart-drawer-body">
                <div class="cart-items-wrapper" id="cart-items-wrapper">
                    <div class="empty-cart-state" id="empty-cart-state">
                        <i class="fa-solid fa-basket-shopping empty-icon"></i>
                        <h4>Your Basket is Empty</h4>
                        <p>Explore our store to add stone-ground health mixes, traditional seeds, and jaggery products.</p>
                        <a href="/#store-section" class="btn btn-primary" id="drawer-shop-now-btn">Shop Now</a>
                    </div>
                </div>

                <!-- Checkout details form -->
                <div class="checkout-form-wrapper hidden" id="checkout-form-wrapper">
                    <h4 class="checkout-section-title">Delivery Details</h4>
                    <form id="checkout-order-form" class="checkout-order-form">
                        <div class="form-field">
                            <label for="checkout-name">Full Name *</label>
                            <input type="text" id="checkout-name" placeholder="Enter your name" required>
                        </div>
                        <div class="form-field">
                            <label for="checkout-phone">WhatsApp Mobile Number *</label>
                            <input type="tel" id="checkout-phone" placeholder="10-digit number e.g. 9600750495" pattern="[6-9][0-9]{9}" required title="Please enter a valid 10 digit mobile number">
                        </div>
                        <div class="form-field" id="checkout-address-field">
                            <label for="checkout-address" id="checkout-address-label">Delivery Address *</label>
                            <textarea id="checkout-address" rows="3" placeholder="Door No, Street Name, Area, Pincode" required></textarea>
                        </div>
                        <div class="form-field">
                            <label for="checkout-delivery">Delivery Mode</label>
                            <select id="checkout-delivery">
                                <option value="delivery">Home Delivery (Stops/Charges apply)</option>
                                <option value="pickup">Self-Store Pickup (Nellikuppam Store)</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Cart Footer -->
            <div class="cart-drawer-footer hidden" id="cart-drawer-footer">
                <div class="price-breakdown">
                    <div class="price-row">
                        <span>Items Subtotal:</span>
                        <span id="cart-subtotal-val">₹0.00</span>
                    </div>
                    <div class="price-row">
                        <span>Packaging & Delivery:</span>
                        <span id="cart-delivery-val">Calculated on WhatsApp</span>
                    </div>
                    <div class="price-row total-row">
                        <span>Total (Est.):</span>
                        <span id="cart-total-val" class="final-total">₹0.00</span>
                    </div>
                </div>

                <div class="cart-action-buttons">
                    <button class="btn btn-primary btn-block" id="place-whatsapp-order-btn">
                        <i class="fa-solid fa-credit-card"></i> Pay &amp; Confirm Order
                    </button>
                    <button class="btn btn-outline btn-block" id="clear-cart-btn">Clear Basket</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sticky Floating Action Button -->
    <div class="floating-sticky-cart-btn" id="floating-sticky-cart-btn">
        <i class="fa-solid fa-basket-shopping"></i>
        <span class="floating-cart-badge" id="floating-cart-badge">0</span>
    </div>

    <!-- Footer -->
    <footer class="main-footer" id="main-footer">
        <div class="footer-grid">
            <div class="footer-brand-col">
                <img src="/assets/logo.jpg" alt="Amma Veedu Logo" class="footer-logo">
                <h3>Amma Veedu</h3>
                <p class="footer-brand-desc">
                    Rooted in tradition, made with motherly love.<br>
                    Bringing pure, farm-fresh, chemical-free organic foodstuffs straight to your home since 2020.
                </p>
                <p class="comrade-creations-text" style="font-size: 0.85rem; color: #B2A297; font-weight: 500; margin-top: 4px; margin-bottom: 4px;">
                    A Proud Brand of Comrade Creations LLP
                </p>
                <p class="copyright-text">&copy; 2026 Amma Veedu Traditional Foods. All Rights Reserved.</p>
            </div>

            <div class="footer-links-col">
                <h4>Product Categories</h4>
                <ul>
                    ${Object.values(CATEGORIES).map(c => `<li><a href="/category/${c.slug}/" class="footer-category-link" data-cat="${c.slug}">${c.name}</a></li>`).join('\n                    ')}
                </ul>
            </div>

            <div class="footer-links-col">
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#store-section">Our Store</a></li>
                    <li><a href="/#heritage-section">Our Story</a></li>
                    <li><a href="/#contact-section">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer-subscribe-col">
                <h4>Newsletter</h4>
                <p>Subscribe to receive organic recipe ideas, traditional health tips, and exclusive discounts.</p>
                <form id="newsletter-form" class="newsletter-form">
                    <input type="email" placeholder="Your Email Address" required aria-label="Email address">
                    <button type="submit"><i class="fa-solid fa-arrow-right-long"></i></button>
                </form>
                <div class="newsletter-msg hidden" id="newsletter-msg">Subscribed successfully!</div>
                <div class="payment-badges-row">
                    <i class="fa-brands fa-cc-visa" title="Visa"></i>
                    <i class="fa-brands fa-cc-mastercard" title="Mastercard"></i>
                    <i class="fa-solid fa-qrcode" title="UPI payments accepted"></i>
                    <span class="upi-text">UPI / GPAY / WHATSAPP PAY</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- JS Scripts -->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script type="module" src="/app.js"></script>
</body>
</html>`;
}

// Compile Products List with Generated Descriptions and custom SKUs
const productsList = PRODUCTS_RAW.map(prod => {
  const cat = CATEGORIES[prod.category];
  const shortDesc = generateShortDesc(prod.name, cat.name);
  const detailedDesc = generateDetailedDesc(prod.name, cat.name, prod.benefits, prod.usage);
  
  // Base SKU code (Prefix-Category-NameSlugPrefix)
  const catCode = CATEGORY_CODES[prod.category] || "GEN";
  const nameParts = prod.name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  let nameCode = "";
  if (nameParts.length >= 2) {
    nameCode = (nameParts[0].substring(0, 2) + nameParts[1].substring(0, 2)).toUpperCase();
  } else if (nameParts.length === 1) {
    nameCode = nameParts[0].substring(0, 4).toUpperCase();
  } else {
    nameCode = "PROD";
  }
  
  const baseSku = `AVTF-${catCode}-${nameCode}`;

  // Key features: 5 bullet points from template
  const keyFeatures = KEY_FEATURES_TEMPLATES[prod.category] || [
    "100% natural, premium quality and unpolished food product.",
    "Processed carefully at low temperature to retain essential fibers.",
    "Sourced directly from local farmers practicing sustainable agriculture.",
    "Free from artificial colors, chemical preservatives, or synthetic additives.",
    "Traditional taste, perfect for daily healthy meal preparations."
  ];

  return {
    ...prod,
    id: prod.id,
    shortDescription: shortDesc,
    description: detailedDesc,
    keyFeatures: keyFeatures,
    baseSku: baseSku,
    brand: "Amma Veedu Traditional Foods",
    countryOfOrigin: "India",
    stockQuantity: 100,
    mrp: null,
    price: null,
    barcodePlaceholder: `[BARCODE-${baseSku}]`,
    image: prod.image || `/assets/placeholders/${prod.id}.svg`,
    metaTitle: `${prod.name} | Amma Veedu Traditional Foods`,
    metaDescription: `Buy premium organic ${prod.name} direct from farmers. 100% pure, natural, processed traditionally to retain absolute fiber and mineral goodness.`
  };
});

// Write fully compiled list to products-compiled.js for runtime use
fs.writeFileSync(
  path.resolve(__dirname, 'products-compiled.js'),
  `export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};\n\nexport const PRODUCTS = ${JSON.stringify(productsList, null, 2)};\n`
);

console.log("Successfully generated products-compiled.js and verified word counts!");

// --- BUILD PHYSICAL HTML PAGES ---

// Make folders
ensureDir(PRODUCTS_DIR);
ensureDir(CATEGORY_DIR);
ensureDir(path.resolve(PUBLIC_DIR, 'assets', 'placeholders'));
ensureDir(path.resolve(PUBLIC_DIR, 'assets', 'barcodes'));

// 1. Generate Placeholder SVG Images
productsList.forEach(prod => {
  // If product is using placeholder image, write the SVG file
  if (prod.image.startsWith('/assets/placeholders/')) {
    const svgContent = generateProductSvg(prod.name);
    fs.writeFileSync(
      path.resolve(PUBLIC_DIR, 'assets', 'placeholders', `${prod.id}.svg`),
      svgContent
    );
  }
  // Generate barcode SVG
  const barcodeContent = generateBarcodeSvg(prod.baseSku);
  fs.writeFileSync(
    path.resolve(PUBLIC_DIR, 'assets', 'barcodes', `${prod.id}.svg`),
    barcodeContent
  );
});
console.log("Generated SVG product placeholders and barcode assets.");

// 2. Generate Product Page HTML files
productsList.forEach(prod => {
  const catSlug = prod.category;
  const prodSlug = prod.id;
  ensureDir(path.resolve(PRODUCTS_DIR, catSlug, prodSlug));

  const keyFeaturesList = prod.keyFeatures.map(kf => `<li><i class="fa-solid fa-circle-check"></i> ${kf}</li>`).join('\n                    ');
  
  const content = `
    <!-- Breadcrumb -->
    <div class="breadcrumb-container container">
        <a href="/">Home</a> <i class="fa-solid fa-chevron-right"></i>
        <a href="/category/${catSlug}/">${CATEGORIES[catSlug].name}</a> <i class="fa-solid fa-chevron-right"></i>
        <span>${prod.name}</span>
    </div>

    <!-- Product Detail Block -->
    <main class="product-detail-section container" id="product-detail-area" data-product-id="${prod.id}">
        <div class="product-detail-grid">
            
            <!-- Left Column: Visuals -->
            <div class="product-detail-visuals">
                <div class="product-detail-img-box">
                    <img src="${prod.image}" alt="${prod.name}" id="main-product-img">
                </div>
                <div class="barcode-card">
                    <h5>Product Authenticity Barcode</h5>
                    <div class="barcode-image">
                        <img src="/assets/barcodes/${prod.id}.svg" alt="Barcode ${prod.baseSku}">
                    </div>
                    <span class="barcode-sku-txt">${prod.baseSku}</span>
                </div>
            </div>

            <!-- Right Column: Info Panel -->
            <div class="product-detail-info">
                <span class="prod-badge badge-organic"><i class="fa-solid fa-certificate"></i> 100% Organic</span>
                <h1 class="product-name-title">${prod.name}</h1>
                <span class="tamil-script" style="font-size: 1.25rem; font-weight:700; color: var(--color-primary); margin-top:-8px; display:block;">${prod.tamilName || ''}</span>
                
                <p class="brand-spec">Brand: <span class="spec-val">${prod.brand}</span></p>
                <p class="sku-spec">SKU: <span class="spec-val" id="product-sku-display">${prod.baseSku}-${prod.sizes[0].toUpperCase()}</span></p>

                <!-- Dynamic Pricing Panel -->
                <div class="detail-price-pane">
                    <span class="price-label">Price:</span>
                    <span class="price-value" id="product-price-display">Price on Request</span>
                    <span class="mrp-value" id="product-mrp-display"></span>
                    <span class="stock-status-badge in-stock"><i class="fa-solid fa-check-circle"></i> In Stock</span>
                </div>

                <!-- Short Desc -->
                <div class="short-desc-box">
                    <p>${prod.shortDescription}</p>
                </div>

                <!-- Variant Selector -->
                <div class="variant-select-box">
                    <label for="product-size-select">Choose Available Weight Size:</label>
                    <select id="product-size-select" class="form-control variant-dropdown" aria-label="Select package size">
                        ${prod.sizes.map((s, idx) => `<option value="${idx}">${s}</option>`).join('\n                        ')}
                    </select>
                </div>

                <!-- Action buttons -->
                <div class="action-buttons-row">
                    <button class="btn btn-secondary add-to-cart-action-btn" id="detail-add-to-cart-btn" data-id="${prod.id}">
                        <i class="fa-solid fa-basket-shopping"></i> Add to Basket
                    </button>
                    <a href="#" class="btn btn-primary whatsapp-inquiry-btn" id="detail-whatsapp-inquiry-btn" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
                    </a>
                </div>

                <div class="quick-delivery-specs">
                    <div class="q-spec"><i class="fa-solid fa-truck-fast"></i> <span>Direct Farm Dispatch</span></div>
                    <div class="q-spec"><i class="fa-solid fa-people-carry-box"></i> <span>Carefully Handpacked</span></div>
                    <div class="q-spec"><i class="fa-solid fa-shield-halved"></i> <span>Purity Guaranteed</span></div>
                </div>
            </div>
        </div>

        <!-- Tabbed Information Area -->
        <div class="product-tabs-wrapper">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="description">Detailed Description</button>
                <button class="tab-btn" data-tab="features">Key Features</button>
                <button class="tab-btn" data-tab="benefits">Health Benefits</button>
                <button class="tab-btn" data-tab="usage">Preparation &amp; Usage</button>
            </div>
            
            <div class="tab-content-container">
                <!-- Detailed Description Tab -->
                <div class="tab-pane active" id="tab-description">
                    <h3>About ${prod.name}</h3>
                    <p>${prod.description}</p>
                    <table class="specs-table">
                        <tr>
                            <td>Country of Origin</td>
                            <td>${prod.countryOfOrigin}</td>
                        </tr>
                        <tr>
                            <td>Brand Name</td>
                            <td>${prod.brand}</td>
                        </tr>
                        <tr>
                            <td>Food Category</td>
                            <td>${CATEGORIES[catSlug].name}</td>
                        </tr>
                        <tr>
                            <td>Storage Condition</td>
                            <td>Store in a cool, dry place in an airtight container away from humidity and moisture.</td>
                        </tr>
                        <tr>
                            <td>Stock Status</td>
                            <td>In Stock (Default Quantity: ${prod.stockQuantity} items)</td>
                        </tr>
                    </table>
                </div>

                <!-- Key Features Tab -->
                <div class="tab-pane" id="tab-features">
                    <h3>Key Highlights</h3>
                    <ul class="features-bullet-list">
                        ${keyFeaturesList}
                    </ul>
                </div>

                <!-- Health Benefits Tab -->
                <div class="tab-pane" id="tab-benefits">
                    <h3>Nutritional &amp; Health Profile</h3>
                    <p><strong>Health Benefits:</strong> ${prod.benefits}</p>
                    <div class="nutrition-card">
                        <h4>Nutritional Highlights</h4>
                        <p>100% natural ${prod.name} processed naturally. Sourced locally to prevent chemical degradation, rich in complex dietary fiber, plant protein, magnesium, iron, and active minerals essential for daily wellness.</p>
                    </div>
                </div>

                <!-- Usage Tab -->
                <div class="tab-pane" id="tab-usage">
                    <h3>Traditional Usage Suggestions</h3>
                    <p>${prod.usage}</p>
                    <div class="storage-alert">
                        <i class="fa-solid fa-circle-info"></i>
                        <span><strong>Storage Instructions:</strong> Keep in an airtight jar in a cool, dry pantry shelf to retain aroma and protect from pest infestation.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products Section -->
        <div class="related-products-section">
            <h2 class="section-title text-left">Recommended Wholesome Staples</h2>
            <div class="title-underline left-aligned"></div>
            <div class="products-grid" id="related-products-grid">
                <!-- Dynamically filled by app.js with items from same category -->
            </div>
        </div>
    </main>
  `;

  const html = getCommonLayout(
    prod.metaTitle || prod.name,
    prod.metaDescription || prod.shortDescription,
    content,
    `data-page="product" data-product-id="${prod.id}"`
  );

  fs.writeFileSync(
    path.resolve(PRODUCTS_DIR, catSlug, prodSlug, 'index.html'),
    html
  );
});
console.log("Successfully generated all product page HTML entries.");

// 3. Generate Category Landing Page HTML files
Object.values(CATEGORIES).forEach(cat => {
  ensureDir(path.resolve(CATEGORY_DIR, cat.slug));

  const content = `
    <!-- Category Hero Banner -->
    <section class="category-hero-section" style="background: radial-gradient(circle at 10% 20%, rgba(46, 90, 68, 0.05) 0%, rgba(250, 247, 240, 1) 90%); border-bottom: 1px solid var(--color-border); padding: 60px 0 40px 0;">
        <div class="container">
            <div class="breadcrumb-container" style="padding-left:0; margin-bottom: 20px;">
                <a href="/">Home</a> <i class="fa-solid fa-chevron-right"></i>
                <span>Categories</span> <i class="fa-solid fa-chevron-right"></i>
                <span>${cat.name}</span>
            </div>
            <div class="category-hero-content">
                <span class="sub-heading">Shop By Category</span>
                <h1 class="category-title" style="font-size:3rem; margin-bottom:12px;">${cat.name} Collection</h1>
                <p class="category-desc" style="max-width: 700px; color: var(--color-text-muted); font-size:1.1rem; line-height:1.5;">${cat.desc}</p>
            </div>
        </div>
    </section>

    <!-- Category Catalog Area -->
    <section class="store-section" style="padding: 60px 0;">
        <div class="store-container">
            
            <!-- Sidebar Filters -->
            <aside class="store-sidebar" id="store-sidebar">
                
                <!-- Weight Filter Block -->
                <div class="sidebar-block">
                    <h3 class="sidebar-title">Filter by Weight</h3>
                    <div class="checkbox-group" id="filter-weight-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="100g">
                            <span class="custom-chk"></span> 100g
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="250g">
                            <span class="custom-chk"></span> 250g
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="500g">
                            <span class="custom-chk"></span> 500g
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="1kg">
                            <span class="custom-chk"></span> 1kg
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="2kg">
                            <span class="custom-chk"></span> 2kg
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="weight-filter" value="5kg">
                            <span class="custom-chk"></span> 5kg
                        </label>
                    </div>
                </div>

                <!-- Price Filter Block -->
                <div class="sidebar-block">
                    <h3 class="sidebar-title">Filter by Price</h3>
                    <div class="checkbox-group" id="filter-price-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="price-filter" value="on-request">
                            <span class="custom-chk"></span> Price on Request
                        </label>
                    </div>
                </div>

                <!-- Availability Filter Block -->
                <div class="sidebar-block">
                    <h3 class="sidebar-title">Availability</h3>
                    <div class="checkbox-group" id="filter-stock-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="stock-filter" value="in-stock" checked>
                            <span class="custom-chk"></span> In Stock
                        </label>
                    </div>
                </div>
            </aside>

            <!-- Product Grid panel -->
            <main class="store-catalog">
                
                <!-- Search and Sorting header -->
                <div class="catalog-controls">
                    <div class="search-stats">
                        Showing <span id="displayed-products-count" class="bold-count">0</span> of <span id="total-products-count">0</span> products in ${cat.name}
                    </div>
                    <div class="controls-actions" style="display:flex; gap:16px; align-items:center;">
                        <div class="filter-group" style="margin-bottom:0; display:flex; align-items:center; gap:8px;">
                            <label for="category-sort-select" style="margin-bottom:0; white-space:nowrap;">Sort By</label>
                            <select id="category-sort-select" class="form-control" style="width:180px; padding:6px 12px;" aria-label="Sort products">
                                <option value="popular">Popular</option>
                                <option value="new-arrivals">New Arrivals</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name-asc">Alphabetical: A-Z</option>
                                <option value="name-desc">Alphabetical: Z-A</option>
                            </select>
                        </div>
                        <button class="mobile-filter-toggle-btn" id="mobile-filter-toggle-btn" style="padding: 8px 16px;">
                            <i class="fa-solid fa-sliders"></i> Filters
                        </button>
                    </div>
                </div>

                <!-- Grid container -->
                <div class="products-grid" id="category-products-grid">
                    <div class="grid-skeleton">
                        <div class="skeleton-card"></div>
                        <div class="skeleton-card"></div>
                        <div class="skeleton-card"></div>
                    </div>
                </div>

                <!-- No Results State -->
                <div class="no-results-state hidden" id="no-results-state">
                    <i class="fa-regular fa-face-frown-open"></i>
                    <h3>No Products Found</h3>
                    <p>No products match your active category filters. Try clearing some selections.</p>
                </div>
            </main>
        </div>
    </section>
  `;

  const html = getCommonLayout(
    `${cat.name} Staples`,
    cat.desc,
    content,
    `data-page="category" data-category-id="${cat.slug}"`
  );

  fs.writeFileSync(
    path.resolve(CATEGORY_DIR, cat.slug, 'index.html'),
    html
  );
});
console.log("Successfully generated all category landing page HTML entries.");
