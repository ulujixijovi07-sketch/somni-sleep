# TASK: Update 3 Product Pages with Real 1688 Images and Data

## Context
- Project: D:/projects/somni-sleep (Next.js on Vercel, domain lovenocturne.com)
- The 3D Contour Sleep Mask page at /products/3d-contour-sleep-mask is the gold standard template
- Successfully scraped 3 1688 product pages, downloaded real product images, converted to WebP
- Images in public/products/{slug}/*.webp

## Products to Update

### 1. Deep Sleep Pillow Spray (/products/deep-sleep-pillow-spray)
- **1688 title**: DOCTEAT 褪黑素喷雾 温和呵护睡前舒适安睡植物成分轻松宁静喷雾
- **Brand**: DOCTEAT (OEM available)
- **Size**: 30ML
- **Export only** (not for domestic China)
- **Real images** (7 WebP files in public/products/deep-sleep-pillow-spray/):
  - img_6.webp (139KB), img_7.webp (127KB), img_8.webp (88KB), img_9.webp (85KB)
  - product_0.webp (93KB), product_6.webp (144KB), product_7.webp (146KB)
- **Price**: ~$29 retail
- **Science**: Melatonin absorption, sleep onset latency (PubMed: 12622846, 23691095)
- **Key selling points**: Plant-based ingredients, non-habit forming, fast absorption, pillow spray format

### 2. CES Sleep Device (/products/acupressure-sleep-mat) ⚠️ IMPORTANT
- **1688 reality**: This is NOT an acupressure mat! It's a CES (Cranial Electrotherapy Stimulation) ear-clip device
- **1688 title**: 智能手握夹耳式春归助眠仪CES疗法微电流夹耳朵改善深度睡眠失眠
- **Battery**: 800-1000mAh, 1-3h usage, rechargeable
- **Real images** (7 WebP files in public/products/acupressure-sleep-mat/):
  - img_5.webp (66KB), img_6.webp (47KB), img_7.webp (38KB), img_8.webp (74KB), img_9.webp (40KB)
  - product_4.webp (47KB), product_5.webp (41KB)
- **Price**: ~$79 retail
- **Science**: CES for insomnia, microcurrent therapy (PubMed: 25484674, 25202170)
- **Decision needed**: Rename to "CES Sleep Therapy Device" or keep "Acupressure Sleep Mat" name but use CES images?
  - UPDATE: Keep the product at /products/acupressure-sleep-mat but update description to "CES微电流助眠仪" and show ear-clip images
  - Update title in products.ts to reflect CES device

### 3. White Noise Aroma Machine (/products/white-noise-aroma-machine)
- **1688 title**: 白噪音睡眠仪蓝牙音响仿真火焰香薰机加湿器小夜灯白噪音机
- **Features**: Bluetooth speaker, flame effect lamp, aroma diffuser, humidifier, night light, white noise machine (ALL-IN-ONE)
- **Power**: Plug-in, no battery
- **Color**: White
- **Real images** (8 WebP files in public/products/white-noise-aroma-machine/):
  - img_5.webp (105KB), img_6.webp (96KB), img_7.webp (126KB), img_8.webp (112KB), img_9.webp (81KB)
  - product_0.webp (74KB), product_2.webp (91KB), product_7.webp (124KB)
- **Price**: ~$89 retail
- **Science**: White noise for sleep, aromatherapy for sleep quality (PubMed: 28834690, 19581531)
- **Key selling points**: 5-in-1 device, realistic flame effect, Bluetooth music, essential oil diffuser

## Files to Modify

### src/data/products.ts
- Update product data for IDs 12 (spray), 16 (CES/acupressure), 17 (white noise)
- Add real image paths (replace AI placeholder paths)
- Update product descriptions with accurate specs
- Add key features arrays
- Include science citation links

### src/app/products/[slug]/page.tsx
- Ensure it properly loads images from public/products/{slug}/
- The current implementation reads from products.ts data

### Image paths format
```
/products/deep-sleep-pillow-spray/img_6.webp
/products/deep-sleep-pillow-spray/img_7.webp
...etc
```

## Requirements
1. Each product page MUST follow the 3D Contour Sleep Mask page template (dual-column top, image gallery, science section, specs table)
2. Use real 1688 images, NOT AI-generated ones
3. Include proper alt text for images
4. Keep existing page structure (ProductDetailTop component, etc.)
5. Keep scientific citations with PubMed links
6. Convert images: if any .jpg still referenced, point to .webp versions
7. Ensure responsive design
8. Update navigation/breadcrumbs if needed

## Build & Test
1. Run `cd D:/projects/somni-sleep && npm run build`
2. If build succeeds, run `npx serve out` or similar to test locally
3. Verify each product page loads correctly
4. Check images display properly
5. Push to GitHub (auto-deploys to Vercel)

## Important Notes
- The "acupressure-sleep-mat" images show an ear-clip CES device, NOT a mat. Handle this appropriately.
- DO NOT create new HTML test files - work directly in the Next.js project
- Keep all existing functionality (cart, navigation, layout)
- The HTML scrapes are at public/products/raw_*.html for reference
