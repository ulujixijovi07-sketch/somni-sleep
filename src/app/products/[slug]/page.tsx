import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "3d-contour-sleep-mask") {
    notFound();
  }

  const htmlPath = path.join(process.cwd(), "public", "product.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  // Extract <style>...</style>
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const style = styleMatch ? styleMatch[1].trim() : "";

  // Extract <body>...</body>
  const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
  let body = bodyMatch ? bodyMatch[1].trim() : "";

  // Remove nav and breadcrumb (site layout provides header)
  body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
  body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

  // Extract and remove scripts
  const scriptMatches = body.match(/<script>[\s\S]*?<\/script>/g) || [];
  const scripts = scriptMatches
    .map((s) => s.replace(/<\/?script>/g, "").trim())
    .join("\n");
  body = body.replace(/<script>[\s\S]*?<\/script>/g, "");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
      {scripts && (
        <script dangerouslySetInnerHTML={{ __html: scripts }} />
      )}
    </>
  );
}
