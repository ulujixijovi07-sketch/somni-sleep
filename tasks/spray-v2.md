Edit src/data/products.ts to update the product with id: "deep-sleep-pillow-spray" (around line 200-260).

Change ONLY this product entry:

1. Replace the "images" array with:
```
images: [
  "/products/deep-sleep-pillow-spray/product_0.webp",
  "/products/deep-sleep-pillow-spray/product_6.webp",
  "/products/deep-sleep-pillow-spray/product_7.webp",
  "/products/deep-sleep-pillow-spray/img_6.webp",
  "/products/deep-sleep-pillow-spray/img_7.webp",
  "/products/deep-sleep-pillow-spray/img_8.webp",
  "/products/deep-sleep-pillow-spray/img_9.webp",
],
```

2. Update "description" to: "DOCTEAT 30ML Melatonin Pillow Spray. Plant-based fast-absorbing formula sprayed onto pillow before sleep. Non-habit forming sleep aid trusted by customers across Amazon, eBay, and independent stores worldwide. 30ML compact bottle — perfect for travel."

3. Update "features" to:
```
features: [
  "30ML Travel-Sized Bottle",
  "Fast-Acting Melatonin Formula",
  "Plant-Based & Non-Habit Forming",
  "Calming Lavender + Chamomile Scent",
  "OEM/White-Label Ready",
],
```

4. Update "science" to include real citations:
```
science: [
  { title: "Melatonin for sleep onset latency", url: "https://pubmed.ncbi.nlm.nih.gov/12622846/" },
  { title: "Melatonin efficacy meta-analysis", url: "https://pubmed.ncbi.nlm.nih.gov/23691095/" },
],
```

Then run: cd D:/projects/somni-sleep && npm run build
