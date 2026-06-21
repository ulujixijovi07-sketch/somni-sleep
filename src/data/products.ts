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
  howItWorks?: { title: string; description: string; image?: string };
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

  // ========== AUDITORY / SONUS ==========

  // ========== TACTILE / TACTUS ==========

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

  // ========== NEW ADDITIONS ==========
  {
    id: 16,
    name: "CES Sleep Therapy Device",
    slug: "acupressure-sleep-mat",
    category: "tactile",
    senseLabel: "TACTUS",
    price: 79,
    compareAtPrice: 109,
    description: "Ear-clip sleep aid device using gentle microcurrent pulses to promote deep sleep. Features 1000mAh rechargeable battery, 3 therapy modes with adjustable timer, and auto-shutoff. Ultra-lightweight at just 50g with ABS body. Clinically tested GB4706.1-2005 safety certified.",
    longDescription:
      "CES (Cranial Electrotherapy Stimulation) is a non-invasive therapy that delivers gentle microcurrent pulses through ear-clip electrodes. The pulses travel through the earlobes to modulate the brain's sleep-wake centers, calming the nervous system and promoting natural deep sleep. This handheld device features 3 intensity levels, a rechargeable 1000mAh battery providing 1-3 hours of therapy per charge, and a portable design for home or travel use. Clinically studied for insomnia relief with minimal side effects.",
    features: ["CES Microcurrent Therapy", "Ear-Clip Electrode Design", "3 Therapy Modes + Timer", "1000mAh Rechargeable Battery", "50g Ultra-Lightweight"],
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
    usage: "Moisten gasket with saline, clip electrodes to earlobes (no left/right distinction), long-press power to start, select mode and timer, use for 20-60 minutes before sleep. Auto-shuts off after 10min inactivity.",
    weight: "50g",
    materials: "ABS body, conductive ear-clip electrodes, 1000mAh lithium battery, microcurrent circuitry",
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
      { icon: "⚡", title: "Ear-Clip CES Therapy", description: "The ear-clip design delivers gentle microcurrent pulses directly through the earlobes — no adhesives, no gels, just saline-moistened conductive gaskets. The pulses travel to the brain's sleep centers via the vagus nerve pathway, calming the nervous system naturally.", stats: ["CES Technology", "Vagus Nerve", "40+ Years"] },
      { icon: "🧠", title: "3 Modes + Smart Timer", description: "Choose from 3 therapy modes optimized for different sleep needs. Set the built-in timer for 20-60 minute sessions. The device auto-shuts off after 10 minutes of inactivity — safe for overnight use. Display dims automatically to preserve darkness.", stats: ["Alpha Wave", "2-Week", "Drug-Free"] }
    ],
    materialSections: [
      { title: "Ear-Clip Electrode", subtitle: "Conductive Interface", description: "Medical-grade conductive ear-clips deliver microcurrent pulses transdermally through the earlobes. The saline-moistened gasket ensures optimal impedance matching between electrode and skin — no adhesives, no conductive gel, no skin preparation required. Bilateral clips are anatomically symmetrical for universal left/right fit.", list: ["Saline-moistened conductive gaskets", "Transdermal microcurrent delivery", "Bilateral universal fit", "Zero skin preparation"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_4-mxTk2fIFl2OeNCSoNl4tDjNOwgoZ7r.webp" },
      { title: "Therapeutic Application", subtitle: "Wear & Therapy", description: "Clip electrodes to earlobes and initiate therapy. Microcurrent pulses propagate via the auricular branch of the vagus nerve to the brainstem's sleep-regulatory nuclei. The device auto-terminates after 10 minutes of inactivity. LED display auto-dims to 0 lux, preserving circadian darkness during overnight use.", list: ["Auricular vagus nerve pathway", "Auto-shutoff at 10min inactivity", "Zero-lux display dimming", "20–60 minute programmable timer"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_1-vaLiJjTswRm8eej7Tc39OFsC7mxhh9.webp", reversed: true },
      { title: "Complete System", subtitle: "Included Components", description: "Each unit ships with: CES therapy device, ear-clip electrode wire assembly, 2 sanitary saline gaskets, USB-C charging cable, sanitary saline bottle, and warranty documentation. No consumable refills required — standard physiological saline (0.9% NaCl) available at any pharmacy serves as the conductive medium.", list: ["CES device ×1", "Electrode wire ×1", "Saline gaskets ×2", "USB-C cable + saline bottle + warranty"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_3-3BkwgeRHsppaxSVfj7OAG8CpZGZZO2.webp" },
      { title: "Device Architecture", subtitle: "Compact & Rechargeable", description: "ABS polymer chassis houses a 1000mAh lithium-polymer cell delivering 1–3 hours of continuous therapy. Dimensions of 136×65×18mm and mass of 50g enable unobtrusive wear. USB-C charging at 5V/1A (0.5W nominal consumption). Compliant with GB4706.1-2005 safety standards for household electrical appliances.", list: ["1000mAh Li-Po, 1–3hr runtime", "136×65×18mm, 50g", "USB-C 5V/1A (0.5W)", "GB4706.1-2005 certified"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_0-2RQC8PGpdPLLWCaY5c0K6PP7b6eejD.webp", reversed: true },
      { title: "6-Step Protocol", subtitle: "Operation Guide", description: "① Connect electrode wire to main unit. ② Moisten gasket with saline. ③ Clip electrodes to earlobes — no left/right distinction. ④ Long-press power to activate. ⑤ Select therapy mode via MODE button. ⑥ Set session duration via TIMER button. Therapy begins immediately. Auto-powers down after 10min inactivity.", list: ["Electrode wire connection", "Saline gasket moistening", "Earlobe clip placement", "Mode & timer selection"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_2-dc6qrIu3VITEvubW8DU5owTYaDKzla.webp", reversed: true }
    ],
    specCards: [
      { icon: "🔋", value: "1000mAh", label: "Battery" },
      { icon: "⚡", value: "5V/1A", label: "Input" },
      { icon: "📐", value: "0.2–1.3A", label: "Current" },
      { icon: "⚖️", value: "50g", label: "Weight" },
      { icon: "📏", value: "136×65×18mm", label: "Dimensions" },
      { icon: "🔌", value: "0.5W", label: "Power" },
      { icon: "🛡️", value: "GB4706.1", label: "Safety" },
      { icon: "🧱", value: "ABS", label: "Material" }
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
    boxContents: { items: ["CES Device ×1", "Ear-Clip Cable ×1", "USB-C Cable ×1", "Storage Pouch ×1", "User Guide ×1"], image: "https://k58ot7m95vy6fahb.public.blob.vercel-storage.com/img_v2_5-9iNI7dukhXPCmxI155UckmO7QxTpiy.webp" },
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
      "https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png",
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
      { title: "5-in-1 Multi-Function", subtitle: "Design", description: "White noise machine, Bluetooth speaker, aroma diffuser, humidifier, and night light — all in one compact device. No more clutter of separate devices on your nightstand. Each function works independently or together for a fully customized sleep environment.", list: ["White noise machine", "Bluetooth 5.0 speaker", "Ultrasonic aroma diffuser", "Humidifier", "Night light"], image: "https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png" },
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
