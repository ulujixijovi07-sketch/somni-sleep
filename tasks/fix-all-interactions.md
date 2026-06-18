## Task: Fix all broken interactions on product page

The page at https://lovenocturne.com/products/3d-contour-sleep-mask only has working Add to Cart button. Everything else is broken:

### Issues to fix:

1. **Thumbnail image swap not working** — clicking thumbnails doesn't change main image. Check ProductDetailTop's onClick handlers for thumbnails.

2. **Quantity picker (-/+) not working** — clicking +/- doesn't change quantity. HandleQtyChange onClick handlers.

3. **Buy Now button not working** — should trigger same action as Add to Cart but doesn't. HandleBuyNow callback.

4. **Video doesn't play** — the video section is in dangerouslySetInnerHTML from product.html. Check if video src path is correct and if the video element works.

5. **FAQ items not expandable** — they have cursor:pointer styling but no click handlers to toggle answers. Add JavaScript to make them expandable (show/hide answer on click).

6. **Pre-Order button in nav links to #buy** — but the #buy section (which had the CTA banner) was removed. Either add the anchor back or remove the link.

### Root cause hypothesis:
All React event handlers (thumbnails, quantity, Buy Now) are broken. This might be because:
- Hydration mismatch between server and client rendering
- The component file has syntax/runtime errors that prevent JS execution
- The "use client" boundary isn't working correctly in this Next.js setup

### Steps:
1. Read src/components/product-detail-top.tsx and src/app/products/[slug]/page.tsx
2. Check if there are any build errors or hydration issues
3. Fix all event handlers — thumbnail swap, quantity change, Buy Now
4. Make FAQ items expandable (add onClick toggle in the script)
5. Fix video if broken
6. Fix or remove Pre-Order nav link
7. Build with `npx next build --webpack` locally to verify
8. Git commit and push with `rtk git`

Project: D:/projects/somni-sleep
