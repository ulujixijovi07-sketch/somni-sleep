## Task: Build 3 product detail pages with AI-generated product images

### Situation
1688 pages are blocking us with captcha. But we got enough data. Use AI image generation to create professional product photos instead of scraping.

### Products and their AI image prompts:

**1. Deep Sleep Pillow Spray ($29)** — DOCTEAT 褪黑素喷雾
Already scraped: title, price ¥8, 22 images blocked by captcha, has video
Generate product images with these prompts (use image_generate tool):
- "Professional e-commerce product photo of a dark amber glass spray bottle with minimalist label, on a dark luxury background with soft golden lighting, lavender sprigs scattered around, premium sleep product photography, 8k resolution"
- "Close-up of a pillow being sprayed with a fine mist, soft bedroom lighting, cozy atmosphere, dark aesthetic, golden hour"
- "Lavender flowers and chamomile on dark marble surface, apothecary style, premium ingredient photography"

**2. Acupressure Sleep Mat ($79)**  
Generate product images:
- "Professional product photo of an acupressure mat and pillow set with thousands of plastic pressure points, organic cotton fabric in dark blue, laid out on a wooden floor, wellness product photography, dark moody lighting"
- "Person lying on acupressure mat in a dimly lit bedroom, relaxing pose, spa-like atmosphere, dark aesthetic"
- "Close-up macro shot of acupressure points on the mat surface, showing the plastic spikes texture"

**3. White Noise + Aroma Machine ($89)** — already have 1 real image
We have 1 real product image (761KB). Generate additional:
- "White noise sound machine with flame-effect LED light and mist diffuser on a nightstand in a dark bedroom, creating warm ambient glow, premium sleep tech product photography"
- "Close-up of the white noise machine controls showing sound options, modern minimalist design, dark background with golden accents"

### Build Tasks:
1. Save generated images to public/products/{slug}/1.jpg through 4.jpg
2. Update src/data/products.ts with final product data using the scraped info
3. Ensure science citations render with clickable PubMed links
4. All pages use dark theme + gold SOMNI brand
5. Build, commit, push

Product details already at: D:/projects/somni-sleep/tasks/build-3-product-pages.md

Project: D:/projects/somni-sleep
