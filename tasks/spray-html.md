Create file public/product-spray.html with EXACTLY the same structure as public/product.html but for the DOCTEAT Melatonin Pillow Spray.

COPY the entire <style> block from product.html lines 7-479.
COPY the <nav> section from product.html lines 483-492.

Then replace the body content sections with:

1. BREADCRUMB: Home • DOCTEAT Melatonin Pillow Spray
2. PRODUCT DETAIL TOP section (will be stripped by React, so just add placeholder)
3. HOW IT WORKS section:
   Section label: "How It Works"
   Title: "2-3 Pumps. 15 Minutes. Deep Sleep."
   Description: Spray onto your pillow before bed. Melatonin absorbs through inhalation and skin contact — faster than pills because it bypasses digestion.
4. SCIENCE SECTION with 2 mode cards:
   Card 1: 🌿 Melatonin Absorption - Melatonin absorbs through inhalation, bypassing the digestive system. 30ML spray format delivers consistent 0.15ml dosing. Fast-acting formula reaches peak concentration within 15 minutes. Stats: "0.15ml Metered Spray" "15min Peak" "No Digestion"
   Card 2: 😴 Dual Sensory Sleep - Lavender + chamomile essential oils activate the olfactory pathway while melatonin works systemically. Two independent mechanisms for deeper, faster sleep onset. Stats: "-7min Sleep Onset" "Dual Pathway" "Non-Habit Forming"
5. MATERIALS SECTION with 2 feature-splits:
   Split 1: "Plant-Based Formula" - Pharmaceutical-grade melatonin from natural plant sources. Cold-pressed lavender and chamomile essential oils. Zero synthetic chemicals. Zero artificial fragrances. List: Pharmaceutical-grade melatonin, Cold-pressed lavender oil, Chamomile extract, No artificial additives. Image: /products/deep-sleep-pillow-spray/product_0.webp
   Split 2: "30ML Precision Bottle" - Fine mist nozzle: 0.15ml per spray. 200 sprays per bottle (~2 months). Amber glass protects formula from UV degradation. TSA-friendly travel size. List: 0.15ml metered spray, 200 sprays per bottle, Amber glass UV protection, TSA-friendly 30ML. Image: /products/deep-sleep-pillow-spray/product_6.webp
6. WHAT'S IN THE BOX: DOCTEAT Melatonin Spray ×1, Travel Pouch ×1, Instruction Card ×1. Image: /products/deep-sleep-pillow-spray/img_6.webp
7. SPECS GRID (8 cards with icons): ⚖️ 30ML | 🎯 0.15ml/spray | 🌿 Plant-Based | 🌸 Lavender + Chamomile | 🔢 200 Sprays | 📅 2-Month Supply | 🫙 Amber Glass | ✅ Export Quality
8. COMPARISON TABLE:
   Headers: SOMNI Spray | Melatonin Pills | Sleep Gummies | Prescription
   Onset Time: 15 min ✓ | 45 min | 30 min | 20-60 min
   Digestion Needed: No ✓ | Yes ✗ | Yes ✗ | Yes ✗
   Portable: Yes ✓ | Yes ✓ | Yes ✓ | Varies
   Non-Habit Forming: Yes ✓ | Sometimes | Sometimes | No ✗
   Natural Ingredients: Yes ✓ | Varies | Varies | No ✗
9. FAQ with 3 items: how to use, safety, bottle duration
10. Footer matching product.html

Use the EXACT same CSS classes: product-page-content, section-label, section-title, section-desc, modes-grid, mode-card, mode-icon, mode-stat, feature-split, feature-text, feature-list, specs-grid, spec-card, comparison, faq, btn-primary.

Then run: cd D:/projects/somni-sleep && npx next build --webpack
