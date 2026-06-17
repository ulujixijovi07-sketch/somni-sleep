"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Clock,
  Check,
  CheckCircle,
} from "@phosphor-icons/react";
import { getProductBySlug } from "@/data/products";
import { addToCart } from "@/components/product-card";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  if (!product) {
    return (
      <main className="min-h-screen bg-abyss pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-cream mb-4">Product not found</h1>
          <Link href="/shop/visual" className="btn-primary inline-block text-sm">
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      {/* Toast notification */}
      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[150]"
          >
            <div className="glass-card px-5 py-3 flex items-center gap-3 shadow-xl border-moonlight/20">
              <CheckCircle size={18} className="text-moonlight" weight="fill" />
              <div>
                <p className="text-sm text-cream font-medium">Added to cart</p>
                <p className="text-xs text-mist/60">{product.name}</p>
              </div>
              <Link
                href="/cart"
                className="text-xs text-moonlight font-medium hover:text-moonlight-dim transition-colors ml-2"
              >
                View Cart &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6">
        <Link
          href={`/shop/${product.category}`}
          className="inline-flex items-center gap-2 text-mist hover:text-cream transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Back to {product.senseLabel}
        </Link>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-gradient-to-br from-deep to-ocean rounded-2xl border border-moonlight/10 flex items-center justify-center overflow-hidden relative"
          >
            {/* Better product placeholder */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_60%)]" />
            <div className="text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-moonlight/[0.06] flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">
                  {product.category === "visual" ? "◉" : product.category === "auditory" ? "◒" : product.category === "tactile" ? "◐" : "❋"}
                </span>
              </div>
              <p className="text-mist/50 text-xs uppercase tracking-[0.2em]">{product.senseLabel} Collection</p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-moonlight bg-abyss/60 rounded-full px-3 py-1 border border-moonlight/20 mb-4">
              {product.senseLabel}
            </span>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tighter text-cream leading-[1.1]">
              {product.name}
            </h1>

            <p className="mt-4 text-mist leading-relaxed">{product.longDescription}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-3xl font-bold text-cream">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-mist line-through">${product.compareAtPrice}</span>
              )}
              {product.bestSeller && (
                <span className="text-xs bg-moonlight/20 text-moonlight px-3 py-1 rounded-full font-medium">
                  Best Seller
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Heart
                    key={i}
                    size={14}
                    weight={i < Math.round(product.rating) ? "fill" : "regular"}
                    className={i < Math.round(product.rating) ? "text-moonlight" : "text-mist/30"}
                  />
                ))}
              </div>
              <span className="text-sm text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary mt-8 w-full flex items-center justify-center gap-3 py-4 text-base"
            >
              <ShoppingBag size={20} weight="bold" />
              Add to Cart — ${product.price}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              {[
                { icon: Truck, label: "Free Shipping", sub: "Over $75" },
                { icon: ShieldCheck, label: "30-Night Trial", sub: "Money back" },
                { icon: Clock, label: "Fast Delivery", sub: "5-15 days" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-xs">
                  <Icon size={16} className="text-moonlight/60 mx-auto mb-1" />
                  <p className="text-cream/70">{label}</p>
                  <p className="text-mist/50">{sub}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-12">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-4">
                Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-mist">
                    <Check size={16} className="text-moonlight mt-0.5 shrink-0" weight="bold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Science */}
            <div className="mt-10 pt-10 border-t border-moonlight/10">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-4">
                The Science
              </h3>
              <div className="space-y-4">
                {product.science.map((s, i) => (
                  <div key={i} className="glass-card p-4">
                    <p className="text-sm font-semibold text-cream">{s.title}</p>
                    <p className="text-xs text-mist mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="mt-10 pt-10 border-t border-moonlight/10">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-mist/60">Weight</span>
                  <p className="text-cream">{product.weight}</p>
                </div>
                <div>
                  <span className="text-mist/60">Materials</span>
                  <p className="text-cream">{product.materials}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-mist/60 text-sm">Usage</span>
                <p className="text-cream text-sm mt-1 leading-relaxed">{product.usage}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
