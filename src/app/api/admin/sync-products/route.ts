import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// This endpoint syncs products from static data to the database.
// Run once after deployment: GET /api/admin/sync-products
// Protected by simple secret to prevent abuse.

const SYNC_SECRET = process.env.SYNC_SECRET || "somni-sync-2024";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("secret") !== SYNC_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Static product data - mirrors src/data/products.ts
  const products = [
    {
      slug: "3d-contour-sleep-mask",
      name: "3D Contour Sleep Mask",
      price: 49,
      compareAtPrice: 79,
      description: "Zero-pressure 3D eye cups with 100% blackout. Bluetooth 6.0 audio. Detachable & washable.",
      images: [
        "/products/3d-contour-sleep-mask/product_0.webp",
        "/products/3d-contour-sleep-mask/product_1.webp",
        "/products/3d-contour-sleep-mask/product_2.webp",
        "/products/3d-contour-sleep-mask/img_3.webp",
        "/products/3d-contour-sleep-mask/img_4.webp",
      ],
    },
    {
      slug: "white-noise-aroma-machine",
      name: "White Noise + Aroma Machine",
      price: 89,
      compareAtPrice: 129,
      description: "5-in-1 White Noise Sleep Machine with Bluetooth speaker, realistic flame effect lamp, ultrasonic aroma diffuser, humidifier, and night light.",
      images: [
        "/products/white-noise-aroma-machine/product_0.webp",
        "https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png",
        "/products/white-noise-aroma-machine/product_7.webp",
        "/products/white-noise-aroma-machine/img_5.webp",
        "/products/white-noise-aroma-machine/img_6.webp",
        "/products/white-noise-aroma-machine/img_7.webp",
        "/products/white-noise-aroma-machine/img_8.webp",
        "/products/white-noise-aroma-machine/img_9.webp",
      ],
    },
    {
      slug: "deep-sleep-pillow-spray",
      name: "Deep Sleep Pillow Spray",
      price: 29,
      compareAtPrice: 45,
      description: "DOCTEAT 30ML Melatonin Pillow Spray. Plant-based fast-absorbing formula. Non-habit forming.",
      images: [
        "/products/deep-sleep-pillow-spray/product_0.webp",
        "/products/deep-sleep-pillow-spray/product_1.webp",
        "/products/deep-sleep-pillow-spray/product_2.webp",
        "/products/deep-sleep-pillow-spray/img_3.webp",
        "/products/deep-sleep-pillow-spray/img_4.webp",
        "/products/deep-sleep-pillow-spray/img_5.webp",
      ],
    },
    {
      slug: "acupressure-sleep-mat",
      name: "Acupressure Sleep Mat",
      price: 79,
      compareAtPrice: 119,
      description: "Full-body acupressure mat with 8,820 stimulation points. Releases endorphins and oxytocin for deep relaxation.",
      images: [
        "/products/acupressure-sleep-mat/product_0.webp",
        "/products/acupressure-sleep-mat/product_1.webp",
        "/products/acupressure-sleep-mat/product_2.webp",
        "/products/acupressure-sleep-mat/img_3.webp",
        "/products/acupressure-sleep-mat/img_4.webp",
      ],
    },
  ];

  const results: string[] = [];

  for (const p of products) {
    const existing = await prisma.product.findUnique({ where: { slug: p.slug } });

    if (existing) {
      // Update images if missing
      const imgCount = await prisma.productImage.count({ where: { productId: existing.id } });
      if (imgCount === 0 && p.images.length > 0) {
        await prisma.productImage.deleteMany({ where: { productId: existing.id } });
        await prisma.productImage.createMany({
          data: p.images.map((url, i) => ({
            productId: existing.id,
            url,
            alt: p.name,
            isPrimary: i === 0,
            sortOrder: i,
          })),
        });
        results.push(`Updated images for: ${p.name} (${p.images.length} images)`);
      } else {
        results.push(`Skipped: ${p.name} (already has ${imgCount} images)`);
      }
    } else {
      // Create new product
      const created = await prisma.product.create({
        data: {
          name: p.name,
          slug: p.slug,
          description: p.description,
          price: p.price,
          compareAtPrice: p.compareAtPrice,
          status: "ACTIVE",
          isActive: true,
          images: {
            create: p.images.map((url, i) => ({
              url,
              alt: p.name,
              isPrimary: i === 0,
              sortOrder: i,
            })),
          },
          translations: {
            create: {
              locale: "en",
              name: p.name,
              description: p.description,
            },
          },
        },
      });
      results.push(`Created: ${p.name} (id=${created.id}, ${p.images.length} images)`);
    }
  }

  return NextResponse.json({ success: true, results });
}
