## Task: Fix Add to Cart button — stale closure preventing cart integration

### Current state
- Page at /products/3d-contour-sleep-mask loads and renders correctly
- Add to Cart / Buy Now buttons are visible
- framer-motion toast notification component exists in page.tsx
- But clicking the buttons does nothing — no toast appears, cart stays at "0 items"

### Root cause analysis
The page.tsx uses `createRoot` to mount React buttons with `handleAddToCart` that calls `addToCart()` from `useCart()`. The useEffect that mounts the buttons has `[addToCart]` in its dependency array. But `addToCart` in cart-context.tsx is wrapped with `useCallback((item) => {...}, [items, hydrated, isLoggedIn])`. 

When `addToCart` is called, `items` changes → `addToCart` reference changes → the useEffect re-runs → `createRoot` unmounts and re-mounts the buttons → the click handler reference becomes stale.

This is a "stale closure" / "useEffect dependency loop" problem.

### Fix approach
Option A (recommended): Use `useRef` to store the latest `addToCart` without adding it to the useEffect dependency array. The useEffect mounts the buttons once, and the click handler reads the latest `addToCart` from the ref.

```
const addToCartRef = useRef(addToCart);
addToCartRef.current = addToCart; // always current, no re-render trigger

// In the mount useEffect, use addToCartRef.current in the click handler
// Remove addToCart from the dependency array
```

Option B: Remove the `createRoot` approach entirely. Instead, use a state flag `showReactButtons` and conditionally render the AddToCartButtons component directly in the JSX (not via createRoot). Place them between the dangerouslySetInnerHTML div and the next section.

### Files
- src/app/products/[slug]/page.tsx — main work
- Do NOT modify src/lib/cart-context.tsx

### Context variables for addToCart
```ts
addToCart({
  variantId: 1,
  productId: 1,
  name: "Somni Contour 3D Sleep Mask",
  slug: "3d-contour-sleep-mask",
  image: "/images/model_wearing.png",
  color: "Arctic",
  colorHex: "#6B7B8D",
  size: "One Size",
  price: 49,
});
```

### Verification
After fixing, verify on the live page:
1. Click "Add to Cart" → toast notification appears with gold SOMNI styling → cart counter increments
2. Click "Buy Now" → same behavior (or redirects to checkout)
3. Toast auto-dismisses after 3 seconds

### Git
Use `rtk git` for all operations. Project: D:/projects/somni-sleep
