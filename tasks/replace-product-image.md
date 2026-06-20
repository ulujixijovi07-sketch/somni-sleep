Replace the "5-in-1 Multi-Function Design" image on the product page.

File: D:/projects/somni-sleep/src/app/products/[slug]/page.tsx

The product page loads images from the database. The image at URL containing "product_2.webp" (which is the "5-in-1 Multi-Function Design" image with cut-off text "FLAT ROOT CAN SOUND SOURCE") needs to be replaced with this new Cloudinary URL:
https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png

The approach: 
1. In the ProductPage component, after getting the product from getProduct(), map over product.images and replace any image whose url contains "product_2" with the new URL.
2. The replacement should happen before the images are passed to ProductGallery, ProductInfo, ProductJsonLd, and ProductViewTracker.

Make the change minimal - just add the image URL replacement logic, don't change anything else.
