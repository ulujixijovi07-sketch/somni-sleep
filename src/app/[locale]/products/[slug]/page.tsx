"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
  Star,
  Check,
  X,
  Sparkle,
  Sun,
  Moon,
  Drop,
  Eye,
  MusicNotesSimple,
  Package,
} from "@phosphor-icons/react";
import { getProductBySlug } from "@/data/products";
import { addToCart } from "@/components/product-card";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  if (!product) {
    return (
      <main className="min-h-screen bg-abyss pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-cream mb-4">Product not found</h1>
          <Link href="/shop/visual" className="btn-primary inline-block text-sm">
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      {/* Toast notification */}
      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[150]"
          >
            <div className="glass-card px-5 py-3 flex items-center gap-3 shadow-xl border-moonlight/20">
              <CheckCircle size={18} className="text-moonlight" weight="fill" />
              <div>
                <p className="text-sm text-cream font-medium">Added to cart</p>
                <p className="text-xs text-mist/60">{product.name}</p>
              </div>
              <Link
                href="/cart"
                className="text-xs text-moonlight font-medium hover:text-moonlight-dim transition-colors ml-2"
              >
                View Cart &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Back link */}
        <Link
          href={`/shop/${product.category}`}
          className="inline-flex items-center gap-2 text-mist hover:text-cream transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Back to {product.senseLabel}
        </Link>

        {/* ========== 1. HERO ========== */}
        <section className="text-center mb-24">
          {/* Product image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/9] max-w-2xl mx-auto mb-12 bg-gradient-to-br from-deep to-ocean rounded-2xl border border-moonlight/10 flex items-center justify-center overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_60%)]" />
            <div className="text-center relative z-10">
              <div className="w-28 h-28 rounded-full bg-moonlight/[0.06] flex items-center justify-center mx-auto mb-4">
                <span className="text-6xl">◉</span>
              </div>
              <p className="text-mist/50 text-xs uppercase tracking-[0.2em]">{product.senseLabel} Collection</p>
            </div>
          </motion.div>

          {/* Category badge */}
          <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-moonlight bg-abyss/60 rounded-full px-3 py-1 border border-moonlight/20 mb-6">
            {product.senseLabel}
          </span>

          {/* Name + Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-cream leading-[1.1] mb-4"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-mist max-w-2xl mx-auto leading-relaxed"
          >
            Zero-pressure blackout. Designed for side sleepers.
          </motion.p>

          {/* Rating + Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-3 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    weight="fill"
                    className="text-moonlight"
                  />
                ))}
              </div>
              <span className="text-sm text-mist">
                {product.rating} ★ ({product.reviewCount} reviews)
              </span>
            </div>
            <div className="text-4xl font-bold text-cream">${product.price}</div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button
              onClick={handleAddToCart}
              className="btn-primary inline-flex items-center justify-center gap-3 py-4 px-12 text-base"
            >
              <ShoppingBag size={20} weight="bold" />
              Add to Cart — ${product.price}
            </button>
          </motion.div>
        </section>

        {/* ========== 2. KEY HIGHLIGHTS ========== */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream text-center mb-12">
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "100% Blackout",
                detail: "Lab-tested to 0.1 lux. That's biologically pitch black.",
              },
              {
                icon: Eye,
                title: "3D Contour",
                detail: "Eye cups float around your eyes instead of pressing on them.",
              },
              {
                icon: Moon,
                title: "Side-Sleeper Tested",
                detail: "Slim temples don't dig in when you're on your side.",
              },
              {
                icon: Drop,
                title: "Memory Foam Core",
                detail: "Breathable, contouring, no pressure points.",
              },
              {
                icon: MusicNotesSimple,
                title: "Bluetooth 6.0 Optional",
                detail: "Built-in flat speakers. Fall asleep to your own audio.",
              },
              {
                icon: Sparkle,
                title: "Detachable & Washable",
                detail: "Remove the cover. Machine wash. Always fresh.",
              },
            ].map(({ icon: Icon, title, detail }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 border border-moonlight/10 hover:border-moonlight/20 transition-colors"
              >
                <Icon size={28} className="text-moonlight mb-4" weight="duotone" />
                <h3 className="text-cream font-semibold text-lg mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== 3. SCIENCE SECTION ========== */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D0A18] to-[#0A0614] border border-moonlight/20 p-8 md:p-12">
            {/* Gold accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />

            <div className="relative z-10">
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] mb-4">The Science</p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream mb-4">
                Your brain has a master clock. It cares about one thing: light.
              </h2>
              <p className="text-mist leading-relaxed max-w-3xl mb-10">
                The suprachiasmatic nucleus — a cluster of 20,000 neurons in your hypothalamus — sets your
                circadian rhythm. Even 5 lux of light through closed eyelids is enough to confuse it. The SOMNI
                3D Contour Sleep Mask blocks so much light that this system stays fully offline.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-6 border border-moonlight/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon size={20} className="text-moonlight" weight="fill" />
                    <h3 className="text-cream font-semibold">Melatonin Preservation</h3>
                  </div>
                  <p className="text-mist text-sm leading-relaxed mb-3">
                    5 lux through closed eyelids cuts melatonin 50%. This mask gets under 0.1 lux. That's
                    the difference between your brain thinking it's twilight versus total night.
                  </p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28526259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-moonlight/70 hover:text-moonlight transition-colors"
                  >
                    Zeitzer et al., J Clin Endocrinol Metab, 2000 &rarr;
                  </a>
                </div>

                <div className="glass-card p-6 border border-moonlight/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye size={20} className="text-moonlight" weight="fill" />
                    <h3 className="text-cream font-semibold">REM Protection</h3>
                  </div>
                  <p className="text-mist text-sm leading-relaxed mb-3">
                    Pressure on your eyelids during REM triggers micro-wakeups — brief arousals you won't
                    remember but that fragment your sleep architecture. The 3D shape eliminates eyelid contact
                    entirely.
                  </p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/11883790/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-moonlight/70 hover:text-moonlight transition-colors"
                  >
                    Cajochen et al., J Appl Physiol, 2002 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 4. COMPARISON TABLE ========== */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream text-center mb-12">
            How It Compares
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-moonlight/20">
                  <th className="py-4 pr-6 text-sm text-mist font-normal"></th>
                  <th className="py-4 px-6 text-sm text-cream font-semibold bg-moonlight/[0.03] rounded-t-lg">
                    SOMNI 3D Contour
                  </th>
                  <th className="py-4 px-6 text-sm text-mist font-normal">Standard Sleep Mask</th>
                  <th className="py-4 px-6 text-sm text-mist font-normal">Flat Bluetooth Mask</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: "Zero eye pressure", somni: true, standard: false, bt: false },
                  { label: "100% blackout", somni: true, standard: false, bt: false, btNote: "~90%" },
                  { label: "Side-sleeper fit", somni: true, standard: false, bt: true },
                  { label: "Washable cover", somni: true, standard: false, bt: false },
                  { label: "Bluetooth audio", somni: "Optional", standard: false, bt: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-moonlight/5 hover:bg-cream/[0.02] transition-colors">
                    <td className="py-4 pr-6 text-cream/80">{row.label}</td>
                    <td className="py-4 px-6 bg-moonlight/[0.02]">
                      {typeof row.somni === "string" ? (
                        <span className="text-moonlight text-xs">{row.somni}</span>
                      ) : row.somni ? (
                        <Check size={18} className="text-moonlight" weight="bold" />
                      ) : (
                        <X size={18} className="text-mist/30" />
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {typeof row.standard === "string" ? (
                        <span className="text-mist/60 text-xs">{row.standard}</span>
                      ) : row.standard ? (
                        <Check size={18} className="text-mist/40" />
                      ) : (
                        <X size={18} className="text-mist/20" />
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {typeof row.bt === "string" ? (
                        <span className="text-mist/60 text-xs">{row.bt}</span>
                      ) : row.bt ? (
                        <Check size={18} className="text-mist/40" />
                      ) : (
                        <X size={18} className="text-mist/20" />
                      )}
                      {row.btNote && (
                        <span className="text-mist/50 text-xs ml-2">{row.btNote}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Price row */}
          <div className="mt-6 text-center">
            <p className="text-mist text-sm">
              <span className="text-cream font-semibold">SOMNI: ${product.price}</span>
              <span className="mx-3 text-mist/30">|</span>
              Standard: $8–15
              <span className="mx-3 text-mist/30">|</span>
              Bluetooth masks: $25–40
            </p>
          </div>
        </section>

        {/* ========== 5. WHAT'S IN THE BOX ========== */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream text-center mb-12">
            What&apos;s in the Box
          </h2>
          <div className="max-w-lg mx-auto">
            <ul className="space-y-4">
              {[
                "3D Contour sleep mask ×1",
                "Detachable washable cover ×1",
                "Carrying pouch ×1",
                "Bluetooth module (if selected) ×1",
                "USB-C charging cable ×1",
                "Quick start guide",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <Package size={20} className="text-moonlight/60 shrink-0" weight="duotone" />
                  <span className="text-cream/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========== 6. USAGE ========== */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream text-center mb-12">
            How to Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Adjust the strap",
                detail: "Set the micro-hook strap to a snug but comfortable fit. It shouldn't slide, but it shouldn't squeeze either.",
              },
              {
                step: "02",
                title: "Position the eye cups",
                detail: "The 3D cups should float around your eyes — not on them. You should feel air, not pressure, against your eyelids.",
              },
              {
                step: "03",
                title: "Clean monthly",
                detail: "Remove the cover and hand wash with mild detergent. Air dry. The foam core itself doesn't need washing.",
              },
            ].map(({ step, title, detail }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-4xl font-bold text-moonlight/20 font-[family-name:var(--font-display)]">
                  {step}
                </span>
                <h3 className="text-cream font-semibold mt-3 mb-2">{title}</h3>
                <p className="text-mist text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== 7. 30-NIGHT TRIAL ========== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-moonlight/[0.06] to-moonlight/[0.02] border border-moonlight/20 p-8 md:p-12 text-center"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <Moon size={40} className="text-moonlight mx-auto mb-6" weight="duotone" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream mb-4">
                30-Night Trial
              </h2>
              <p className="text-mist text-lg max-w-xl mx-auto leading-relaxed mb-6">
                Try for 30 nights. Sleep better or keep it. Money back, no questions.
              </p>
              <button
                onClick={handleAddToCart}
                className="btn-primary inline-flex items-center justify-center gap-3 py-4 px-10 text-base"
              >
                <ShoppingBag size={20} weight="bold" />
                Try It — ${product.price}
              </button>
            </div>
          </motion.div>
        </section>

        {/* ========== 8. SAFETY ========== */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-cream text-center mb-8">
            Safety
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="glass-card px-6 py-4 border border-moonlight/10">
              <CheckCircle size={20} className="text-moonlight/60 mx-auto mb-2" weight="fill" />
              <p className="text-cream/80 text-sm">Latex-free materials</p>
            </div>
            <div className="glass-card px-6 py-4 border border-moonlight/10">
              <CheckCircle size={20} className="text-moonlight/60 mx-auto mb-2" weight="fill" />
              <p className="text-cream/80 text-sm">Hypoallergenic fabric</p>
            </div>
            <div className="glass-card px-6 py-4 border border-moonlight/10">
              <CheckCircle size={20} className="text-moonlight/60 mx-auto mb-2" weight="fill" />
              <p className="text-cream/80 text-sm">CE Certified</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
