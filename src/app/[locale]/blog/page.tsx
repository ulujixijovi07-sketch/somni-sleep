"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const POSTS = [
  {
    title: "How White Noise Actually Helps You Sleep",
    date: "June 2026",
    excerpt: "A 2021 meta-analysis of 8,242 participants found white noise reduced sleep onset by 38%. Here's the science behind why steady background noise works.",
    slug: "#",
  },
  {
    title: "CES Therapy: What 40 Years of Research Tells Us",
    date: "May 2026",
    excerpt: "Cranial Electrotherapy Stimulation has been clinically used for decades. We break down the peer-reviewed evidence behind microcurrent sleep therapy.",
    slug: "#",
  },
  {
    title: "The Four Senses of Sleep: A Complete Guide",
    date: "April 2026",
    excerpt: "Sleep isn't just about closing your eyes. Visual, auditory, tactile, and olfactory pathways all play a role in how fast you fall asleep and how deep you stay.",
    slug: "#",
  },
  {
    title: "Why Your Nightstand Light is Ruining Your Sleep",
    date: "March 2026",
    excerpt: "460-480nm blue light kills melatonin twice as fast as warmer wavelengths. Here's how to fix your bedroom lighting for better sleep.",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-moonlight text-xs uppercase tracking-[0.2em] font-medium">
            Activities
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tighter text-cream">
            Blog & Events
          </h1>
          <p className="mt-4 text-mist text-lg max-w-[48ch] mx-auto">
            Sleep science, product deep-dives, and SOMNI community updates.
          </p>
        </motion.div>

        <div className="space-y-10">
          {POSTS.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <span className="text-moonlight text-xs uppercase tracking-[0.15em] font-medium">
                {post.date}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-cream">
                {post.title}
              </h2>
              <p className="mt-3 text-cream/60 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={post.slug}
                className="mt-4 inline-block text-sm text-brand-gold hover:text-brand-gold/80 font-medium transition-colors"
              >
                Read more →
              </Link>
            </motion.article>
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
