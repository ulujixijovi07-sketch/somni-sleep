export interface Product {
  id: number;
  name: string;
  slug: string;
  category: "visual" | "auditory" | "tactile" | "olfactory";
  senseLabel: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  longDescription: string;
  features: string[];
  science: { title: string; detail: string; link?: string }[];
  usage: string;
  weight: string;
  materials: string;
  images: string[];
  tags: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  bestSeller: boolean;
  modeCards?: { icon: string; title: string; description: string; stats: string[] }[];
  materialSections?: { title: string; subtitle: string; description: string; list: string[]; image: string; reversed?: boolean }[];
  specCards?: { icon: string; value: string; label: string }[];
  comparisonTable?: { headers: string[]; rows: { label: string; values: ({ text: string; check: boolean } | string)[] }[] };
  boxContents?: { items: string[]; image: string };
  howItWorks?: { title: string; description: string };
  video?: string;
}

export const senseData = {
  visual: {
    id: "visual",
    name: "LUX",
    title: "Visual Sleep Protocol",
    subtitle: "Control light signals to reset your circadian rhythm",
    description:
      "Your brain has a master clock called the suprachiasmatic nucleus. It cares about one thing: light. A sliver of blue light through your eyelids cuts melatonin by up to 50%. The LUX collection goes after this pathway directly.",
    scienceBlurb:
      "Blue light after sunset delays melatonin by 3 hours on average, according to Harvard Medical School. Total darkness is not a luxury. It is a biological requirement.",
    color: "from-[#0A0A1A] to-[#050510]",
    accentColor: "#C9A84C",
    icon: "Eye",
  },
  auditory: {
    id: "auditory",
    name: "SONUS",
    title: "Auditory Sleep Protocol",
    subtitle: "Mask disruptive noise to prevent nocturnal arousals",
    description:
      "A part of your brainstem called the reticular activating system stays half-awake all night, scanning for irregular sounds. A car door. A neighbor. A snore. SONUS raises the noise floor so those spikes don't register.",
    scienceBlurb:
      "A 2021 meta-analysis in Sleep Medicine Reviews (n=8,242) found white noise reduced sleep onset latency by 38% compared to silence in noisy environments.",
    color: "from-[#111128] to-[#0A0A1A]",
    accentColor: "#7EB8C9",
    icon: "SpeakerHigh",
  },
  tactile: {
    id: "tactile",
    name: "TACTUS",
    title: "Tactile Sleep Protocol",
    subtitle: "Apply deep pressure to activate your parasympathetic nervous system",
    description:
      "Deep pressure on your skin hits the vagus nerve, which shifts your nervous system out of fight-or-flight and into rest mode. Same reason a hug feels good. We just put it in a product.",
    scienceBlurb:
      "Research published in the Journal of Sleep Research confirms that weighted pressure stimulation increases serotonin by 28% and decreases cortisol by 31% within 20 minutes.",
    color: "from-[#0A0A1A] to-[#111128]",
    accentColor: "#B8917E",
    icon: "Hand",
  },
  olfactory: {
    id: "olfactory",
    name: "OLFACIO",
    title: "Olfactory Sleep Protocol",
    subtitle: "Signal safety to your amygdala through scent",
    description:
      "Your sense of smell has a backdoor to your brain's emotion center. It skips the usual relay station and goes straight to the amygdala. OLFACIO scents tell your brain one thing: you're safe. Go to sleep.",
    scienceBlurb:
      "A controlled study at the University of Southampton found that lavender aromatherapy improved sleep quality scores by 20% compared to placebo, with effects strongest in the first week of use.",
    color: "from-[#111128] to-[#050510]",
    accentColor: "#9FAF8E",
    icon: "Wind",
  },
};

export const products: Product[] = [
  // ========== VISUAL / LUX ==========
  {
    id: 1,
    name: "3D Contour Sleep Mask",
    slug: "3d-contour-sleep-mask",
    category: "visual",
    senseLabel: "LUX",
    price: 49,
    compareAtPrice: 79,
    description: "Zero-pressure 3D eye cups with 100% blackout. Bluetooth 6.0 audio. Detachable & washable.",
    longDescription:
      "The first sleep mask engineered for side sleepers, deep sleep, and total sensory immersion. 15mm-deep 3D eye cups eliminate ocular pressure. Integrated nasal baffle achieves true 100% light occlusion. Built-in Bluetooth 6.0 with adjustable 0.8mm ultra-thin speakers. Modular electronics detach in 3 seconds for machine washing.",
    features: [
      "3D molded eye cups - zero pressure on eyelids or lashes",
      "100% blackout - nasal baffle seal tested at 10,000 lux",
      "Bluetooth 6.0 with adjustable ultra-thin speakers",
      "Side-sleeper optimized - slim profile temples",
      "3-second modular detach - machine washable up to 50 cycles",
      "Memory foam + ice silk cooling fabric",
      "6-hour battery, hidden Type-C charging",
    ],
    science: [
      {
        title: "Melatonin Preservation",
        detail:
          "5 lux of light through closed eyelids cuts melatonin by 50%. This mask gets it under 0.1 lux with the integrated nasal baffle.",
      },
      {
        title: "REM Protection",
        detail:
          "Pressure on your eyelids during REM triggers micro-wakeups. The 15mm-deep 3D cups eliminate eyelid contact entirely.",
      },
    ],
    usage: "Detach electronics (3s), wear mask, adjust speaker position for optimal audio. Hand wash fabric monthly.",
    weight: "122g",
    materials: "Memory foam, ice silk fabric, micro-hook strap, Bluetooth 6.0 module",
    images: ["/products/mask-3d-1.jpg", "/products/mask-3d-2.jpg"],
    tags: ["sleep mask", "bluetooth", "3D contour", "side sleeper", "light blocking", "washable"],
    stock: 200,
    rating: 4.9,
    reviewCount: 387,
    bestSeller: true,
  },
  {
    id: 2,
    name: "Mulberry Silk Sleep Mask",
    slug: "mulberry-silk-sleep-mask",
    category: "visual",
    senseLabel: "LUX",
    price: 39,
    description: "22 momme Grade 6A mulberry silk. Temperature regulating, anti-crease, pure luxury.",
    longDescription:
      "Cotton drinks your skincare. Synthetics make you sweat. Silk minds its own business. 22 momme mulberry silk, temperature-regulating, wide enough to block light from every angle, and it won't leave crease marks on your face.",
    features: [
      "22 momme Grade 6A mulberry silk",
      "Temperature regulating - cool in summer, warm in winter",
      "Anti-crease - prevents sleep lines",
      "Wide coverage - blocks peripheral light",
      "Adjustable silk-wrapped elastic",
    ],
    science: [
      {
        title: "Skin Barrier Protection",
        detail:
          "Silk pulls 30% less moisture out of your skin than cotton does.",
      },
    ],
    usage: "Adjust elastic for comfortable fit. Hand wash with silk detergent. Air dry flat.",
    weight: "45g",
    materials: "22 momme Grade 6A mulberry silk, silk-wrapped elastic",
    images: ["/products/mask-silk-1.jpg", "/products/mask-silk-2.jpg"],
    tags: ["silk sleep mask", "mulberry silk", "anti-aging", "cooling", "luxury"],
    stock: 180,
    rating: 4.8,
    reviewCount: 254,
    bestSeller: false,
  },
  {
    id: 3,
    name: "Amber Spectrum Sleep Light",
    slug: "amber-sleep-light",
    category: "visual",
    senseLabel: "LUX",
    price: 89,
    description: "Blue-light-free amber spectrum. Sunset simulation. Gradual dimming. Wake gently.",
    longDescription:
      "Standard LEDs spike blue at 450-480nm. That's the exact wavelength your brain uses to decide it's daytime. This light kills everything below 530nm. What's left is a warm amber glow that says 'night' to your brain. Sunset mode dims it to black over 30, 60, or 90 minutes.",
    features: [
      "Zero blue light - all wavelengths below 530nm removed",
      "Sunset simulation - 30/60/90 minute gradual dimming",
      "Dawn wake-up - gentle amber sunrise alarm",
      "Touch control - tap to cycle modes",
      "10 brightness levels",
    ],
    science: [
      {
        title: "Melatonin Suppression Threshold",
        detail:
          "460-480nm light kills melatonin twice as fast as light above 550nm. This lamp starts at 530nm.",
      },
      {
        title: "Circadian Phase Shift",
        detail:
          "Using amber light in the evening shifts your internal clock forward by about 36 minutes after two weeks, compared to regular bulbs.",
      },
    ],
    usage: "Place on nightstand. Start sunset mode 60-90 minutes before bed. Use dawn mode as wake-up alarm.",
    weight: "380g",
    materials: "Aluminum body, amber LED array, silicone base",
    images: ["/products/amber-light-1.jpg", "/products/amber-light-2.jpg"],
    tags: ["amber light", "blue light blocking", "sunset lamp", "sleep light", "circadian"],
    stock: 120,
    rating: 4.7,
    reviewCount: 198,
    bestSeller: false,
  },
  {
    id: 4,
    name: "Blue Light Filter Glasses",
    slug: "blue-light-filter-glasses",
    category: "visual",
    senseLabel: "LUX",
    price: 59,
    description: "Premium acetate frames. 99% blue light filtration. Designed to be worn, not hidden.",
    longDescription:
      "Most blue light glasses fall into two camps: ugly amber shields, or clear lenses that don't actually block anything. These use amber-tinted CR-39 lenses that filter 99% of light under 500nm, including the melatonin-killing band at 450-480nm. You can still read. You can still see colors. The acetate frames are designed to be worn, not hidden in a drawer.",
    features: [
      "99% filtration of light below 500nm",
      "Premium Mazzucchelli acetate frames",
      "Anti-reflective coating on both surfaces",
      "Spring hinges for all-day comfort",
      "Includes microfiber case",
    ],
    science: [
      {
        title: "Screen Time & Sleep",
        detail:
          "Two hours on a tablet at full brightness cuts melatonin 22%. These lenses bring it back to normal.",
      },
    ],
    usage: "Put on 90 minutes before bed during screen use. Clean with included microfiber cloth.",
    weight: "32g",
    materials: "Mazzucchelli acetate, CR-39 amber lenses, titanium hinges",
    images: ["/products/glasses-1.jpg", "/products/glasses-2.jpg"],
    tags: ["blue light glasses", "screen glasses", "sleep glasses", "acetate", "evening"],
    stock: 150,
    rating: 4.6,
    reviewCount: 143,
    bestSeller: false,
  },

  // ========== AUDITORY / SONUS ==========
  {
    id: 5,
    name: "Adaptive White Noise Machine",
    slug: "adaptive-white-noise-machine",
    category: "auditory",
    senseLabel: "SONUS",
    price: 79,
    description: "30 non-looping sounds. Adaptive volume. Built-in night light. No disruptive loops.",
    longDescription:
      "Every white noise machine loops. Your brain catches the seam and wakes up. This one generates sound in real time. 30 profiles, no loops. It also listens to the room and adjusts volume so the masking level stays flat all night.",
    features: [
      "30 non-looping sound profiles",
      "Adaptive volume - adjusts to ambient noise",
      "Built-in warm amber night light",
      "Timer - 30/60/90 min or all night",
      "Real-time sound generation - no detectable loops",
    ],
    science: [
      {
        title: "Auditory Arousal Threshold",
        detail:
          "Steady background noise raises the bar for what wakes you. Irregular sounds have to be louder to break through.",
      },
      {
        title: "Sleep Onset Latency",
        detail:
          "Across 38 studies, white noise cut time-to-sleep from 26 to 16 minutes on average.",
      },
    ],
    usage: "Place 1-2 meters from bed. Select preferred sound. Set timer or leave on all night.",
    weight: "340g",
    materials: "ABS housing, fabric speaker grille, silicone feet",
    images: ["/products/noise-machine-1.jpg", "/products/noise-machine-2.jpg"],
    tags: ["white noise", "sound machine", "sleep sounds", "noise masking", "non-looping"],
    stock: 160,
    rating: 4.8,
    reviewCount: 312,
    bestSeller: true,
  },
  {
    id: 6,
    name: "Side-Sleeper Sleep Earbuds",
    slug: "side-sleeper-earbuds",
    category: "auditory",
    senseLabel: "SONUS",
    price: 99,
    description: "Flat profile for side sleepers. Passive -27dB isolation. No active electronics.",
    longDescription:
      "Regular earbuds dig into your ear when you lie on your side. These sit flush. Flat silicone shell, pressure spread across your outer ear instead of jammed into the canal. Multi-layer filter gives -27dB isolation. No battery, no Bluetooth, no EMF. Just physics.",
    features: [
      "Flat-profile design - comfortable for side sleeping",
      "-27dB passive noise isolation",
      "No electronics - no battery, no Bluetooth, no EMF",
      "Multi-layer acoustic filter for frequency-balanced attenuation",
      "4 sizes of medical-grade silicone tips included",
    ],
    science: [
      {
        title: "Passive Attenuation",
        detail:
          "-27dB makes things sound about 85% quieter. Street noise drops to a whisper.",
      },
    ],
    usage: "Select correct tip size. Insert with gentle rotation. Clean tips weekly with warm water.",
    weight: "18g (pair)",
    materials: "Medical-grade silicone, acoustic filter membrane",
    images: ["/products/earbuds-1.jpg", "/products/earbuds-2.jpg"],
    tags: ["sleep earbuds", "side sleeper", "earplugs", "noise isolation", "passive"],
    stock: 140,
    rating: 4.5,
    reviewCount: 187,
    bestSeller: false,
  },
  {
    id: 7,
    name: "Sound + Light Therapy Device",
    slug: "sound-light-therapy",
    category: "auditory",
    senseLabel: "SONUS",
    price: 129,
    description: "Combined 30-sound library + dawn simulation. The all-in-one bedside sleep companion.",
    longDescription:
      "White noise at night, sunrise alarm in the morning. One device. 30 non-looping sounds with adaptive volume for sleep. A 30-minute amber dawn simulation to wake you up. FM radio too, if you want it.",
    features: [
      "30 non-looping sleep sounds",
      "30-minute dawn simulation with amber LED",
      "FM radio with 20 presets",
      "Adaptive volume sensor",
      "Dual independent alarms (weekday/weekend)",
    ],
    science: [
      {
        title: "Dawn Simulation Efficacy",
        detail:
          "Waking up to gradual light instead of sound cuts morning grogginess by 27%.",
      },
    ],
    usage: "Set bedtime sound and timer. Set dawn alarm for morning. Place facing bed, 1-2m away.",
    weight: "420g",
    materials: "ABS + fabric, LED array, speaker driver",
    images: ["/products/therapy-device-1.jpg", "/products/therapy-device-2.jpg"],
    tags: ["sleep therapy", "dawn simulation", "white noise", "alarm", "light therapy"],
    stock: 90,
    rating: 4.9,
    reviewCount: 156,
    bestSeller: false,
  },

  // ========== TACTILE / TACTUS ==========
  {
    id: 8,
    name: "Weighted Sleep Mask",
    slug: "weighted-sleep-mask",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 69,
    description: "0.5lb micro-glass bead fill. Deep pressure stimulation. Darkness + calm combined.",
    longDescription:
      "Blocks light. Applies pressure. That's it. 0.5lbs of micro-glass beads spread across your brow and temples. Same thing as someone holding their palm to your forehead, telling your nervous system to stand down.",
    features: [
      "0.5lb micro-glass bead fill for deep pressure stimulation",
      "100% blackout fabric",
      "Even weight distribution across brow and temples",
      "Breathable cotton outer, cooling bamboo inner",
      "Adjustable strap",
    ],
    science: [
      {
        title: "Deep Pressure & Serotonin",
        detail:
          "Deep pressure bumps serotonin 28% and drops cortisol 31% in about 20 minutes.",
      },
      {
        title: "Vagus Nerve Stimulation",
        detail:
          "Light forehead pressure hits a nerve branch that feeds into your vagus nerve.",
      },
    ],
    usage: "Position over eyes and brow. Adjust strap until weight feels distributed, not concentrated.",
    weight: "260g",
    materials: "Cotton outer, bamboo inner, micro-glass bead fill",
    images: ["/products/weighted-mask-1.jpg", "/products/weighted-mask-2.jpg"],
    tags: ["weighted mask", "deep pressure", "anxiety", "blackout", "tension relief"],
    stock: 110,
    rating: 4.8,
    reviewCount: 234,
    bestSeller: true,
  },
  {
    id: 9,
    name: "Silk Pillowcase Set (2-Pack)",
    slug: "silk-pillowcase-set",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 59,
    description: "25 momme Grade 6A silk. Temperature regulating. Anti-aging. 2-pack with wash bag.",
    longDescription:
      "Your face spends 2,500 hours a year against fabric. Cotton drinks your skincare and leaves crease marks. 25 momme silk cuts friction 43% compared to cotton. Hidden zipper keeps it in place.",
    features: [
      "25 momme Grade 6A mulberry silk",
      "43% less friction than cotton",
      "Temperature regulating - cool touch",
      "Hidden zipper closure - stays in place",
      "Includes silk wash bag",
    ],
    science: [
      {
        title: "Friction & Sleep Creases",
        detail:
          "Silk has 43% less friction than cotton. Less pulling on your skin, fewer crease marks, less moisture loss.",
      },
    ],
    usage: "Insert pillow, zip closed. Machine wash cold in provided wash bag. Air dry.",
    weight: "190g (set)",
    materials: "25 momme Grade 6A mulberry silk, nylon zipper",
    images: ["/products/pillowcase-1.jpg", "/products/pillowcase-2.jpg"],
    tags: ["silk pillowcase", "anti-aging", "hair care", "cooling", "luxury bedding"],
    stock: 200,
    rating: 4.9,
    reviewCount: 401,
    bestSeller: true,
  },
  {
    id: 10,
    name: "Acupressure Mat & Pillow Set",
    slug: "acupressure-mat-set",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 79,
    description: "6,210 stimulation points. Endorphin release. Pre-sleep tension relief in 20 minutes.",
    longDescription:
      "Lie on this for 20 minutes before bed. First 90 seconds suck. Then something shifts. Your back warms up, your muscles let go, and the tension you've been carrying all day just drains out. 6,210 points. Your body handles the rest.",
    features: [
      "6,210 acupressure points across mat + pillow",
      "High-density HIPS plastic points - no flattening over time",
      "Organic cotton cover, plant-based foam interior",
      "Includes carry bag",
      "20-minute pre-sleep protocol included",
    ],
    science: [
      {
        title: "Endorphin Release",
        detail:
          "Acupressure triggers your body's own painkillers to release within 15-20 minutes.",
      },
      {
        title: "Cortisol Reduction",
        detail:
          "A 4-week study found acupressure mat use before bed dropped cortisol by 26%.",
      },
    ],
    usage: "Lie on mat for 20 minutes before bed. Start with a thin shirt; progress to bare skin. Breathe deeply.",
    weight: "480g",
    materials: "Organic cotton, plant-based foam, HIPS plastic points",
    images: ["/products/acupressure-1.jpg", "/products/acupressure-2.jpg"],
    tags: ["acupressure", "tension relief", "endorphins", "muscle relaxation", "stress"],
    stock: 85,
    rating: 4.6,
    reviewCount: 178,
    bestSeller: false,
  },
  {
    id: 11,
    name: "Cooling Sleep Blanket",
    slug: "cooling-sleep-blanket",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 99,
    description: "Japanese ARC-chill fabric. Absorbs and dissipates body heat. The blanket that runs cold.",
    longDescription:
      "Your core temp has to drop 1-2°C before you can fall asleep. Regular blankets fight that. This one helps. Japanese ARC-chill fiber pulls heat off your body and dumps it into the air. Surface stays 2-4°C cooler than the room. You fall asleep faster because your blanket isn't working against you.",
    features: [
      "Japanese ARC-chill cooling fiber",
      "Surface temperature 2-4°C below ambient",
      "Moisture-wicking - stays dry all night",
      "Silky-soft hand feel",
      "Machine washable",
    ],
    science: [
      {
        title: "Core Temperature & Sleep Onset",
        detail:
          "Your core temp needs to drop 1-2°C to fall asleep. External cooling speeds that up by 30-40%.",
      },
    ],
    usage: "Use as primary blanket or layer. Machine wash cold, tumble dry low.",
    weight: "450g",
    materials: "ARC-chill nylon/polyester blend, moisture-wicking finish",
    images: ["/products/cooling-blanket-1.jpg", "/products/cooling-blanket-2.jpg"],
    tags: ["cooling blanket", "temperature regulation", "night sweats", "summer sleep", "Japanese fabric"],
    stock: 130,
    rating: 4.7,
    reviewCount: 221,
    bestSeller: false,
  },

  // ========== OLFACTORY / OLFACIO ==========
  {
    id: 12,
    name: "Deep Sleep Pillow Spray",
    slug: "deep-sleep-pillow-spray",
    category: "olfactory",
    senseLabel: "OLFACIO",
    price: 29,
    compareAtPrice: 45,
    description: "DOCTEAT 30ML Melatonin Pillow Spray. Plant-based fast-absorbing formula sprayed onto pillow before sleep. Non-habit forming sleep aid trusted by customers across Amazon, eBay, and independent stores worldwide. 30ML compact bottle — perfect for travel.",
    longDescription:
      "Spray. Breathe. Sleep. Four ingredients, one purpose. Lavender slows your nervous system. Roman chamomile hooks into GABA receptors — same ones targeted by anti-anxiety medications. Vetiver keeps it grounded so you don't get that synthetic perfume headache. Micro-dose melatonin absorbed through inhalation, bypassing digestion for faster onset.",
    features: [
      "30ML Travel-Sized Bottle",
      "Fast-Acting Melatonin Formula",
      "Plant-Based & Non-Habit Forming",
      "Calming Lavender + Chamomile Scent",
      "OEM/White-Label Ready",
    ],
    science: [
      { title: "Melatonin for sleep onset latency", url: "https://pubmed.ncbi.nlm.nih.gov/12622846/" },
      { title: "Melatonin efficacy meta-analysis", url: "https://pubmed.ncbi.nlm.nih.gov/23691095/" },
    ],
    usage: "Spray 2-3 times on pillow 10 minutes before bed. Breathe deeply for 30 seconds.",
    weight: "120g",
    materials: "Lavender essential oil, chamomile, vetiver, melatonin, amber glass bottle",
    images: [
      "/products/deep-sleep-pillow-spray/product_0.webp",
      "/products/deep-sleep-pillow-spray/product_6.webp",
      "/products/deep-sleep-pillow-spray/product_7.webp",
      "/products/deep-sleep-pillow-spray/img_6.webp",
      "/products/deep-sleep-pillow-spray/img_7.webp",
      "/products/deep-sleep-pillow-spray/img_8.webp",
      "/products/deep-sleep-pillow-spray/img_9.webp",
    ],
    tags: ["sleep spray", "pillow spray", "lavender", "aromatherapy", "essential oils", "melatonin"],
    stock: 250,
    rating: 4.8,
    reviewCount: 512,
    bestSeller: true,
    modeCards: [
      { icon: "🌿", title: "Melatonin Absorption", description: "Absorbed through inhalation and skin contact — bypassing the digestive system for faster onset than pills. Each metered spray delivers exactly 0.15ml of pharmaceutical-grade melatonin formula.", stats: ["0.15ml Metered Spray", "15-Minute Peak", "No Digestion Needed"] },
      { icon: "😴", title: "Dual Sensory Sleep", description: "Lavender and chamomile essential oils activate your olfactory pathway while melatonin works systemically. Two independent biological mechanisms converge for deeper, faster sleep onset. Non-habit forming by design.", stats: ["-7min Sleep Onset", "Dual Pathway", "Non-Habit Forming"] }
    ],
    materialSections: [
      { title: "Plant-Based", subtitle: "Formula", description: "Pharmaceutical-grade melatonin derived from natural plant sources. Cold-pressed lavender and chamomile essential oils. Zero synthetic chemicals. Zero artificial fragrances. Just nature, distilled.", list: ["Pharmaceutical-grade melatonin", "Cold-pressed lavender oil", "Chamomile extract", "Zero artificial additives"], image: "/products/deep-sleep-pillow-spray/product_0.webp" },
      { title: "30ML Precision", subtitle: "Bottle", description: "Fine mist nozzle delivers a consistent 0.15ml per spray. ~200 sprays per bottle — about 2 months of nightly use. Amber glass protects the formula from UV degradation. TSA-friendly for travel.", list: ["0.15ml metered spray", "~200 sprays per bottle", "Amber glass UV protection", "TSA-friendly 30ML"], image: "/products/deep-sleep-pillow-spray/product_6.webp", reversed: true }
    ],
    specCards: [
      { icon: "⚖️", value: "30ML", label: "Volume" },
      { icon: "🎯", value: "0.15ml", label: "Per Spray" },
      { icon: "🌿", value: "Plant-Based", label: "Formula" },
      { icon: "🌸", value: "Lavender", label: "Scent" },
      { icon: "🔢", value: "~200", label: "Sprays/Bottle" },
      { icon: "📅", value: "2 Months", label: "Supply" },
      { icon: "🫙", value: "Amber Glass", label: "Bottle" },
      { icon: "✅", value: "Export Qty", label: "Quality" }
    ],
    comparisonTable: {
      headers: ["", "SOMNI Spray", "Melatonin Pills", "Sleep Gummies", "Prescription"],
      rows: [
        { label: "Onset Time", values: [{ text: "15 min", check: true }, "45 min", "30 min", "20-60 min"] },
        { label: "Digestion Needed", values: [{ text: "No", check: true }, { text: "Yes", check: false }, { text: "Yes", check: false }, { text: "Yes", check: false }] },
        { label: "Portable", values: [{ text: "Yes", check: true }, { text: "Yes", check: true }, { text: "Yes", check: true }, { text: "Varies", check: false }] },
        { label: "Non-Habit Forming", values: [{ text: "Yes", check: true }, { text: "Sometimes", check: false }, { text: "Sometimes", check: false }, { text: "No", check: false }] },
        { label: "Natural Ingredients", values: [{ text: "Yes", check: true }, { text: "Varies", check: false }, { text: "Varies", check: false }, { text: "No", check: false }] }
      ]
    },
    boxContents: { items: ["DOCTEAT Melatonin Spray ×1", "Travel Pouch ×1", "Instruction Card ×1"], image: "/products/deep-sleep-pillow-spray/img_6.webp" },
    howItWorks: { title: "2-3 Pumps. 15 Minutes. Deep Sleep.", description: "Spray 2-3 pumps onto your pillow 15 minutes before bed. Melatonin absorbs through inhalation and skin contact — faster than pills because it bypasses the digestive system. Peak concentration reached within 15 minutes." },
  },
  {
    id: 13,
    name: "Calm Essential Oil Blend",
    slug: "calm-essential-oil-blend",
    category: "olfactory",
    senseLabel: "OLFACIO",
    price: 39,
    description: "100% pure therapeutic-grade oils. Pre-diluted for diffuser use. The scent of safety.",
    longDescription:
      "Not a generic 'relaxation blend.' Four oils, each picked for what it actually does. Bergamot drops cortisol. Frankincense slows your breathing. Cedarwood has cedrol, a known sedative. Ylang ylang lowers blood pressure.",
    features: [
      "100% pure therapeutic-grade essential oils",
      "Pre-diluted in jojoba oil - ready for diffuser",
      "Proprietary 4-oil blend: Bergamot, Frankincense, Cedarwood, Ylang Ylang",
      "30ml amber glass bottle",
      "GC/MS tested for purity",
    ],
    science: [
      {
        title: "Cortisol & Bergamot",
        detail:
          "Inhalation of bergamot essential oil reduced salivary cortisol by 17% within 15 minutes (Phytotherapy Research, 2017).",
      },
      {
        title: "Blood Pressure & Ylang Ylang",
        detail:
          "Ylang ylang inhalation reduced systolic blood pressure by 6 mmHg and heart rate by 5 bpm in a controlled study (Evidence-Based Complementary Medicine).",
      },
    ],
    usage: "Add 5-8 drops to diffuser 30 minutes before bed. Can also be used in a warm bath (mix with carrier oil first).",
    weight: "95g",
    materials: "Bergamot, Frankincense, Cedarwood, Ylang Ylang essential oils, jojoba carrier oil",
    images: ["/products/oil-blend-1.jpg", "/products/oil-blend-2.jpg"],
    tags: ["essential oil", "diffuser blend", "cortisol", "aromatherapy", "natural sleep aid"],
    stock: 180,
    rating: 4.7,
    reviewCount: 267,
    bestSeller: false,
  },
  {
    id: 14,
    name: "Portable Aroma Diffuser",
    slug: "portable-aroma-diffuser",
    category: "olfactory",
    senseLabel: "OLFACIO",
    price: 69,
    description: "Ultrasonic, whisper-quiet. Auto-off. Warm ambient light. Travel-sized.",
    longDescription:
      "Hotel rooms smell like bleach. Airbnbs smell like strangers. This portable diffuser fills about 200 square feet with whatever oil you put in it. Runs 8 hours on one fill, shuts off when empty. Warm amber light. Under 30dB, which is quieter than your breathing.",
    features: [
      "Ultrasonic diffusion - no heat, preserves oil integrity",
      "8-hour runtime on single fill",
      "Auto-off when empty",
      "Warm amber LED with dimmer",
      "Under 30dB - whisper quiet",
    ],
    science: [
      {
        title: "Olfactory Pathway to Sleep",
        detail:
          "Scent molecules reach the olfactory bulb within 200ms of inhalation. The bulb projects directly to the amygdala, bypassing thalamic relay, faster than any other sensory system.",
      },
    ],
    usage: "Fill reservoir with water. Add 5-8 drops of essential oil. Press power button. Clean weekly with mild vinegar solution.",
    weight: "280g",
    materials: "BPA-free PP + wood-grain accent, ultrasonic plate",
    images: ["/products/diffuser-1.jpg", "/products/diffuser-2.jpg"],
    tags: ["diffuser", "ultrasonic", "aromatherapy", "essential oil", "portable"],
    stock: 95,
    rating: 4.6,
    reviewCount: 189,
    bestSeller: false,
  },
  {
    id: 15,
    name: "Sleep Ritual Set",
    slug: "sleep-ritual-set",
    category: "olfactory",
    senseLabel: "OLFACIO",
    price: 79,
    compareAtPrice: 107,
    description: "Pillow Spray + Essential Oil Blend + Portable Diffuser. The complete olfactory toolkit.",
    longDescription:
      "One product builds a habit. Three build a ritual. Your brain needs rituals to switch from awake to asleep. This set has all three OLFACIO products: the pillow spray, the oil blend, and the diffuser. 26% off buying them separately.",
    features: [
      "Deep Sleep Pillow Spray (50ml) - full size",
      "Calm Essential Oil Blend (30ml) - full size",
      "Portable Aroma Diffuser - full unit",
      "26% savings vs individual purchase",
      "Gift-ready box with sleep ritual guide",
    ],
    science: [
      {
        title: "Ritual & Sleep Onset",
        detail:
          "Consistent pre-sleep rituals reduce sleep onset latency by 30-40% over 2 weeks by creating conditioned autonomic responses (Behavioral Sleep Medicine).",
      },
    ],
    usage: "30 min before bed: fill diffuser → add 8 drops Calm Blend → start. 10 min before bed: spray pillow 2-3 times. Inhale. Sleep.",
    weight: "495g (full set)",
    materials: "As listed in individual products",
    images: ["/products/ritual-set-1.jpg", "/products/ritual-set-2.jpg"],
    tags: ["sleep set", "ritual", "gift", "bundle", "aromatherapy kit"],
    stock: 75,
    rating: 4.9,
    reviewCount: 134,
    bestSeller: false,
  },

  // ========== NEW ADDITIONS ==========
  {
    id: 16,
    name: "CES Sleep Therapy Device",
    slug: "acupressure-sleep-mat",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 79,
    compareAtPrice: 109,
    description: "Handheld CES (Cranial Electrotherapy Stimulation) sleep device with ear-clip electrodes. Uses gentle microcurrent pulses to calm the nervous system and promote deep sleep. Rechargeable 800-1000mAh battery provides 1-3 hours of therapy per charge. Clinically studied for insomnia relief.",
    longDescription:
      "CES (Cranial Electrotherapy Stimulation) is a non-invasive therapy that delivers gentle microcurrent pulses through ear-clip electrodes. The pulses travel through the earlobes to modulate the brain's sleep-wake centers, calming the nervous system and promoting natural deep sleep. This handheld device features 3 intensity levels, a rechargeable 1000mAh battery providing 1-3 hours of therapy per charge, and a portable design for home or travel use. Clinically studied for insomnia relief with minimal side effects.",
    features: [
      "CES Microcurrent Therapy",
      "Ear-Clip Electrode Design",
      "Rechargeable 1000mAh Battery",
      "3 Intensity Levels",
      "Portable Handheld Design",
    ],
    science: [
      {
        title: "CES for insomnia treatment",
        detail:
          "Cranial Electrotherapy Stimulation (CES) delivers microcurrent pulses via ear-clip electrodes to modulate brain activity and promote sleep. Clinical studies demonstrate significant improvements in sleep onset and maintenance.",
        link: "https://pubmed.ncbi.nlm.nih.gov/25484674/",
      },
      {
        title: "Microcurrent therapy for sleep disorders",
        detail:
          "Microcurrent electrical stimulation has been shown to reduce sleep latency and improve sleep efficiency in patients with chronic insomnia, with effects comparable to pharmacological interventions but without side effects.",
        link: "https://pubmed.ncbi.nlm.nih.gov/25202170/",
      },
    ],
    usage: "Clip electrodes to earlobes. Select intensity level (start with 1). Use for 20-60 minutes before sleep. Recharge via USB-C when low.",
    weight: "180g",
    materials: "ABS handheld body, ear-clip electrodes, lithium battery, microcurrent circuitry",
    images: [
      "/products/acupressure-sleep-mat/product_4.webp",
      "/products/acupressure-sleep-mat/product_5.webp",
      "/products/acupressure-sleep-mat/img_5.webp",
      "/products/acupressure-sleep-mat/img_6.webp",
      "/products/acupressure-sleep-mat/img_7.webp",
      "/products/acupressure-sleep-mat/img_8.webp",
      "/products/acupressure-sleep-mat/img_9.webp",
    ],
    tags: ["CES therapy", "microcurrent", "ear-clip", "insomnia relief", "sleep device", "rechargeable"],
    stock: 95,
    rating: 4.6,
    reviewCount: 212,
    bestSeller: false,
    video: "/videos/tactus-hero.mp4",
    modeCards: [
      { icon: "⚡", title: "CES Microcurrent Therapy", description: "Cranial Electrotherapy Stimulation (CES) delivers gentle microcurrent pulses through ear-clip electrodes. These pulses travel via the earlobes to modulate the brain's sleep-wake centers, calming the nervous system and promoting natural deep sleep. Clinically used for over 40 years with minimal side effects.", stats: ["CES Technology", "Vagus Nerve", "40+ Years"] },
      { icon: "🧠", title: "Brainwave Entrainment", description: "Microcurrent pulses gently guide your brain from an alert beta state into the relaxed alpha frequencies associated with rest and meditation. With regular use over 2 weeks, your brain learns this pathway — falling asleep becomes faster and more automatic. Drug-free by design.", stats: ["Alpha Wave", "2-Week", "Drug-Free"] }
    ],
    materialSections: [
      { title: "Ear-Clip Electrode", subtitle: "Design", description: "Soft conductive ear-clips deliver microcurrent pulses comfortably through the earlobes. The clips are designed for a secure yet gentle fit — no adhesives, no gels, no discomfort. Simply clip on and let the pulses work their way to your brain's sleep centers.", list: ["Soft conductive ear-clips", "No adhesives or gels needed", "Gentle, secure fit", "Direct vagus nerve pathway"], image: "/products/acupressure-sleep-mat/product_4.webp" },
      { title: "Rechargeable", subtitle: "& Portable", description: "Built-in 1000mAh rechargeable battery delivers 1-3 hours of therapy per charge. USB-C charging means you can top up anywhere. At just 180g, it's light enough to toss in your bag — perfect for travel, office naps, or anywhere sleep needs to happen.", list: ["1000mAh rechargeable battery", "1-3 hours per charge", "USB-C fast charging", "180g ultra-portable"], image: "/products/acupressure-sleep-mat/product_5.webp", reversed: true }
    ],
    specCards: [
      { icon: "🔋", value: "1000mAh", label: "Battery" },
      { icon: "⏱️", value: "1-3 Hours", label: "Session" },
      { icon: "📊", value: "3 Levels", label: "Intensity" },
      { icon: "⚡", value: "CES", label: "Technology" },
      { icon: "👂", value: "Ear-Clip", label: "Electrode" },
      { icon: "🔌", value: "USB-C", label: "Charging" },
      { icon: "⚖️", value: "180g", label: "Weight" },
      { icon: "✅", value: "CE Certified", label: "Safety" }
    ],
    comparisonTable: {
      headers: ["", "SOMNI CES", "Pills", "Meditation", "Weighted Blankets"],
      rows: [
        { label: "Drug-Free", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "Yes", check: true }] },
        { label: "Fast Acting", values: [{ text: "20 min", check: true }, { text: "30-60 min", check: false }, { text: "Varies", check: false }, { text: "15-20 min", check: true }] },
        { label: "Portable", values: [{ text: "Yes", check: true }, { text: "Yes", check: true }, { text: "Yes", check: true }, { text: "No", check: false }] },
        { label: "No Side Effects", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "Yes", check: true }] },
        { label: "Clinical Evidence", values: [{ text: "Strong", check: true }, { text: "Strong", check: true }, { text: "Moderate", check: false }, { text: "Moderate", check: false }] }
      ]
    },
    boxContents: { items: ["CES Device ×1", "Ear-Clip Cable ×1", "USB-C Cable ×1", "Storage Pouch ×1", "User Guide ×1"], image: "/products/acupressure-sleep-mat/img_5.webp" },
    howItWorks: { title: "Clip On. Select Intensity. Sleep Deep.", description: "Clip the electrodes onto your earlobes, select your intensity level (start with Level 1), and relax for 20 minutes before sleep. The microcurrent pulses gently guide your brain into a calm, sleep-ready state. With daily use over 2 weeks, falling asleep becomes faster and more automatic." },
  },
  {
    id: 17,
    name: "White Noise + Aroma Machine",
    slug: "white-noise-aroma-machine",
    category: "auditory",
    senseLabel: "SONUS",
    price: 89,
    compareAtPrice: 129,
    description: "5-in-1 White Noise Sleep Machine with Bluetooth speaker, realistic flame effect lamp, ultrasonic aroma diffuser, humidifier, and night light. The flickering flame creates a cozy ambiance while white noise masks disruptive sounds. Essential oil compatible for aromatherapy benefits. Plug-in design for all-night use.",
    longDescription:
      "Three senses. One device. Thirty non-looping sound profiles with adaptive volume that adjusts to ambient noise. A built-in ultrasonic aroma diffuser that fills 300 sq ft with your chosen essential oil. A flame-effect amber LED night light that mimics a flickering candle without the fire hazard. Bluetooth speaker for your own audio. This is the premium sleep machine that targets auditory, olfactory, and visual senses simultaneously.",
    features: [
      "5-in-1 Multi-Function Design",
      "Realistic 3D Flame Effect",
      "Bluetooth 5.0 Speaker",
      "Ultrasonic Aroma Diffuser",
      "7 Soothing Sound Options",
      "Warm Night Light",
    ],
    science: [
      { title: "White noise improves sleep in noisy environments", url: "https://pubmed.ncbi.nlm.nih.gov/28834690/" },
      { title: "Aromatherapy for sleep quality", url: "https://pubmed.ncbi.nlm.nih.gov/19581531/" },
    ],
    usage: "Fill water tank, add 5-8 drops essential oil. Select sound profile and volume. Set timer or leave on all night. Place 1-2 meters from bed. Clean tank weekly.",
    weight: "700g",
    materials: "ABS housing, ultrasonic plate, fabric speaker grille, LED array, silicone feet",
    images: [
      "/products/white-noise-aroma-machine/product_0.webp",
      "/products/white-noise-aroma-machine/product_2.webp",
      "/products/white-noise-aroma-machine/product_7.webp",
      "/products/white-noise-aroma-machine/img_5.webp",
      "/products/white-noise-aroma-machine/img_6.webp",
      "/products/white-noise-aroma-machine/img_7.webp",
      "/products/white-noise-aroma-machine/img_8.webp",
      "/products/white-noise-aroma-machine/img_9.webp",
    ],
    tags: ["white noise", "aroma diffuser", "sleep machine", "night light", "sound therapy", "humidifier", "bluetooth speaker", "premium"],
    stock: 65,
    rating: 4.8,
    reviewCount: 187,
    bestSeller: true,
    video: "/videos/sonus-hero.mp4",
    modeCards: [
      { icon: "🔊", title: "White Noise Masking", description: "Steady background noise raises the bar for what wakes you up. Irregular sounds — a car door, a snore, a neighbor — have to be louder to break through the noise floor. A 2021 meta-analysis of 8,242 participants found white noise reduced sleep onset by 38% compared to silence in noisy environments.", stats: ["38% Faster", "Noise Masking", "2021 Meta"] },
      { icon: "🌸", title: "Aromatherapy Synergy", description: "Lavender and essential oils drift through the room via ultrasonic diffusion while white noise masks disruptive sounds. Two sensory pathways — auditory and olfactory — converge to create the ideal sleep environment. Studies show aromatherapy improves deep sleep by 20%.", stats: ["20% Deep Sleep", "Ultrasonic", "Dual Sensory"] }
    ],
    materialSections: [
      { title: "5-in-1 Multi-Function", subtitle: "Design", description: "White noise machine, Bluetooth speaker, aroma diffuser, humidifier, and night light — all in one compact device. No more clutter of separate devices on your nightstand. Each function works independently or together for a fully customized sleep environment.", list: ["White noise machine", "Bluetooth 5.0 speaker", "Ultrasonic aroma diffuser", "Humidifier", "Night light"], image: "/products/white-noise-aroma-machine/product_2.webp" },
      { title: "Realistic 3D Flame", subtitle: "Effect", description: "A lifelike flickering flame creates warm, cozy ambiance without any fire hazard. The LED flame effect mimics a real candle — dancing light that soothes the mind and signals bedtime to your brain. Perfect as a calming night light or decorative accent.", list: ["3D realistic flame effect", "No fire hazard", "Soothing amber glow", "Adjustable brightness"], image: "/products/white-noise-aroma-machine/product_7.webp", reversed: true }
    ],
    specCards: [
      { icon: "🎵", value: "7 Sounds", label: "Options" },
      { icon: "🔵", value: "BT 5.0", label: "Bluetooth" },
      { icon: "🔥", value: "3D Flame", label: "Effect" },
      { icon: "💧", value: "200ml", label: "Tank" },
      { icon: "💡", value: "Night Light", label: "Feature" },
      { icon: "🔌", value: "Plug-in", label: "Power" },
      { icon: "⚖️", value: "350g", label: "Weight" },
      { icon: "⬜", value: "White", label: "Color" }
    ],
    comparisonTable: {
      headers: ["", "SOMNI Machine", "Phone Apps", "Diffuser Only", "Basic"],
      rows: [
        { label: "Sound Options", values: [{ text: "7+ Sounds", check: true }, { text: "Varies", check: false }, { text: "None", check: false }, { text: "Limited", check: false }] },
        { label: "Aromatherapy", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "No", check: false }] },
        { label: "Flame Effect", values: [{ text: "3D Realistic", check: true }, { text: "No", check: false }, { text: "No", check: false }, { text: "No", check: false }] },
        { label: "Bluetooth Speaker", values: [{ text: "BT 5.0", check: true }, { text: "Built-in", check: true }, { text: "No", check: false }, { text: "No", check: false }] },
        { label: "Night Light", values: [{ text: "Warm Amber", check: true }, { text: "Screen Only", check: false }, { text: "Some Models", check: false }, { text: "No", check: false }] }
      ]
    },
    boxContents: { items: ["White Noise Machine ×1", "Water Tank ×1", "USB Cable ×1", "User Guide ×1"], image: "/products/white-noise-aroma-machine/img_5.webp" },
    howItWorks: { title: "Fill. Select. Sleep.", description: "Fill the 200ml water tank and add 5-8 drops of your favorite essential oil. Select your preferred sound profile from 7 options. Set the flame effect brightness to your liking. Place 1-2 meters from your bed and let the combined sensory experience guide you into deep, uninterrupted sleep." },
  },
];

export function getProductsBySense(sense: string): Product[] {
  return products.filter((p) => p.category === sense);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestSellers(limit = 4): Product[] {
  return products.filter((p) => p.bestSeller).slice(0, limit);
}
