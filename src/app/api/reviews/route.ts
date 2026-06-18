import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

// Valid product IDs from static data (products.ts)
const VALID_PRODUCT_IDS = [1, 16, 17, 12];

const PRODUCT_NAMES_MAP: Record<number, string> = {
  1: "3D Contour Sleep Mask",
  16: "CES Sleep Therapy Device",
  17: "White Noise + Aroma Machine",
  12: "Deep Sleep Pillow Spray",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  if (!productId) return NextResponse.json({ error: "productId required" }, { status: 400 });

  const reviews = await prisma.review.findMany({
    where: { productId: parseInt(productId), isDeleted: false },
    orderBy: { createdAt: "desc" },
    include: { images: true },
  });

  return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let productId: number, authorName: string, rating: number, title: string | null, body: string;

    if (contentType.includes("application/json")) {
      const json = await request.json();
      productId = parseInt(json.productId);
      authorName = json.authorName?.trim() || "Anonymous";
      rating = json.rating || 5;
      title = json.title?.trim() || null;
      body = json.body?.trim() || "";
    } else {
      const formData = await request.formData();
      productId = parseInt(String(formData.get("productId")));
      authorName = String(formData.get("authorName") || "").trim() || "Anonymous";
      rating = parseFloat(String(formData.get("rating") || 5));
      title = String(formData.get("title") || "").trim() || null;
      body = String(formData.get("body") || "").trim();
    }

    if (!productId || isNaN(productId) || productId <= 0) {
      return NextResponse.json({ error: "productId is required" }, { status: 400 });
    }
    if (!body) {
      return NextResponse.json({ error: "body is required" }, { status: 400 });
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }
    if (!VALID_PRODUCT_IDS.includes(productId)) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Ensure product exists in DB (for FK constraint)
    await prisma.product.upsert({
      where: { id: productId },
      update: {},
      create: {
        id: productId,
        name: PRODUCT_NAMES_MAP[productId] || `Product #${productId}`,
        slug: `product-${productId}`,
        price: 0,
      },
    });

    const review = await prisma.review.create({
      data: { productId, authorName, rating, title, body },
      include: { images: true },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
