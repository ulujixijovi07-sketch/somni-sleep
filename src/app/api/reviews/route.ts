import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

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
    const json = await request.json();
    
    const productId = parseInt(json.productId);
    const authorName = json.authorName?.trim() || "Anonymous";
    const rating = json.rating || 5;
    const title = json.title?.trim() || null;
    const body = json.body?.trim() || "";
    const imageUrls: string[] = json.images || []; // array of base64 data URLs

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

    const review = await prisma.review.create({
      data: {
        productId,
        authorName,
        rating,
        title,
        body,
        images: {
          create: imageUrls.slice(0, 3).map((url: string) => ({ url })),
        },
      },
      include: { images: true },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
