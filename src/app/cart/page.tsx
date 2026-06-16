"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Trash, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  qty: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("somni-cart");
    if (raw) {
      try { setItems(JSON.parse(raw)); } catch {}
    }
    setLoaded(true);
  }, []);

  const saveCart = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem("somni-cart", JSON.stringify(newItems));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const updateQty = (id: number, delta: number) => {
    const updated = items
      .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
      .filter((item) => item.qty > 0);
    saveCart(updated);
  };

  const removeItem = (id: number) => {
    saveCart(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 75 ? 0 : 4.99;
  const total = subtotal + shipping;

  if (!loaded) return null;

  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold tracking-tighter text-cream mb-2">
            Your Cart
          </h1>
          <p className="text-mist">
            {items.length === 0 ? "Your cart is empty." : `${items.length} item${items.length > 1 ? "s" : ""}`}
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-24"
          >
            <ShoppingBag size={48} className="text-mist/30 mx-auto mb-6" />
            <p className="text-mist mb-8">Ready to find what helps you sleep?</p>
            <Link href="/shop/visual" className="btn-primary inline-block text-sm uppercase tracking-[0.1em]">
              Start Shopping <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </motion.div>
        ) : (
          <div className="mt-12 grid md:grid-cols-[1fr_320px] gap-12">
            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="glass-card p-4 flex gap-4 items-center">
                  <Link href={`/products/${item.slug}`} className="w-20 h-20 bg-deep rounded-lg shrink-0 flex items-center justify-center border border-moonlight/5">
                    <span className="text-2xl">
                      {item.name.includes("Mask") ? "😴" : item.name.includes("Noise") || item.name.includes("Earbuds") ? "🔊" : item.name.includes("Spray") || item.name.includes("Oil") || item.name.includes("Diffuser") ? "🌿" : "✨"}
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.slug}`} className="text-sm font-semibold text-cream hover:text-moonlight transition-colors">
                      {item.name}
                    </Link>
                    <p className="text-sm text-mist">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-full border border-moonlight/20 text-cream/70 hover:bg-moonlight/10 transition-colors flex items-center justify-center text-sm">-</button>
                      <span className="text-sm text-cream w-6 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-full border border-moonlight/20 text-cream/70 hover:bg-moonlight/10 transition-colors flex items-center justify-center text-sm">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-mist/40 hover:text-moonlight transition-colors ml-2">
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="glass-card p-6 sticky top-32">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-mist">Subtotal</span>
                    <span className="text-cream">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Shipping</span>
                    <span className="text-cream">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-moonlight/70">Free shipping on orders over $75</p>
                  )}
                  <div className="pt-4 mt-4 border-t border-moonlight/10 flex justify-between font-semibold">
                    <span className="text-cream">Total</span>
                    <span className="text-cream text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="btn-primary w-full mt-6 py-3 flex items-center justify-center gap-2"
                  onClick={() => alert("Checkout coming soon. This is a demo site.")}
                >
                  Checkout <ArrowRight size={16} />
                </button>
                <Link href="/shop/visual" className="flex items-center justify-center gap-2 text-sm text-mist hover:text-cream transition-colors mt-4">
                  <ArrowLeft size={14} /> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
