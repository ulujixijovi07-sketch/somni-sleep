import fs from "fs";
import path from "path";

export default function ProductPage() {
  const htmlPath = path.join(process.cwd(), "public", "product.html");

  // Test 1: Can we read the file?
  let html = "";
  try {
    html = fs.readFileSync(htmlPath, "utf-8");
  } catch (e) {
    return <div style={{color:"white",padding:"100px"}}>File error: {String(e)}</div>;
  }

  // Test 2: Extract style
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const style = styleMatch ? styleMatch[1].trim() : "";

  // Test 3: Extract body
  const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
  let body = bodyMatch ? bodyMatch[1].trim() : "";

  // Remove nav and breadcrumb
  body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
  body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
