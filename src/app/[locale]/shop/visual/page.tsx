"use client";

import { motion } from "framer-motion";
import { Eye } from "@phosphor-icons/react";
import { senseData, getProductsBySense } from "@/data/products";
import ProductCard from "@/components/product-card";

export default function VisualPage() {
  const data = senseData["visual"];
  const products = getProductsBySense("visual");

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
            <Eye size={24} className="text-moonlight" weight="duotone" />
            <span className="text-moonlight text-xs uppercase tracking-[0.2em] font-medium">{data.name}</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold tracking-tighter text-cream leading-[1.1] max-w-[16ch] mx-auto">
            {data.title}: <span className="text-moonlight">LUX</span>
          </h1>
          <p className="mt-4 text-mist text-lg max-w-[48ch] mx-auto leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto mb-20"
        >
          <div className="glass-card p-8 text-center">
            <p className="text-sm text-cream/80 leading-relaxed">{data.description}</p>
            <div className="mt-6 pt-4 border-t border-moonlight/10">
              <p className="text-xs text-mist/60 italic">{data.scienceBlurb}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
