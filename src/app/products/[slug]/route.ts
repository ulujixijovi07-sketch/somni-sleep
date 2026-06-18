import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // Only serve product.html for the 3d-contour-sleep-mask slug
  if (params.slug !== "3d-contour-sleep-mask") {
    return new Response("Not Found", { status: 404 });
  }

  const htmlPath = path.join(process.cwd(), "public", "product.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
