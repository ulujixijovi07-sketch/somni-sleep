Edit src/data/products.ts to update the product with id: "white-noise-aroma-machine" (product ID 17).

1. Replace the "images" array with:
```
images: [
  "/products/white-noise-aroma-machine/product_0.webp",
  "/products/white-noise-aroma-machine/product_2.webp",
  "/products/white-noise-aroma-machine/product_7.webp",
  "/products/white-noise-aroma-machine/img_5.webp",
  "/products/white-noise-aroma-machine/img_6.webp",
  "/products/white-noise-aroma-machine/img_7.webp",
  "/products/white-noise-aroma-machine/img_8.webp",
  "/products/white-noise-aroma-machine/img_9.webp",
],
```

2. Update "description" to: "5-in-1 White Noise Sleep Machine with Bluetooth speaker, realistic flame effect lamp, ultrasonic aroma diffuser, humidifier, and night light. The flickering flame creates a cozy ambiance while white noise masks disruptive sounds. Essential oil compatible for aromatherapy benefits. Plug-in design for all-night use."

3. Update "features" to:
```
features: [
  "5-in-1 Multi-Function Design",
  "Realistic 3D Flame Effect",
  "Bluetooth 5.0 Speaker",
  "Ultrasonic Aroma Diffuser",
  "7 Soothing Sound Options",
  "Warm Night Light",
],
```

4. Update "science" to:
```
science: [
  { title: "White noise improves sleep in noisy environments", url: "https://pubmed.ncbi.nlm.nih.gov/28834690/" },
  { title: "Aromatherapy for sleep quality", url: "https://pubmed.ncbi.nlm.nih.gov/19581531/" },
],
```

5. Update "price" to: 89

Then run: cd D:/projects/somni-sleep && npm run build
