Edit src/app/products/[slug]/page.tsx to restore the rich product.html rendering for the 3D contour sleep mask.

CURRENT FILE: D:/projects/somni-sleep/src/app/products/[slug]/page.tsx

WHAT TO DO:

1. Convert the page from a server component to a "use client" component
2. For slug === "3d-contour-sleep-mask", render the full product.html content via client-side fetch (the old approach from commit 0643058):
   - Fetch /product.html
   - Extract <style> and <body>
   - Strip nav/breadcrumb (rendered by layout)
   - Strip the product detail top section (rendered as React ProductDetailTop)
   - Render style via dangerouslySetInnerHTML
   - Render body via dangerouslySetInnerHTML in a div with className="product-page-content"
3. For OTHER slugs, use the current server-side approach (read from products.ts, render generic sections)
4. For the 3D contour mask, still render ProductDetailTop as a React component (for the interactive Add to Cart)
5. The page MUST be a client component since it uses useState + useEffect + fetch

TEMPORARY APPROACH: Since we can't mix server and client easily, make the WHOLE page a "use client" component. For the sleep mask slug, fetch and render HTML. For other slugs, use the current products.ts data approach but on the client side.

Build: cd D:/projects/somni-sleep && npx next build --webpack

IMPORTANT: Do NOT modify any other files. Do NOT break the other 3 product pages.
