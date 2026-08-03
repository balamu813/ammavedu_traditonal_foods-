// Amma Veedu Traditional Foods - Product and Category Database
// 16 Categories and 76 Products

export const CATEGORIES = {
  "cereals": {
    name: "Cereals",
    slug: "cereals",
    icon: "fa-wheat-awn",
    desc: "Nutritious and fiber-rich traditional grains, beaten rice flakes, and cereal staples sourced from local fields."
  },
  "dry-fruits": {
    name: "Dry Fruits",
    slug: "dry-fruits",
    icon: "fa-seedling",
    desc: "Premium quality hand-picked almonds, walnuts, raisins, and cashews packed with natural goodness and health."
  },
  "flour": {
    name: "Flour",
    slug: "flour",
    icon: "fa-mortar-pestle",
    desc: "Stone-ground millet flours, amaranth flour, and heritage wheat flours slow-milled to retain dietary fiber and nutrients."
  },
  "millets": {
    name: "Millets",
    slug: "millets",
    icon: "fa-leaf",
    desc: "Ancient whole grain millets including ragi, foxtail, barnyard, and kodo millets, chemical-free and nutrient-rich."
  },
  "oil": {
    name: "Oil",
    slug: "oil",
    icon: "fa-oil-well",
    desc: "Traditional cold-pressed and wood-pressed oils extracted at low temperatures to preserve pure flavor and heart-healthy nutrients."
  },
  "oil-seeds": {
    name: "Oil Seeds",
    slug: "oil-seeds",
    icon: "fa-seedling",
    desc: "Premium quality oil seeds including native groundnuts and sesame, rich in proteins and natural fats."
  },
  "pulses": {
    name: "Pulses",
    slug: "pulses",
    icon: "fa-bowl-food",
    desc: "Unpolished lentils, pulses, whole beans, and dals rich in protein and fiber, sourced directly from organic farmers."
  },
  "rice": {
    name: "Rice",
    slug: "rice",
    icon: "fa-bowl-rice",
    desc: "Heirloom traditional rice varieties, aromatic basmati, and nutrient-rich red and black rice grains."
  },
  "salt": {
    name: "Salt",
    slug: "salt",
    icon: "fa-cubes",
    desc: "Pure Himalayan pink salt crystals and free-flowing table salts rich in minerals and free from synthetic additives."
  },
  "seeds": {
    name: "Seeds",
    slug: "seeds",
    icon: "fa-spawn",
    desc: "Superfood seeds including chia, pumpkin, flax, and watermelon seeds, packed with essential fatty acids and minerals."
  },
  "spices": {
    name: "Spices",
    slug: "spices",
    icon: "fa-pepper-hot",
    desc: "Aromatic whole spices, sun-dried chillies, and stone-ground masalas prepared from traditional grandmother recipes."
  },
  "health-powders": {
    name: "Health Powders",
    slug: "health-powders",
    icon: "fa-prescription-bottle-medical",
    desc: "Natural single-ingredient health powders and leaf powders like moringa, processed carefully to retain vitamins."
  },
  "sweeteners": {
    name: "Sweeteners",
    slug: "sweeteners",
    icon: "fa-jar",
    desc: "Natural sweeteners including organic jaggery granules, brown sugar, and sulphurless cane sugar."
  },
  "homemade-products": {
    name: "Homemade Snacks",
    slug: "homemade-products",
    icon: "fa-jar",
    desc: "Crispy traditional South Indian sweets and health snacks prepared using age-old family recipes, pure cow ghee, and native sweeteners."
  },
  "pickles-masalas": {
    name: "Pickles & Masalas",
    slug: "pickles-masalas",
    icon: "fa-pepper-hot",
    desc: "Tangy traditional pickles cured in wood-pressed oils and aromatic masalas prepared from premium hand-picked spices."
  },
  "homemade-vathal": {
    name: "Homemade Vathal",
    slug: "homemade-vathal",
    icon: "fa-sun",
    desc: "Hygienically sun-dried vegetable vathals and crisps, cured with sour curd or spices following South Indian tradition."
  }
};

export const PRODUCTS_RAW = [
  // 1. Cereals (1 item)
  {
    name: "White Poha / Beaten Rice",
    id: "white-poha-beaten-rice",
    tamilName: "வெள்ளை அவல்",
    category: "cereals",
    image: "/assets/aval_poha.png",
    sizes: ["250g", "500g", "1kg", "2kg"],
    tags: ["energy", "digestive"],
    benefits: "Promotes easy digestion, acts as an instant energy source, and serves as a low-gluten alternative to refined grains.",
    usage: "Use to prepare sweet poha mixed with grated coconut and country sugar, or cook a savory tempered poha for breakfast."
  },

  // 2. Dry Fruits (4 items)
  {
    name: "Cashew Whole (W320)",
    id: "cashew-whole-w320",
    tamilName: "முழு முந்திரி (W320)",
    category: "dry-fruits",
    sizes: ["250g", "500g", "1kg"],
    tags: ["premium", "nutty"],
    benefits: "High in healthy fats, supports heart health, provides active brain nourishment, and is loaded with plant-based protein.",
    usage: "Enjoy as a raw snack, roast lightly with ghee and black pepper, or blend into creamy gravies and traditional sweets."
  },
  {
    name: "Kismis / Raisins",
    id: "kismis-raisins",
    tamilName: "உலர் திராட்சை",
    category: "dry-fruits",
    sizes: ["250g", "500g", "1kg"],
    tags: ["sweet", "energy"],
    benefits: "Rich in dietary fiber, aids healthy digestion, helps boost iron levels, and provides quick, natural energy.",
    usage: "Add to morning oats, mix into baking recipes, or garnish traditional desserts like payasam and halwa."
  },
  {
    name: "Natural Almond",
    id: "natural-almond",
    tamilName: "பாதாம் பருப்பு",
    category: "dry-fruits",
    sizes: ["250g", "500g", "1kg"],
    tags: ["brain-food", "vitamin-e"],
    benefits: "Loaded with antioxidant Vitamin E, helps manage cholesterol, supports brain memory functions, and builds bone strength.",
    usage: "Soak in water overnight and consume in the morning, slice over cereal bowls, or use in healthy nut milk recipes."
  },
  {
    name: "Walnut Whole",
    id: "walnut-whole",
    tamilName: "முழு வால்நட்",
    category: "dry-fruits",
    sizes: ["250g", "500g", "1kg"],
    tags: ["brain-food", "omega-3"],
    benefits: "Outstanding source of plant-based Omega-3 fatty acids, supports brain cognitive health, and reduces systemic inflammation.",
    usage: "Eat raw as a snack, chop into fresh green salads, crush into baking batters, or blend into nutritious smoothies."
  },

  // 3. Flour (9 items)
  {
    name: "Bajra Atta / Pearl Millet Flour",
    id: "bajra-atta-pearl-millet-flour",
    tamilName: "கம்பு மாவு",
    category: "flour",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "fiber-rich"],
    benefits: "Extremely rich in magnesium, promotes blood sugar regulation, supports digestion, and helps stay cool during summer months.",
    usage: "Prepare healthy Bajra rotis, steam soft dumplings, or cook traditional cooling pearl millet porridge (Kambu Koozh)."
  },
  {
    name: "Ragi Atta / Finger Millet Flour",
    id: "ragi-atta-finger-millet-flour",
    tamilName: "கேழ்வரகு மாவு",
    category: "flour",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "calcium-rich"],
    benefits: "Contains high concentration of calcium for bone density, rich in iron, regulates insulin sensitivity, and ideal baby food.",
    usage: "Make soft Ragi Dosas, nutritious Ragi Kali balls, warm breakfast porridges, or healthy finger millet flatbreads."
  },
  {
    name: "Rajgira Atta / Amaranth Flour",
    id: "rajgira-atta-amaranth-flour",
    tamilName: "ராஜ்கிரா மாவு (கீரை விதை மாவு)",
    category: "flour",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["gluten-free", "protein-rich"],
    benefits: "Provides complete plant protein with all essential amino acids, supports digestive health, and boosts muscle recovery.",
    usage: "Ideal for preparing gluten-free flatbreads, fasting recipes, healthy porridge mixes, and nutrient-rich cookies."
  },
  {
    name: "Sattu Atta",
    id: "sattu-atta",
    tamilName: "சத்து மாவு",
    category: "flour",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["protein-booster", "cooling"],
    benefits: "Acts as a powerful traditional protein shake, restores body energy, cools down systemic heat, and aids clean digestion.",
    usage: "Mix with chilled water or buttermilk and a pinch of salt/cumin for a cooling beverage, or make sweet energy balls."
  },
  {
    name: "Singhada Flour",
    id: "singhada-flour",
    tamilName: "சிங்காரா மாவு (தண்ணீர் விசித்திர மாவு)",
    category: "flour",
    sizes: ["500g", "1kg"],
    tags: ["gluten-free", "fasting"],
    benefits: "High in potassium, contains low sodium content to manage blood pressure, and provides healthy energy during fasting.",
    usage: "Use to prepare fasting flatbreads (rotis), crispy pooris, traditional sweet halwas, or thick soups."
  },
  {
    name: "Sooji Rawa",
    id: "sooji-rawa",
    tamilName: "ரவா (உப்புமா ரவை)",
    category: "flour",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["energy", "staple"],
    benefits: "Provides quick, clean carbohydrates for daily energy, contains essential B-complex vitamins, and digestively light.",
    usage: "Use to prepare traditional breakfast Upma, soft Rawa Kesari sweet, crispy Rava Dosas, or steamed Rava Idli."
  },
  {
    name: "Wheat Flour (Khapli)",
    id: "wheat-flour-khapli",
    tamilName: "கப்ளி கோதுமை மாவு (உமிக்கோதுமை)",
    category: "flour",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["low-gluten", "emmer-wheat"],
    benefits: "Ancient Emmer wheat flour with highly digestible gluten structure, low glycemic index, and loaded with dietary fibers.",
    usage: "Make diabetic-friendly soft rotis, wholesome phulkas, nutrient-dense flatbreads, or artisanal rustic breads."
  },
  {
    name: "Wheat Flour (Lokwan)",
    id: "wheat-flour-lokwan",
    tamilName: "லோக்வான் கோதுமை மாவு",
    category: "flour",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["staple", "high-fiber"],
    benefits: "High gluten strength for soft cooking texture, rich in dietary fiber, and provides sustained energy throughout the day.",
    usage: "Perfect for preparing standard soft rotis, parathas, chapati rolls, and wholesome traditional Indian flatbreads."
  },
  {
    name: "Wheat Flour (Sharbati)",
    id: "wheat-flour-sharbati",
    tamilName: "ஷர்பதி கோதுமை மாவு",
    category: "flour",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["premium", "extra-soft"],
    benefits: "Sourced from the golden fields of MP, naturally sweet taste, keeps flatbreads soft for longer hours, high in protein.",
    usage: "Prepare premium, super-soft chapatis, layered parottas, fluffy pooris, or healthy baking crusts."
  },

  // 4. Millets (7 items)
  {
    name: "Bajra / Pearl Millet",
    id: "bajra-pearl-millet",
    tamilName: "முழு கம்பு",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "iron-rich"],
    benefits: "High in iron to fight anemia, rich in antioxidants, helps control acidity, and supports long-term heart wellness.",
    usage: "Soak and cook like rice, grind for fresh home-milled flour, or boil to prepare traditional millet porridge mixes."
  },
  {
    name: "Barnyard Millet",
    id: "barnyard-millet",
    tamilName: "குதிரைவாலி அரிசி",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "low-gi"],
    benefits: "Highest fiber content among grains, low glycemic index makes it ideal for diabetics, and aids overall weight management.",
    usage: "Cook as a direct replacement for white rice, prepare delicious light upma, thin dosas, or soft steamed idlis."
  },
  {
    name: "Brown Top Millet",
    id: "brown-top-millet",
    tamilName: "பலா பச்சரிசி / பிரவுன்டாப் தினை",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "high-fiber"],
    benefits: "Helps detoxify the entire body, supports smooth digestive tract function, and provides cellular antioxidant defense.",
    usage: "Prepare standard boiled millet meals, cook savory biryanis, or make nutritious breakfast porridges."
  },
  {
    name: "Foxtail Millet",
    id: "foxtail-millet",
    tamilName: "தினை அரிசி",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "heart-health"],
    benefits: "Supports nerve health, stabilizes blood cholesterol, builds strong immune response, and high in muscle-building protein.",
    usage: "Prepare classic Foxtail Millet Upma, cook sweet millet payasam with jaggery, or replace daily lunch rice."
  },
  {
    name: "Kodo Millet",
    id: "kodo-millet",
    tamilName: "வரகு அரிசி",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "diabetic-friendly"],
    benefits: "Rich in polyphenols and antioxidants, helps regulate diabetes, aids liver function, and supports fat loss.",
    usage: "Use to cook light Kodo Rice, ferment batter for soft Kodo Idlis and Dosas, or make traditional pongal."
  },
  {
    name: "Little Millet",
    id: "little-millet",
    tamilName: "சாமை அரிசி",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "easy-digest"],
    benefits: "Rich in vitamin B3 (niacin) for energy metabolism, supports hormone balance, and extremely easy on the stomach.",
    usage: "Perfect for preparing light baby foods, replacing white rice in daily meals, making kheer, or baking crispy crackers."
  },
  {
    name: "Ragi Whole / Finger Millet",
    id: "ragi-whole-finger-millet",
    tamilName: "கேழ்வரகு முழுமை",
    category: "millets",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["gluten-free", "calcium-powerhouse"],
    benefits: "Unbeatable plant source of calcium, enhances bone strength, promotes natural weight loss, and helps relax nerves.",
    usage: "Sprout at home to grind into health mixes, soak and cook as a grain, or prepare fermented traditional porridges."
  },

  // 5. Oil (2 items)
  {
    name: "Coconut Oil",
    id: "coconut-oil",
    tamilName: "தேங்காய் எண்ணெய் (மரச்செக்கு)",
    category: "oil",
    sizes: ["500ml", "1L", "2L", "5L"],
    tags: ["wood-pressed", "healthy-fats"],
    benefits: "Contains medium-chain triglycerides (MCTs) for instant brain energy, boosts metabolism, and supports scalp and skin health.",
    usage: "Ideal for traditional South Indian curries, stir-fries, baking, raw hair oil applications, or skin conditioning."
  },
  {
    name: "Sunflower Oil",
    id: "sunflower-oil",
    tamilName: "சூரியகாந்தி எண்ணெய் (மரச்செக்கு)",
    category: "oil",
    sizes: ["500ml", "1L", "2L", "5L"],
    tags: ["wood-pressed", "light-oil"],
    benefits: "High in unsaturated healthy fats, rich source of Vitamin E, supports heart health, and light on digestion.",
    usage: "Perfect for daily multi-purpose cooking, deep frying snacks, baking, and sautéing aromatic spices."
  },

  // 6. Oil Seeds (1 item)
  {
    name: "Groundnut",
    id: "groundnut",
    tamilName: "நிலக்கடலை / வேர்க்கடலை",
    category: "oil-seeds",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["protein-rich", "raw"],
    benefits: "Packed with plant proteins, contains cardioprotective monounsaturated fats, and provides key minerals like zinc and iron.",
    usage: "Roast for a crunchy evening snack, grind with red chillies for peanut chutney, or use in traditional sweets."
  },

  // 7. Pulses (10 items)
  {
    name: "Channa (Whole) / Bengal Gram (Whole)",
    id: "channa-whole-bengal-gram-whole",
    tamilName: "கருப்பு கொண்டைக்கடலை (முழு)",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["high-fiber", "unpolished"],
    benefits: "High protein and low glycemic index for diabetic control, excellent fiber source, and boosts blood health.",
    usage: "Prepare protein-rich boiled Sundal snack, add to traditional coconut-based gravies, or make spicy curries."
  },
  {
    name: "Channa Dal / Split Bengal Gram",
    id: "channa-dal-split-bengal-gram",
    tamilName: "கடலை பருப்பு",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["unpolished", "staple"],
    benefits: "Rich in dietary folate and protein, supports muscle building, and aids clean digestive tracking.",
    usage: "Use to temper chutneys and curries, grind for crispy vegetable vadas, or cook sweet traditional puran poli."
  },
  {
    name: "Green Peas",
    id: "green-peas",
    tamilName: "பச்சை பட்டாணி (உலர்ந்தது)",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["fiber-rich", "nutritious"],
    benefits: "Contains heart-healthy minerals, high fiber assists bowel regularity, and provides essential plant proteins.",
    usage: "Soak overnight and cook in curries (like Mutter Paneer), add to vegetable biryanis, or make spiced pea mash."
  },
  {
    name: "Moong (Whole) / Green Gram (Whole)",
    id: "moong-whole-green-gram-whole",
    tamilName: "பச்சை பயறு (முழு)",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["sprout-friendly", "protein-rich"],
    benefits: "High in antioxidants, supports heart health, extremely cooling for the body, and easily digestible protein.",
    usage: "Sprout for nutritional salads, boil with jaggery for sweet snacks, or cook into nourishing green gram curries."
  },
  {
    name: "Moong Dal (Chilka) / Split Green Gram (With Skin)",
    id: "moong-dal-chilka-split-green-gram-with-skin",
    tamilName: "பாசி பருப்பு (உடையாத தோல்)",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["unpolished", "easy-cook"],
    benefits: "Retains outer skin fiber for better digestion, light on stomach, and rich in essential minerals like potassium.",
    usage: "Cook with spices for healthy split moong khichdi, prepare warm soups, or make dry side-dish subzis."
  },
  {
    name: "Moong Dal / Split Green Gram (Skinless)",
    id: "moong-dal-split-green-gram-skinless",
    tamilName: "பாசி பருப்பு",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["staple", "easy-digest"],
    benefits: "Easiest lentil to digest, highly recommended during recuperation, rich in iron, calcium, and B-complex vitamins.",
    usage: "Cook comforting Moong Dal Tadka, make healthy yellow Moong Khichdi, or prepare festive sweet Moong Payasam."
  },
  {
    name: "Red Rajma / Red Kidney Beans",
    id: "red-rajma-red-kidney-beans",
    tamilName: "சிவப்பு ராஜ்மா",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["protein-power", "antioxidant"],
    benefits: "Loaded with iron and molybdenum, helps stabilize blood glucose, and supports muscle recovery and building.",
    usage: "Soak overnight and simmer with thick tomato-onion masala gravy (Rajma Chawal) or add to protein salads."
  },
  {
    name: "Roasted Channa Dal / Roasted Split Bengal Gram",
    id: "roasted-channa-dal-roasted-split-bengal-gram",
    tamilName: "பொட்டுகடலை",
    category: "pulses",
    sizes: ["250g", "500g", "1kg"],
    tags: ["snack-ready", "protein-rich"],
    benefits: "Requires no cooking, provides instant protein punch, supports weight management, and low in glycemic carbs.",
    usage: "Grind with coconut and green chillies for coconut chutney, make sweet fried gram laddus, or eat as direct snack."
  },
  {
    name: "Toor Dal / Arhar Dal / Split Pigeon Pea (Unpolished)",
    id: "toor-dal-arhar-dal-split-pigeon-pea-unpolished",
    tamilName: "துவரம் பருப்பு (தீட்டப்படாதது)",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    tags: ["unpolished", "staple"],
    benefits: "Rich source of plant protein and dietary folate, supports pregnancy health, and contains no artificial coloring or wax.",
    usage: "Crucial staple to cook traditional South Indian Sambar, comforting Dal Tadka, or delicious pepper Rasam."
  },
  {
    name: "Urad / Black Gram (Whole)",
    id: "urad-black-gram-whole",
    tamilName: "முழு கருப்பு உளுந்து",
    category: "pulses",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["calcium-rich", "unpolished"],
    benefits: "Strengthens bones and spine, highly beneficial for women's reproductive health, and loaded with iron.",
    usage: "Prepare healthy whole black gram porridge (Ulundhu Kanji), grind for soft idli batter, or make sweet ulundhu laddus."
  },

  // 8. Rice (3 items)
  {
    name: "Basmati Rice (White)",
    id: "basmati-rice-white",
    tamilName: "பாஸ்மதி அரிசி (வெள்ளை)",
    category: "rice",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["aromatic", "premium"],
    benefits: "Naturally gluten-free, low to medium glycemic index, easy to digest, and fills the kitchen with natural aroma.",
    usage: "Cook premium long-grain Biryanis, festive pulaos, steamed ghee rice, or serve plain with aromatic curries."
  },
  {
    name: "Red Rice",
    id: "red-rice",
    tamilName: "சிகப்பரிசி (மாப்பிள்ளை சம்பா)",
    category: "rice",
    image: "/assets/mapillai_samba_rice.png",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["stamina", "unpolished"],
    benefits: "High in stamina-building iron and zinc, unpolished red bran retains essential fiber, and helps build immunity.",
    usage: "Ideal for boiled everyday red rice lunch, making soft red rice idlis, or brewing warm rice porridge (Kanji)."
  },
  {
    name: "Black Rice",
    id: "black-rice",
    tamilName: "கருப்பு கவுனி அரிசி",
    category: "rice",
    image: "/assets/karuppu_kavuni_rice.png",
    sizes: ["1kg", "2kg", "5kg"],
    tags: ["antioxidant", "emperor-grain"],
    benefits: "Boasts highest antioxidant anthocyanin level among grains, cleanses liver, and helps manage glucose spikes.",
    usage: "Cook traditional sweet Kavuni Arisi Puttu, prepare sweet payasam dessert, or make healthy black rice idlis."
  },

  // 9. Salt (2 items)
  {
    name: "Himalayan Dark Pink Crystals",
    id: "himalayan-dark-pink-crystals",
    tamilName: "இமாலய இளஞ்சிவப்பு கல் உப்பு",
    category: "salt",
    sizes: ["500g", "1kg"],
    tags: ["mineral-rich", "unrefined"],
    benefits: "Contains 84 trace minerals, supports natural pH balance, regulates cellular hydration, and lower in sodium than refined salt.",
    usage: "Use in boiling water for cooking grains, pickling mangoes, or dissolving in warm water for mineral bathing."
  },
  {
    name: "Himalayan Dark Pink Free Flow",
    id: "himalayan-dark-pink-free-flow",
    tamilName: "இமாலய இளஞ்சிவப்பு தூள் உப்பு",
    category: "salt",
    sizes: ["500g", "1kg"],
    tags: ["mineral-rich", "free-flow"],
    benefits: "Unrefined pink table salt, contains natural trace minerals, and free from chemical anti-caking agents.",
    usage: "Sprinkle over salads, season everyday curries, stir into baking doughs, or use for general table seasoning."
  },

  // 10. Seeds (5 items)
  {
    name: "Chia Seeds",
    id: "chia-seeds",
    tamilName: "சியா விதைகள்",
    category: "seeds",
    sizes: ["250g", "500g", "1kg"],
    tags: ["superfood", "omega-3"],
    benefits: "Loaded with Omega-3 fatty acids and dietary fibers, forms a digestive-friendly gel, and sustains hydration.",
    usage: "Soak in water/milk for 15 minutes to make chia puddings, add to fruit juices, or blend in breakfast smoothies."
  },
  {
    name: "Flax Seeds (Javas)",
    id: "flax-seeds-javas",
    tamilName: "ஆளி விதை (ஜவாஸ்)",
    category: "seeds",
    sizes: ["250g", "500g", "1kg"],
    tags: ["superfood", "lignans"],
    benefits: "Rich in fiber and active lignans for hormonal balance, helps regulate heart health, and contains plant Omega-3.",
    usage: "Grind into powder to mix in baking flour, stir into yogurt bowls, or sprinkle over morning porridge mixes."
  },
  {
    name: "Kalonji / Nigella Seeds",
    id: "kalonji-nigella-seeds",
    tamilName: "கருஞ்சீரகம்",
    category: "seeds",
    sizes: ["100g", "250g", "500g"],
    tags: ["immunity", "wellness"],
    benefits: "Boosts immune responses, supports respiratory health, exhibits strong anti-inflammatory properties, and aids digestion.",
    usage: "Sprinkle over naan flatbreads, add to mango pickles, temper in curries, or boil in water for herbal tea."
  },
  {
    name: "Pumpkin Seeds",
    id: "pumpkin-seeds",
    tamilName: "பூசணி விதைகள்",
    category: "seeds",
    sizes: ["250g", "500g", "1kg"],
    tags: ["zinc-rich", "raw"],
    benefits: "Rich in immune-boosting zinc and magnesium, supports prostate health, and contains high concentrations of proteins.",
    usage: "Eat raw as a trail mix, roast lightly with spices, sprinkle over salads, or mix into baking recipes."
  },
  {
    name: "Watermelon Seeds",
    id: "watermelon-seeds",
    tamilName: "தர்பூசணி விதைகள்",
    category: "seeds",
    sizes: ["250g", "500g", "1kg"],
    tags: ["protein-rich", "magnesium"],
    benefits: "Rich in magnesium and B-vitamins, promotes metabolism, supports heart health, and acts as protein booster.",
    usage: "Consume raw as a healthy snack, roast with a pinch of salt and chili, or blend into creamy curry gravies."
  },

  // 11. Spices (13 items)
  {
    name: "Biryani Masala",
    id: "biryani-masala",
    tamilName: "பிரியாணி மசாலா",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["aromatic", "blend"],
    benefits: "Assists digestion, speeds up metabolism, and contains anti-inflammatory properties from organic spice ingredients.",
    usage: "Add 1-2 teaspoons to vegetable or rice biryanis during cooking to achieve an authentic traditional aroma."
  },
  {
    name: "Black Pepper",
    id: "black-pepper",
    tamilName: "கருப்பு மிளகு",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["anti-oxidant", "metabolism"],
    benefits: "Rich in active piperine, boosts nutrient absorption, assists digestion, and helps fight throat infections naturally.",
    usage: "Crush freshly over boiled eggs, stir into traditional rasam soup, season salads, or add to hot milk."
  },
  {
    name: "Kashmiri Whole Chilli",
    id: "kashmiri-whole-chilli",
    tamilName: "காஷ்மீரி மிளகாய் வற்றல்",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["mild-heat", "vibrant-color"],
    benefits: "Rich in Vitamin C, stimulates digestion, lower heat levels to protect stomach lining, and provides rich color.",
    usage: "Use whole in tempering curries, or grind into vibrant, mild red chili powder for everyday gravy dishes."
  },
  {
    name: "Cinnamon",
    id: "cinnamon",
    tamilName: "இலவங்கப்பட்டை",
    category: "spices",
    sizes: ["100g", "250g"],
    tags: ["aromatic", "wellness"],
    benefits: "Helps regulate blood sugar levels, contains powerful antioxidants, and possesses natural anti-bacterial qualities.",
    usage: "Add a small stick to boiling rice for fragrance, cook in spice curries, or steep in hot tea water."
  },
  {
    name: "Coriander Powder",
    id: "coriander-powder",
    tamilName: "மல்லித் தூள் (தனியா தூள்)",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["cooling", "aromatic"],
    benefits: "Cools down internal body heat, aids smooth digestion, and contains active dietary fibers and antioxidants.",
    usage: "Add to curry bases, mix in marinades, or use in traditional gravies to build thickness and aroma."
  },
  {
    name: "Coriander Seeds",
    id: "coriander-seeds",
    tamilName: "மல்லி விதை (தனியா)",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["cooling", "raw-spice"],
    benefits: "Promotes digestive wellness, helps regulate blood pressure, and works as an excellent natural blood purifier.",
    usage: "Steep in hot water to make coriander tea for digestion, roast and grind for spice mixes, or use in tempering."
  },
  {
    name: "Garam Masala",
    id: "garam-masala",
    tamilName: "கரம் மசாலா",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["aromatic", "spice-blend"],
    benefits: "Stimulates digestion, raises metabolic rate, and loaded with minerals from traditional spice components.",
    usage: "Sprinkle a pinch at the end of cooking vegetable curries or gravies to lock in deep, rich flavors."
  },
  {
    name: "Cumin Seeds (Jeera)",
    id: "cumin-seeds-jeera",
    tamilName: "சீரகம் (ஜீரகம்)",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["digestive", "aromatic"],
    benefits: "Contains active thymol to stimulate digestion, aids weight loss, and helps regulate blood sugar levels.",
    usage: "Temper in hot ghee/oil at the beginning of cooking, roast and powder for yogurt seasoning, or boil for jeera water."
  },
  {
    name: "Kasoori Methi",
    id: "kasoori-methi",
    tamilName: "கஸ்தூரி மேதி",
    category: "spices",
    sizes: ["50g", "100g", "250g"],
    tags: ["aromatic-herb", "wellness"],
    benefits: "Supports kidney health, regulates blood glucose levels, and rich in dietary fibers and minerals.",
    usage: "Crush gently between palms and sprinkle over rich paneer or potato gravies just before turning off the heat."
  },
  {
    name: "Fenugreek Seeds",
    id: "fenugreek-seeds",
    tamilName: "வெந்தயம்",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["cooling", "diabetic-care"],
    benefits: "Improves insulin sensitivity, cools the body, prevents acidity, and highly beneficial for digestion.",
    usage: "Soak overnight and consume raw for blood sugar, temper in tamarind curries, or use in fermenting dosa batter."
  },
  {
    name: "Fennel Seeds",
    id: "fennel-seeds",
    tamilName: "சோம்பு (பெருஞ்சீரகம்)",
    category: "spices",
    sizes: ["100g", "250g", "500g"],
    tags: ["mouth-freshener", "digestive"],
    benefits: "Freshens breath, relieves bloating, relaxes intestinal muscles, and rich in copper and potassium.",
    usage: "Chew raw after heavy meals, boil with water for soothing herbal tea, or temper in spice gravy bases."
  },
  {
    name: "Bay Leaf",
    id: "bay-leaf",
    tamilName: "பிரிஞ்சி இலை",
    category: "spices",
    sizes: ["50g", "100g"],
    tags: ["aromatic-leaf", "digestive"],
    benefits: "Relieves indigestion, supports heart wellness, and contains antimicrobial active compounds.",
    usage: "Add whole leaf to hot oil for flavoring biryanis, pulaos, soups, and slow-cooked tomato gravies."
  },
  {
    name: "Turmeric Powder",
    id: "turmeric-powder",
    tamilName: "மஞ்சள் தூள்",
    category: "spices",
    image: "/assets/turmeric_powder.png",
    sizes: ["100g", "250g", "500g"],
    tags: ["immunity-booster", "anti-inflammatory"],
    benefits: "Curcumin-rich formula builds natural immunity, combats cellular inflammation, and acts as powerful antiseptic.",
    usage: "Add 1/2 tsp to daily cooking curries, mix in hot milk with black pepper, or use in marinades."
  },

  // 12. Health Powders (1 item)
  {
    name: "Moringa Powder",
    id: "moringa-powder",
    tamilName: "முருங்கை இலை பொடி",
    category: "health-powders",
    sizes: ["100g", "250g", "500g"],
    tags: ["superfood", "immunity"],
    benefits: "Incredibly high in iron and Vitamin A, boosts systemic immunity, strengthens bones, and builds daily energy.",
    usage: "Mix 1 teaspoon in warm water with lemon juice, stir into hot rice with ghee, or blend into green smoothies."
  },

  // 13. Sweeteners (3 items)
  {
    name: "Jaggery Granules",
    id: "jaggery-granules",
    tamilName: "வெல்லத்தூள் (நாட்டுச் சர்க்கரை)",
    category: "sweeteners",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["natural-sweetener", "iron-rich"],
    benefits: "Rich source of iron, purifies blood, releases slow energy preventing fatigue, and aids digestion.",
    usage: "Use to sweeten coffee, tea, make traditional sweets, or sprinkle over hot porridge bowls."
  },
  {
    name: "Brown Sugar",
    id: "brown-sugar",
    tamilName: "நாட்டுச் சர்க்கரை (பிரவுன் சுகர்)",
    category: "sweeteners",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["unrefined", "natural"],
    benefits: "Unbleached and chemical-free sweetener, retains natural molasses minerals, and digestively light.",
    usage: "Direct replacement for white sugar in daily tea, baking recipes, dynamic shakes, and desserts."
  },
  {
    name: "White Sulphurless Sugar",
    id: "white-sulphurless-sugar",
    tamilName: "வெள்ளை சல்பர் இல்லாத சர்க்கரை",
    category: "sweeteners",
    sizes: ["500g", "1kg", "2kg"],
    tags: ["chemical-free", "sweetener"],
    benefits: "Clarified without harmful sulphur dioxide, provides clean sweetness, and free from chemical residues.",
    usage: "Use in standard coffee, baking, traditional sweets, and daily cooking recipes where white sugar is required."
  },

  // 14. Homemade Snacks (6 items)
  {
    name: "Groundnut Chikki (Kadalai Mittai)",
    id: "groundnut-chikki",
    tamilName: "கடலை மிட்டாய்",
    category: "homemade-products",
    image: "/assets/groundnut_chikki.png",
    sizes: ["250g"],
    tags: ["natural-sweetener"],
    benefits: "High plant protein, rich in iron, healthy snack for children.",
    usage: "Ready-to-eat sweet treat."
  },
  {
    name: "Sesame (Ellu) Urundai",
    id: "sesame-urundai",
    tamilName: "எள்ளு உருண்டை",
    category: "homemade-products",
    image: "/assets/sesame_urundai_cropped.jpg",
    sizes: ["200g"],
    tags: ["natural-sweetener"],
    benefits: "Rich in calcium, loaded with healthy fats, improves hair and skin health.",
    usage: "Ready-to-eat."
  },
  {
    name: "Peanut Urundai (Kadalai Urundai)",
    id: "peanut-urundai",
    tamilName: "கடலை உருண்டை",
    category: "homemade-products",
    image: "/assets/peanut_urundai.png",
    sizes: ["200g"],
    tags: ["natural-sweetener"],
    benefits: "Gives instant protein boost, healthy snacking alternative to candies.",
    usage: "Ready-to-eat."
  },
  {
    name: "Kaaruppu uludhu laaddu",
    id: "karuppu-ulundu-laddu",
    tamilName: "கருப்பு உளுந்து லட்டு",
    category: "homemade-products",
    image: "/assets/black_gram_laddu.png",
    sizes: ["250g"],
    tags: ["natural-sweetener"],
    benefits: "Strengthens bones and spine, high protein content, excellent for women's health.",
    usage: "Ready-to-eat healthy sweet snack."
  },
  {
    name: "Karuvaepillai laaddu",
    id: "karuveppilai-laddu",
    tamilName: "கறிவேப்பிலை லட்டு",
    category: "homemade-products",
    image: "/assets/curry_leaf_laddu.png",
    sizes: ["200g"],
    tags: ["natural-sweetener", "immunity"],
    benefits: "Rich source of iron, prevents hair fall, improves digestion and vision.",
    usage: "Ready-to-eat herbal snack."
  },
  {
    name: "Red rice laaddu",
    id: "red-rice-laddu",
    tamilName: "சிகப்பரிசி லட்டு",
    category: "homemade-products",
    image: "/assets/red_rice_laddu.png",
    sizes: ["250g"],
    tags: ["natural-sweetener"],
    benefits: "Rich in fiber, boosts stamina, healthy snack for all age groups.",
    usage: "Ready-to-eat sweet snack."
  },

  // 15. Pickles & Masalas (5 items)
  {
    name: "Mango Pickle",
    id: "mango-pickle",
    tamilName: "மாங்காய் ஊறுகாய்",
    category: "pickles-masalas",
    image: "/assets/mango_pickle.jpg",
    sizes: ["250g"],
    tags: [],
    benefits: "Boosts appetite, assists in digestion, contains healthy sesame oil fats.",
    usage: "Serve with curd rice, idli, dosa, or hot rice."
  },
  {
    name: "Lemon Pickle",
    id: "lemon-pickle",
    tamilName: "எலுமிச்சை ஊறுகாய்",
    category: "pickles-masalas",
    image: "/assets/lemon_pickle.jpg",
    sizes: ["250g"],
    tags: [],
    benefits: "Vitamin C source, aids in digestion, zero artificial chemical preservatives.",
    usage: "Goes wonderfully with curd rice and variety rices."
  },
  {
    name: "Idli Podi (Gunpowder)",
    id: "idli-podi",
    tamilName: "இட்லி பொடி",
    category: "pickles-masalas",
    image: "/assets/idli_podi.png",
    sizes: ["100g"],
    tags: [],
    benefits: "High protein from lentils, convenient side dish.",
    usage: "Mix with wood-pressed sesame oil or ghee and use as dip for hot idlis and dosas."
  },
  {
    name: "Kulambu Milagai Thool",
    id: "kulambu-milagai-thool",
    tamilName: "குழம்பு மிளகாய்த் தூள்",
    category: "pickles-masalas",
    image: "/assets/kulambu_milagai_thool.jpg",
    sizes: ["500g"],
    tags: [],
    benefits: "One-stop masala for all South Indian kuzhambu varieties.",
    usage: "Add to tamarind base for Vatha Kuzhambu, Garlic Kuzhambu, or fish curry."
  },
  {
    name: "Curry Leaves Powder (Karuveppilai Podi)",
    id: "curry-leaves-powder",
    tamilName: "கறிவேப்பிலை பொடி",
    category: "pickles-masalas",
    image: "/assets/curry_leaves_powder.jpg",
    sizes: ["100g"],
    tags: [],
    benefits: "Excellent source of iron and antioxidants. Helps improve digestion and promotes hair growth.",
    usage: "Mix with hot rice and ghee/sesame oil, or serve as a flavorful side for idli and dosa."
  },

  // 16. Homemade Vathal (4 items)
  {
    name: "Beetroot Vathal",
    id: "beetroot-vathal",
    tamilName: "பீட்ரூட் வத்தல்",
    category: "homemade-vathal",
    image: "/assets/beetroot_vathal.png",
    sizes: ["250g"],
    tags: [],
    benefits: "Retains organic nitrates and fiber of beetroots, zero preservatives, natural snack.",
    usage: "Deep fry in hot oil for 5-10 seconds until crispy. Serve with variety rice or curd rice."
  },
  {
    name: "Carrot Vathal",
    id: "carrot-vathal",
    tamilName: "கேரட் வத்தல்",
    category: "homemade-vathal",
    image: "/assets/carrot_vathal.jpg",
    sizes: ["250g"],
    tags: [],
    benefits: "Rich in beta-carotene and dietary fibers, no added artificial color.",
    usage: "Deep fry in oil and enjoy as a crunchy side dish for South Indian meals."
  },
  {
    name: "Pumpkin / Poosanikkai Vathal",
    id: "poosanikkai-vathal",
    tamilName: "பூசணிக்காய் வத்தல்",
    category: "homemade-vathal",
    image: "/assets/poosanikkai_vathal.png",
    sizes: ["250g"],
    tags: [],
    benefits: "Highly alkaline superfood, cools the body, aids digestion.",
    usage: "Fry in hot oil till crispy and golden. Best paired with sambar or rasam rice."
  },
  {
    name: "Onion Vathal",
    id: "onion-vathal",
    tamilName: "வெங்காய வத்தல்",
    category: "homemade-vathal",
    image: "/assets/onion_vathal.png",
    sizes: ["250g"],
    tags: [],
    benefits: "Imparts rich onion flavor, stimulates digestion, completely homemade.",
    usage: "Deep fry in oil to eat as side dish, or use as tempering (tadka) for traditional curries."
  }
];
