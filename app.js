// Amma Veedu Traditional Foods - Main Web Application Script
import { PRODUCTS, CATEGORIES } from './products-compiled.js';

// ==========================================================================
// STATE MANAGEMENT & CART OPERATIONS
// ==========================================================================
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let selectedSort = "default";
let activeTags = {
    "gluten-free": false,
    "immunity": false,
    "natural-sweetener": false
};

// Available weights in category page filters
let activeWeightFilters = [];
let activePriceFilters = []; // For "Price on Request"
let activeStockFilters = ["in-stock"]; // Default to In Stock

document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage Initialization
    loadCartFromLocalStorage();

    // Identify page type
    const pageType = document.body.getAttribute("data-page") || "home";
    const productId = document.body.getAttribute("data-product-id");
    const categoryId = document.body.getAttribute("data-category-id");

    // Initialize Common Elements (Header, Footer, Cart Drawer)
    initCommonElements();

    // Page Specific Execution
    if (pageType === "product") {
        initProductPage(productId);
    } else if (pageType === "category") {
        initCategoryPage(categoryId);
    } else {
        initHomePage();
    }
});

// ==========================================================================
// COMMON ELEMENTS INITIALIZATION (Header, Footer, Cart Drawer)
// ==========================================================================
function initCommonElements() {
    // Nav mobile drawer menu
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    const mobileNavClose = document.getElementById("mobile-nav-close");
    const mobNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (mobileMenuBtn && mobileNavOverlay && mobileNavClose) {
        mobileMenuBtn.addEventListener("click", () => mobileNavOverlay.classList.add("open"));
        mobileNavClose.addEventListener("click", () => mobileNavOverlay.classList.remove("open"));
        mobileNavOverlay.addEventListener("click", (e) => {
            if (e.target === mobileNavOverlay) mobileNavOverlay.classList.remove("open");
        });
        mobNavLinks.forEach(link => {
            link.addEventListener("click", () => mobileNavOverlay.classList.remove("open"));
        });
    }

    // Cart Drawer Elements
    const cartTriggerBtn = document.getElementById("cart-trigger-btn");
    const cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
    const cartCloseBtn = document.getElementById("cart-close-btn");
    const drawerShopNowBtn = document.getElementById("drawer-shop-now-btn");
    const floatingStickyCartBtn = document.getElementById("floating-sticky-cart-btn");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const placeWhatsappOrderBtn = document.getElementById("place-whatsapp-order-btn");
    const checkoutOrderForm = document.getElementById("checkout-order-form");

    if (cartTriggerBtn && cartDrawerBackdrop && cartCloseBtn) {
        const openCart = () => cartDrawerBackdrop.classList.add("open");
        const closeCart = () => cartDrawerBackdrop.classList.remove("open");

        cartTriggerBtn.addEventListener("click", openCart);
        if (floatingStickyCartBtn) floatingStickyCartBtn.addEventListener("click", openCart);
        cartCloseBtn.addEventListener("click", closeCart);
        if (drawerShopNowBtn) drawerShopNowBtn.addEventListener("click", closeCart);

        cartDrawerBackdrop.addEventListener("click", (e) => {
            if (e.target === cartDrawerBackdrop) closeCart;
        });

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                cartDrawerBackdrop.classList.remove("open");
                if (mobileNavOverlay) mobileNavOverlay.classList.remove("open");
            }
        });
    }

    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to clear your shopping basket?")) {
                cart = [];
                saveCartToLocalStorage();
                updateCartUI();
                // If on homepage, re-render product grids to reflect add buttons
                const pageType = document.body.getAttribute("data-page");
                if (pageType === "home") renderHomeProducts();
                if (pageType === "category") renderCategoryProducts();
            }
        });
    }

    if (placeWhatsappOrderBtn && checkoutOrderForm) {
        placeWhatsappOrderBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (!checkoutOrderForm.reportValidity()) return;

            const buyerName = document.getElementById("checkout-name").value;
            const buyerPhone = document.getElementById("checkout-phone").value;
            const buyerAddress = document.getElementById("checkout-address").value;
            const deliveryMode = document.getElementById("checkout-delivery").value;

            // Generate WhatsApp Order Message
            let msg = `*AMMA VEEDU TRADITIONAL FOODS - PRICE INQUIRY*\n`;
            msg += `--------------------------------------\n`;
            msg += `*Name:* ${buyerName}\n`;
            msg += `*WhatsApp/Phone:* ${buyerPhone}\n`;
            msg += `*Address:* ${buyerAddress}\n`;
            msg += `*Delivery Mode:* ${deliveryMode === "delivery" ? "Home Delivery" : "Store Pickup (Nellikuppam)"}\n`;
            msg += `*Status:* Price Quote Requested (Unpriced Items)\n`;
            msg += `--------------------------------------\n`;
            msg += `*ITEMS INQUIRED:*\n\n`;

            cart.forEach((item, index) => {
                msg += `${index + 1}. *${item.name}* (${item.weight})\n`;
                msg += `   Quantity: ${item.quantity}  -  *Price on Request*\n\n`;
            });

            msg += `--------------------------------------\n`;
            msg += `Please quote the packaging, shipping costs, and dispatch details for the items listed above. Thank you!`;

            const encodedMsg = encodeURIComponent(msg);
            const storeNumber = "919600750495"; 
            const whatsappUrl = `https://wa.me/${storeNumber}?text=${encodedMsg}`;

            // Clear Cart and Form after checkout
            setTimeout(() => {
                cart = [];
                saveCartToLocalStorage();
                updateCartUI();
                checkoutOrderForm.reset();
                cartDrawerBackdrop.classList.remove("open");
                // Re-render grids if any
                const pageType = document.body.getAttribute("data-page");
                if (pageType === "home") renderHomeProducts();
                if (pageType === "category") renderCategoryProducts();
            }, 1000);

            window.open(whatsappUrl, "_blank");
        });
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
        // Load initial theme
        const cachedTheme = localStorage.getItem("ammavedu_theme") || "light";
        document.documentElement.setAttribute("data-theme", cachedTheme);

        themeToggleBtn.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = activeTheme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("ammavedu_theme", newTheme);
        });
    }

    // Header Search Input
    const storeSearchInput = document.getElementById("store-search-input");
    const mobileSearchInput = document.getElementById("mobile-search-input");

    if (storeSearchInput) {
        storeSearchInput.addEventListener("input", (e) => {
            const val = e.target.value;
            // If on homepage, search handles grid filtering. If on other pages, pressing enter or typing could redirect or we filter category pages if search is synchronized
            const pageType = document.body.getAttribute("data-page") || "home";
            if (pageType === "home") {
                searchQuery = val;
                renderHomeProducts();
            } else if (pageType === "category") {
                searchQuery = val;
                renderCategoryProducts();
            }
        });
    }
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener("input", (e) => {
            const val = e.target.value;
            searchQuery = val;
            if (storeSearchInput) storeSearchInput.value = val;
            const pageType = document.body.getAttribute("data-page") || "home";
            if (pageType === "home") renderHomeProducts();
            if (pageType === "category") renderCategoryProducts();
        });
    }

    // Initialize Cart UI count badges and drawers
    updateCartUI();

    // Sticky header shadow change on scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.boxShadow = "var(--shadow-md)";
            header.style.backgroundColor = document.documentElement.getAttribute("data-theme") === "dark" 
                ? "rgba(21, 18, 16, 0.95)" 
                : "rgba(250, 247, 240, 0.95)";
        } else {
            header.style.boxShadow = "none";
            header.style.backgroundColor = document.documentElement.getAttribute("data-theme") === "dark" 
                ? "rgba(21, 18, 16, 0.85)" 
                : "rgba(250, 247, 240, 0.85)";
        }
    });
}

// ==========================================================================
// HOME PAGE STUFF
// ==========================================================================
function initHomePage() {
    const productsGridContainer = document.getElementById("products-grid-container");
    const categoryFilterList = document.getElementById("category-filter-list");
    const sortSelect = document.getElementById("sort-select");

    // Checkbox elements
    const chkGlutenFree = document.getElementById("chk-gluten-free");
    const chkImmunity = document.getElementById("chk-immunity");
    const chkSweetener = document.getElementById("chk-sweetener");
    const totalCountEl = document.getElementById("total-products-count");

    if (totalCountEl) totalCountEl.textContent = PRODUCTS.length;

    // Filter events
    if (categoryFilterList) {
        categoryFilterList.addEventListener("click", (e) => {
            const btn = e.target.closest(".cat-btn");
            if (!btn) return;
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderHomeProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            selectedSort = e.target.value;
            renderHomeProducts();
        });
    }

    if (chkGlutenFree) {
        chkGlutenFree.addEventListener("change", (e) => {
            activeTags["gluten-free"] = e.target.checked;
            renderHomeProducts();
        });
    }
    if (chkImmunity) {
        chkImmunity.addEventListener("change", (e) => {
            activeTags["immunity"] = e.target.checked;
            renderHomeProducts();
        });
    }
    if (chkSweetener) {
        chkSweetener.addEventListener("change", (e) => {
            activeTags["natural-sweetener"] = e.target.checked;
            renderHomeProducts();
        });
    }

    // Reset button
    const resetAllFiltersBtn = document.getElementById("reset-all-filters-btn");
    if (resetAllFiltersBtn) {
        resetAllFiltersBtn.addEventListener("click", () => {
            searchQuery = "";
            const s1 = document.getElementById("store-search-input");
            const s2 = document.getElementById("mobile-search-input");
            if (s1) s1.value = "";
            if (s2) s2.value = "";
            
            if (sortSelect) sortSelect.value = "default";
            selectedSort = "default";
            
            if (chkGlutenFree) chkGlutenFree.checked = false;
            if (chkImmunity) chkImmunity.checked = false;
            if (chkSweetener) chkSweetener.checked = false;
            activeTags = { "gluten-free": false, "immunity": false, "natural-sweetener": false };

            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            const catAll = document.getElementById("cat-all");
            if (catAll) catAll.classList.add("active");
            currentCategory = "all";

            renderHomeProducts();
        });
    }

    // Initial render
    renderHomeProducts();
}

function renderHomeProducts() {
    const grid = document.getElementById("products-grid-container");
    if (!grid) return;

    grid.innerHTML = "";

    // 1. Filter Category
    let filtered = PRODUCTS.filter(prod => {
        if (currentCategory === "all") return true;
        return prod.category === currentCategory;
    });

    // 2. Filter Search
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(prod => {
            return prod.name.toLowerCase().includes(query) || 
                   prod.tamilName.toLowerCase().includes(query) ||
                   prod.shortDescription.toLowerCase().includes(query) ||
                   prod.description.toLowerCase().includes(query) ||
                   prod.benefits.toLowerCase().includes(query);
        });
    }

    // 3. Filter Tags
    if (activeTags["gluten-free"]) {
        filtered = filtered.filter(prod => prod.tags.includes("gluten-free"));
    }
    if (activeTags["immunity"]) {
        filtered = filtered.filter(prod => prod.tags.includes("immunity-booster") || prod.tags.includes("immunity"));
    }
    if (activeTags["natural-sweetener"]) {
        filtered = filtered.filter(prod => prod.tags.includes("natural-sweetener"));
    }

    // 4. Sort
    if (selectedSort === "price-low" || selectedSort === "price-high") {
        // Since prices are blank, sorting leaves them, but we sort alphabetically as backup
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Display counts
    const displayedCountEl = document.getElementById("displayed-products-count");
    if (displayedCountEl) displayedCountEl.textContent = filtered.length;

    const noResultsState = document.getElementById("no-results-state");
    if (filtered.length === 0) {
        if (noResultsState) noResultsState.classList.remove("hidden");
        grid.classList.add("hidden");
    } else {
        if (noResultsState) noResultsState.classList.add("hidden");
        grid.classList.remove("hidden");

        filtered.forEach(product => {
            const card = createHomeCard(product);
            grid.appendChild(card);
        });
    }
}

function createHomeCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    const cartItem = cart.find(item => item.id === product.id);
    
    // Cart actions
    let actionBtnHtml = "";
    if (cartItem) {
        actionBtnHtml = `
            <div class="quantity-controller" style="margin-top:10px;">
                <button class="qty-btn qty-minus-btn" data-id="${product.id}">-</button>
                <span class="qty-val">${cartItem.quantity}</span>
                <button class="qty-btn qty-plus-btn" data-id="${product.id}">+</button>
            </div>
        `;
    } else {
        actionBtnHtml = `
            <button class="add-cart-btn card-add-btn" data-id="${product.id}" style="margin-top:10px;">
                <i class="fa-solid fa-basket-shopping"></i> Add
            </button>
        `;
    }

    card.innerHTML = `
        <div class="product-img-wrapper" style="cursor:pointer;">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="prod-badge badge-organic" style="position:absolute; top:12px; left:12px;">In Stock</span>
        </div>
        <div class="product-card-body" style="padding:16px;">
            <span class="product-category-lbl" style="text-transform:uppercase; font-size:0.75rem; color:var(--color-primary); font-weight:700;">${product.category}</span>
            <h3 class="product-title" style="margin-top:4px; font-size:1.15rem; cursor:pointer;">${product.name}</h3>
            <span class="tamil-script" style="font-size:0.85rem; font-weight:700; color:var(--color-text-muted); display:block; margin-top:-2px;">${product.tamilName || ''}</span>
            <p class="product-short-desc" style="font-size:0.85rem; color:var(--color-text-muted); margin-top:8px; line-height:1.4;">${product.shortDescription.substring(0, 85)}...</p>
        </div>
        <div class="product-card-footer" style="padding:0 16px 16px 16px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--color-border); padding-top:12px;">
            <div class="price-box" style="display:flex; flex-direction:column;">
                <span class="price-amt" style="font-size:1rem; font-weight:700; color:var(--color-secondary);">Price on Request</span>
            </div>
            <div class="cart-footer-area">
                ${actionBtnHtml}
            </div>
        </div>
    `;

    // Click triggers
    const openProductPage = () => {
        window.location.href = `/products/${product.category}/${product.id}/`;
    };
    card.querySelector(".product-img-wrapper").addEventListener("click", openProductPage);
    card.querySelector(".product-title").addEventListener("click", openProductPage);

    // Quantity modifiers
    const addBtn = card.querySelector(".card-add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            addToCart(product.id, product.sizes[0]);
            renderHomeProducts();
        });
    }

    const minusBtn = card.querySelector(".qty-minus-btn");
    const plusBtn = card.querySelector(".qty-plus-btn");
    if (minusBtn) {
        minusBtn.addEventListener("click", () => {
            updateCartQuantity(product.id, product.sizes[0], -1);
            renderHomeProducts();
        });
    }
    if (plusBtn) {
        plusBtn.addEventListener("click", () => {
            updateCartQuantity(product.id, product.sizes[0], 1);
            renderHomeProducts();
        });
    }

    return card;
}

// ==========================================================================
// PRODUCT DETAIL PAGE INITIALIZATION
// ==========================================================================
function initProductPage(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Hook variant selector
    const sizeSelect = document.getElementById("product-size-select");
    const skuDisplay = document.getElementById("product-sku-display");
    const addBtn = document.getElementById("detail-add-to-cart-btn");
    const waInquiryBtn = document.getElementById("detail-whatsapp-inquiry-btn");

    function updateProductDetails() {
        const selectedIndex = sizeSelect ? parseInt(sizeSelect.value) : 0;
        const selectedWeight = product.sizes[selectedIndex];
        
        // Update SKU
        if (skuDisplay) {
            skuDisplay.textContent = `${product.baseSku}-${selectedWeight.toUpperCase()}`;
        }

        // Update WhatsApp message
        if (waInquiryBtn) {
            const baseMsg = `Hi, I am interested in buying ${product.name} (${selectedWeight}) from Amma Veedu Traditional Foods. Please quote the price and shipping costs. Thank you!`;
            waInquiryBtn.href = `https://wa.me/919600750495?text=${encodeURIComponent(baseMsg)}`;
        }
    }

    if (sizeSelect) {
        sizeSelect.addEventListener("change", updateProductDetails);
    }
    updateProductDetails(); // Initial call

    // Add to cart click
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const selectedIndex = sizeSelect ? parseInt(sizeSelect.value) : 0;
            const selectedWeight = product.sizes[selectedIndex];
            addToCart(product.id, selectedWeight);
            
            // Visual feedback on button
            const originalText = addBtn.innerHTML;
            addBtn.innerHTML = `<i class="fa-solid fa-check"></i> Added to Basket`;
            addBtn.style.backgroundColor = "var(--color-secondary)";
            setTimeout(() => {
                addBtn.innerHTML = originalText;
                addBtn.style.backgroundColor = "";
            }, 1500);
        });
    }

    // Tabs navigation
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetPane = document.getElementById(`tab-${tabId}`);
            if (targetPane) targetPane.classList.add("active");
        });
    });

    // Render recommended products (3 other items in the same category)
    const recGrid = document.getElementById("related-products-grid");
    if (recGrid) {
        recGrid.innerHTML = "";
        const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        related.forEach(item => {
            const card = createHomeCard(item);
            recGrid.appendChild(card);
        });
    }
}

// ==========================================================================
// CATEGORY LANDING PAGE INITIALIZATION
// ==========================================================================
function initCategoryPage(categoryId) {
    // Listeners for category landing page filters
    const filterWeightGroup = document.getElementById("filter-weight-group");
    const filterPriceGroup = document.getElementById("filter-price-group");
    const filterStockGroup = document.getElementById("filter-stock-group");
    const sortSelect = document.getElementById("category-sort-select");

    const category = CATEGORIES[categoryId];
    const totalCountEl = document.getElementById("total-products-count");
    const catProducts = PRODUCTS.filter(p => p.category === categoryId);
    if (totalCountEl) totalCountEl.textContent = catProducts.length;

    // Weight filters changes
    if (filterWeightGroup) {
        filterWeightGroup.addEventListener("change", () => {
            const checked = filterWeightGroup.querySelectorAll("input[name='weight-filter']:checked");
            activeWeightFilters = Array.from(checked).map(c => c.value);
            renderCategoryProducts();
        });
    }

    // Price filters changes
    if (filterPriceGroup) {
        filterPriceGroup.addEventListener("change", () => {
            const checked = filterPriceGroup.querySelectorAll("input[name='price-filter']:checked");
            activePriceFilters = Array.from(checked).map(c => c.value);
            renderCategoryProducts();
        });
    }

    // Stock availability changes
    if (filterStockGroup) {
        filterStockGroup.addEventListener("change", () => {
            const checked = filterStockGroup.querySelectorAll("input[name='stock-filter']:checked");
            activeStockFilters = Array.from(checked).map(c => c.value);
            renderCategoryProducts();
        });
    }

    // Sort select changes
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            selectedSort = e.target.value;
            renderCategoryProducts();
        });
    }

    // Mobile Sidebar slide control on category page
    const mobileFilterToggleBtn = document.getElementById("mobile-filter-toggle-btn");
    const storeSidebar = document.getElementById("store-sidebar");

    if (mobileFilterToggleBtn && storeSidebar) {
        mobileFilterToggleBtn.addEventListener("click", () => {
            storeSidebar.classList.add("open");
        });
        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024) {
                if (!storeSidebar.contains(e.target) && e.target !== mobileFilterToggleBtn) {
                    storeSidebar.classList.remove("open");
                }
            }
        });
    }

    // Initial render
    currentCategory = categoryId;
    renderCategoryProducts();
}

function renderCategoryProducts() {
    const grid = document.getElementById("category-products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // 1. Filter by Category
    let filtered = PRODUCTS.filter(p => p.category === currentCategory);

    // 2. Filter by Weight Size
    if (activeWeightFilters.length > 0) {
        filtered = filtered.filter(prod => {
            return prod.sizes.some(s => activeWeightFilters.includes(s));
        });
    }

    // 3. Filter by Availability
    if (activeStockFilters.length > 0 && !activeStockFilters.includes("in-stock")) {
        // If "In Stock" is unchecked, match nothing or show out of stock (we don't have out of stock in this catalog)
        filtered = [];
    }

    // 4. Filter by Search Query
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(prod => {
            return prod.name.toLowerCase().includes(query) || 
                   prod.tamilName.toLowerCase().includes(query) ||
                   prod.shortDescription.toLowerCase().includes(query);
        });
    }

    // 5. Sorting
    if (selectedSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Display counts
    const displayedCountEl = document.getElementById("displayed-products-count");
    if (displayedCountEl) displayedCountEl.textContent = filtered.length;

    const noResultsState = document.getElementById("no-results-state");
    if (filtered.length === 0) {
        if (noResultsState) noResultsState.classList.remove("hidden");
        grid.classList.add("hidden");
    } else {
        if (noResultsState) noResultsState.classList.add("hidden");
        grid.classList.remove("hidden");

        filtered.forEach(product => {
            const card = createHomeCard(product);
            grid.appendChild(card);
        });
    }
}

// ==========================================================================
// CORE CART OPERATIONS
// ==========================================================================
function addToCart(productId, weight) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIdx = cart.findIndex(item => item.id === productId && item.weight === weight);

    if (existingIdx > -1) {
        cart[existingIdx].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            tamilName: product.tamilName,
            price: null, // Price on Request
            weight: weight,
            image: product.image,
            quantity: 1
        });
    }

    saveCartToLocalStorage();
    updateCartUI();
}

function updateCartQuantity(productId, weight, delta) {
    const idx = cart.findIndex(item => item.id === productId && item.weight === weight);
    if (idx === -1) return;

    cart[idx].quantity += delta;

    if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
    }

    saveCartToLocalStorage();
    updateCartUI();
}

function updateCartUI() {
    const cartCountBadge = document.getElementById("cart-count-badge");
    const floatingCartBadge = document.getElementById("floating-cart-badge");
    const floatingStickyCartBtn = document.getElementById("floating-sticky-cart-btn");
    const cartItemsWrapper = document.getElementById("cart-items-wrapper");
    const emptyCartState = document.getElementById("empty-cart-state");
    const checkoutFormWrapper = document.getElementById("checkout-form-wrapper");
    const cartDrawerFooter = document.getElementById("cart-drawer-footer");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (floatingCartBadge) floatingCartBadge.textContent = totalItems;

    if (totalItems > 0) {
        if (cartCountBadge) cartCountBadge.classList.remove("hidden");
        if (floatingStickyCartBtn) floatingStickyCartBtn.classList.add("visible");
    } else {
        if (cartCountBadge) cartCountBadge.classList.add("hidden");
        if (floatingStickyCartBtn) floatingStickyCartBtn.classList.remove("visible");
    }

    if (!cartItemsWrapper) return;
    cartItemsWrapper.innerHTML = "";

    if (cart.length === 0) {
        if (emptyCartState) emptyCartState.classList.remove("hidden");
        if (checkoutFormWrapper) checkoutFormWrapper.classList.add("hidden");
        if (cartDrawerFooter) cartDrawerFooter.classList.add("hidden");
    } else {
        if (emptyCartState) emptyCartState.classList.add("hidden");
        if (checkoutFormWrapper) checkoutFormWrapper.classList.remove("hidden");
        if (cartDrawerFooter) cartDrawerFooter.classList.remove("hidden");

        cart.forEach(item => {
            const itemRow = document.createElement("div");
            itemRow.className = "cart-item";
            itemRow.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-meta">Size: ${item.weight} | Price on Request</span>
                    <button class="remove-cart-item-btn" data-id="${item.id}" data-weight="${item.weight}">
                        <i class="fa-regular fa-trash-can"></i> Remove
                    </button>
                </div>
                <div class="cart-item-actions">
                    <span class="cart-item-price">TBD</span>
                    <div class="quantity-controller">
                        <button class="qty-btn item-qty-minus" data-id="${item.id}" data-weight="${item.weight}">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn item-qty-plus" data-id="${item.id}" data-weight="${item.weight}">+</button>
                    </div>
                </div>
            `;

            // Row actions
            itemRow.querySelector(".remove-cart-item-btn").addEventListener("click", () => {
                cart = cart.filter(p => !(p.id === item.id && p.weight === item.weight));
                saveCartToLocalStorage();
                updateCartUI();
                const pageType = document.body.getAttribute("data-page");
                if (pageType === "home") renderHomeProducts();
                if (pageType === "category") renderCategoryProducts();
            });

            itemRow.querySelector(".item-qty-minus").addEventListener("click", () => {
                updateCartQuantity(item.id, item.weight, -1);
                const pageType = document.body.getAttribute("data-page");
                if (pageType === "home") renderHomeProducts();
                if (pageType === "category") renderCategoryProducts();
            });

            itemRow.querySelector(".item-qty-plus").addEventListener("click", () => {
                updateCartQuantity(item.id, item.weight, 1);
                const pageType = document.body.getAttribute("data-page");
                if (pageType === "home") renderHomeProducts();
                if (pageType === "category") renderCategoryProducts();
            });

            cartItemsWrapper.appendChild(itemRow);
        });

        // Update footer totals
        const cartSubtotalVal = document.getElementById("cart-subtotal-val");
        const cartTotalVal = document.getElementById("cart-total-val");
        if (cartSubtotalVal) cartSubtotalVal.textContent = "Price on Request";
        if (cartTotalVal) cartTotalVal.textContent = "Price on Request";
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem("ammavedu_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const stored = localStorage.getItem("ammavedu_cart");
    if (stored) {
        try {
            cart = JSON.parse(stored);
        } catch (e) {
            cart = [];
        }
    }
}
