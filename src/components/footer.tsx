"use client";

import Link from "next/link";
import { Envelope } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-[#071220] border-t border-moonlight/10 py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-cream">
            SOMNI<span className="text-moonlight">.</span>
          </Link>
          <p className="mt-4 text-mist text-sm leading-relaxed max-w-[24ch]">
            Science-backed sleep tools. Four sensory pathways. One outcome: deep, restorative sleep.
          </p>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mist mb-4">Shop by Sense</h4>
          <div className="flex flex-col gap-2">
            {[
              ["LUX · Visual", "/shop/visual"],
              ["SONUS · Auditory", "/shop/auditory"],
              ["TACTUS · Tactile", "/shop/tactile"],
              ["OLFACIO · Olfactory", "/shop/olfactory"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mist mb-4">Learn</h4>
          <div className="flex flex-col gap-2">
            {[
              ["The Science", "/science"],
              ["Our Story", "/story"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mist mb-4">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-4 leading-relaxed">
            Sleep science, new product drops, and exclusive discounts. No spam.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-moonlight/20 rounded-full px-4 py-2 text-sm text-cream placeholder:text-mist/50 focus:outline-none focus:border-moonlight/50 transition-colors"
            />
            <button type="submit" className="bg-moonlight text-abyss rounded-full p-2 hover:bg-moonlight-dim transition-colors">
              <Envelope size={18} weight="bold" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-moonlight/5 flex flex-col md:flex-row gap-4 justify-between text-xs text-mist">
        <span>&copy; 2026 SOMNI. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-cream transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-cream transition-colors">Terms</Link>
          <Link href="#" className="hover:text-cream transition-colors">Shipping</Link>
          <Link href="#" className="hover:text-cream transition-colors">Returns</Link>
        </div>
      </div>
    </footer>
  );
}
