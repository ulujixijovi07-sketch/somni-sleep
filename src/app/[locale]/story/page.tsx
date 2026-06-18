"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LinkedinLogo } from "@phosphor-icons/react";

// ─── Team ──────────────────────────────────────────────────────────────

const team = [
  {
    name: "Elara Chen",
    role: "Founder & CEO",
    bio: "Sleep researcher turned entrepreneur. Spent 6 years at the Stanford Sleep Epidemiology Research Center studying why standard interventions fail. Published 8 papers on sensory sleep modulation. Left academia in 2023 to build tools that work outside the lab.",
    link: "#",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Chief Science Officer",
    bio: "PhD in Chronobiology, University of Basel. Postdoctoral work at the Max Planck Institute on circadian rhythm disruption and its metabolic consequences. Leads SOMNI's research partnerships and clinical validation protocols.",
    link: "#",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.25em] font-medium mb-4">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-cream leading-[1.05]">
            Because sleep shouldn&apos;t be hard.
          </h1>
        </motion.div>

        {/* ── Team ── */}
        <section className="mb-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-moonlight/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl text-moonlight/40 font-bold">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg text-cream font-bold">{person.name}</h3>
                <p className="text-moonlight text-xs uppercase tracking-[0.15em] font-medium mt-0.5 mb-3">{person.role}</p>
                <p className="text-cream/55 text-sm leading-relaxed mb-4">{person.bio}</p>
                <a
                  href={person.link}
                  className="inline-flex items-center gap-1.5 text-xs text-mist/40 hover:text-moonlight transition-colors"
                >
                  <LinkedinLogo size={14} weight="fill" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── The spark of an idea ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">
              The spark of an idea
            </h2>
            <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
              <p>
                The idea for SOMNI started with a simple observation: people were buying sleep masks, white noise machines, weighted blankets, and pillow sprays — and still not sleeping.
              </p>
              <p>
                The problem wasn&apos;t the products. Each one had solid science behind it. The problem was that nobody put them together. A sleep mask blocks light. A white noise machine masks sound. A pillow spray signals safety to the amygdala. They work on different pathways. But they were being sold in isolation, as if sleep happens through one sense at a time.
              </p>
              <p>
                Sleep is sensory. Light, sound, touch, and smell all feed into your brain&apos;s sleep-wake decision. Wake up one pathway — a blue LED, a car alarm, an uncomfortable pillow — and your brain stays alert. Calm all four simultaneously, and your brain runs out of signals that say &quot;stay awake.&quot;
              </p>
              <p>
                That became the foundation of SOMNI: a system of products designed to work together across all four sensory channels. Not a wellness brand. A neuroscience approach to an engineering problem.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── From vision to reality ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">
              From vision to reality
            </h2>
            <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
              <p>
                Building a four-product system wasn&apos;t about picking items from a catalog. Each product had to target its pathway specifically and work in combination with the others. The sound machine needed to be quiet enough that the mask&apos;s speakers could still deliver guided meditation. The pillow spray needed to work alongside the aroma diffuser without overwhelming the room.
              </p>
              <p>
                We spent 14 months sourcing, testing, and iterating. Every prototype was tested against its pathway&apos;s research — does it actually block 460-480nm light? Does the sound profile mask irregular noise without becoming a distraction itself? Does the ear-clip electrode hit the auricular branch of the vagus nerve?
              </p>
              <p>
                The result is four products that each stand on their own research and get stronger together. Not four random sleep gadgets. One protocol in four parts.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Bringing science to everyday life ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">
              Bringing science to everyday life
            </h2>
            <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
              <p>
                Most sleep research stays in journals. The average time from a clinical finding to a product people can actually use is 17 years. We think that&apos;s too long.
              </p>
              <p>
                Every SOMNI product is built on published, peer-reviewed evidence. The white noise machine is based on a 2021 meta-analysis of 8,242 participants. The CES device references 40 years of clinical research on microcurrent stimulation. The pillow spray&apos;s formula targets GABA-A receptors identified in multiple RCTs.
              </p>
              <p>
                We don&apos;t make claims we can&apos;t cite. Every product page links to the research it&apos;s built on. If a paper doesn&apos;t exist, we don&apos;t ship the feature.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── The name ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center"
          >
            <h2 className="font-display text-2xl text-cream font-bold mb-4">The name</h2>
            <p className="text-cream/55 text-sm leading-relaxed max-w-[48ch] mx-auto">
              <span className="text-moonlight font-bold">SOMNI</span> comes from the Latin <em>somnus</em> — sleep. Not the passive kind. The kind that comes when your brain finally receives all the signals it needs to stand down. Four senses. One system. That&apos;s the idea.
            </p>
          </motion.div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-8 text-center">
              Mission & Vision
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 text-center">
                <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">Mission</p>
                <p className="text-cream/65 text-sm leading-relaxed">
                  To make deep, restorative sleep accessible — not through drugs or apps, but by giving your brain the sensory signals it evolved to need.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">Vision</p>
                <p className="text-cream/65 text-sm leading-relaxed">
                  A world where sleep isn&apos;t something you chase. It&apos;s something that happens because the conditions are right. Science, not willpower.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <div className="text-center">
          <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3.5">
            Explore Our Products <ArrowRight size={14} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
