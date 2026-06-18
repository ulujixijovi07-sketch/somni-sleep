## Task: Fix product page at https://lovenocturne.com/products/3d-contour-sleep-mask

Three issues found via visual inspection:

### 1. Navigation is broken
- The site header shows TWO nav bars stacked on top of each other
- The product.html has its own nav (SOMNI logo + SHOP/SCIENCE/STORY links + Pre-Order button) which I removed from the body, but the CSS might still have nav styles that conflict with the Next.js site header
- The product.html CSS styles `nav` elements with `position: fixed` etc which may be breaking the site header
- Fix: ensure product.html CSS does NOT style the site's nav/header. Scope nav styles to a specific class or remove them entirely

### 2. Content sections might not be properly centered  
- The product.html uses `section { max-width: 1200px; margin: 0 auto; padding: 100px 40px; }` which should center
- But the `.product-detail` section uses `max-width: 1300px` (different width!) which causes visual disconnect
- May also need to check that the product page content wrapper is properly centered within the Next.js layout

### 3. Add to Cart button doesn't work
- The button has `onclick="alert('Added to cart!')"` but clicking does nothing
- The page.tsx at src/app/products/[slug]/page.tsx extracts scripts from product.html and injects them separately
- The inline onclick should work without scripts, but maybe React's event system is interfering
- Fix: make the Add to Cart button actually work. Simplest approach: update the button to work with the site's CartProvider (addToCart from product-card.tsx) or at minimum make the alert fire
- The Buy Now button has the same issue

### Implementation notes:
- Work on D:/projects/somni-sleep
- The product HTML is at public/product.html
- The page component is at src/app/products/[slug]/page.tsx
- The layout is at src/app/products/layout.tsx
- The site header is in src/components/header.tsx
- Run `rtk git` for all git operations
- After fixing, verify the page at lovenocturne.com
