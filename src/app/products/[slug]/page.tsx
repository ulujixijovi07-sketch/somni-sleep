import fs from "fs";
import path from "path";
import ProductDetailTop from "@/components/product-detail-top";

export default function ProductPage() {
  const htmlPath = path.join(process.cwd(), "public", "product.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  // Extract style
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const style = styleMatch ? styleMatch[1].trim() : "";

  // Extract body
  const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
  let body = bodyMatch ? bodyMatch[1].trim() : "";

  // Remove nav and breadcrumb
  body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
  body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

  // Remove product detail top section (now rendered by ProductDetailTop)
  body = body.replace(/<!--\s*═+ PRODUCT DETAIL TOP ═+\s*-->[\s\S]*?<\/section>/, "");

  // Remove any remaining button/script cruft
  body = body.replace(/<button id="btn-add-cart"[\s\S]*?<\/button>/, "");
  body = body.replace(/<button id="btn-buy-now"[\s\S]*?<\/button>/, "");
  body = body.replace(/<script>[\s\S]*?<\/script>/g, "");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <ProductDetailTop />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
