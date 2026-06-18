Edit src/data/products.ts only. Two changes:

## CHANGE 1: Add fields to Product interface (around line 5-22)

After the existing fields, add these optional fields INSIDE the interface:
```
  modeCards?: { icon: string; title: string; description: string; stats: string[] }[];
  materialSections?: { title: string; subtitle: string; description: string; list: string[]; image: string; reversed?: boolean }[];
  specCards?: { icon: string; value: string; label: string }[];
  comparisonTable?: { headers: string[]; rows: { label: string; values: ({ text: string; check: boolean } | string)[] }[] };
  boxContents?: { items: string[]; image: string };
  howItWorks?: { title: string; description: string };
```

## CHANGE 2: Add rich content to deep-sleep-pillow-spray (id 12)

Find the product with slug "deep-sleep-pillow-spray" and add these fields INSIDE the product object (before the closing brace):
```
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
```

Do the EXACT same for product id 16 (acupressure-sleep-mat / CES) with:
modeCards: CES Microcurrent Therapy (icon: ⚡, stats: CES Technology, Vagus Nerve, 40+ Years), Brainwave Entrainment (icon: 🧠, stats: Alpha Wave, 2-Week, Drug-Free)
materialSections: Ear-Clip Electrode Design (img: product_4.webp), Rechargeable & Portable (img: product_5.webp, reversed)
specCards: 1000mAh, 1-3 Hours, 3 Levels, CES, Ear-Clip, USB-C, 180g, CE Certified
comparisonTable: SOMNI CES vs Pills vs Meditation vs Weighted Blankets (Drug-Free, Fast Acting, Portable, No Side Effects, Clinical Evidence)
boxContents: CES Device, Ear-Clip Cable, USB-C Cable, Pouch, Guide (img: img_5.webp)
howItWorks: "Clip On. Select Intensity. Sleep Deep." description about 20-min sessions

And for product id 17 (white-noise-aroma-machine) with:
modeCards: White Noise Masking (icon: 🔊, stats: 38% Faster, Noise Masking, 2021 Meta), Aromatherapy Synergy (icon: 🌸, stats: 20% Deep Sleep, Ultrasonic, Dual Sensory)
materialSections: 5-in-1 Multi-Function (img: product_2.webp), Realistic 3D Flame Effect (img: product_7.webp, reversed)
specCards: 7 Sounds, BT 5.0, 3D Flame, 200ml, Night Light, Plug-in, 350g, White
comparisonTable: SOMNI Machine vs Phone Apps vs Diffuser Only vs Basic (Sound Options, Aromatherapy, Flame Effect, Bluetooth Speaker, Night Light)
boxContents: Machine, Water Tank, USB Cable, Guide (img: img_5.webp)
howItWorks: "Fill. Select. Sleep." description

Then run: cd D:/projects/somni-sleep && npx next build --webpack
