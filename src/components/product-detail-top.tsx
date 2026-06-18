"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/lib/cart-context";
import { AnimatePresence, motion } from "framer-motion";

// ─── Product Data ────────────────────────────────────────────────────────

const PRODUCT = {
  name: "Somni Contour 3D Sleep Mask with Bluetooth 6.0 Audio",
  price: 49,
  compareAtPrice: 79,
  discountPercent: 38,
  images: [
    "/images/model_wearing.webp",
    "/images/O1CN01hga2kT2E2hlTCrWoY.jpg",
    "/images/exploded_view_en.webp",
    "/images/O1CN01wzJLby2E2hlOXWR3s.jpg",
    "/images/adjustable_speakers_en.webp",
  ],
  cartItem: {
    variantId: 1,
    productId: 1,
    name: "Somni Contour 3D Sleep Mask",
    slug: "3d-contour-sleep-mask",
    image: "/images/model_wearing.webp",
    color: "Arctic",
    colorHex: "#6B7B8D",
    size: "One Size",
    price: 49,
  },
};

// ─── Component ───────────────────────────────────────────────────────────

export default function ProductDetailTop() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState<string | null>(null);
  const { addToCart } = useCart();

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
      addToCart(PRODUCT.cartItem);
    }
    setToast(`Added to cart — ${PRODUCT.cartItem.name}`);
    setTimeout(() => setToast(null), 3000);
  }, [addToCart, qty]);

  const handleBuyNow = useCallback(() => {
    handleAddToCart();
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

      {/* ── Product Detail Top Section ── */}
      <section className="product-detail">
        {/* LEFT: Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img
              src={PRODUCT.images[selectedImage]}
              alt="Somni Contour 3D Sleep Mask"
            />
          </div>
          <div className="thumbnail-strip">
            {PRODUCT.images.map((src, i) => (
              <img
                key={i}
                className={i === selectedImage ? "active" : ""}
                src={src}
                onClick={() => handleThumbnailClick(i)}
                alt={`View ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="product-info">
          <h1>
            Somni Contour – <span>3D Sleep Mask</span> with Bluetooth 6.0 Audio
          </h1>

          <div className="pricing">
            <span className="current-price">${PRODUCT.price}</span>
            <span className="original-price">${PRODUCT.compareAtPrice}</span>
            <span className="discount-badge">-{PRODUCT.discountPercent}%</span>
          </div>

          <ul className="feature-bullets">
            <li>
              <span className="icon">🌑</span> 100% Blackout with 3D Nasal
              Baffle – zero light, zero eye pressure, side-sleeper optimized
            </li>
            <li>
              <span className="icon">🎵</span> Bluetooth 6.0 Built-in
              Ultra-Thin Speakers – adjustable to your exact ear position
            </li>
            <li>
              <span className="icon">🧼</span> Modular Detach & Wash –
              3-second removal, machine washable up to 50 cycles
            </li>
            <li>
              <span className="icon">🔋</span> 6-Hour Battery – hidden Type-C
              charging behind protective zipper
            </li>
          </ul>

          <div className="social-proof">
            <span className="dot"></span> 47 people are viewing this right now
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
