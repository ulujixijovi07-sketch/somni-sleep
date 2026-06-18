## Task: Fix Add to Cart on product page

Two issues on https://lovenocturne.com/products/3d-contour-sleep-mask:

1. Clicking "Add to Cart" shows a native browser alert() — looks unprofessional
2. The product doesn't actually get added to the site's cart system

### Fix:

Convert `src/app/products/[slug]/page.tsx` from a server component to a client component that:

1. Keep rendering the product.html body via dangerouslySetInnerHTML (don't touch the content)
2. BUT: remove the Add to Cart and Buy Now buttons from the dangerouslySetInnerHTML content BEFORE rendering
3. Replace them with proper React buttons that use the CartProvider context
4. Show a smooth toast notification (not browser alert) when item is added
5. The toast should match the site's SOMNI brand style

### Implementation approach:

```
"use client";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

// In the component:
// 1. Read product.html and extract body (same as before)
// 2. STRIP the Add to Cart and Buy Now buttons from the body HTML
// 3. Render the stripped body via dangerouslySetInnerHTML
// 4. Below the stripped body BUT before the next section, render a proper React Add to Cart section with:
//    - Gold "Add to Cart" button using CartProvider's addToCart
//    - "Buy Now" button (can just alert for now)
//    - Toast notification using React state (AnimatePresence from framer-motion)
// 5. The toast should slide in from top, show "Added to cart — Somni Contour 3D Sleep Mask", auto-dismiss

The Add to Cart React section should be positioned where the original buttons were — right after the quantity picker and before the trust badges.

### Files to modify:
- src/app/products/[slug]/page.tsx (main work)
- src/lib/cart-context.tsx (do NOT modify — just import useCart)

### Notes:
- The product data (name, price, images) can be extracted from the HTML or hardcoded
- Use `rtk git` for all git operations
- Project: D:/projects/somni-sleep
