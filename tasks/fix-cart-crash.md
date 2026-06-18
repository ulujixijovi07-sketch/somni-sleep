## Fix: cart-context.tsx useEffect causing page crash

The page at /products/3d-contour-sleep-mask shows "This page couldn't load" (Next.js error boundary).

The issue: src/lib/cart-context.tsx was modified to expose addToCart on window via useEffect, but addToCart is likely not memoized (no useCallback), causing the useEffect dependency to change every render, leading to infinite re-render loop and crash.

### Fix:
1. In src/lib/cart-context.tsx, revert the useEffect change. Use `useRef` to store the addToCart function reference instead, or remove the exposure entirely.
2. In public/product.html, remove the `window.__somniAddToCart` integration from the button script (keep the alert fallback only).
3. The Add to Cart button should just show the alert for now and display "Added to cart!" — that's sufficient.
4. After fixing, run `rtk git add -A && rtk git commit -m "fix" && rtk git push`

Project: D:/projects/somni-sleep
