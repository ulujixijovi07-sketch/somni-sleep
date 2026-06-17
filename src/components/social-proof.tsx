"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Star, Users } from "@phosphor-icons/react";

const purchases = [
  { name: "Sarah M.", location: "New York, NY", product: "3D Contour Sleep Mask", time: "2 min ago" },
  { name: "James K.", location: "Austin, TX", product: "White Noise Machine", time: "5 min ago" },
  { name: "Emily R.", location: "Portland, OR", product: "Deep Sleep Pillow Spray", time: "8 min ago" },
  { name: "Michael T.", location: "Chicago, IL", product: "Weighted Sleep Mask", time: "12 min ago" },
  { name: "Lisa P.", location: "Denver, CO", product: "Silk Pillowcase Set", time: "15 min ago" },
  { name: "David L.", location: "Seattle, WA", product: "Sleep Ritual Set", time: "18 min ago" },
  { name: "Anna W.", location: "Miami, FL", product: "Amber Sleep Light", time: "21 min ago" },
  { name: "Chris B.", location: "Nashville, TN", product: "Cooling Sleep Blanket", time: "24 min ago" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % purchases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Live purchase notification */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-50 hidden md:block"
        >
          <div className="glass-card px-4 py-3 flex items-center gap-3 max-w-[280px] shadow-xl">
            <div className="w-8 h-8 rounded-full bg-moonlight/20 flex items-center justify-center shrink-0">
              <CheckCircle size={16} className="text-moonlight" weight="fill" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-cream/80 truncate">
                <span className="font-medium">{purchases[current].name}</span> from {purchases[current].location}
              </p>
              <p className="text-[10px] text-mist/60 truncate">
                purchased <span className="text-cream/50">{purchases[current].product}</span>
              </p>
              <p className="text-[10px] text-moonlight/50 mt-0.5">{purchases[current].time}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Social proof bar — placed after hero */}
      <section className="relative bg-abyss/30 border-y border-moonlight/10">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-moonlight/20 border-2 border-deep flex items-center justify-center text-xs font-bold text-moonlight">
                    {["J", "M", "S", "K"][i]}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-moonlight/10 border-2 border-deep flex items-center justify-center text-[10px] text-mist/60">
                  +2.3k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-moonlight" />
                  ))}
                  <span className="text-sm font-semibold text-cream ml-1">4.9</span>
                </div>
                <p className="text-xs text-mist/60">from 2,300+ verified reviews</p>
              </div>
            </div>

            {/* Customers */}
            <div className="flex items-center gap-3">
              <Users size={22} className="text-moonlight/60" weight="light" />
              <div>
                <p className="text-sm font-semibold text-cream">15,000+</p>
                <p className="text-xs text-mist/60">customers sleeping better</p>
              </div>
            </div>

            {/* Trial */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-moonlight/10 flex items-center justify-center shrink-0">
                <span className="text-moonlight text-sm">30</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-cream">30-Night Trial</p>
                <p className="text-xs text-mist/60">Money-back guarantee, no questions</p>
              </div>
            </div>

            {/* Shipping */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-moonlight/10 flex items-center justify-center shrink-0">
                <span className="text-moonlight text-xs">📦</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-cream">Free Shipping</p>
                <p className="text-xs text-mist/60">On all orders over $75</p>
              </div>
            </div>
          </div>

          {/* Endorsement bar */}
          <div className="mt-6 pt-5 border-t border-moonlight/5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-mist/30">Trusted by Sleep Science</span>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm text-cream/70 font-medium">Dr. Adrian Voss</span>
                <span className="text-[10px] text-mist/40 uppercase tracking-wider">PhD Neuroscience, Founder</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm text-cream/70 font-medium">Harvard Medical School</span>
                <span className="text-[10px] text-mist/40 uppercase tracking-wider">Cited Research</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm text-cream/70 font-medium">4-Sense Protocol</span>
                <span className="text-[10px] text-mist/40 uppercase tracking-wider">Clinical Evidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
