"use client";

import { useState, useEffect } from "react";
import ProductDetailTop from "@/components/product-detail-top";

// ─── Page Component ──────────────────────────────────────────────────────

export default function ProductPage() {
  const [htmlContent, setHtmlContent] = useState<{
    style: string;
    body: string;
  } | null>(null);

  // Load and process the static product.html
  useEffect(() => {
    fetch("/product.html")
      .then((r) => r.text())
      .then((html) => {
        // Extract <style>
        const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
        const style = styleMatch ? styleMatch[1].trim() : "";

        // Extract <body>
        const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
        let body = bodyMatch ? bodyMatch[1].trim() : "";

        // Strip nav and breadcrumb (rendered by the layout)
        body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
        body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

        // Strip the product detail top section (now rendered as React component)
        body = body.replace(
          /<!--\s*═+ PRODUCT DETAIL TOP ═+\s*-->[\s\S]*?<\/section>/,
          ""
        );

        // Strip the original Add to Cart / Buy Now buttons entirely
        // (they were in the product-detail section, but just in case)
        body = body.replace(
          /<button id="btn-add-cart"[\s\S]*?<\/button>\s*<button id="btn-buy-now"[\s\S]*?<\/button>/,
          ""
        );

        // Strip the inline <script> block (React handles interactivity now)
        body = body.replace(/<script>[\s\S]*?<\/script>/, "");

        setHtmlContent({ style, body });
      });
  }, []);

  // ── Loading state ────────────────────────────────────────────────────

  if (!htmlContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050510]">
        <p className="text-[#C9A84C] text-sm tracking-widest animate-pulse">
          Loading…
        </p>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: htmlContent.style }} />

      {/* React-rendered top section with gallery, info, Add to Cart, toast */}
      <ProductDetailTop />

      {/* Bottom sections from product.html (Science, Materials, Specs, etc.) */}
      <div
        className="product-page-content"
        dangerouslySetInnerHTML={{ __html: htmlContent.body }}
      />
    </>
  );
}
