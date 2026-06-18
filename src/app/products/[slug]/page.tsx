import fs from "fs";
import path from "path";
import ProductDetailTop from "@/components/product-detail-top";
import FaqAccordion from "@/components/faq-accordion";

interface FaqItem {
  question: string;
  answer: string;
}

function parseFaq(bodyHtml: string): FaqItem[] {
  const faqItems: FaqItem[] = [];
  const itemRegex = /<div class="faq-item">\s*<div class="faq-q">([\s\S]*?)<\/div>\s*<div class="faq-a">([\s\S]*?)<\/div>\s*<\/div>/g;
  let match;
  while ((match = itemRegex.exec(bodyHtml)) !== null) {
    faqItems.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }
  return faqItems;
}

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

  // Extract FAQ items before removing the FAQ section
  const faqItems = parseFaq(body);

  // Remove FAQ section and footer (now rendered via React components)
  body = body.replace(/<!-- FAQ -->[\s\S]*?<\/section>/, "");
  body = body.replace(/<footer>[\s\S]*?<\/footer>/, "");

  // Remove any remaining button/script cruft
  body = body.replace(/<button id="btn-add-cart"[\s\S]*?<\/button>/, "");
  body = body.replace(/<button id="btn-buy-now"[\s\S]*?<\/button>/, "");
  body = body.replace(/<script>[\s\S]*?<\/script>/g, "");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <ProductDetailTop />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="product-page-content">
        <section>
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <FaqAccordion items={faqItems} />
        </section>
        <footer>
          <p>© 2025 Somni. CE Certified. Designed in California. Made with care in Shenzhen.</p>
          <p style={{marginTop:"8px",fontSize:"11px"}}>SOMNI and the Somni logo are trademarks of Somni Sleep Technologies.</p>
        </footer>
      </div>
    </>
  );
}
