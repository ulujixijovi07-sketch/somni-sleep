"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/lib/cart-context";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "@/data/products";

// ─── Props ──────────────────────────────────────────────────────────────

interface ProductDetailTopProps {
  product: Product;
}

// ─── Helper: sense accent color map ─────────────────────────────────────

const senseAccentColors: Record<string, string> = {
  visual: "#C9A84C",
  auditory: "#7EB8C9",
  tactile: "#B8917E",
  olfactory: "#9FAF8E",
};

// ─── Helper: compute discount percent ───────────────────────────────────

function discountPercent(price: number, compareAt?: number): number {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

// ─── Component ───────────────────────────────────────────────────────────

export default function ProductDetailTop({ product }: ProductDetailTopProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState<string | null>(null);
  const { addToCart } = useCart();

  const accColor = senseAccentColors[product.category] ?? "#C9A84C";
  const discPct = discountPercent(product.price, product.compareAtPrice);

  const cartItem = {
    variantId: product.id,
    productId: product.id,
    name: product.name,
    slug: product.slug,
    image: product.images[0] ?? "",
    color: product.senseLabel,
    colorHex: accColor,
    size: "One Size",
    price: product.price,
  };

  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const handleQtyChange = useCallback((delta: number) => {
    setQty((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > 99) return 99;
      return next;
    });
  }, []);

  const handleAddToCart = useCallback(() => {
    for (let i = 0; i < qty; i++) {
      addToCart(cartItem);
    }
    setToast(`Added to cart \u2014 ${product.name}`);
    setTimeout(() => setToast(null), 3000);
  }, [addToCart, qty, cartItem, product.name]);

  const handleBuyNow = useCallback(() => {
    handleAddToCart();
    // Navigate to checkout after adding
    setTimeout(() => {
      window.location.href = "/en/checkout";
    }, 500);
  }, [handleAddToCart]);

  return (
    <>
      {/* ── Toast notification ── */}
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
              border: `1px solid ${accColor}40`,
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
            <span style={{ color: accColor, fontSize: "16px" }}>✦</span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Product Detail Top Section ── */}
      <section className="product-detail">
        {/* LEFT: Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img
              src={product.images[selectedImage] ?? product.images[0]}
              alt={product.name}
            />
          </div>
          <div className="thumbnail-strip">
            {product.images.map((src, i) => (
              <img
                key={i}
                className={i === selectedImage ? "active" : ""}
                src={src}
                onClick={() => handleThumbnailClick(i)}
                alt={`${product.name} view ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="product-info">
          <h1>
            {product.senseLabel} –{" "}
            <span>{product.name}</span>
          </h1>

          <div className="pricing">
            <span className="current-price">${product.price}</span>
            {product.compareAtPrice && (
              <>
                <span className="original-price">${product.compareAtPrice}</span>
                {discPct > 0 && (
                  <span className="discount-badge">-{discPct}%</span>
                )}
              </>
            )}
          </div>

          <ul className="feature-bullets">
            {product.features.map((feat, i) => (
              <li key={i}>
                <span className="icon">✦</span> {feat}
              </li>
            ))}
          </ul>

          <div className="social-proof">
            <span className="dot"></span>{" "}
            {product.stock > 0
              ? `${Math.min(product.stock, 47)} people are viewing this right now`
              : "Limited stock available"}
          </div>

          <div className="qty-row">
            <span className="qty-label">Quantity</span>
            <div className="quantity-picker">
              <button type="button" onClick={() => handleQtyChange(-1)}>
                −
              </button>
              <input type="text" value={qty} readOnly />
              <button type="button" onClick={() => handleQtyChange(1)}>
                +
              </button>
            </div>
          </div>

          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
            type="button"
          >
            Add to Cart
          </button>
          <button
            className="btn-buy-now"
            onClick={handleBuyNow}
            type="button"
          >
            Buy Now
          </button>

          <p className="trust-text">
            Clinically tested with robust data. Globally certified for safety.
          </p>
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="t-icon">🛡️</span> CE Certified
            </div>
            <div className="trust-badge">
              <span className="t-icon">🔄</span> 30-Day Trial
            </div>
            <div className="trust-badge">
              <span className="t-icon">✅</span> OEKO-TEX
            </div>
            <div className="trust-badge">
              <span className="t-icon">📡</span> FCC
            </div>
            <div className="trust-badge">
              <span className="t-icon">♻️</span> RoHS
            </div>
          </div>

          <div className="shipping-banner">
            🚚 Free Worldwide Shipping | Duties & Tax Included | 30-Day
            Money-Back Guarantee
          </div>
        </div>
      </section>
    </>
  );
}
