## Task: Rewrite product page top section as proper React component

### Problem
The current approach of rendering product.html body via dangerouslySetInnerHTML + trying to inject React buttons is fundamentally broken. The buttons keep disappearing because React reconciliation conflicts with dangerouslySetInnerHTML DOM.

### Solution
Split the page into two parts:
1. **Top section**: Proper React component with gallery, product info, Add to Cart (with useCart + framer-motion toast)
2. **Bottom sections**: Still rendered from product.html via dangerouslySetInnerHTML (Science, Materials, Specs, Comparison, Smart Engineering, Reviews, FAQ)

### Implementation

#### Step 1: Create `src/components/product-detail-top.tsx`
A client component that renders the top purchase section:

```tsx
"use client";
// Props: none needed, data is hardcoded for 3d-contour-sleep-mask
// Renders:
// - Product gallery: main image + 5 thumbnails (swap on click)
// - Product info column: title, price $49/$79 -38%, feature bullets, social proof, quantity picker
// - Add to Cart / Buy Now buttons using useCart() addToCart
// - framer-motion toast notification
// - Trust badges
// - Shipping banner
```

Key design decisions:
- Use the same CSS classes from product.html (product-detail, product-gallery, main-image, etc.)
- Images: /images/model_wearing.png (main), plus 4 thumbnails
- Thumbnail swap: useState for selectedImage
- Quantity: useState for qty
- addToCart: useCart().addToCart with proper CartItem data
- Toast: same AnimatePresence + motion.div as current
- Keep the dark theme, gold accents, all existing styling

#### Step 2: Update `src/app/products/[slug]/page.tsx`
- Import and render `<ProductDetailTop />` at the top
- Strip the product-detail section from the product.html body (everything from `<!-- PRODUCT DETAIL TOP -->` to the end of the product-detail `</section>`)
- Keep the bottom sections: Video, Science, Materials, Unboxing, Specs, Comparison, Smart Engineering, Reviews, FAQ
- Keep the style injection from product.html (CSS classes still needed)
- Keep the swapMain/changeQty Script only if needed for content below

#### Step 3: Verify
- Build: `npx next build --webpack`
- The Add to Cart button should work reliably (proper React component)
- Toast notification should appear
- Cart counter should update
- All bottom sections should render correctly

### Product data for the component:
```ts
{
  name: "Somni Contour 3D Sleep Mask with Bluetooth 6.0 Audio",
  price: 49,
  compareAtPrice: 79,
  images: [
    "/images/model_wearing.png",
    "/images/O1CN01hga2kT2E2hlTCrWoY.jpg",
    "/images/exploded_view_en.png",
    "/images/O1CN01wzJLby2E2hlOXWR3s.jpg",
    "/images/adjustable_speakers_en.png",
  ],
  cartItem: {
    variantId: 1, productId: 1, name: "Somni Contour 3D Sleep Mask",
    slug: "3d-contour-sleep-mask", image: "/images/model_wearing.png",
    color: "Arctic", colorHex: "#6B7B8D", size: "One Size", price: 49
  }
}
```

### Files
- NEW: src/components/product-detail-top.tsx
- MODIFY: src/app/products/[slug]/page.tsx
- DELETE: none

### Git
Use rtk git. Project: D:/projects/somni-sleep
