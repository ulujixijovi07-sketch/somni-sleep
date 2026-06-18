import fs from "fs";
import path from "path";
import Script from "next/script";

export default function ProductPage() {
  const htmlPath = path.join(process.cwd(), "public", "product.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const style = styleMatch ? styleMatch[1].trim() : "";

  const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
  let body = bodyMatch ? bodyMatch[1].trim() : "";

  body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
  body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="product-page-content" dangerouslySetInnerHTML={{ __html: body }} />
      <Script id="product-init" strategy="afterInteractive">{`
        function swapMain(el) {
          document.getElementById('mainImg').src = el.dataset.full;
          document.querySelectorAll('.thumbnail-strip img').forEach(function(t) { t.classList.remove('active'); });
          el.classList.add('active');
        }
        function changeQty(delta) {
          var inp = document.getElementById('qty');
          var v = parseInt(inp.value) + delta;
          if (v < 1) v = 1;
          if (v > 99) v = 99;
          inp.value = v;
        }
        document.getElementById('btn-add-cart').addEventListener('click', function(e) {
          e.preventDefault();
          alert('Added to cart!');
        });
        document.getElementById('btn-buy-now').addEventListener('click', function(e) {
          e.preventDefault();
          alert('Proceeding to checkout...');
        });
      `}</Script>
    </>
  );
}
