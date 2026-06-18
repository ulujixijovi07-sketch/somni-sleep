import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const VALID_PRODUCT_IDS = [1, 16, 17, 12];
const PRODUCTS = [
  { id: 1, name: "3D Contour Sleep Mask", slug: "3d-contour-sleep-mask", price: 49 },
  { id: 16, name: "CES Sleep Therapy Device", slug: "acupressure-sleep-mat", price: 79 },
  { id: 17, name: "White Noise + Aroma Machine", slug: "white-noise-aroma-machine", price: 89 },
  { id: 12, name: "Deep Sleep Pillow Spray", slug: "deep-sleep-pillow-spray", price: 29 },
];

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
    const orderNumber = json.orderNumber?.trim() || "";
    const imageUrls: string[] = json.images || [];

    if (!productId || isNaN(productId) || !VALID_PRODUCT_IDS.includes(productId))
      return NextResponse.json({ error: "Invalid productId" }, { status: 400 });
    if (!body) return NextResponse.json({ error: "body required" }, { status: 400 });
    if (isNaN(rating) || rating < 1 || rating > 5)
      return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
    if (!orderNumber)
      return NextResponse.json({ error: "Order number required" }, { status: 400 });

    // Verify order exists, is delivered, and contains this product
    const order = await prisma.order.findUnique({
      where: { orderNumber },
      include: { items: true },
    });

    if (!order)
      return NextResponse.json({ error: "Order not found. Please check your order number." }, { status: 400 });
    if (order.status !== "DELIVERED")
      return NextResponse.json({ error: "Only delivered orders can leave a review. Your order status is: " + order.status }, { status: 400 });

    const hasProduct = order.items.some((item: { productId: number }) => item.productId === productId);
    if (!hasProduct)
      return NextResponse.json({ error: "This product was not found in your order." }, { status: 400 });

    // Ensure product exists in DB (FK constraint)
    const prod = PRODUCTS.find(p => p.id === productId)!;
    await prisma.product.upsert({
      where: { id: productId },
      update: {},
      create: { id: productId, name: prod.name, slug: prod.slug, price: prod.price },
    });

    const review = await prisma.review.create({
      data: {
        productId, authorName, rating, title, body,
        images: { create: imageUrls.slice(0, 3).map((url: string) => ({ url })) },
      },
      include: { images: true },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: error.message || "Internal error" }, { status: 500 });
  }
}
