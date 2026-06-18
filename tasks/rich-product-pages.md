# TASK: Create Rich Product Detail Pages for 3 Products

## Context
- Project: D:/projects/somni-sleep
- The 3D contour sleep mask uses product.html (loaded via fetch in page.tsx) for rich content
- The other 3 products currently use a generic template - TOO SIMPLE
- Need to create product-specific rich HTML for each, modeled after product.html

## What to Create

### 1. public/product-spray.html — Deep Sleep Pillow Spray
Model after product.html's sections. Dark theme (#050510 bg, #C9A84C gold accent).

Content to include:
```
- PRODUCT DETAIL TOP (will be stripped, rendered by React)
- PRODUCT DEMO SECTION (how to use the spray)
  Title: "How It Works"
  Description: Spray 2-3 pumps on your pillow 15 minutes before bed
- SCIENCE SECTION (2 mode cards)
  Card 1: 🌿 "Melatonin Absorption" — Melatonin is absorbed through inhalation and skin contact, bypassing the digestive system for faster onset than pills. Studies show 30ML spray format delivers consistent dosing.
    Stats: "Fast Absorption" "No Digestion Needed" "30ML Travel Size"
  Card 2: 😴 "Sleep Onset" — Clinical research shows melatonin reduces sleep onset latency by an average of 7-12 minutes. Combined with lavender aromatherapy, the effect is amplified through dual sensory pathways.
    Stats: "-7min Sleep Onset" "Dual Pathway" "Non-Habit Forming"
- MATERIALS SECTION (2 feature-splits)
  Split 1: "Plant-Based Formula" — DOCTEAT uses pharmaceutical-grade melatonin derived from natural plant sources. No synthetic chemicals. No artificial fragrances. The lavender and chamomile essential oils are cold-pressed for maximum potency.
    List items: Pharmaceutical-grade melatonin, Cold-pressed lavender oil, Chamomile extract, Zero artificial additives
  Split 2: "30ML Precision Bottle" — Fine mist nozzle delivers consistent 0.15ml per spray. Compact enough for travel, elegant enough for your nightstand. Each bottle provides approximately 200 sprays — about 2 months of nightly use.
    List items: 0.15ml metered spray, 200 sprays per bottle, TSA-friendly 30ML size, Amber glass UV protection
- WHAT'S IN THE BOX
  List: DOCTEAT Melatonin Spray ×1, Travel Pouch ×1, Instruction Card ×1
- SPECS GRID (4 cards across)
  Cards: 30ML Volume, 0.15ml/spray dose, Plant-based formula, Lavender + Chamomile
  More: 200 sprays, 2-month supply, Amber glass bottle, Export quality
- COMPARISON TABLE
  Headers: SOMNI Spray | Melatonin Pills | Sleep Gummies | Prescription
  Row: Onset Time: 15 min | 45 min | 30 min | 20-60 min
  Row: Digestion Needed: No ✓ | Yes ✗ | Yes ✗ | Yes ✗
  Row: Portable: Yes ✓ | Yes ✓ | Yes ✓ | Yes ✓
  Row: Non-Habit Forming: Yes ✓ | Sometimes ✗ | Sometimes ✗ | No ✗
  Row: Natural Ingredients: Yes ✓ | Varies | Varies | No ✗
- FAQ section (3 items):
  1. How do I use the spray? — Spray 2-3 pumps onto your pillow 15 minutes before bedtime. Allow 30 seconds to dry before lying down.
  2. Is it safe for nightly use? — Yes. Melatonin is a naturally occurring hormone. DOCTEAT uses pharmaceutical-grade ingredients with no habit-forming compounds.
  3. How long does one bottle last? — Approximately 200 sprays (2 months of nightly use at 3 sprays/night).

Use real product images from /products/deep-sleep-pillow-spray/ directory:
- /products/deep-sleep-pillow-spray/product_0.webp
- /products/deep-sleep-pillow-spray/product_6.webp
- /products/deep-sleep-pillow-spray/img_6.webp

### 2. public/product-ces.html — CES Sleep Therapy Device

Content:
```
- SCIENCE SECTION (2 mode cards)
  Card 1: ⚡ "CES Microcurrent Therapy" — Cranial Electrotherapy Stimulation (CES) delivers gentle microcurrent pulses through ear-clip electrodes. These pulses stimulate the vagus nerve, shifting your nervous system from fight-or-flight to rest-and-digest mode within minutes. Clinically studied for over 40 years.
    Stats: "CES Technology" "Vagus Nerve" "40+ Years Research"
  Card 2: 🧠 "Brainwave Entrainment" — The microcurrent signal encourages your brain to produce more alpha waves — the calm, relaxed state associated with meditation and pre-sleep. Studies show significant improvements in sleep quality scores after just 2 weeks of nightly use.
    Stats: "Alpha Wave Boost" "2-Week Results" "Drug-Free"
- MATERIALS SECTION (2 feature-splits)
  Split 1: "Ear-Clip Electrode Design" — Medical-grade silicone ear clips with conductive carbon electrodes. Gentle pressure ensures consistent contact without discomfort. The clips fit most ear shapes and can be adjusted for optimal positioning.
    List: Medical-grade silicone, Carbon electrodes, Adjustable tension, One-size-fits-most
  Split 2: "Rechargeable & Portable" — Built-in 1000mAh lithium battery provides 4-5 therapy sessions per charge. USB-C charging takes under 2 hours. Compact hand-held design fits in your palm — take it anywhere.
    List: 1000mAh battery, USB-C charging, 5 sessions/charge, Pocket-sized
- WHAT'S IN THE BOX
  List: CES Therapy Device ×1, Ear-Clip Electrode Cable ×1, USB-C Charging Cable ×1, Storage Pouch ×1, Quick Start Guide ×1
- SPECS (9 cards)
  Cards: 1000mAh battery, 1-3h usage/charge, 3 intensity levels, CES microcurrent, Ear-clip electrodes, USB-C charging, 180g weight, ABS + silicone, CE certified
- COMPARISON TABLE
  Headers: SOMNI CES | Sleeping Pills | Meditation Apps | Weighted Blankets
  Row: Drug-Free: Yes ✓ | No ✗ | Yes ✓ | Yes ✓
  Row: Fast Acting: 10-20min | 30-60min | 20-30min | 15-30min
  Row: Portable: Yes ✓ | Yes ✓ | Yes ✓ | No ✗
  Row: No Side Effects: Yes ✓ | No ✗ | Yes ✓ | Yes ✓
  Row: Clinical Evidence: 40+ years | Extensive | Moderate | Limited
- FAQ
  1. How does CES therapy feel? — A gentle tingling sensation on your earlobes. Most users describe it as relaxing. You can adjust intensity across 3 levels.
  2. How long is a session? — 20-30 minutes before bed. The device auto-shuts off after each session.
  3. Is it FDA cleared? — CES devices are FDA-cleared for insomnia treatment. This model is CE certified for the European market.

Use images from /products/acupressure-sleep-mat/:
- /products/acupressure-sleep-mat/product_4.webp
- /products/acupressure-sleep-mat/product_5.webp
- /products/acupressure-sleep-mat/img_5.webp
```

### 3. public/product-noise.html — White Noise Aroma Machine

Content:
```
- SCIENCE SECTION (2 mode cards)
  Card 1: 🔊 "White Noise Masking" — White noise raises the acoustic threshold for sounds that would otherwise trigger a micro-arousal. A car passing, a door closing — your brain ignores them because they don't rise above the noise floor. A 2021 meta-analysis found 38% faster sleep onset with white noise.
    Stats: "38% Faster Sleep" "Noise Masking" "2021 Meta-Analysis"
  Card 2: 🌸 "Aromatherapy Synergy" — The ultrasonic diffuser disperses essential oils as a micro-fine mist. Lavender has been shown to increase slow-wave (deep) sleep by 20% in controlled studies. Combined with white noise, you get a dual sensory sleep protocol.
    Stats: "20% More Deep Sleep" "Ultrasonic Mist" "Dual Sensory"
- MATERIALS SECTION (2 feature-splits)
  Split 1: "5-in-1 Multi-Function" — This isn't just a white noise machine. It's a Bluetooth 5.0 speaker, a 3D flame effect lamp, an ultrasonic aroma diffuser, a cool-mist humidifier, and a warm night light. Five devices. One elegant package.
    List: White noise generator, Bluetooth speaker, 3D flame lamp, Aroma diffuser, Night light
  Split 2: "Realistic 3D Flame Effect" — The flickering flame uses LED projection technology to create a remarkably realistic fire effect. 3 brightness levels. The flame mode can run independently or alongside any other function. Creates instant ambiance in any room.
    List: LED flame projection, 3 brightness levels, Independent mode, Cozy ambiance
- WHAT'S IN THE BOX
  List: White Noise Machine ×1, Water Tank ×1, USB Power Cable ×1, Quick Start Guide ×1
- SPECS (9 cards)
  Cards: 7 sound options, Bluetooth 5.0, 3D flame effect, Ultrasonic diffuser, 200ml water tank, Night light (warm), Plug-in power, White color, 350g
- COMPARISON TABLE
  Headers: SOMNI Machine | Phone Apps | Standalone Diffuser | Basic Noise Machine
  Row: Sound Options: 7 | Limited | None | 3-5
  Row: Aromatherapy: Yes ✓ | No ✗ | Yes ✓ | No ✗
  Row: Flame Effect: Yes ✓ | No ✗ | No ✗ | No ✗
  Row: Bluetooth: Yes ✓ | Yes ✓ | No ✗ | No ✗
  Row: Night Light: Yes ✓ | Screen only | No ✗ | No ✗
- FAQ
  1. Can I use it without water? — Yes. All functions work independently. Use white noise + flame without the diffuser.
  2. What essential oils work best? — Lavender, chamomile, and eucalyptus are most popular. Use 3-5 drops per fill.
  3. How loud is the white noise? — Adjustable from whisper-quiet to conversation level. We recommend setting it just above ambient noise.

Use images from /products/white-noise-aroma-machine/:
- /products/white-noise-aroma-machine/product_2.webp
- /products/white-noise-aroma-machine/product_7.webp
- /products/white-noise-aroma-machine/img_5.webp
```

## CSS
Each HTML should inherit the Same CSS as product.html (dark theme with gold accents). Use the EXACT same <style> block from product.html (lines 7-479). Change only:
- Page title
- The nav section
- The content sections

## Modify page.tsx

Update src/app/products/[slug]/page.tsx to map slugs to HTML files:
- "3d-contour-sleep-mask" → "/product.html" (already done)
- "deep-sleep-pillow-spray" → "/product-spray.html" (NEW)
- "acupressure-sleep-mat" → "/product-ces.html" (NEW)
- "white-noise-aroma-machine" → "/product-noise.html" (NEW)

## Build
cd D:/projects/somni-sleep && npx next build --webpack

## INSTRUCTIONS
DO NOT create the HTML files yourself. Use patch/write_file via terminal commands to create them. Each file should be complete, self-contained, following the product.html template EXACTLY.

Start with product-spray.html first, then product-ces.html, then product-noise.html. Then modify page.tsx.
