Edit src/data/products.ts to update the product with id: "acupressure-sleep-mat" (product ID 16).

IMPORTANT: This product is actually a CES ear-clip microcurrent sleep device, not an acupressure mat. The 1688 images show an ear-clip device. Update accordingly.

1. Replace the "images" array with:
```
images: [
  "/products/acupressure-sleep-mat/product_4.webp",
  "/products/acupressure-sleep-mat/product_5.webp",
  "/products/acupressure-sleep-mat/img_5.webp",
  "/products/acupressure-sleep-mat/img_6.webp",
  "/products/acupressure-sleep-mat/img_7.webp",
  "/products/acupressure-sleep-mat/img_8.webp",
  "/products/acupressure-sleep-mat/img_9.webp",
],
```

2. Update "title" to: "CES Sleep Therapy Device" (or keep subtitle as acupressure if needed)

3. Update "description" to: "Handheld CES (Cranial Electrotherapy Stimulation) sleep device with ear-clip electrodes. Uses gentle microcurrent pulses to calm the nervous system and promote deep sleep. Rechargeable 800-1000mAh battery provides 1-3 hours of therapy per charge. Clinically studied for insomnia relief."

4. Update "features" to:
```
features: [
  "CES Microcurrent Therapy",
  "Ear-Clip Electrode Design",
  "Rechargeable 1000mAh Battery",
  "3 Intensity Levels",
  "Portable Handheld Design",
],
```

5. Update "science" to:
```
science: [
  { title: "CES for insomnia treatment", url: "https://pubmed.ncbi.nlm.nih.gov/25484674/" },
  { title: "Microcurrent therapy for sleep disorders", url: "https://pubmed.ncbi.nlm.nih.gov/25202170/" },
],
```

6. Update "price" to: 79

Then run: cd D:/projects/somni-sleep && npm run build
