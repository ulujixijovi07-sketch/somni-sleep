"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/sleep-bedroom.webp" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/50 to-abyss" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium mb-6">Because sleep shouldn&apos;t be hard.</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-cream leading-[1.05]">
              We Build <span className="text-moonlight">Sleep Systems,</span> Not Sleep Gadgets.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TEAM ═══════════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-2 gap-10">
          {[
            { initials: "EC", name: "Elara Chen", role: "Cofounder & CEO", img: "/images/team-elara.webp",
              bio: "Sleep researcher turned entrepreneur. Six years at the Stanford Sleep Epidemiology Research Center, where she published eight papers on sensory modulation of sleep architecture. Left academia in 2023 after noticing every clinical study showed multi-sensory interventions outperformed single-pathway approaches — but no consumer product implemented this.",
              linkedin: true, scholar: true, },
            { initials: "MW", name: "Dr. Marcus Webb", role: "Cofounder & Chief Science Officer", img: "/images/team-marcus.webp",
              bio: "PhD in Chronobiology, University of Basel. Postdoctoral fellow at the Max Planck Institute in Göttingen, researching circadian disruption and metabolic health. Leads SOMNI's clinical validation protocols and research partnerships. Published twelve papers on chronobiology and sensory neuroscience.",
              linkedin: true, scholar: true, },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <div className="w-36 h-36 rounded-2xl overflow-hidden mx-auto mb-6 ring-1 ring-white/[0.08]">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg text-cream font-bold">{person.name}</h3>
              <p className="text-moonlight/60 text-xs uppercase tracking-[0.12em] font-medium mt-1 mb-4">{person.role}</p>
              <p className="text-cream/40 text-sm leading-relaxed max-w-[44ch] mx-auto mb-4">{person.bio}</p>
              <div className="flex items-center justify-center gap-3">
                <LinkedinLogo size={16} className="text-mist/20" weight="fill" />
                <GoogleLogo size={16} className="text-mist/20" weight="fill" />
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ THE STORY ═══════════════ */}
      <section className="bg-white/[0.012] border-y border-white/[0.03] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-24">
            {[
              { year: "2021", title: "The spark of an idea",
                body: "Why do people buy sleep masks, white noise machines, weighted blankets, and pillow sprays — each backed by solid research — and still lie awake at 3 AM? The answer was hiding in plain sight in the neuroscience literature: sleep isn't controlled by one sense. It's four independent biological pathways. The products weren't failing. The approach was.",
                img: "/images/sleep-bedroom.webp" },
              { year: "2022", title: "From literature to prototype",
                body: "Fourteen months of sourcing, testing, and iteration. Every prototype evaluated against pathway-specific research: Does the mask block 460-480nm blue light? Does white noise raise the acoustic arousal threshold? Does the CES electrode hit the vagus nerve's auricular branch? Partnered with Shenzhen manufacturers who understood we were building medical-tool precision into consumer devices.",
                img: "/images/lab-scientist.webp" },
              { year: "2023", title: "The data surprised us",
                body: "Early testers reported something the individual studies hadn't measured: all four products together produced effects larger than any single product alone — and larger than additive models predicted. The mask blocked light. White noise masked sound. CES shifted autonomic balance. Spray signaled olfactory safety. The brain had no remaining signal to stay alert.",
                img: "/images/medical-lab.webp" },
              { year: "2024", title: "SOMNI launches",
                body: "Four products. Four pathways. One protocol. Not a wellness brand — a neuroscience approach to a sensory engineering problem. Every product page links to the specific research it's built on. If a paper doesn't exist, we don't ship the feature. For the people who've tried everything and still can't sleep. You're not the problem. Your sensory environment is.",
                img: "/images/brain-scan.webp" },
            ].map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                  <div className="flex-1">
                    <span className="font-display text-6xl text-moonlight/[0.04] font-bold leading-none select-none">{item.year}</span>
                    <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mt-1 mb-5">{item.title}</h2>
                    <p className="text-cream/45 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl overflow-hidden ring-1 ring-white/[0.06] shadow-2xl">
                      <img src={item.img} alt="" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MANIFESTO ═══════════════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img src="/images/medical-lab.webp" alt="" className="w-full h-64 object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-abyss/95 to-transparent flex items-center p-10">
                <h2 className="font-display text-2xl md:text-3xl text-cream font-bold">Bringing science to everyday life</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-cream/45 text-sm leading-relaxed">
                <p>The average time from a clinical finding to a consumer product is 17 years. We think that&apos;s too long.</p>
                <p>Every SOMNI product is built on published research. The white noise machine references a 2021 meta-analysis of 8,242 participants. The CES device builds on 40 years of clinical research spanning 100+ studies.</p>
                <p>We don&apos;t make claims we can&apos;t cite. This is not marketing language. This is our operating principle.</p>
              </div>
              <div className="border-l-2 border-moonlight/15 pl-6 py-2 flex items-center">
                <div>
                  <p className="text-cream/55 text-lg italic leading-relaxed font-display">
                    &ldquo;We don&apos;t build devices to fix people. We build gentle tools to help them reconnect with what&apos;s already working within.&rdquo;
                  </p>
                  <p className="text-moonlight/30 text-xs mt-4 font-medium tracking-wide uppercase">— The SOMNI Manifesto</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ THE NAME ═══════════════ */}
      <section className="bg-white/[0.012] border-y border-white/[0.03] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl text-cream font-bold mb-6">The Name</h2>
          <p className="text-cream/45 text-sm leading-relaxed max-w-[48ch] mx-auto">
            <span className="text-moonlight font-bold text-xl">SOMNI</span> comes from the Latin <em>somnus</em> — sleep. Not passive sleep. The kind that happens when your brain receives every sensory signal it evolved to need: light blocked, sound masked, touch soothed, scent signaling safety. That is the idea behind the name.
          </p>
        </div>
      </section>

      {/* ═══════════════ MISSION & VISION ═══════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-display text-2xl md:text-3xl text-cream font-bold text-center mb-12">Mission & Vision</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Mission</p>
            <p className="text-cream/45 text-sm leading-relaxed">To make deep, restorative sleep accessible — not through medication, but by giving your brain the precise sensory signals it evolved to need.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Vision</p>
            <p className="text-cream/45 text-sm leading-relaxed">A world where sleep isn&apos;t something you chase. It&apos;s the natural result of getting the conditions right. Science, not willpower.</p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center max-w-2xl mx-auto">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Slogan</p>
          <p className="font-display text-2xl text-cream italic font-bold">Sleep Science. Engineered.</p>
        </div>
      </section>

      {/* ═══════════════ 1% PLEDGE ═══════════════ */}
      <section className="bg-white/[0.012] border-y border-white/[0.03] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-3xl mb-5">🌙</p>
          <p className="text-cream/45 text-sm leading-relaxed max-w-[48ch] mx-auto">
            We dedicate <span className="text-moonlight font-bold">1% of our revenue</span> to independent sleep research and open-access publication. Every purchase funds real science.
          </p>
        </div>
      </section>

      <div className="text-center py-24">
        <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-10 py-4">
          Explore Our Products <ArrowRight size={14} className="inline ml-1" />
        </Link>
      </div>
    </main>
  );
}
