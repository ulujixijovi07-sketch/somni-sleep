Delete the "Technical Specifications" / "By the Numbers" section from the product page.

Files to modify:

1. D:/projects/somni-sleep/src/app/products/[slug]/page.tsx
   - Delete lines 216-260 (the entire specs section: from "{/* ── Specifications ── */}" comment through the closing "</section>" tag)
   - The section looks like:
     Lines 216-260: The specs-section containing "Technical Specifications", "By the Numbers", and the specs-grid

2. D:/projects/somni-sleep/public/product.html
   - Find and delete the "Technical Specifications" / "By the Numbers" section

3. D:/projects/somni-sleep/public/product-spray.html  
   - Find and delete the "Technical Specifications" / "By the Numbers" section

After deleting, verify the files still have valid syntax (no orphaned tags, etc.)
