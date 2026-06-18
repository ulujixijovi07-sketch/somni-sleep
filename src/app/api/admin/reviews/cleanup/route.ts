import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST() {
  try {
    const deleted = await prisma.review.deleteMany({
      where: {
        OR: [
          { authorName: { contains: "55666" } },
          { authorName: { contains: "666" } },
          { body: { contains: "666666" } },
          { body: { contains: "55666" } },
          { title: { contains: "666" } },
          { title: { contains: "55666" } },
        ],
      },
    });
    return NextResponse.json({ deleted: deleted.count });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
