import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/products — public product listing
export async function GET() {
  const products = await prisma.product.findMany({
    where: { isActive: true, status: "ACTIVE" },
    include: {
      images: { orderBy: { sortOrder: "asc" } },
      variants: true,
      collection: { select: { name: true, slug: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}
