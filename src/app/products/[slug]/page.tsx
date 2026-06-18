"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Script from "next/script";
import { useCart } from "@/lib/cart-context";
import { AnimatePresence, motion } from "framer-motion";

// ─── Page Component ──────────────────────────────────────────────────────

export default function ProductPage() {
  const { addToCart } = useCart();
  const addToCartRef = useRef(addToCart);
  addToCartRef.current = addToCart; // always current, no re-render trigger
  const [htmlContent, setHtmlContent] = useState<{
    style: string;
    body: string;
  } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

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

        // Strip the original Add to Cart / Buy Now buttons entirely
        // (React renders them as direct JSX below)
        body = body.replace(
          /<button id="btn-add-cart"[\s\S]*?<\/button>\s*<button id="btn-buy-now"[\s\S]*?<\/button>/,
          ""
        );

        // Strip the inline <script> block (React handles interactivity now)
        body = body.replace(/<script>[\s\S]*?<\/script>/, "");

        setHtmlContent({ style, body });
      });
  }, []);

  // ── Cart action handlers (stable via useRef, no stale closure) ────────

  const handleAddToCart = useCallback(() => {
    addToCartRef.current({
      variantId: 1,
      productId: 1,
      name: "Somni Contour 3D Sleep Mask",
      slug: "3d-contour-sleep-mask",
      image: "/images/model_wearing.png",
      color: "Arctic",
      colorHex: "#6B7B8D",
      size: "One Size",
      price: 49,
    });
    setToast("Added to cart — Somni Contour 3D Sleep Mask");
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleBuyNow = useCallback(() => {
    handleAddToCart();
  }, [handleAddToCart]);

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
      <div
        className="product-page-content"
        dangerouslySetInnerHTML={{ __html: htmlContent.body }}
      />

      {/* Add to Cart buttons rendered as direct JSX, below the product detail */}
      <div className="product-page-content" style={{maxWidth:1200, margin:'0 auto', padding:'0 40px 60px'}}>
        <div style={{maxWidth:'45%', marginLeft:'auto'}}>
          <button className="btn-add-cart" onClick={handleAddToCart} type="button">
            Add to Cart
          </button>
          <button className="btn-buy-now" onClick={handleBuyNow} type="button">
            Buy Now
          </button>
        </div>
      </div>

      {/* Thumbnail swap and quantity changer (vanilla, works with the static HTML) */}
      <Script id="product-init" strategy="afterInteractive">
        {`
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
        `}
      </Script>

      {/* ── Smooth animated toast notification ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="cart-toast"
            initial={{ opacity: 0, y: -64, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -64, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "fixed",
              top: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              background: "linear-gradient(135deg, #0a0a1a 0%, #050510 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "10px",
              padding: "14px 28px",
              color: "#E8E6E3",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.3px",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              pointerEvents: "none",
            }}
          >
            <span style={{ color: "#C9A84C", fontSize: "16px" }}>✦</span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
