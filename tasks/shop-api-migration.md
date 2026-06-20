Update D:/projects/somni-sleep/src/app/[locale]/shop/page.tsx:

1. Remove line 5: `import { products } from "@/data/products";`
2. Add `"use client";` if not already there (it is)
3. Add `useState, useEffect` to imports from react
4. Replace the static `products` usage with a fetch to `/api/products`
5. Add loading state

Changes:
- Import: add `useState, useEffect` 
- Remove: `import { products } from "@/data/products";`
- Add state: `const [products, setProducts] = useState([]); const [loading, setLoading] = useState(true);`
- Add useEffect to fetch: 
```typescript
useEffect(() => {
  fetch("/api/products")
    .then(r => r.json())
    .then(data => { setProducts(data); setLoading(false); })
    .catch(() => setLoading(false));
}, []);
```
- Wrap the product grid in a loading check: show "Loading..." when loading=true

Also update D:/projects/somni-sleep/src/components/product-card.tsx to handle the DB product format (images is array of objects with `url` property, instead of array of strings).

The ProductCard currently expects `product.images[0]` to be a string URL. After API fetch, `product.images[0]` will be an object `{url: "...", ...}`. Need to access `product.images[0]?.url`.

Find the product-card.tsx file and update any `product.images[0]` or `product.images[i]` references to use `.url` if they expect an object.
