## Task: Optimize product page performance

The page at https://lovenocturne.com/products/3d-contour-sleep-mask loads ~10MB — too slow.

### Issues:
1. product_video.mp4 = 6.6MB — should be compressed or lazy-loaded
2. Images are large PNGs (500KB-1.4MB each) — convert to WebP or compress JPG
3. All images load eagerly — add `loading="lazy"` to below-fold images
4. Video poster loads immediately — adds to initial load

### Optimizations:

1. **Video**: Add `preload="none"` to the video element in public/product.html so it doesn't download on page load. Only loads when user clicks play.

2. **Images**: Convert large PNG images in public/images/ to compressed WebP:
   - model_wearing.png (589KB) → model_wearing.webp
   - exploded_view_en.png (1.1MB) → exploded_view_en.webp  
   - adjustable_speakers_en.png (1.4MB) → adjustable_speakers_en.webp
   - wash_steps_en.png → wash_steps_en.webp
   Use sharp (npm package) or npx @squoosh/cli to convert. If tools not available, just optimize with what's available.

3. **Update references**: After converting images, update all src references in:
   - public/product.html (all image tags)
   - src/components/product-detail-top.tsx (PRODUCT.images array)
   
4. **Lazy loading**: Add `loading="lazy"` to images in the bottom sections of product.html (everything below the video section).

5. **CSS optimization**: The product.html CSS is 15KB injected inline on every page load. Option: move it to a separate CSS file in public/ and link it.

### Priority order:
1. Video preload="none" (biggest win, simplest fix)
2. Convert largest PNGs to WebP
3. Add lazy loading to below-fold images
4. CSS file extraction (nice to have)

### Build and push:
- Run `npx next build --webpack` to verify
- Use rtk git to commit and push

Project: D:/projects/somni-sleep
