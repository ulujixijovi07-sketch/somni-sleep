"use client";

import { Star, Users } from "@phosphor-icons/react";

export default function SocialProof() {
  return (
    <>
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
        </div>
      </section>
    </>
  );
}
