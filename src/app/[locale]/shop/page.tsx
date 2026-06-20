"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SquaresFour } from "@phosphor-icons/react";
import ProductCard from "@/components/product-card";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SquaresFour size={24} className="text-moonlight" weight="duotone" />
            <span className="text-moonlight text-xs uppercase tracking-[0.2em] font-medium">
              Shop All
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold tracking-tighter text-cream leading-[1.1] max-w-[20ch] mx-auto">
            The Complete <span className="text-moonlight">SOMNI</span> Collection
          </h1>
          <p className="mt-4 text-mist text-lg max-w-[48ch] mx-auto leading-relaxed">
            Four science-backed senses. Four pathways to deeper sleep.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-mist py-20 text-lg">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
