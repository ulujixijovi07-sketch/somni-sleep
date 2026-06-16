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
  science: { title: string; detail: string }[];
  usage: string;
  weight: string;
  materials: string;
  images: string[];
  tags: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  bestSeller: boolean;
}

export const senseData = {
  visual: {
    id: "visual",
    name: "LUX",
    title: "Visual Sleep Protocol",
    subtitle: "Control light signals to reset your circadian rhythm",
    description:
      "Your brain's master clock, the suprachiasmatic nucleus, responds to a single environmental cue above all others: light. Even a sliver of blue light through your eyelids suppresses melatonin production by up to 50%. Our LUX collection targets the visual pathway with precision.",
    scienceBlurb:
      "Harvard Medical School research demonstrates that blue light exposure after sunset delays melatonin onset by 3 hours on average. Complete darkness is not a luxury — it is a biological requirement.",
    color: "from-[#132743] to-[#0B1A2E]",
    accentColor: "#C9A84C",
    icon: "Eye",
  },
  auditory: {
    id: "auditory",
    name: "SONUS",
    title: "Auditory Sleep Protocol",
    subtitle: "Mask disruptive noise to prevent nocturnal arousals",
    description:
      "Your brainstem's reticular activating system never fully sleeps. It monitors auditory input throughout the night, ready to jolt you awake at any irregular sound. SONUS creates an acoustic environment where your brain can finally stop listening.",
    scienceBlurb:
      "A 2021 meta-analysis in Sleep Medicine Reviews (n=8,242) found white noise reduced sleep onset latency by 38% compared to silence in noisy environments.",
    color: "from-[#1A3555] to-[#132743]",
    accentColor: "#7EB8C9",
    icon: "SpeakerHigh",
  },
  tactile: {
    id: "tactile",
    name: "TACTUS",
    title: "Tactile Sleep Protocol",
    subtitle: "Apply deep pressure to activate your parasympathetic nervous system",
    description:
      "Deep touch pressure stimulates the vagus nerve, shifting your autonomic nervous system from sympathetic ('fight or flight') to parasympathetic ('rest and digest'). This is the same mechanism that makes a hug calming — engineered for sleep.",
    scienceBlurb:
      "Research published in the Journal of Sleep Research confirms that weighted pressure stimulation increases serotonin by 28% and decreases cortisol by 31% within 20 minutes.",
    color: "from-[#132743] to-[#1A3555]",
    accentColor: "#B8917E",
    icon: "Hand",
  },
  olfactory: {
    id: "olfactory",
    name: "OLFACIO",
    title: "Olfactory Sleep Protocol",
    subtitle: "Signal safety to your amygdala through scent",
    description:
      "The olfactory bulb connects directly to the amygdala and hippocampus — your brain's emotion and memory centers. Unlike other senses, smell bypasses the thalamus entirely. OLFACIO formulas were designed to send one unambiguous signal: you are safe. You can sleep.",
    scienceBlurb:
      "A controlled study at the University of Southampton found that lavender aromatherapy improved sleep quality scores by 20% compared to placebo, with effects strongest in the first week of use.",
    color: "from-[#1A3555] to-[#0B1A2E]",
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
    description: "Zero-pressure 3D eye cups with 100% blackout. Designed for side sleepers.",
    longDescription:
      "Most sleep masks press against your eyelids, disrupting REM sleep and causing morning puffiness. Our 3D Contour Mask features deep-molded eye cups that float above your eyes, creating a microclimate of total darkness without a single point of pressure. The adjustable strap uses a micro-hook system that won't catch hair — because waking up tangled is not the kind of arousal we want.",
    features: [
      "3D molded eye cups - zero pressure on eyelids",
      "100% blackout - lab-tested to 0.1 lux",
      "Side-sleeper optimized - slim profile temples",
      "Adjustable micro-hook strap - hair-safe",
      "Breathable memory foam core",
    ],
    science: [
      {
        title: "Melatonin Preservation",
        detail:
          "Even 5 lux of light through closed eyelids reduces melatonin by 50% (Harvard, 2011). Our mask achieves <0.1 lux — complete biological darkness.",
      },
      {
        title: "REM Protection",
        detail:
          "External pressure on eyelids during REM can trigger micro-arousals. 3D contour eliminates this entirely.",
      },
    ],
    usage: "Adjust strap for snug fit. Eye cups should float around, not on, your eyes. Hand wash monthly.",
    weight: "85g",
    materials: "Memory foam, modal fabric, elastic micro-hook strap",
    images: ["/products/mask-3d-1.jpg", "/products/mask-3d-2.jpg"],
    tags: ["sleep mask", "blackout", "3D contour", "side sleeper", "light blocking"],
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
      "Cotton absorbs moisture. Synthetics trap heat. Silk does neither. This 22 momme mulberry silk mask maintains your skin's natural moisture barrier while preventing sleep creases. The wide surface area blocks light from every angle, and the silk's natural temperature regulation keeps you cool in summer and warm in winter.",
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
          "Silk absorbs 30% less moisture than cotton, preserving overnight hydration levels (JCD, 2019).",
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
      "Standard LED lights emit a blue spectrum spike at 450-480nm — exactly the wavelength your suprachiasmatic nucleus uses to decide it's daytime. Our Amber Sleep Light eliminates all wavelengths below 530nm, producing a warm amber glow that signals 'night' to your brain. Sunset mode automatically dims from full brightness to off over 30, 60, or 90 minutes, mimicking the natural progression of dusk.",
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
          "Light at 460-480nm suppresses melatonin at 2x the rate of light at 550nm+ (Brainard, 2001). Our amber spectrum starts at 530nm.",
      },
      {
        title: "Circadian Phase Shift",
        detail:
          "Evening amber light exposure advances circadian phase by 0.6 hours over 2 weeks versus standard lighting (RPI Lighting Research Center).",
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
      "Most blue light glasses are either clinical-looking amber shields or barely-filtered clear lenses that do nothing. These use a proprietary amber-tinted CR-39 lens that blocks 99% of light below 500nm — including the critical 450-480nm melatonin-disrupting band — while maintaining color perception for evening reading and screen use. The hand-polished acetate frames are designed to be seen, because wearing them is a signal to your brain: the day is ending.",
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
          "2 hours of tablet use at full brightness suppresses melatonin by 22% (Rensselaer Polytechnic, 2015). These lenses return melatonin levels to baseline.",
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
      "Most white noise machines use looping audio tracks — your brain detects the seam. Not this one. 30 non-looping sound profiles, from classic white noise to fan sounds to nature recordings, are algorithmically generated in real time to prevent pattern detection. The adaptive volume sensor listens to your environment and adjusts output to maintain a consistent masking level through the night.",
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
          "Consistent background noise raises the auditory arousal threshold, meaning irregular sounds (door, car, neighbor) must be louder to wake you.",
      },
      {
        title: "Sleep Onset Latency",
        detail:
          "Meta-analysis of 38 studies: white noise reduces average time to fall asleep from 26 to 16 minutes (Sleep Medicine Reviews, 2021).",
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
      "In-ear headphones push into your ear canal when you lie on your side. Our sleep earbuds use a flat, silicone-shell design that sits flush with your ear, distributing pressure across the concha rather than driving into the canal. The multi-layer acoustic filter provides -27dB of passive noise isolation without electronics — no battery, no Bluetooth, no EMF. Just acoustic physics.",
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
          "-27dB reduces perceived loudness by approximately 85%. A 70dB street noise becomes a 43dB whisper.",
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
      "Why buy a white noise machine AND a wake-up light separately? This device combines both in a single, elegant unit. At night: choose from 30 non-looping sound profiles with adaptive volume. In the morning: a 30-minute dawn simulation gradually increases amber light intensity, with optional nature sounds or FM radio to complete the wake-up sequence. Fall asleep to science. Wake up to light.",
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
          "Dawn simulation reduces sleep inertia by 27% compared to sound-only alarms (Journal of Sleep Research, 2018).",
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
      "A sleep mask that does two things at once: blocks all light AND applies gentle deep pressure across your brow and temples. The 0.5lb (227g) fill of micro-glass beads distributes weight evenly across pressure points associated with tension relief. It's the neurological equivalent of someone gently pressing their palm to your forehead — a signal your nervous system interprets as 'rest now.'",
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
          "Deep touch pressure increases serotonin by 28% and decreases cortisol by 31% within 20 minutes (Journal of Sleep Research).",
      },
      {
        title: "Vagus Nerve Stimulation",
        detail:
          "Gentle pressure on the forehead stimulates the ophthalmic branch of the trigeminal nerve, which feeds into vagal pathways.",
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
      "Your face spends 2,500+ hours per year pressed against fabric. Cotton absorbs your skincare products and creates friction lines. These 25 momme silk pillowcases reduce friction by 43% compared to cotton, preserving both your nighttime skincare investment and your skin's natural moisture. The hidden zipper closure keeps the pillowcase perfectly in place.",
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
          "Silk's coefficient of friction is 0.21 vs cotton's 0.37 — 43% lower. Less friction means fewer sleep creases and less moisture loss.",
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
      "Lie down on this mat for 20 minutes before bed and your body does the rest. The 6,210 acupressure points stimulate mechanoreceptors across your back, triggering a cascade of endorphin release and muscle relaxation. It's uncomfortable for the first 90 seconds. Then something shifts — your nervous system surrenders, warmth spreads through your back, and the day's accumulated tension releases.",
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
          "Acupressure stimulation triggers endogenous opioid release — your body's natural painkillers — within 15-20 minutes of application.",
      },
      {
        title: "Cortisol Reduction",
        detail:
          "A 4-week study found evening acupressure mat use reduced salivary cortisol by 26% versus control (Complementary Therapies in Medicine).",
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
      "Your body needs to drop 1-2°C in core temperature to initiate sleep. A regular blanket fights this process. Our Cooling Blanket uses Japanese ARC-chill fiber technology — the fabric actively absorbs excess body heat and dissipates it to the air, maintaining a surface temperature 2-4°C cooler than ambient. The result: you fall asleep faster because your body's thermoregulatory process isn't fighting your blanket.",
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
          "A 1-2°C drop in core body temperature is required to initiate sleep. External cooling accelerates this process by 30-40% (Journal of Physiological Anthropology).",
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
    description: "Lavender + Chamomile + Vetiver. Clinically tested. The 10-second pre-sleep ritual.",
    longDescription:
      "Spray. Inhale. Sleep. Three ingredients, each chosen for a specific neurological purpose: Lavender (Lavandula angustifolia) reduces sympathetic nervous activity. Roman Chamomile (Anthemis nobilis) binds to GABA receptors. Vetiver (Vetiveria zizanioides) grounds the blend with its earthy base note, preventing the 'perfume headache' that plagues synthetic sleep sprays.",
    features: [
      "100% natural essential oils - no synthetic fragrance",
      "Clinical formula: Lavender + Chamomile + Vetiver",
      "50ml bottle - approximately 200 uses",
      "Amber glass bottle protects oil integrity",
      "Fine mist sprayer for even distribution",
    ],
    science: [
      {
        title: "Lavender & Sleep Quality",
        detail:
          "A Southampton University RCT found lavender improved sleep quality by 20% vs placebo, with strongest effects in the first week of nightly use.",
      },
      {
        title: "GABAergic Activity",
        detail:
          "Roman Chamomile contains apigenin, a flavonoid that binds to benzodiazepine receptors and enhances GABAergic transmission.",
      },
    ],
    usage: "Spray 2-3 times on pillow 10 minutes before bed. Inhale deeply for 30 seconds. Do not spray directly on skin.",
    weight: "120g",
    materials: "Lavender angustifolia oil, Anthemis nobilis oil, Vetiveria zizanioides oil, distilled water, natural emulsifier",
    images: ["/products/pillow-spray-1.jpg", "/products/pillow-spray-2.jpg"],
    tags: ["sleep spray", "pillow spray", "lavender", "aromatherapy", "essential oils"],
    stock: 250,
    rating: 4.8,
    reviewCount: 512,
    bestSeller: true,
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
      "This is not a generic 'relaxation blend.' Each oil was selected for its specific mechanism: Bergamot reduces cortisol. Frankincense slows breathing rate. Cedarwood contains cedrol, a compound with demonstrated sedative effects. Ylang Ylang lowers blood pressure. Together, they form an olfactory signal your limbic system interprets as unambiguous safety.",
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
      "Hotel rooms smell like detergent. Airbnbs smell like someone else's life. Your bedroom shouldn't. This portable ultrasonic diffuser creates a 200 sq ft scent zone using any essential oil blend. It runs for 8 hours on a single fill, automatically shuts off when empty, and produces a warm amber glow that doubles as a night light. At under 30dB, it's quieter than your breathing.",
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
          "Scent molecules reach the olfactory bulb within 200ms of inhalation. The bulb projects directly to the amygdala, bypassing thalamic relay — faster than any other sensory system.",
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
      "One product builds a habit. Three products build a ritual — and rituals are what your brain needs to transition from waking to sleeping. This set combines our three core OLFACIO products at a 26% discount: the Deep Sleep Pillow Spray for immediate pre-sleep signaling, the Calm Essential Oil Blend for sustained ambient aromatherapy, and the Portable Diffuser to deliver it. Spray, diffuse, sleep.",
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
