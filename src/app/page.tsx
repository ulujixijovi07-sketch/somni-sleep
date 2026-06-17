"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  SpeakerHigh,
  Hand,
  Wind,
  ArrowRight,
  Heart,
} from "@phosphor-icons/react";
import { senseData, getBestSellers } from "@/data/products";
import ProductCard from "@/components/product-card";
import HeroAmbient from "@/components/hero-ambient";
import SocialProof from "@/components/social-proof";

const bestSellers = getBestSellers(4);

const bgImages: Record<string, string> = {
  visual:    "/bg-visual.jpg",
  auditory:  "/bg-auditory.jpg",
  tactile:   "/bg-tactile.jpg",
  olfactory: "/bg-olfactory.jpg",
  products:  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=90",
};

const senses = [
  {
    ...senseData.visual,
    icon: Eye,
    href: "/shop/visual",
    stat: "3 hrs",
    statLabel: "Melatonin delay from blue light",
    quote: "Complete darkness is not a luxury. It is a biological requirement.",
  },
  {
    ...senseData.auditory,
    icon: SpeakerHigh,
    href: "/shop/auditory",
    stat: "38%",
    statLabel: "Faster sleep onset with white noise",
    quote: "Your brain never stops listening. Give it the right signal.",
  },
  {
    ...senseData.tactile,
    icon: Hand,
    href: "/shop/tactile",
    stat: "28%",
    statLabel: "Serotonin increase from deep pressure",
    quote: "Your nervous system speaks the language of touch.",
  },
  {
    ...senseData.olfactory,
    icon: Wind,
    href: "/shop/olfactory",
    stat: "200ms",
    statLabel: "For scent to reach the amygdala",
    quote: "Smell bypasses your thinking brain entirely.",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center bg-abyss overflow-hidden">
        <HeroAmbient />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="text-moonlight text-xs uppercase tracking-[0.3em] mb-6 font-medium"
          >
            Science of Sleep, Art of Rest
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-cream max-w-[16ch] mx-auto">
            {"You Don't Have Insomnia. Your Senses Just Need Reset."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.8 + i * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word === "Senses" ? (
                    <span className="text-moonlight">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="mt-6 text-mist text-base md:text-lg max-w-[48ch] mx-auto leading-relaxed"
          >
            Four pathways to deep sleep. Neuroscience-backed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop/visual" className="btn-primary text-sm uppercase tracking-[0.15em] px-8 py-3.5">
              Explore the 4 Senses
            </Link>
            <Link href="/science" className="btn-outline text-sm uppercase tracking-[0.15em] px-8 py-3.5">
              See the Science <ArrowRight size={14} className="inline ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <SocialProof />

      {/* Founder Snippet */}
      <section className="relative bg-abyss border-b border-moonlight/5">
        <div className="max-w-[900px] mx-auto px-8 py-10 flex items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-moonlight/20">
            <img src="/founder.jpg" alt="Dr. Adrian Voss" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-cream/80 italic leading-relaxed">
              &ldquo;I spent five years staring at the ceiling with a PhD in neuroscience. Turns out knowing how the brain works doesn&apos;t help if your senses won&apos;t shut up.&rdquo;
            </p>
            <p className="text-xs text-mist/50 mt-2">Dr. Adrian Voss, Founder</p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SCIENCE
          ============================================ */}
      <section className="relative min-h-screen flex items-center bg-abyss">
        <div className="relative w-full max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] mb-3">The 4-Sense Protocol</p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold tracking-tighter text-cream leading-[1.1]">
                Sleep Is <span className="text-moonlight">Sensory.</span>
              </h2>
              <p className="mt-3 text-sm text-mist leading-relaxed max-w-[52ch]">
                Light, sound, touch, scent. Your brain processes all of it. When any of it reads as danger, your nervous system stays on alert. SOMNI targets all four at once.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { step: "01", sense: "Visual", action: "Block blue light", result: "Melatonin begins", target: "visual" },
                { step: "02", sense: "Auditory", action: "Mask disruptive noise", result: "Arousal threshold rises", target: "auditory" },
                { step: "03", sense: "Tactile", action: "Apply deep pressure", result: "Parasympathetic activates", target: "tactile" },
                { step: "04", sense: "Olfactory", action: "Signal safety via scent", result: "Amygdala calms", target: "olfactory" },
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => {
                    const el = document.getElementById(`sense-${item.target}`);
                    if (!el) return;
                    const target = el.getBoundingClientRect().top + window.scrollY;
                    const start = window.scrollY;
                    const distance = target - start;
                    const duration = 800;
                    let startTime: number | null = null;

                    function easeInOutCubic(t: number) {
                      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    }

                    function animate(currentTime: number) {
                      if (!startTime) startTime = currentTime;
                      const elapsed = currentTime - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      window.scrollTo(0, start + distance * easeInOutCubic(progress));
                      if (progress < 1) requestAnimationFrame(animate);
                    }

                    requestAnimationFrame(animate);
                  }}
                  className="glass-card p-4 flex items-center gap-3 w-full text-left hover:border-moonlight/30 transition-all cursor-pointer"
                >
                  <span className="text-xl font-bold text-moonlight/30 font-[family-name:var(--font-display)]">{item.step}</span>
                  <div className="flex-1">
                    <span className="text-xs text-moonlight uppercase tracking-[0.1em] font-medium">{item.sense}</span>
                    <p className="text-sm text-cream font-semibold">{item.action}</p>
                    <p className="text-xs text-mist">&rarr; {item.result}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOUR SENSES — FIXED BACKGROUND PARALLAX
          ============================================ */}
      {senses.map((sense, idx) => {
        const Icon = sense.icon;
        const isEven = idx % 2 === 0;
        return (
          <section
            id={`sense-${sense.id}`}
            key={sense.id}
            className={`parallax-section parallax-half ${idx === 0 ? "!mt-0 !rounded-none" : ""}`}
            style={{ backgroundImage: `url(${bgImages[sense.id]})` }}
          >
            {/* Light overlay — just enough for text */}
            <div className="absolute inset-0 bg-abyss/40" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-28">
              <div className={`grid md:grid-cols-2 gap-14 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>
                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={20} className="text-moonlight" weight="duotone" />
                    <span className="text-moonlight text-xs uppercase tracking-[0.2em] font-medium">{sense.name}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold tracking-tighter text-cream leading-[1.1]">
                    {sense.title}{" "}
                    <span className="text-moonlight">{sense.name}</span>
                  </h2>

                  <p className="mt-3 text-sm text-cream/80 leading-relaxed max-w-[50ch]">{sense.description}</p>

                  <div className="mt-5 glass-card p-4 inline-block">
                    <p className="text-2xl font-bold text-moonlight font-[family-name:var(--font-display)]">{sense.stat}</p>
                    <p className="text-xs text-cream/70 mt-0.5">{sense.statLabel}</p>
                  </div>

                  <Link
                    href={sense.href}
                    className="inline-flex items-center gap-2 mt-5 text-moonlight text-sm uppercase tracking-[0.15em] font-medium hover:text-moonlight-dim transition-colors"
                  >
                    Shop {sense.name} <ArrowRight size={14} />
                  </Link>
                </div>

                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <blockquote className="text-lg md:text-xl text-cream/90 italic leading-relaxed font-[family-name:var(--font-display)]">
                    &ldquo;{sense.quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-cream/60">{sense.scienceBlurb}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============================================
          BEST SELLERS
          ============================================ */}
      <section
        className="parallax-section parallax-full"
        style={{ backgroundImage: `url(${bgImages.products})` }}
      >
        <div className="absolute inset-0 bg-abyss/55" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] mb-2">Most Loved</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold tracking-tighter text-cream">
              The Essentials
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop/visual" className="btn-outline text-sm uppercase tracking-[0.1em]">
              Shop All Products <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS
          ============================================ */}
      <section className="relative bg-[#071220] py-16 md:py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] mb-3">Verified Reviews</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold tracking-tighter text-cream">
              They Tried Everything. <span className="text-moonlight">Then They Tried SOMNI.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Olivia Bennett",
                product: "3D Contour Sleep Mask",
                rating: 5,
                text: "I've tried every sleep mask out there. This is the only one that doesn't press on my eyelashes. Total blackout. First time in years I've slept through the night.",
              },
              {
                name: "James Chen",
                product: "Adaptive White Noise Machine",
                rating: 5,
                text: "I live next to a construction site. This machine has literally saved my sleep. The non-looping sounds are a game-changer.",
              },
              {
                name: "Maya Torres",
                product: "Deep Sleep Pillow Spray",
                rating: 4,
                text: "The scent is beautiful — not synthetic at all. I spray it 10 minutes before bed and feel noticeably calmer.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Heart
                      key={j}
                      size={12}
                      weight={j < review.rating ? "fill" : "regular"}
                      className={j < review.rating ? "text-moonlight" : "text-mist/30"}
                    />
                  ))}
                </div>
                <p className="text-cream/80 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="text-cream font-semibold text-sm">{review.name}</p>
                  <p className="text-mist text-xs">{review.product}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
