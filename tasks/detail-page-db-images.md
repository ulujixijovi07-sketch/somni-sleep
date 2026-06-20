Update D:/projects/somni-sleep/src/app/products/[slug]/page.tsx:

The product detail page currently reads ALL data from static `getProductBySlug(slug)` from `@/data/products`. 

Problem: Admin panel edits images in the database, but the detail page shows static images.

Fix: After getting the static product data, also fetch images from the API `/api/products/[slug]` and overlay the DB images onto the static product data.

Steps:
1. Add a new state: `const [dbImages, setDbImages] = useState<string[] | null>(null);`
2. Add a useEffect that fetches `/api/products/${slug}` and extracts image URLs
3. Where `product.images` is used (in ProductDetailTop props and in image rendering), use `dbImages ?? product.images` to prefer database images when available

Specifically:
- After line 348 (`const product = getProductBySlug(slug);`), add the useEffect for fetching
- In the `product` object passed to `ProductDetailTop`, override images: `images: dbImages ?? product.images`
- The existing replacement at lines 401-406 for product_2 should be removed since DB images are now the source

The ProductDetailTop component receives `product.images` as a string array. Make sure the API images are extracted as an array of URL strings.

Keep it minimal - just add the image overlay, don't change any other logic.
