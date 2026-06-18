## Task: Replace createRoot approach with direct JSX rendering

### Problem
The createRoot approach for mounting React Add to Cart buttons into dangerouslySetInnerHTML content is unreliable in Next.js. Buttons render inconsistently and disappear.

### Solution: Option B — Direct JSX rendering
Instead of createRoot, render the Add to Cart buttons as regular React elements in the page component's JSX.

### Implementation:

1. Read src/app/products/[slug]/page.tsx
2. Remove all createRoot / react-dom/client imports
3. Remove the useEffect that mounts buttons via createRoot
4. Strip the original button HTML from the body AND the react-cart-mount placeholder div
5. The body content should end cleanly after the quantity picker, before the trust badges
6. Render the Add to Cart buttons as direct JSX between the dangerouslySetInnerHTML div and the content sections below

### The button JSX should be:
```tsx
<div className="product-page-content" style={{maxWidth:1200, margin:'0 auto', padding:'0 40px 60px'}}>
  <div style={{maxWidth:'45%', marginLeft:'auto'}}> {/* match right column width */}
    <button className="btn-add-cart" onClick={handleAddToCart} type="button">
      Add to Cart
    </button>
    <button className="btn-buy-now" onClick={handleBuyNow} type="button">
      Buy Now
    </button>
  </div>
</div>
```

### The quantity picker position:
In the product.html, the quantity picker is in the right column (product-info). The buttons should appear right after the quantity picker section. Since we can't easily inject into the middle of dangerouslySetInnerHTML, the buttons will appear as a new row below the product detail section.

Alternative: wrap the body in sections:
1. Render top part of body (product detail) via dangerouslySetInnerHTML
2. Render React buttons
3. Render bottom part (trust badges onwards)

Simplest approach: just place the React buttons between the main product-detail and the video section. They won't be in the exact same position as the original design, but they'll be functional.

### Key requirements:
- Keep useRef(addToCart) pattern (no stale closure)
- Keep framer-motion toast notification
- No createRoot or react-dom/client
- Remove react-cart-mount placeholder from the body regex
- Verify locally with `npx next build --webpack`
- Use rtk git
