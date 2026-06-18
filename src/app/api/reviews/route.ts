import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import crypto from "crypto";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  // ── Purchase check mode (for client-side UI) ──────────────────────
  if (searchParams.get("checkPurchase") === "true") {
    if (!productId) return NextResponse.json({ purchased: false });
    const session = await auth();
    if (!session?.user?.email) return NextResponse.json({ purchased: false });

    const order = await prisma.order.findFirst({
      where: {
        customerEmail: session.user.email,
        status: "DELIVERED",
        items: { some: { productId: parseInt(productId) } },
      },
    });

    return NextResponse.json({ purchased: !!order });
  }

  // ── Regular review listing ────────────────────────────────────────
  if (!productId) return NextResponse.json({ error: "productId required" }, { status: 400 });

  const reviews = await prisma.review.findMany({
    where: { productId: parseInt(productId), isDeleted: false },
    orderBy: { createdAt: "desc" },
    include: { images: true },
  });

  return NextResponse.json(reviews);
}

async function uploadToCloudinary(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
  const apiKey = process.env.CLOUDINARY_API_KEY!;
  const apiSecret = process.env.CLOUDINARY_API_SECRET!;

  const timestamp = Math.round(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(`folder=somni/reviews&timestamp=${timestamp}${apiSecret}`)
    .digest("hex");

  const uploadForm = new FormData();
  uploadForm.append("file", `data:${file.type};base64,${base64}`);
  uploadForm.append("api_key", apiKey);
  uploadForm.append("timestamp", String(timestamp));
  uploadForm.append("signature", signature);
  uploadForm.append("folder", "somni/reviews");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: uploadForm }
  );

  const data = await res.json();
  if (data.secure_url) return data.secure_url;
  throw new Error(data.error?.message || "Image upload failed");
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let productId: number, authorName: string, rating: number, title: string | null, body: string;

    if (contentType.includes("application/json")) {
      // JSON body — simplest case, no images
      const json = await request.json();
      productId = parseInt(json.productId);
      authorName = json.authorName?.trim() || "Anonymous";
      rating = json.rating || 5;
      title = json.title?.trim() || null;
      body = json.body?.trim() || "";
    } else {
      // FormData body — supports images
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

    // Verify product exists
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

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
