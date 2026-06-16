"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, CheckCircle } from "@phosphor-icons/react";
import { Product } from "@/data/products";

export function addToCart(product: Product) {
  const raw = localStorage.getItem("somni-cart");
  const cart = raw ? JSON.parse(raw) : [];
  const existing = cart.find((item: { id: number }) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.images[0], slug: product.slug, qty: 1 });
  }
  localStorage.setItem("somni-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}

const cardGradients = [
  "from-[#1a1a3e] via-[#162045] to-[#0f1a33]",
  "from-[#1a2e1a] via-[#162540] to-[#0f1a33]",
  "from-[#2e1a1a] via-[#251640] to-[#0f1a33]",
  "from-[#1a2e2e] via-[#162540] to-[#0f1a33]",
];

export default function ProductCard({ product, idx = 0 }: { product: Product; idx?: number }) {
  const gradient = cardGradients[idx % cardGradients.length];

  return (
    <div className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className={`relative aspect-[4/5] bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden mb-5 border border-white/[0.04] group-hover:border-moonlight/15 transition-all duration-700`}>
          {/* Abstract geometric placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-moonlight/[0.06] group-hover:bg-moonlight/[0.1] transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                  {product.category === "visual" ? "◉" : product.category === "auditory" ? "◒" : product.category === "tactile" ? "◐" : "❋"}
                </span>
              </div>
            </div>
          </div>

          {/* Badges */}
          {product.compareAtPrice && (
            <div className="absolute top-4 left-4 bg-moonlight text-abyss text-[11px] font-semibold px-3 py-1.5 rounded-full">
              Save ${product.compareAtPrice - product.price}
            </div>
          )}
          {product.bestSeller && (
            <div className="absolute top-4 right-4 bg-cream/10 backdrop-blur-sm text-cream/80 text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full">
              Best Seller
            </div>
          )}
        </div>

        <div className="px-0.5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-mist/50 mb-2">{product.senseLabel}</p>
          <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-cream group-hover:text-moonlight transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-sm text-mist/60 mt-1 leading-relaxed line-clamp-2">{product.description}</p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl text-cream font-medium">${product.price}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-mist/40 line-through">${product.compareAtPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-1.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                size={10}
                weight={i < Math.round(product.rating) ? "fill" : "regular"}
                className={i < Math.round(product.rating) ? "text-moonlight/70" : "text-mist/20"}
              />
            ))}
            <span className="text-xs text-mist/40 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
