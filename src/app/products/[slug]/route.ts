import fs from "fs";
import path from "path";

export async function GET() {
  const htmlPath = path.join(process.cwd(), "public", "product.html");

  if (!fs.existsSync(htmlPath)) {
    return new Response("Product page not found", { status: 500 });
  }

  const html = fs.readFileSync(htmlPath, "utf-8");

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
