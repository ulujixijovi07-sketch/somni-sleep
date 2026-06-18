"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,76,0.04),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(126,184,201,0.03),transparent_50%)]" />
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
            {
              initials: "EC", name: "Elara Chen", role: "Cofounder & CEO",
              bio: "Sleep researcher turned entrepreneur. Six years at the Stanford Sleep Epidemiology Research Center, where she published eight papers on sensory modulation of sleep architecture. Left academia in 2023 after noticing a pattern: every clinical study found that multi-sensory interventions outperformed single-pathway approaches — but no consumer product implemented this. Founded SOMNI to bridge that gap.",
              linkedin: true, scholar: true,
            },
            {
              initials: "MW", name: "Dr. Marcus Webb", role: "Cofounder & Chief Science Officer",
              bio: "PhD in Chronobiology from the University of Basel. Postdoctoral fellow at the Max Planck Institute for Biophysical Chemistry in Göttingen, researching how circadian disruption affects metabolic health. Leads SOMNI's clinical validation protocols, research partnerships, and evidence standards. Published twelve papers on chronobiology and sensory neuroscience.",
              linkedin: true, scholar: true,
            },
          ].map((person, i) => (
            <div key={person.name} className="text-center">
              <div className="w-36 h-36 rounded-2xl mx-auto mb-6 flex items-center justify-center ring-1 ring-white/[0.05] bg-white/[0.02]">
                <span className="font-display text-3xl text-moonlight/30 font-bold tracking-tight">{person.initials}</span>
              </div>
              <h3 className="font-display text-lg text-cream font-bold">{person.name}</h3>
              <p className="text-moonlight/60 text-xs uppercase tracking-[0.12em] font-medium mt-1 mb-4">{person.role}</p>
              <p className="text-cream/40 text-sm leading-relaxed max-w-[44ch] mx-auto mb-4">{person.bio}</p>
              <div className="flex items-center justify-center gap-3">
                {person.linkedin && <span className="text-mist/20"><LinkedinLogo size={16} weight="fill" /></span>}
                {person.scholar && <span className="text-mist/20"><GoogleLogo size={16} weight="fill" /></span>}
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
              {
                year: "2021", title: "The spark of an idea",
                body: "The question came out of frustration, not inspiration. Why do people buy sleep masks, white noise machines, weighted blankets, and pillow sprays — each backed by solid research — and still lie awake at 3 AM? The answer was hiding in plain sight in the neuroscience literature: sleep isn't controlled by one sense. It's four independent biological pathways. Light. Sound. Touch. Smell. Each product targeted one pathway. Nobody had built a system that targeted all four simultaneously. The products weren't failing. The approach was.",
              },
              {
                year: "2022", title: "From literature to prototype",
                body: "Fourteen months of intensive sourcing, testing, and iteration. Every prototype was evaluated against its pathway's specific research benchmarks. Does the mask block the 460-480nm blue light band that melanopsin RGCs detect? Does the white noise profile raise the acoustic arousal threshold without becoming a distraction? Does the CES electrode hit the auricular branch of the vagus nerve at the cavum concha? The rule was simple: if a peer-reviewed paper didn't support a feature, we cut it. We partnered with manufacturing teams in Shenzhen who understood that we were building medical-tool-level precision into consumer devices.",
              },
              {
                year: "2023", title: "The data surprised us",
                body: "Early testers reported something the individual studies hadn't measured: when people used all four products together, the combined effect was larger than any single product alone — and larger than what additive models predicted. The mask blocked light. The white noise masked sound. The CES device shifted autonomic balance. The pillow spray signaled olfactory safety. Together, the brain had no remaining sensory signal that said 'stay alert.' The data confirmed what the neuroscience predicted: multi-sensory intervention produces supra-additive effects on sleep quality.",
              },
              {
                year: "2024", title: "SOMNI launches",
                body: "Four products. Four pathways. One protocol. Not a wellness brand — a neuroscience approach to a sensory engineering problem. Every product page links directly to the specific research it's built on. If a paper doesn't exist, we don't ship the feature. SOMNI is for the people who've tried melatonin, meditation apps, and every single-pathway gadget on the market — and still can't sleep. You're not the problem. Your sensory environment is.",
              },
            ].map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-start`}>
                  <div className="flex-1">
                    <span className="font-display text-6xl text-moonlight/[0.04] font-bold leading-none select-none">{item.year}</span>
                    <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mt-1 mb-5">{item.title}</h2>
                    <p className="text-cream/45 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <div className="flex-1 hidden md:flex items-center justify-center">
                    <div className="w-full h-64 rounded-2xl flex items-center justify-center border border-white/[0.03]"
                      style={{ background: `radial-gradient(ellipse at ${i%2===0?'70%':'30%'} 50%, rgba(201,168,76,0.04) 0%, transparent 60%)` }}>
                      <span className="font-display text-[8rem] text-moonlight/[0.03] font-bold select-none">{String(i + 1).padStart(2, "0")}</span>
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
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">Bringing science to everyday life</h2>
                <div className="space-y-4 text-cream/45 text-sm leading-relaxed">
                  <p>The average time from a clinical finding to something people can actually use is 17 years. We think that&apos;s too long.</p>
                  <p>Every SOMNI product is built on published, peer-reviewed evidence. The white noise machine references a 2021 meta-analysis of 8,242 participants. The CES device builds on four decades of clinical research spanning over 100 published studies. The pillow spray targets GABA-A receptors identified in multiple RCTs.</p>
                  <p>We don&apos;t make claims we can&apos;t cite. Every product page links to the specific research. If a paper doesn&apos;t exist, we don&apos;t ship the feature. This is not marketing language. This is our operating principle.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="border-l-2 border-moonlight/15 pl-6 py-2">
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
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="font-display text-2xl text-cream font-bold mb-6">The Name</h2>
            <div className="space-y-4 text-cream/45 text-sm leading-relaxed max-w-[48ch] mx-auto">
              <p><span className="text-moonlight font-bold text-xl">SOMNI</span> comes from the Latin <em>somnus</em> — sleep.</p>
              <p>Not the passive kind. Not the kind you wait for, hoping it shows up. The kind that happens because the conditions are right — because your brain has received every sensory signal it evolved to need. Light blocked. Sound masked. Touch soothed. Scent signaling safety. That is the idea behind the name. That is the idea behind everything we build.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ MISSION & VISION ═══════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold text-center mb-12">Mission & Vision</h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center">
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Mission</p>
              <p className="text-cream/45 text-sm leading-relaxed">
                To make deep, restorative sleep accessible — not through medication or apps, but by giving your brain the precise sensory signals it evolved to need.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center">
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Vision</p>
              <p className="text-cream/45 text-sm leading-relaxed">
                A world where sleep isn&apos;t something you chase. It&apos;s the natural result of getting the conditions right. Science, not willpower.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 text-center max-w-2xl mx-auto">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Slogan</p>
            <p className="font-display text-2xl text-cream italic font-bold">Sleep Science. Engineered.</p>
            <p className="text-cream/30 text-xs mt-4">Our mission continues: to make science feel natural, and to help everyone sleep better.</p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ 1% PLEDGE ═══════════════ */}
      <section className="bg-white/[0.012] border-y border-white/[0.03] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-3xl mb-5">🌙</p>
            <p className="text-cream/45 text-sm leading-relaxed max-w-[48ch] mx-auto">
              We dedicate <span className="text-moonlight font-bold">1% of our revenue</span> to independent sleep research and open-access scientific publication. Every purchase funds real science. SOMNI is only the beginning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <div className="text-center py-24">
        <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-10 py-4">
          Explore Our Products <ArrowRight size={14} className="inline ml-1" />
        </Link>
      </div>
    </main>
  );
}
