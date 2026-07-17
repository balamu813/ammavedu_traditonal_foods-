// ==========================================================================
// PRODUCTS DATABASE (27 items across 5 categories)
// ==========================================================================
const PRODUCTS = [
    // 1. Flour & Millet Products
    {
        id: "ragi-flour",
        name: "Ragi Flour (Kezhvaragu Maavu)",
        tamilName: "கேழ்வரகு மாவு",
        category: "flour-millets",
        image: "assets/ragi_flour.png",
        shortDescription: "Finely ground organic finger millet. Rich in calcium and iron.",
        description: "Our Ragi Flour is stone-ground from premium organic finger millets. Slow-milled at low temperatures to ensure that vital nutrients, dietary fiber, and enzymes are fully preserved.",
        benefits: "High calcium for bone health, regulates blood sugar levels, excellent baby food staple.",
        ingredients: "100% Organic Finger Millet (Ragi).",
        usage: "Ideal for making Ragi Koozh, Ragi Kali, soft Ragi Rotis, and traditional porridge.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 65 },
            { weight: "1kg", price: 120 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "kambu-flour",
        name: "Kambu Flour (Pearl Millet)",
        tamilName: "கம்பு மாவு",
        category: "flour-millets",
        image: "assets/kambu_flour.png",
        shortDescription: "Nutritious pearl millet flour, a perfect traditional summer coolant.",
        description: "Stone-ground Pearl Millet flour packed with essential proteins and magnesium. A core staple in traditional Tamil agriculture known for its cooling properties.",
        benefits: "Naturally cools the body, rich in dietary fiber, aids digestion.",
        ingredients: "100% Cleaned Pearl Millet (Kambu).",
        usage: "Best for Kambu Koozh, Kambu Adai, and healthy pearl millet flatbreads.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 70 },
            { weight: "1kg", price: 130 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "thinai-flour",
        name: "Thinai Flour (Foxtail Millet)",
        tamilName: "தினை மாவு",
        category: "flour-millets",
        image: "assets/thinai_flour.png",
        shortDescription: "Heirloom Foxtail Millet flour. High in protein and mineral content.",
        description: "Pure stone-ground Foxtail Millet flour. A traditional grain cultivated since the Sangam era, prized for its stamina-building nutrients.",
        benefits: "Improves heart health, boosts immunity, regulates cholesterol levels.",
        ingredients: "100% Organic Foxtail Millet.",
        usage: "Used for Thinai Kozhukattai, sweet Thinai Puttu (with jaggery), and Millet Dosas.",
        tags: ["gluten-free", "immunity"],
        packs: [
            { weight: "500g", price: 85 },
            { weight: "1kg", price: 160 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "varagu-flour",
        name: "Varagu Flour (Kodo Millet)",
        tamilName: "வரகு மாவு",
        category: "flour-millets",
        image: "assets/varagu_flour.png",
        shortDescription: "Mineral-rich Kodo Millet flour, highly recommended for diabetes management.",
        description: "Slow stone-ground Kodo Millet flour. Extremely low glycemic index and rich in plant antioxidants.",
        benefits: "Excellent for weight loss, helps manage diabetes, high in fiber.",
        ingredients: "100% Whole Kodo Millet.",
        usage: "Perfect for making Varagu Dosa, Varagu Idiyaapam, and healthy porridge mixes.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 80 },
            { weight: "1kg", price: 150 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "multi-millet-health-mix",
        name: "Multi Millet Health Mix",
        tamilName: "சத்து மாவு",
        category: "flour-millets",
        image: "assets/health_mix.png",
        shortDescription: "Sprouted multi-grain nutrition mix for all ages.",
        description: "A balanced health powder blending 12 sprouted millets, grains, and nuts. Roasted and milled to create an instant nutrition boost.",
        benefits: "Aids growth in kids, boosts morning energy levels, rich in micronutrients.",
        ingredients: "Ragi, Kambu, Thinai, Varagu, Jowar, Wheat, Barley, Roasted Gram, Almonds, Cashews, Cardamom.",
        usage: "Mix 2 tbsp in water/milk, boil for 5 minutes, sweeten with jaggery or country sugar.",
        tags: ["immunity"],
        packs: [
            { weight: "500g", price: 190 },
            { weight: "1kg", price: 370 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "health-drink-mix",
        name: "Health Drink Mix",
        tamilName: "ஹெல்த் ட்ரிங்க் மிக்ஸ்",
        category: "flour-millets",
        image: "assets/health_drink.png",
        shortDescription: "Roasted grain beverage powder for daily nourishment.",
        description: "A nourishing blend of traditional grains, dry ginger, and cardamom. Perfect caffeine-free morning drink.",
        benefits: "Aids digestive system, provides slow-release energy, rich in calcium.",
        ingredients: "Sprouted Millets, Roasted Gram, Dry Ginger, Cardamom.",
        usage: "Boil with milk or water, add palm sugar to taste, serve warm.",
        tags: ["immunity"],
        packs: [
            { weight: "250g", price: 110 },
            { weight: "500g", price: 210 }
        ],
        defaultPackIndex: 0
    },

    // 2. Rice & Traditional Staples
    {
        id: "mapillai-samba-rice",
        name: "Mapillai Samba Rice",
        tamilName: "மாப்பிள்ளை சம்பா அரிசி",
        category: "rice-staples",
        image: "assets/mapillai_samba_rice.png",
        shortDescription: "Traditional red rice known for strength and stamina building.",
        description: "An ancient Tamil red rice variety. Historically given to bridegrooms to show their strength. Rich in iron, zinc, and dietary fiber.",
        benefits: "Builds muscle strength, boosts immunity, high in dietary fiber.",
        ingredients: "100% Unpolished Mapillai Samba Rice.",
        usage: "Ideal for boiled rice, traditional idli batter, and heritage rice porridge.",
        tags: ["gluten-free", "immunity"],
        packs: [
            { weight: "1kg", price: 110 },
            { weight: "5kg", price: 530 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "karuppu-kavuni-rice",
        name: "Karuppu Kavuni Rice (Black Rice)",
        tamilName: "கருப்பு கவுனி அரிசி",
        category: "rice-staples",
        image: "assets/karuppu_kavuni_rice.png",
        shortDescription: "Antioxidant-rich black rice, ancient emperor's grain.",
        description: "Highly nutritious deep purple/black rice. Loaded with anthocyanin antioxidants, iron, and fibers.",
        benefits: "Highest antioxidant content among grains, aids weight management, detoxifies liver.",
        ingredients: "100% Unpolished Black Kavuni Rice.",
        usage: "Excellent for making sweet Kavuni Arisi Puttu, payasam, and sweet rice pudding.",
        tags: ["gluten-free", "immunity"],
        packs: [
            { weight: "1kg", price: 160 },
            { weight: "5kg", price: 770 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "kichili-samba-rice",
        name: "Kichili Samba Rice",
        tamilName: "கிச்சிலி சம்பா அரிசி",
        category: "rice-staples",
        image: "assets/kichili_samba_rice.png",
        shortDescription: "Fine grain white traditional rice. Great for everyday meals.",
        description: "A fine-grained traditional rice variety. It has a low glycemic index compared to modern white rice, making it perfect for daily lunches.",
        benefits: "Easily digestible, strengthens core muscles, low glycemic index.",
        ingredients: "100% Semi-polished Kichili Samba Rice.",
        usage: "Standard cooking rice. Use as replacement for white Ponni rice.",
        tags: ["gluten-free"],
        packs: [
            { weight: "1kg", price: 95 },
            { weight: "5kg", price: 460 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "poongar-rice",
        name: "Poongar Rice (Women's Rice)",
        tamilName: "பூங்கார் அரிசி",
        category: "rice-staples",
        image: "assets/poongar_rice.png",
        shortDescription: "Traditional red rice highly beneficial for women's health.",
        description: "A traditional red rice crop known to withstand droughts. Rich in minerals, it is historically recommended for women during pregnancy and nursing.",
        benefits: "Balances hormones, high in iron, strengthens immune response.",
        ingredients: "100% Unpolished Poongar Rice.",
        usage: "Highly suited for making soft idlis, dosas, and kanji (porridge).",
        tags: ["gluten-free", "immunity"],
        packs: [
            { weight: "1kg", price: 120 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "traditional-rice-flour",
        name: "Traditional Rice Flour",
        tamilName: "அரிசி மாவு",
        category: "rice-staples",
        image: "assets/rice_flour.png",
        shortDescription: "Stone-ground flour made from local unpolished rice.",
        description: "Cleaned and stone-milled raw rice flour. Perfect texture for preparing traditional snacks and kolam designs.",
        benefits: "Gluten-free starch, smooth texture, authentic flavor.",
        ingredients: "100% Ground Rice.",
        usage: "Used for Murukku, Athirasam, Idiyappam, and Kolukattai outer shells.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 50 },
            { weight: "1kg", price: 90 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "aval-beaten-rice",
        name: "Aval (Beaten Rice / Poha)",
        tamilName: "அவல்",
        category: "rice-staples",
        image: "assets/aval_poha.png",
        shortDescription: "Flattened red rice flakes. Easy to digest and instant breakfast.",
        description: "Made from unpolished Mapillai Samba red rice. Flattened using traditional rollers to preserve all natural bran layers.",
        benefits: "Instant energy source, high iron content, light on the stomach.",
        ingredients: "Flattened Red Rice Flakes.",
        usage: "Soak in water or milk, mix with fresh coconut and country sugar, or temper with spices for Poha.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 70 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "puttu-flour",
        name: "Puttu Flour",
        tamilName: "புட்டு மாவு",
        category: "rice-staples",
        image: "assets/puttu_flour.png",
        shortDescription: "Coarsely ground roasted rice flour for perfect steamed puttu.",
        description: "Prepared by soaking, drying, roasting, and coarsely grinding traditional rice. Creates a crumbly, non-sticky texture when steamed.",
        benefits: "Provides stable carbohydrates, easily digestible steamed breakfast.",
        ingredients: "Roasted Raw Rice Flour, Salt.",
        usage: "Moisten with salted water, steam with layers of grated coconut in a puttu maker.",
        tags: ["gluten-free"],
        packs: [
            { weight: "500g", price: 60 }
        ],
        defaultPackIndex: 0
    },

    // 3. Homemade Food Products
    {
        id: "groundnut-chikki",
        name: "Groundnut Chikki (Kadalai Mittai)",
        tamilName: "கடலை மிட்டாய்",
        category: "homemade-products",
        image: "assets/groundnut_chikki.png",
        shortDescription: "Traditional peanut brittle made with pure liquid jaggery.",
        description: "Crispy roasted peanuts set in double-refined organic cane jaggery. Prepared in Kovilpatti style with cardamoms.",
        benefits: "High plant protein, rich in iron, healthy snack for children.",
        ingredients: "Roasted Peanuts, Organic Jaggery, Cardamom, Dry Ginger.",
        usage: "Ready-to-eat sweet treat.",
        tags: ["natural-sweetener"],
        packs: [
            { weight: "250g", price: 60 },
            { weight: "500g", price: 110 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "sesame-urundai",
        name: "Sesame (Ellu) Urundai",
        tamilName: "எள்ளு உருண்டை",
        category: "homemade-products",
        image: "assets/sesame_urundai_cropped.jpg",
        shortDescription: "Sweet sesame seed balls rolled in rich palm jaggery.",
        description: "Traditional sweet spheres made with roasted black sesame seeds and pure melted palm jaggery. A heritage recipe.",
        benefits: "Rich in calcium, loaded with healthy fats, improves hair and skin health.",
        ingredients: "Black Sesame Seeds, Palm Jaggery, Cardamom.",
        usage: "Ready-to-eat.",
        tags: ["natural-sweetener"],
        packs: [
            { weight: "200g (10 units)", price: 80 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "peanut-urundai",
        name: "Peanut Urundai (Kadalai Urundai)",
        tamilName: "கடலை உருண்டை",
        category: "homemade-products",
        image: "assets/peanut_urundai.png",
        shortDescription: "Perfectly roasted peanut balls sweetened with country sugar.",
        description: "Freshly roasted peanuts crushed and bound into delicious balls using rich sticky molasses. Crunchy and sweet.",
        benefits: "Gives instant protein boost, healthy snacking alternative to candies.",
        ingredients: "Peanuts, Jaggery Syrup, Dry Ginger.",
        usage: "Ready-to-eat.",
        tags: ["natural-sweetener"],
        packs: [
            { weight: "200g (10 units)", price: 75 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "karuppu-ulundu-laddu",
        name: "Kaaruppu uludhu laaddu",
        tamilName: "கருப்பு உளுந்து லட்டு",
        category: "homemade-products",
        image: "assets/black_gram_laddu.png",
        shortDescription: "Nutritious black gram sweets sweetened with organic jaggery.",
        description: "Traditional healthy laddu made of roasted black gram (karuppu ulundhu), pure cow ghee, and organic cane sugar/jaggery. Extremely rich in calcium and protein.",
        benefits: "Strengthens bones and spine, high protein content, excellent for women's health.",
        ingredients: "Black Gram (Ulundhu), Cardamom, Jaggery, Cow Ghee.",
        usage: "Ready-to-eat healthy sweet snack.",
        tags: ["natural-sweetener"],
        packs: [
            { weight: "250g", price: 120 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "karuveppilai-laddu",
        name: "Karuvaepillai laaddu",
        tamilName: "கறிவேப்பிலை லட்டு",
        category: "homemade-products",
        image: "assets/curry_leaf_laddu.png",
        shortDescription: "Unique herbal sweet balls rich in iron and vitamins.",
        description: "A healthy herbal sweet made from fresh organic curry leaves (karuveppilai), dry ginger, and natural sweeteners. Promotes hair growth and iron levels.",
        benefits: "Rich source of iron, prevents hair fall, improves digestion and vision.",
        ingredients: "Fresh Curry Leaves, Dry Ginger, Cardamom, Palm Jaggery, Ghee.",
        usage: "Ready-to-eat herbal snack.",
        tags: ["natural-sweetener", "immunity"],
        packs: [
            { weight: "200g", price: 110 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "red-rice-laddu",
        name: "Red rice laaddu",
        tamilName: "சிகப்பரிசி லட்டு",
        category: "homemade-products",
        image: "assets/red_rice_laddu.png",
        shortDescription: "Healthy sweet spheres made of unpolished red rice and cardamom.",
        description: "Delicious laddu prepared from roasted traditional red rice (Mapillai Samba), ground finely and rolled with pure ghee and palm jaggery.",
        benefits: "Rich in fiber, boosts stamina, healthy snack for all age groups.",
        ingredients: "Traditional Red Rice, Ghee, Palm Jaggery, Cashews, Cardamom.",
        usage: "Ready-to-eat sweet snack.",
        tags: ["natural-sweetener"],
        packs: [
            { weight: "250g", price: 100 }
        ],
        defaultPackIndex: 0
    },

    // 4. Pickles & Homemade Masalas
    {
        id: "mango-pickle",
        name: "Mango Pickle",
        tamilName: "மாங்காய் ஊறுகாய்",
        category: "pickles-masalas",
        image: "assets/mango_pickle.jpg",
        shortDescription: "Spicy cut mangoes preserved in wood-pressed sesame oil.",
        description: "Spicy and tangy pickle made with fresh cut raw mangoes, sun-dried spices, and generous amounts of cold-pressed sesame oil.",
        benefits: "Boosts appetite, assists in digestion, contains healthy sesame oil fats.",
        ingredients: "Raw Mango, Red Chilli Powder, Mustard, Fenugreek, Asafoetida, Cold-Pressed Sesame Oil, Salt.",
        usage: "Serve with curd rice, idli, dosa, or hot rice.",
        tags: [],
        packs: [
            { weight: "250g", price: 80 },
            { weight: "500g", price: 150 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "lemon-pickle",
        name: "Lemon Pickle",
        tamilName: "எலுமிச்சை ஊறுகாய்",
        category: "pickles-masalas",
        image: "assets/lemon_pickle.jpg",
        shortDescription: "Traditional salted lemon pickle with zero preservatives.",
        description: "A traditional South Indian lemon pickle. Lemons are slow-cured in salt, red chilli powder, and fenugreek to unlock flavor.",
        benefits: "Vitamin C source, aids in digestion, zero artificial chemical preservatives.",
        ingredients: "Lemon, Chilli Powder, Salt, Mustard, Fenugreek, Gingelly Oil.",
        usage: "Goes wonderfully with curd rice and variety rices.",
        tags: [],
        packs: [
            { weight: "250g", price: 75 }
        ],
        defaultPackIndex: 0
    },

    {
        id: "idli-podi",
        name: "Idli Podi (Gunpowder)",
        tamilName: "இட்லி பொடி",
        category: "pickles-masalas",
        image: "assets/idli_podi.png",
        shortDescription: "Classic dry chutney powder for idli and dosa.",
        description: "Coarse dry spice mix of lentils, sesame, and red chillies. Roasted in small batches to maintain optimal crunch.",
        benefits: "High protein from lentils, convenient side dish.",
        ingredients: "Urad Dal, Bengal Gram, Sesame Seeds, Red Chilli, Hing, Curry Leaves, Salt.",
        usage: "Mix with wood-pressed sesame oil or ghee and use as dip for hot idlis and dosas.",
        tags: [],
        packs: [
            { weight: "250g", price: 85 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "kulambu-milagai-thool",
        name: "Kulambu Milagai Thool",
        tamilName: "குழம்பு மிளகாய்த் தூள்",
        category: "pickles-masalas",
        image: "assets/kulambu_milagai_thool.jpg",
        shortDescription: "Multi-purpose curry spice powder for traditional gravies.",
        description: "Traditional dry-ground masala mixture containing a unique blend of red chillies, coriander, lentils, and spices.",
        benefits: "One-stop masala for all South Indian kuzhambu varieties.",
        ingredients: "Red Chilli, Coriander, Pepper, Cumin, Fennel, Fenugreek, Mustard, Toor Dal, Turmeric.",
        usage: "Add to tamarind base for Vatha Kuzhambu, Garlic Kuzhambu, or fish curry.",
        tags: [],
        packs: [
            { weight: "500g", price: 180 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "curry-leaves-powder",
        name: "Curry Leaves Powder (Karuveppilai Podi)",
        tamilName: "கறிவேப்பிலை பொடி",
        category: "pickles-masalas",
        image: "assets/curry_leaves_powder.jpg",
        shortDescription: "Aromatic, fiber-rich traditional roasted curry leaves spice powder.",
        description: "Prepared with fresh, hand-picked curry leaves slow-roasted and ground with lentils and black pepper. Perfect health supplement for daily meals.",
        benefits: "Excellent source of iron and antioxidants. Helps improve digestion and promotes hair growth.",
        ingredients: "Fresh Curry Leaves, Urad Dal, Bengal Gram, Black Pepper, Cumin, Red Chillies, Salt.",
        usage: "Mix with hot rice and ghee/sesame oil, or serve as a flavorful side for idli and dosa.",
        tags: [],
        packs: [
            { weight: "100g", price: 50 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "turmeric-powder",
        name: "Turmeric Powder (Manjal Thool)",
        tamilName: "மஞ்சள் தூள்",
        category: "pickles-masalas",
        image: "assets/turmeric_powder.png",
        shortDescription: "100% pure, farm-fresh sun-dried turmeric powder.",
        description: "Sun-dried traditional Erode turmeric fingers, slow ground to preserve curcumin content. Offers rich color, aroma, and health benefits.",
        benefits: "Rich in curcumin, powerful anti-inflammatory and antioxidant properties, builds immunity naturally.",
        ingredients: "100% sun-dried Turmeric roots.",
        usage: "Use in daily cooking, or mix 1/2 tsp with warm milk for turmeric latte.",
        tags: ["immunity"],
        packs: [
            { weight: "100g", price: 40 },
            { weight: "250g", price: 90 }
        ],
        defaultPackIndex: 0
    },

    // 5. Traditional Homemade Vathal
    {
        id: "beetroot-vathal",
        name: "Beetroot Vathal",
        tamilName: "பீட்ரூட் வத்தல்",
        category: "homemade-vathal",
        image: "assets/beetroot_vathal.png",
        shortDescription: "Crispy, sun-dried beetroot slices with organic spices.",
        description: "Healthy sun-dried beetroot vathal made with fresh beetroot slices, salt, and traditional spices. Cleaned and dried under sun hygienically.",
        benefits: "Retains organic nitrates and fiber of beetroots, zero preservatives, natural snack.",
        ingredients: "Beetroot Slices, Salt, Lemon Juice, Spices.",
        usage: "Deep fry in hot oil for 5-10 seconds until crispy. Serve with variety rice or curd rice.",
        tags: [],
        packs: [
            { weight: "100g", price: 60 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "carrot-vathal",
        name: "Carrot Vathal",
        tamilName: "கேரட் வத்தல்",
        category: "homemade-vathal",
        image: "assets/carrot_vathal.jpg",
        shortDescription: "Deliciously crispy sun-dried carrot crisps.",
        description: "Authentic South Indian vathal made from thinly sliced carrots cured with salt and dried in the clean sun.",
        benefits: "Rich in beta-carotene and dietary fibers, no added artificial color.",
        ingredients: "Sun-dried Carrot, Salt, Cumin.",
        usage: "Deep fry in oil and enjoy as a crunchy side dish for South Indian meals.",
        tags: [],
        packs: [
            { weight: "100g", price: 60 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "poosanikkai-vathal",
        name: "Pumpkin / Poosanikkai Vathal",
        tamilName: "பூசணிக்காய் வத்தல்",
        category: "homemade-vathal",
        image: "assets/poosanikkai_vathal.png",
        shortDescription: "Traditional sun-dried ash gourd pumpkin crisps.",
        description: "Traditional ash gourd (white pumpkin) vathal made using native varieties, cured with sour curd and green chillies before sun-drying.",
        benefits: "Highly alkaline superfood, cools the body, aids digestion.",
        ingredients: "Ash Gourd, Curd, Green Chillies, Salt, Asafoetida.",
        usage: "Fry in hot oil till crisp and golden. Best paired with sambar or rasam rice.",
        tags: [],
        packs: [
            { weight: "150g", price: 80 }
        ],
        defaultPackIndex: 0
    },
    {
        id: "onion-vathal",
        name: "Onion Vathal",
        tamilName: "வெங்காய வத்தல்",
        category: "homemade-vathal",
        image: "assets/onion_vathal.png",
        shortDescription: "Aromatic sun-dried small onion crisps / vadagam.",
        description: "Highly aromatic vathal made with minced small onions (shallots), garlic, and hand-ground spices, dried carefully under the sun.",
        benefits: "Imparts rich onion flavor, stimulates digestion, completely homemade.",
        ingredients: "Small Onions, Garlic, Mustard, Cumin, Fenugreek, Castor Oil, Salt.",
        usage: "Deep fry in oil to eat as side dish, or use as tempering (tadka) for traditional curries.",
        tags: [],
        packs: [
            { weight: "150g", price: 90 }
        ],
        defaultPackIndex: 0
    }
];

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

// ==========================================================================
// DOM ELEMENTS REFERENCE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Nav menu elements
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    const mobileNavClose = document.getElementById("mobile-nav-close");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobNavLinks = document.querySelectorAll(".mobile-nav-link");
    const footerCategoryLinks = document.querySelectorAll(".footer-category-link");
    
    // Store elements
    const productsGridContainer = document.getElementById("products-grid-container");
    const displayedCountEl = document.getElementById("displayed-products-count");
    const totalCountEl = document.getElementById("total-products-count");
    const categoryFilterList = document.getElementById("category-filter-list");
    const storeSearchInput = document.getElementById("store-search-input");
    const mobileSearchInput = document.getElementById("mobile-search-input");
    const sortSelect = document.getElementById("sort-select");
    const noResultsState = document.getElementById("no-results-state");
    const resetAllFiltersBtn = document.getElementById("reset-all-filters-btn");
    const mobileFilterToggleBtn = document.getElementById("mobile-filter-toggle-btn");
    const storeSidebar = document.getElementById("store-sidebar");

    // Checkbox elements
    const chkGlutenFree = document.getElementById("chk-gluten-free");
    const chkImmunity = document.getElementById("chk-immunity");
    const chkSweetener = document.getElementById("chk-sweetener");
    
    // Cart elements
    const cartTriggerBtn = document.getElementById("cart-trigger-btn");
    const cartCountBadge = document.getElementById("cart-count-badge");
    const cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
    const cartDrawerContainer = document.getElementById("cart-drawer-container");
    const cartCloseBtn = document.getElementById("cart-close-btn");
    const cartItemsWrapper = document.getElementById("cart-items-wrapper");
    const emptyCartState = document.getElementById("empty-cart-state");
    const checkoutFormWrapper = document.getElementById("checkout-form-wrapper");
    const cartDrawerFooter = document.getElementById("cart-drawer-footer");
    
    const cartSubtotalVal = document.getElementById("cart-subtotal-val");
    const cartTotalVal = document.getElementById("cart-total-val");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const placeWhatsappOrderBtn = document.getElementById("place-whatsapp-order-btn");
    const checkoutOrderForm = document.getElementById("checkout-order-form");
    const floatingStickyCartBtn = document.getElementById("floating-sticky-cart-btn");
    const floatingCartBadge = document.getElementById("floating-cart-badge");
    const drawerShopNowBtn = document.getElementById("drawer-shop-now-btn");

    // Modal elements
    const quickviewModalBackdrop = document.getElementById("quickview-modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBodyContent = document.getElementById("modal-body-content");

    // Form elements
    const contactForm = document.getElementById("contact-form-element");
    const contactSuccessBanner = document.getElementById("contact-success-banner");
    const contactResetBtn = document.getElementById("contact-reset-btn");
    const newsletterForm = document.getElementById("newsletter-form");
    const newsletterMsg = document.getElementById("newsletter-msg");

    // Theme toggle
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    
    // LocalStorage Initialization
    loadCartFromLocalStorage();

    // ==========================================================================
    // INITIALIZATION & RENDER
    // ==========================================================================
    totalCountEl.textContent = PRODUCTS.length;
    renderProducts();
    updateCartUI();

    // Sticky header shadow change on scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
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

    // ==========================================================================
    // SHOP & FILTER CORE LOGIC
    // ==========================================================================
    function renderProducts() {
        // Clear Grid
        productsGridContainer.innerHTML = "";

        // 1. Filter by category
        let filtered = PRODUCTS.filter(prod => {
            if (currentCategory === "all") return true;
            return prod.category === currentCategory;
        });

        // 2. Filter by Search Query
        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase().trim();
            filtered = filtered.filter(prod => {
                return prod.name.toLowerCase().includes(query) || 
                       prod.tamilName.includes(query) ||
                       prod.shortDescription.toLowerCase().includes(query) ||
                       prod.benefits.toLowerCase().includes(query) ||
                       prod.ingredients.toLowerCase().includes(query);
            });
        }

        // 3. Filter by Checkboxes (Tags)
        Object.keys(activeTags).forEach(tag => {
            if (activeTags[tag]) {
                filtered = filtered.filter(prod => prod.tags.includes(tag));
            }
        });

        // 4. Sort
        if (selectedSort === "price-low") {
            filtered.sort((a, b) => a.packs[a.defaultPackIndex].price - b.packs[b.defaultPackIndex].price);
        } else if (selectedSort === "price-high") {
            filtered.sort((a, b) => b.packs[b.defaultPackIndex].price - a.packs[a.defaultPackIndex].price);
        } else if (selectedSort === "name-asc") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        // Update count stats
        displayedCountEl.textContent = filtered.length;

        // No results state toggler
        if (filtered.length === 0) {
            noResultsState.classList.remove("hidden");
            productsGridContainer.classList.add("hidden");
        } else {
            noResultsState.classList.add("hidden");
            productsGridContainer.classList.remove("hidden");
            
            // Build Cards
            filtered.forEach(product => {
                const card = createProductCardElement(product);
                productsGridContainer.appendChild(card);
            });
        }
    }

    function createProductCardElement(product) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);

        // Find selected pack config
        // Default check if item in cart, if yes we get its selected weight index
        const cartItem = cart.find(item => item.id === product.id);
        const selectedPackIndex = cartItem ? cartItem.packIndex : product.defaultPackIndex;
        const currentPack = product.packs[selectedPackIndex];

        // Badges HTML
        let badgesHtml = "";
        if (product.tags.includes("gluten-free")) {
            badgesHtml += `<span class="prod-badge badge-gf">Gluten Free</span>`;
        }
        if (product.tags.includes("immunity")) {
            badgesHtml += `<span class="prod-badge badge-organic">Immunity</span>`;
        }
        if (product.tags.includes("natural-sweetener")) {
            badgesHtml += `<span class="prod-badge badge-special">Jaggery</span>`;
        }

        // Pack select options
        let packOptionsHtml = "";
        product.packs.forEach((pack, index) => {
            const selectedAttr = index === selectedPackIndex ? "selected" : "";
            packOptionsHtml += `<option value="${index}" ${selectedAttr}>${pack.weight}</option>`;
        });

        // Cart button section (Add to Cart OR Quantity controller)
        let cartFooterActions = "";
        if (cartItem) {
            cartFooterActions = `
                <div class="quantity-controller">
                    <button class="qty-btn qty-minus-btn" data-id="${product.id}" aria-label="Decrease quantity">-</button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="qty-btn qty-plus-btn" data-id="${product.id}" aria-label="Increase quantity">+</button>
                </div>
            `;
        } else {
            cartFooterActions = `
                <button class="add-cart-btn card-add-to-cart-trigger" data-id="${product.id}">
                    <i class="fa-solid fa-basket-shopping"></i> Add
                </button>
            `;
        }

        card.innerHTML = `
            <div class="product-img-wrapper card-img-click">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">${badgesHtml}</div>
                <div class="quick-view-overlay"><span>Quick View</span></div>
            </div>
            <div class="product-card-body">
                <span class="product-category-lbl">${product.category.replace('-', ' & ')}</span>
                <h3 class="product-title card-title-click">${product.name}</h3>
                <span class="tamil-script" style="font-size: 0.85rem; font-weight:600; color: var(--color-primary-light); margin-top: -6px;">${product.tamilName}</span>
                <p class="product-short-desc">${product.shortDescription}</p>
                
                ${product.packs.length > 1 ? `
                    <div class="product-pack-row">
                        <span class="pack-lbl">Select Pack:</span>
                        <select class="pack-select pack-selector-dropdown" data-id="${product.id}" aria-label="Select pack size">
                            ${packOptionsHtml}
                        </select>
                    </div>
                ` : `<div class="product-pack-row"><span class="pack-lbl">Pack Size:</span> <span class="bold-count" style="font-size: 0.85rem;">${currentPack.weight}</span></div>`}
            </div>
            <div class="product-card-footer">
                <div class="price-box">
                    <span class="price-amt">₹${currentPack.price}</span>
                    <span class="price-unit">per ${currentPack.weight}</span>
                </div>
                <div class="cart-footer-area">
                    ${cartFooterActions}
                </div>
            </div>
        `;

        // Bind interactive events on card
        card.querySelector(".card-img-click").addEventListener("click", () => openQuickViewModal(product.id));
        card.querySelector(".card-title-click").addEventListener("click", () => openQuickViewModal(product.id));
        
        // Handle Pack Selection changes
        const packDropdown = card.querySelector(".pack-selector-dropdown");
        if (packDropdown) {
            packDropdown.addEventListener("change", (e) => {
                const packIdx = parseInt(e.target.value);
                // Update weight/price in UI dynamically
                updateCardPriceDetails(card, product, packIdx);
            });
        }

        // Handle Add to Cart
        const addBtn = card.querySelector(".card-add-to-cart-trigger");
        if (addBtn) {
            addBtn.addEventListener("click", () => {
                const finalPackIdx = packDropdown ? parseInt(packDropdown.value) : product.defaultPackIndex;
                addToCart(product.id, finalPackIdx);
            });
        }

        // Handle quantity adjustment buttons
        const minusBtn = card.querySelector(".qty-minus-btn");
        const plusBtn = card.querySelector(".qty-plus-btn");
        
        if (minusBtn) {
            minusBtn.addEventListener("click", () => updateCartQuantity(product.id, -1));
        }
        if (plusBtn) {
            plusBtn.addEventListener("click", () => updateCartQuantity(product.id, 1));
        }

        return card;
    }

    function updateCardPriceDetails(cardEl, product, packIdx) {
        const pack = product.packs[packIdx];
        cardEl.querySelector(".price-amt").textContent = `₹${pack.price}`;
        cardEl.querySelector(".price-unit").textContent = `per ${pack.weight}`;

        // If product is in cart, update its pack configuration in cart
        const cartItemIdx = cart.findIndex(item => item.id === product.id);
        if (cartItemIdx > -1) {
            cart[cartItemIdx].packIndex = packIdx;
            cart[cartItemIdx].weight = pack.weight;
            cart[cartItemIdx].price = pack.price;
            saveCartToLocalStorage();
            updateCartUI();
        }
    }

    // Reset filters
    function resetAllFilters() {
        storeSearchInput.value = "";
        mobileSearchInput.value = "";
        searchQuery = "";
        sortSelect.value = "default";
        selectedSort = "default";
        
        // Reset check boxes
        chkGlutenFree.checked = false;
        chkImmunity.checked = false;
        chkSweetener.checked = false;
        
        activeTags = {
            "gluten-free": false,
            "immunity": false,
            "natural-sweetener": false
        };

        // Reset category buttons
        document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
        document.getElementById("cat-all").classList.add("active");
        currentCategory = "all";

        renderProducts();
    }

    resetAllFiltersBtn.addEventListener("click", resetAllFilters);

    // ==========================================================================
    // FILTER EVENTS
    // ==========================================================================
    
    // Category tab selector
    categoryFilterList.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-btn");
        if (!btn) return;

        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        
        // Under mobile view, close sidebar after category selection
        if (window.innerWidth <= 1024) {
            storeSidebar.classList.remove("open");
        }

        renderProducts();
    });

    // Link dynamic triggers in Footer & Mobile Menu to categories
    footerCategoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const cat = link.getAttribute("data-cat");
            const storeBtn = document.querySelector(`.cat-btn[data-category="${cat}"]`);
            if (storeBtn) {
                document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
                storeBtn.classList.add("active");
                currentCategory = cat;
                renderProducts();
            }
        });
    });

    // Search trigger
    storeSearchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
    mobileSearchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        storeSearchInput.value = searchQuery;
        renderProducts();
    });

    // Sort trigger
    sortSelect.addEventListener("change", (e) => {
        selectedSort = e.target.value;
        renderProducts();
    });

    // Checkbox tags triggers
    chkGlutenFree.addEventListener("change", (e) => {
        activeTags["gluten-free"] = e.target.checked;
        renderProducts();
    });
    chkImmunity.addEventListener("change", (e) => {
        activeTags["immunity"] = e.target.checked;
        renderProducts();
    });
    chkSweetener.addEventListener("change", (e) => {
        activeTags["natural-sweetener"] = e.target.checked;
        renderProducts();
    });

    // ==========================================================================
    // MODAL QUICKVIEW ENGINE
    // ==========================================================================
    function openQuickViewModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        // Check if item is in cart
        const cartItem = cart.find(item => item.id === productId);
        const selectedPackIndex = cartItem ? cartItem.packIndex : product.defaultPackIndex;
        const currentPack = product.packs[selectedPackIndex];

        // Build tags html
        let badgesHtml = "";
        if (product.tags.includes("gluten-free")) {
            badgesHtml += `<span class="prod-badge badge-gf">Gluten Free</span>`;
        }
        if (product.tags.includes("immunity")) {
            badgesHtml += `<span class="prod-badge badge-organic">Immunity Booster</span>`;
        }
        if (product.tags.includes("natural-sweetener")) {
            badgesHtml += `<span class="prod-badge badge-special">Palm Jaggery Sweetened</span>`;
        }

        // Pack size selector
        let packSelectHtml = "";
        if (product.packs.length > 1) {
            let optionsHtml = "";
            product.packs.forEach((p, idx) => {
                const selected = idx === selectedPackIndex ? "selected" : "";
                optionsHtml += `<option value="${idx}" ${selected}>${p.weight} (₹${p.price})</option>`;
            });
            packSelectHtml = `
                <div class="product-pack-row" style="margin-top: 10px;">
                    <span class="pack-lbl" style="font-weight:600;">Choose Pack Option:</span>
                    <select class="form-control modal-pack-selector" data-id="${product.id}" style="width: 180px;" aria-label="Select modal pack size">
                        ${optionsHtml}
                    </select>
                </div>
            `;
        } else {
            packSelectHtml = `
                <div class="product-pack-row">
                    <span class="pack-lbl" style="font-weight:600;">Pack Size:</span>
                    <span class="bold-count">${currentPack.weight}</span>
                </div>
            `;
        }

        // Action row buttons
        let actionRowHtml = "";
        if (cartItem) {
            actionRowHtml = `
                <div class="quantity-controller">
                    <button class="qty-btn modal-qty-minus" data-id="${product.id}" aria-label="Decrease quantity">-</button>
                    <span class="qty-val modal-qty-display">${cartItem.quantity}</span>
                    <button class="qty-btn modal-qty-plus" data-id="${product.id}" aria-label="Increase quantity">+</button>
                </div>
                <span style="font-size:0.85rem; font-weight:600; color:var(--color-secondary);"><i class="fa-solid fa-check"></i> Added to Basket</span>
            `;
        } else {
            actionRowHtml = `
                <button class="btn btn-secondary modal-add-to-cart-btn" data-id="${product.id}">
                    <i class="fa-solid fa-basket-shopping"></i> Add to Basket
                </button>
            `;
        }

        modalBodyContent.innerHTML = `
            <div class="modal-grid">
                <div class="modal-visuals-col">
                    <img src="${product.image}" alt="${product.name}" class="modal-main-img">
                    <div class="modal-badges-row">
                        ${badgesHtml}
                    </div>
                </div>
                <div class="modal-info-col">
                    <div class="modal-header-text">
                        <span class="product-category-lbl">${product.category.replace('-', ' & ')}</span>
                        <h2 class="modal-title">${product.name}</h2>
                        <h4 class="modal-subtitle">${product.tamilName}</h4>
                    </div>

                    <div class="modal-price-pane">
                        <span class="modal-price-lbl">Price:</span>
                        <span class="modal-price-val" id="modal-price-display">₹${currentPack.price}</span>
                        <span class="pack-lbl">for ${currentPack.weight}</span>
                    </div>

                    <div class="modal-desc-box">
                        <h5>Description</h5>
                        <p>${product.description}</p>
                    </div>

                    <div class="modal-use-box">
                        <h5>Traditional Preparation / Usage</h5>
                        <p>${product.usage}</p>
                    </div>

                    <div class="modal-ingredients-box">
                        <h5>Ingredients</h5>
                        <p>${product.ingredients}</p>
                    </div>

                    <div class="modal-benefits-box" style="font-size: 0.85rem; color: var(--color-secondary); font-weight: 500;">
                        <i class="fa-solid fa-heart-pulse"></i> <strong>Health Benefits:</strong> ${product.benefits}
                    </div>

                    ${packSelectHtml}

                    <div class="modal-action-row" id="modal-action-row-area">
                        ${actionRowHtml}
                    </div>
                </div>
            </div>
        `;

        // Event hooks in Modal
        const modalPackSelect = modalBodyContent.querySelector(".modal-pack-selector");
        if (modalPackSelect) {
            modalPackSelect.addEventListener("change", (e) => {
                const idx = parseInt(e.target.value);
                const pack = product.packs[idx];
                document.getElementById("modal-price-display").textContent = `₹${pack.price}`;
                
                // If it's already in the cart, sync the weight change
                const inCart = cart.findIndex(item => item.id === product.id);
                if (inCart > -1) {
                    cart[inCart].packIndex = idx;
                    cart[inCart].weight = pack.weight;
                    cart[inCart].price = pack.price;
                    saveCartToLocalStorage();
                    updateCartUI();
                    
                    // Re-draw modal quantities
                    openQuickViewModal(productId);
                }
            });
        }

        const modalAddBtn = modalBodyContent.querySelector(".modal-add-to-cart-btn");
        if (modalAddBtn) {
            modalAddBtn.addEventListener("click", () => {
                const finalIdx = modalPackSelect ? parseInt(modalPackSelect.value) : product.defaultPackIndex;
                addToCart(product.id, finalIdx);
                // Refresh modal state
                openQuickViewModal(productId);
            });
        }

        const mMinus = modalBodyContent.querySelector(".modal-qty-minus");
        const mPlus = modalBodyContent.querySelector(".modal-qty-plus");

        if (mMinus) {
            mMinus.addEventListener("click", () => {
                updateCartQuantity(product.id, -1);
                openQuickViewModal(productId);
            });
        }
        if (mPlus) {
            mPlus.addEventListener("click", () => {
                updateCartQuantity(product.id, 1);
                openQuickViewModal(productId);
            });
        }

        // Open backdrop
        quickviewModalBackdrop.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent page scroll
    }

    function closeQuickViewModal() {
        quickviewModalBackdrop.classList.remove("open");
        document.body.style.overflow = ""; // Re-enable page scroll
    }

    modalCloseBtn.addEventListener("click", closeQuickViewModal);
    quickviewModalBackdrop.addEventListener("click", (e) => {
        if (e.target === quickviewModalBackdrop) closeQuickViewModal();
    });

    // Keyboard ESC to close modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeQuickViewModal();
            cartDrawerBackdrop.classList.remove("open");
            mobileNavOverlay.classList.remove("open");
        }
    });

    // ==========================================================================
    // SHOPPING CART CONTROLLER
    // ==========================================================================
    function addToCart(productId, packIndex) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const pack = product.packs[packIndex];
        
        // Check if item exists in cart already
        const existingIdx = cart.findIndex(item => item.id === productId);

        if (existingIdx > -1) {
            cart[existingIdx].quantity += 1;
            // Also update pack preference if they clicked a different one
            cart[existingIdx].packIndex = packIndex;
            cart[existingIdx].weight = pack.weight;
            cart[existingIdx].price = pack.price;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                tamilName: product.tamilName,
                price: pack.price,
                weight: pack.weight,
                packIndex: packIndex,
                image: product.image,
                quantity: 1
            });
        }

        saveCartToLocalStorage();
        updateCartUI();
        renderProducts(); // Refresh buttons in catalog grid
    }

    function updateCartQuantity(productId, delta) {
        const idx = cart.findIndex(item => item.id === productId);
        if (idx === -1) return;

        cart[idx].quantity += delta;

        if (cart[idx].quantity <= 0) {
            cart.splice(idx, 1);
        }

        saveCartToLocalStorage();
        updateCartUI();
        renderProducts(); // Sync catalog buttons
    }

    function updateCartUI() {
        // Calculate items count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountBadge.textContent = totalItems;
        floatingCartBadge.textContent = totalItems;

        // Toggle badges visibility
        if (totalItems > 0) {
            cartCountBadge.classList.remove("hidden");
            floatingStickyCartBtn.classList.add("visible");
        } else {
            cartCountBadge.classList.add("hidden");
            floatingStickyCartBtn.classList.remove("visible");
        }

        // Render drawer items
        cartItemsWrapper.innerHTML = "";

        if (cart.length === 0) {
            // Cart Empty
            emptyCartState.classList.remove("hidden");
            checkoutFormWrapper.classList.add("hidden");
            cartDrawerFooter.classList.add("hidden");
        } else {
            // Cart populated
            emptyCartState.classList.add("hidden");
            checkoutFormWrapper.classList.remove("hidden");
            cartDrawerFooter.classList.remove("hidden");

            let subtotal = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                const itemRow = document.createElement("div");
                itemRow.className = "cart-item";
                itemRow.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-meta">Size: ${item.weight} | ₹${item.price}</span>
                        <button class="remove-cart-item-btn" data-id="${item.id}">
                            <i class="fa-regular fa-trash-can"></i> Remove
                        </button>
                    </div>
                    <div class="cart-item-actions">
                        <span class="cart-item-price">₹${itemTotal}</span>
                        <div class="quantity-controller">
                            <button class="qty-btn item-qty-minus" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn item-qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                `;

                // Hook actions
                itemRow.querySelector(".remove-cart-item-btn").addEventListener("click", () => {
                    cart = cart.filter(p => p.id !== item.id);
                    saveCartToLocalStorage();
                    updateCartUI();
                    renderProducts();
                });

                itemRow.querySelector(".item-qty-minus").addEventListener("click", () => updateCartQuantity(item.id, -1));
                itemRow.querySelector(".item-qty-plus").addEventListener("click", () => updateCartQuantity(item.id, 1));

                cartItemsWrapper.appendChild(itemRow);
            });

            // Update financial counters
            cartSubtotalVal.textContent = `₹${subtotal.toFixed(2)}`;
            cartTotalVal.textContent = `₹${subtotal.toFixed(2)}`;
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

    // Toggle Cart Drawer
    function openCartDrawer() {
        cartDrawerBackdrop.classList.add("open");
    }

    function closeCartDrawer() {
        cartDrawerBackdrop.classList.remove("open");
    }

    cartTriggerBtn.addEventListener("click", openCartDrawer);
    floatingStickyCartBtn.addEventListener("click", openCartDrawer);
    cartCloseBtn.addEventListener("click", closeCartDrawer);
    drawerShopNowBtn.addEventListener("click", closeCartDrawer);
    
    cartDrawerBackdrop.addEventListener("click", (e) => {
        if (e.target === cartDrawerBackdrop) closeCartDrawer();
    });

    clearCartBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your shopping basket?")) {
            cart = [];
            saveCartToLocalStorage();
            updateCartUI();
            renderProducts();
        }
    });

    // ==========================================================================
    // RAZORPAY & WHATSAPP CHECKOUT SCRIPT
    // ==========================================================================
    const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_dummyKeyId123";

    placeWhatsappOrderBtn.addEventListener("click", () => {
        // Trigger validation on checkout form
        if (!checkoutOrderForm.reportValidity()) {
            return;
        }

        const buyerName = document.getElementById("checkout-name").value;
        const buyerPhone = document.getElementById("checkout-phone").value;
        const buyerAddress = document.getElementById("checkout-address").value;
        const deliveryMode = document.getElementById("checkout-delivery").value;

        // Calculate total amount
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
        });

        // Razorpay expects amount in paise (e.g. INR 100 = 10000 paise)
        const amountInPaise = Math.round(subtotal * 100);

        if (amountInPaise <= 0) {
            alert("Your basket is empty or has invalid items.");
            return;
        }

        const options = {
            "key": RAZORPAY_KEY_ID,
            "amount": amountInPaise,
            "currency": "INR",
            "name": "Amma Veedu Traditional Foods",
            "description": "Order Payment",
            "image": "assets/logo.jpg",
            "handler": function (response) {
                // Payment was successful, capture payment ID
                const paymentId = response.razorpay_payment_id;

                // Build WhatsApp formatted message text
                let msg = `*AMMA VEEDU TRADITIONAL FOODS - ORDER PAID*\n`;
                msg += `--------------------------------------\n`;
                msg += `*Name:* ${buyerName}\n`;
                msg += `*WhatsApp:* ${buyerPhone}\n`;
                msg += `*Address:* ${buyerAddress}\n`;
                msg += `*Delivery Mode:* ${deliveryMode === "delivery" ? "Home Delivery" : "Store Pickup (Nellikuppam)"}\n`;
                msg += `*Payment Status:* PAID (via Razorpay)\n`;
                msg += `*Payment ID:* ${paymentId}\n`;
                msg += `--------------------------------------\n`;
                msg += `*ITEMS ORDERED:*\n\n`;

                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.quantity;
                    msg += `${index + 1}. *${item.name}* (${item.weight})\n`;
                    msg += `   Qty: ${item.quantity}  x  ₹${item.price} = *₹${itemTotal}*\n\n`;
                });

                msg += `--------------------------------------\n`;
                msg += `*Total Paid:* *₹${subtotal.toFixed(2)}*\n`;
                msg += `--------------------------------------\n`;
                msg += `Please confirm packaging, shipping costs, and dispatch details. Thank you!`;

                // URL encode string
                const encodedMsg = encodeURIComponent(msg);
                const storeNumber = "919600750495"; // Traditional Foods coordinator WhatsApp line
                const whatsappUrl = `https://wa.me/${storeNumber}?text=${encodedMsg}`;

                // Clear cart after checkout with delay
                setTimeout(() => {
                    cart = [];
                    saveCartToLocalStorage();
                    updateCartUI();
                    renderProducts();
                    checkoutOrderForm.reset();
                    closeCartDrawer();
                }, 1000);

                // Open WhatsApp link in new window
                window.open(whatsappUrl, "_blank");
            },
            "prefill": {
                "name": buyerName,
                "contact": buyerPhone
            },
            "theme": {
                "color": "#8B4513" // Brand primary color
            }
        };

        const rzp1 = new Razorpay(options);
        
        rzp1.on('payment.failed', function (response) {
            alert(`Payment failed: ${response.error.description} (Error Code: ${response.error.code})`);
        });

        rzp1.open();
    });


    // ==========================================================================
    // INTERACTIVE FORMS HANDLERS
    // ==========================================================================
    
    // Contact Us Form
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Simulate sending messages
        contactForm.classList.add("hidden");
        contactSuccessBanner.classList.remove("hidden");
    });

    contactResetBtn.addEventListener("click", () => {
        contactForm.reset();
        contactForm.classList.remove("hidden");
        contactSuccessBanner.classList.add("hidden");
    });

    // Newsletter Form
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newsletterForm.reset();
        newsletterMsg.classList.remove("hidden");
        setTimeout(() => {
            newsletterMsg.classList.add("hidden");
        }, 3000);
    });

    // ==========================================================================
    // MOBILE NAV LINKS & DRAWER HANDLERS
    // ==========================================================================
    mobileMenuBtn.addEventListener("click", () => {
        mobileNavOverlay.classList.add("open");
    });

    mobileNavClose.addEventListener("click", () => {
        mobileNavOverlay.classList.remove("open");
    });

    mobileNavOverlay.addEventListener("click", (e) => {
        if (e.target === mobileNavOverlay) {
            mobileNavOverlay.classList.remove("open");
        }
    });

    // Page link click closes mobile nav
    mobNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavOverlay.classList.remove("open");
        });
    });

    // Desktop nav link active state trigger
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Mobile Store sidebar slide toggle
    mobileFilterToggleBtn.addEventListener("click", () => {
        storeSidebar.classList.add("open");
    });

    // Close mobile filter sidebar if click outside
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024) {
            if (!storeSidebar.contains(e.target) && e.target !== mobileFilterToggleBtn) {
                storeSidebar.classList.remove("open");
            }
        }
    });

    // ==========================================================================
    // THEME CONFIGURATION
    // ==========================================================================
    // Default load system theme or cached theme
    const cachedTheme = localStorage.getItem("ammavedu_theme");
    if (cachedTheme) {
        document.documentElement.setAttribute("data-theme", cachedTheme);
    }

    themeToggleBtn.addEventListener("click", () => {
        const activeTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = "light";
        if (activeTheme === "light") {
            newTheme = "dark";
        }
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("ammavedu_theme", newTheme);
    });
});
