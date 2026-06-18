Extend the SOMNI product detail pages to show rich sections for ALL products, directly in React. Do NOT create HTML files.

## Step 1: Extend Product interface in src/data/products.ts

Add optional fields to the Product interface:
```typescript
// Rich content sections (optional - used for detailed product pages)
modeCards?: { icon: string; title: string; description: string; stats: string[] }[];
materialSections?: { title: string; subtitle: string; description: string; list: string[]; image: string; reversed?: boolean }[];
specCards?: { icon: string; value: string; label: string }[];
comparisonTable?: { headers: string[]; rows: { label: string; values: (string | { text: string; check: boolean })[] }[] };
boxContents?: { items: string[]; image: string };
howItWorks?: { title: string; description: string };
```

## Step 2: Add rich content to the 3 product entries in src/data/products.ts

### deep-sleep-pillow-spray (id 12):
```
modeCards: [
  { icon: "🌿", title: "Melatonin Absorption", description: "Absorbed through inhalation and skin contact — bypassing the digestive system for faster onset than pills. Each metered spray delivers exactly 0.15ml of pharmaceutical-grade melatonin formula.", stats: ["0.15ml Metered Spray", "15-Minute Peak", "No Digestion Needed"] },
  { icon: "😴", title: "Dual Sensory Sleep", description: "Lavender and chamomile essential oils activate your olfactory pathway while melatonin works systemically. Two independent biological mechanisms converge for deeper, faster sleep onset. Non-habit forming by design.", stats: ["-7min Sleep Onset", "Dual Pathway", "Non-Habit Forming"] }
],
materialSections: [
  { title: "Plant-Based", subtitle: "Formula", description: "Pharmaceutical-grade melatonin derived from natural plant sources. Cold-pressed lavender and chamomile essential oils. Zero synthetic chemicals. Zero artificial fragrances. Just nature, distilled.", list: ["Pharmaceutical-grade melatonin", "Cold-pressed lavender oil", "Chamomile extract", "Zero artificial additives"], image: "/products/deep-sleep-pillow-spray/product_0.webp" },
  { title: "30ML Precision", subtitle: "Bottle", description: "Fine mist nozzle delivers a consistent 0.15ml per spray. 200 sprays per bottle — about 2 months of nightly use. Amber glass protects the formula from UV degradation. TSA-friendly for travel.", list: ["0.15ml metered spray", "~200 sprays per bottle", "Amber glass UV protection", "TSA-friendly 30ML"], image: "/products/deep-sleep-pillow-spray/product_6.webp", reversed: true }
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
howItWorks: { title: "2-3 Pumps. 15 Minutes. Deep Sleep.", description: "Spray 2-3 pumps onto your pillow before bed. Melatonin absorbs through inhalation and skin contact — faster than pills because it bypasses the digestive system. Peak concentration reached within 15 minutes." },
```

### acupressure-sleep-mat / CES Sleep Therapy Device (id 16):
```
modeCards: [
  { icon: "⚡", title: "CES Microcurrent Therapy", description: "Cranial Electrotherapy Stimulation delivers gentle microcurrent pulses through ear-clip electrodes. These pulses stimulate the vagus nerve, shifting your nervous system from fight-or-flight to rest-and-digest mode within minutes. Clinically studied for over 40 years.", stats: ["CES Technology", "Vagus Nerve Stimulation", "40+ Years Research"] },
  { icon: "🧠", title: "Brainwave Entrainment", description: "The microcurrent signal encourages your brain to produce more alpha waves — the calm, relaxed state associated with meditation. Studies show significant sleep quality improvements after just 2 weeks of nightly 20-minute sessions.", stats: ["Alpha Wave Boost", "2-Week Results", "Drug-Free"] }
],
materialSections: [
  { title: "Ear-Clip Electrode", subtitle: "Design", description: "Medical-grade silicone ear clips with conductive carbon electrodes. Gentle pressure ensures consistent contact. Fits most ear shapes — adjustable for optimal positioning without discomfort.", list: ["Medical-grade silicone", "Conductive carbon electrodes", "Adjustable tension", "Ergonomic fit"], image: "/products/acupressure-sleep-mat/product_4.webp" },
  { title: "Rechargeable &", subtitle: "Portable", description: "Built-in 1000mAh lithium battery — 4-5 therapy sessions per charge. USB-C fast charging under 2 hours. Compact handheld design fits in your palm. Take it anywhere.", list: ["1000mAh lithium battery", "USB-C fast charging", "5 sessions per charge", "Pocket-sized"], image: "/products/acupressure-sleep-mat/product_5.webp", reversed: true }
],
specCards: [
  { icon: "🔋", value: "1000mAh", label: "Battery" },
  { icon: "⏱️", value: "1-3 Hours", label: "Per Charge" },
  { icon: "📊", value: "3 Levels", label: "Intensity" },
  { icon: "⚡", value: "CES", label: "Technology" },
  { icon: "👂", value: "Ear-Clip", label: "Electrodes" },
  { icon: "🔌", value: "USB-C", label: "Charging" },
  { icon: "⚖️", value: "180g", label: "Weight" },
  { icon: "✅", value: "CE", label: "Certified" }
],
comparisonTable: {
  headers: ["", "SOMNI CES", "Sleeping Pills", "Meditation Apps", "Weighted Blankets"],
  rows: [
    { label: "Drug-Free", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "Yes", check: true }] },
    { label: "Fast Acting", values: [{ text: "10-20 min", check: true }, { text: "30-60 min", check: false }, { text: "20-30 min", check: false }, { text: "15-30 min", check: false }] },
    { label: "Portable", values: [{ text: "Yes", check: true }, { text: "Yes", check: true }, { text: "Yes", check: true }, { text: "No", check: false }] },
    { label: "No Side Effects", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "Yes", check: true }] },
    { label: "Clinical Evidence", values: [{ text: "40+ Years", check: true }, { text: "Extensive", check: false }, { text: "Moderate", check: false }, { text: "Limited", check: false }] }
  ]
},
boxContents: { items: ["CES Therapy Device ×1", "Ear-Clip Electrode Cable ×1", "USB-C Cable ×1", "Storage Pouch ×1", "Quick Start Guide ×1"], image: "/products/acupressure-sleep-mat/img_5.webp" },
howItWorks: { title: "Clip On. Select Intensity. Sleep Deep.", description: "Attach the ear clips to your earlobes, select your intensity level, and relax for 20 minutes. The microcurrent pulses gently calm your nervous system. Most users feel the difference within the first week of nightly use." },
```

### white-noise-aroma-machine (id 17):
```
modeCards: [
  { icon: "🔊", title: "White Noise Masking", description: "White noise raises the acoustic threshold — sounds that would trigger micro-arousals get buried in the noise floor. A 2021 meta-analysis of 8,242 participants found 38% faster sleep onset with white noise compared to silence in noisy environments.", stats: ["38% Faster Sleep Onset", "Noise Masking", "2021 Meta-Analysis"] },
  { icon: "🌸", title: "Aromatherapy Synergy", description: "The ultrasonic diffuser disperses essential oils as micro-fine mist. Controlled studies show lavender aromatherapy increases slow-wave (deep) sleep by 20%. Combined with white noise, you activate two sensory pathways simultaneously.", stats: ["20% More Deep Sleep", "Ultrasonic Mist", "Dual Sensory Protocol"] }
],
materialSections: [
  { title: "5-in-1", subtitle: "Multi-Function", description: "This is five devices in one elegant package: a white noise generator, Bluetooth 5.0 speaker, 3D flame effect lamp, ultrasonic aroma diffuser, and warm night light. Every function works independently — use them separately or together.", list: ["White noise generator (7 sounds)", "Bluetooth 5.0 speaker", "3D flame effect lamp", "Ultrasonic aroma diffuser", "Warm night light"], image: "/products/white-noise-aroma-machine/product_2.webp" },
  { title: "Realistic 3D", subtitle: "Flame Effect", description: "LED projection technology creates a remarkably realistic flickering flame. Three brightness levels. The flame mode runs independently or alongside any other function. Creates instant cozy ambiance in any room.", list: ["LED flame projection", "3 brightness levels", "Independent flame mode", "Instant cozy ambiance"], image: "/products/white-noise-aroma-machine/product_7.webp", reversed: true }
],
specCards: [
  { icon: "🎵", value: "7 Sounds", label: "Options" },
  { icon: "📡", value: "BT 5.0", label: "Bluetooth" },
  { icon: "🔥", value: "3D Flame", label: "Effect" },
  { icon: "💧", value: "200ml", label: "Water Tank" },
  { icon: "💡", value: "Warm", label: "Night Light" },
  { icon: "🔌", value: "Plug-in", label: "Power" },
  { icon: "⚖️", value: "350g", label: "Weight" },
  { icon: "🎨", value: "White", label: "Color" }
],
comparisonTable: {
  headers: ["", "SOMNI Machine", "Phone Apps", "Diffuser Only", "Basic Machine"],
  rows: [
    { label: "Sound Options", values: [{ text: "7", check: true }, { text: "Limited", check: false }, { text: "None", check: false }, { text: "3-5", check: false }] },
    { label: "Aromatherapy", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "Yes", check: true }, { text: "No", check: false }] },
    { label: "Flame Effect", values: [{ text: "Yes", check: true }, { text: "No", check: false }, { text: "No", check: false }, { text: "No", check: false }] },
    { label: "Bluetooth Speaker", values: [{ text: "Yes", check: true }, { text: "Yes", check: true }, { text: "No", check: false }, { text: "No", check: false }] },
    { label: "Night Light", values: [{ text: "Yes", check: true }, { text: "Screen only", check: false }, { text: "No", check: false }, { text: "No", check: false }] }
  ]
},
boxContents: { items: ["White Noise Machine ×1", "Water Tank ×1", "USB Power Cable ×1", "Quick Start Guide ×1"], image: "/products/white-noise-aroma-machine/img_5.webp" },
howItWorks: { title: "Fill. Select. Sleep.", description: "Fill the water tank, add 3-5 drops of essential oil, choose your sound, and set the flame. The white noise masks disruptive sounds while the aroma diffuser fills the room with calming scent. All functions are independently controllable." },
```

## Step 3: Update src/app/products/[slug]/page.tsx

For ALL products (not just 3d-contour-sleep-mask), when the product has modeCards/materialSections/specCards/comparisonTable data, render the rich sections instead of the generic ones. For the sleep mask, KEEP the existing HTML-based approach since it has unique content.

Add these sections to the GenericSections component:
- howItWorks: If product.howItWorks exists, render a section with how-it-works class
- modeCards: If product.modeCards exists, render the modes-grid with mode-cards (replacing the current simple science-grid)
- materialSections: If exists, render feature-split sections with images
- boxContents: If exists, render "What's in the Box" section
- specCards: If exists, render the rich spec grid with icons (replacing current simple spec list)
- comparisonTable: If exists, render the comparison table

CSS classes to use (matching product.html): modes-grid, mode-card, mode-icon, mode-stat, feature-split, feature-split.reverse, feature-text, feature-list, feature-image, specs-grid, spec-card, spec-icon, spec-val, spec-label, comparison, comparison table, check, cross

## Step 4: Build
cd D:/projects/somni-sleep && npx next build --webpack

IMPORTANT: The sleep mask page must continue to use the EXISTING product.html approach. Do NOT break it.
