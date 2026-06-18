"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";
import { Star } from "@phosphor-icons/react";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-brand-gold" weight="fill" />
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-cream">
            Customer Reviews
          </h1>
          <p className="mt-4 text-mist text-lg max-w-[48ch] mx-auto">
            Thousands of people sleep better with SOMNI. Here&apos;s what they say.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              product: "3D Contour Sleep Mask",
              rating: 5,
              text: "Finally a mask that doesn't press on my eyes. The Bluetooth speakers are a game changer for sleep meditation.",
              author: "Sarah M.",
            },
            {
              product: "White Noise + Aroma Machine",
              rating: 5,
              text: "The flame effect is so calming. Combined with the white noise and lavender, I fall asleep in minutes.",
              author: "James K.",
            },
            {
              product: "CES Sleep Therapy Device",
              rating: 4,
              text: "30 minutes before bed and I'm out. Wakes up feeling more rested than with sleeping pills.",
              author: "Michael R.",
            },
            {
              product: "Deep Sleep Pillow Spray",
              rating: 5,
              text: "Two sprays and the lavender fills the room. Best natural sleep aid I've tried.",
              author: "Emma L.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-brand-gold" weight="fill" />
                ))}
              </div>
              <p className="text-cream/80 text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-moonlight/10">
                <span className="text-xs text-cream/50 font-medium">{review.author}</span>
                <span className="text-xs text-moonlight">{review.product}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/shop" className="btn-primary text-sm uppercase tracking-[0.1em] px-8 py-3">
            Shop All Products
          </Link>
        </div>
      </div>
    </main>
  );
}
