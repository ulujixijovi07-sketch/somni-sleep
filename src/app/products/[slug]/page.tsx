import fs from "fs";
import path from "path";
import Script from "next/script";

export default function ProductPage() {
  const htmlPath = path.join(process.cwd(), "public", "product.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  // Extract style
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const style = styleMatch ? styleMatch[1].trim() : "";

  // Extract body
  const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
  let body = bodyMatch ? bodyMatch[1].trim() : "";

  // Remove nav and breadcrumb (site layout provides header)
  body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
  body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

  // Extract script content (just swapMain + changeQty, not the IIFE)
  const scriptMatch = html.match(/<script>\s*(function swapMain[\s\S]*?^  \})\s*<\/script>/m);
  const coreScript = scriptMatch ? scriptMatch[1].trim() : "";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
      {coreScript && (
        <Script id="product-page-script" strategy="afterInteractive">
          {coreScript}
        </Script>
      )}
    </>
  );
}
