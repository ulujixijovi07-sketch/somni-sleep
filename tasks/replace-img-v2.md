D:/projects/somni-sleep/src/app/products/[slug]/page.tsx - Product page

After `const product = await getProduct(slug);` on line ~23, add code to replace the product_2 image URL:

```typescript
// Replace product_2 image with corrected version (text wasn't fully visible)
if (product && product.images) {
  product.images = product.images.map((img: any) => {
    if (img.url && img.url.includes('product_2')) {
      return { ...img, url: 'https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png' };
    }
    return img;
  });
}
```

Add this RIGHT AFTER line 23 (`const product = await getProduct(slug);`) and BEFORE line 27 (`if (!product) notFound();`).

Then rebuild with: npx next build --webpack
