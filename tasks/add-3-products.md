## Task: Add 3 new products with full detail pages and scientific research

### Products to add to src/data/products.ts:

**1. Deep Sleep Pillow Spray (OLFACTORY)**
- Slug: deep-sleep-pillow-spray
- Price: $29 (compareAt: $45)
- Description: Lavender + Chamomile + Vetiver. Clinically tested sleep spray.
- Features: 100% natural essential oils, 50ml amber glass bottle, clinically tested formula, spray & breathe ritual
- Science: lavender essential oil significantly improves sleep quality in adults (PMC4505755)
- Weight: 120g
- Images: use existing silk pillowcase images as placeholder for now

**2. Acupressure Sleep Mat (TACTILE)**  
- Slug: acupressure-sleep-mat
- Price: $79 (compareAt: $109)
- Description: 6,210 stimulation points. Endorphin release for pre-sleep relaxation.
- Features: 6,210 acupressure points, organic cotton cover, plant-based foam, carry bag
- Science: acupressure significantly improves sleep quality - meta-analysis (PMC11884929)
- Weight: 480g

**3. White Noise + Aroma Machine (AUDITORY)**
- Slug: white-noise-aroma-machine
- Price: $89 (compareAt: $129)
- Description: 30 non-looping sounds. Adaptive volume. Built-in aroma diffuser. Flame-effect night light.
- Features: 30 non-looping sound profiles, adaptive volume, aroma diffuser + humidifier, flame-effect LED night light, Bluetooth speaker
- Science: white noise reduces sleep onset latency by 38% in noisy environments (PMC8838436)
- Weight: 700g
- Note: This is a premium multi-function device combining auditory + olfactory + visual

### What to build:

1. **Update src/data/products.ts** - Add 3 products with full data fields (longDescription, features, science, usage, weight, materials, images, tags, stock, rating, reviewCount, bestSeller)

2. **Make ProductDetailTop generic** - Currently hardcoded for sleep mask. Modify src/components/product-detail-top.tsx to accept product data as props instead of hardcoded constants. The component should receive product name, price, images, features and render accordingly.

3. **Update page.tsx** - src/app/products/[slug]/page.tsx should:
   - Import products data
   - Look up product by slug
   - Pass product data to ProductDetailTop
   - The bottom sections can be simplified to just render generic science/comparison/faq from product data
   - No dangerouslySetInnerHTML needed for bottom sections - render them as React components

4. **Scientific research section** - Each product page should have a "The Science" section with:
   - Actual citations with links to PubMed/PMC studies
   - Brief layman's explanation of the research
   - Icon-based visual presentation

5. **Product images** - Placeholder images in public/products/{slug}/1.jpg etc. Use solid color gradient placeholders as product images since we don't have real photos yet.

### Key design principles:
- Keep the dark theme + gold accent SOMNI brand
- Each product tells a science-backed story
- All interactive elements (Add to Cart, thumbnails, FAQ) should work
- Use useCart() for cart integration
- framer-motion for toast notifications

### Build and test:
- `npx next build --webpack` must pass
- Verify all 3 product pages at /products/{slug}
- Use rtk git for commits

Project: D:/projects/somni-sleep
