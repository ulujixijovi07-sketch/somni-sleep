"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react";

// ─── Team ──────────────────────────────────────────────────────────────

const team = [
  {
    name: "Elara Chen",
    role: "Founder & CEO",
    bio: "Sleep researcher turned entrepreneur. Six years at Stanford's Sleep Epidemiology Research Center studying why standard interventions fail. Published 8 papers on sensory sleep modulation. Left academia to build tools that work outside the lab.",
    img: "/images/team-elara.webp",
    linkedin: true,
    scholar: true,
  },
  {
    name: "Dr. Marcus Webb",
    role: "Chief Science Officer",
    bio: "PhD in Chronobiology, University of Basel. Postdoctoral fellow at Max Planck Institute on circadian rhythm disruption and metabolic health. Leads SOMNI's clinical validation protocols and research partnerships.",
    img: "/images/team-marcus.webp",
    linkedin: true,
    scholar: true,
  },
];

// ─── Timeline ──────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2021",
    title: "The spark of an idea",
    body: "The question was simple: why do people buy sleep masks, white noise machines, and pillow sprays — and still not sleep? Each product had solid research behind it. But nobody had put them together. Sleep isn't one sense. It's four. The problem wasn't the products. It was that they were sold in isolation, as if sleep happens through one pathway at a time.",
    img: "/images/lab-research.webp",
  },
  {
    year: "2022",
    title: "Building the system",
    body: "Fourteen months of sourcing, testing, and iterating. Every prototype tested against its pathway's research: Does it block 460-480nm light? Does the sound profile mask irregular noise without becoming a distraction? Does the ear-clip electrode hit the auricular branch of the vagus nerve? If a paper didn't support it, we didn't ship it.",
    img: "/images/lab-research.webp",
  },
  {
    year: "2023",
    title: "From prototype to product",
    body: "Early testers reported something we hadn't expected: when they used all four products together, the effect was larger than any one alone. The mask blocked light. The white noise masked sound. The CES device calmed the nervous system. The pillow spray signaled safety. Combined, the brain had no reason to stay awake.",
    img: "/images/lab-research.webp",
  },
  {
    year: "2024",
    title: "SOMNI launches",
    body: "Four products. Four pathways. One protocol. Not a wellness brand — a neuroscience approach to an engineering problem. Every product page links to the research it's built on. If a paper doesn't exist, we don't ship the feature.",
    img: "/images/lab-research.webp",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss">
      {/* ══════ HERO ══════ */}
      <section className="pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium mb-6">Because sleep shouldn&apos;t be hard.</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-cream leading-[1.05]">
            We Build <span className="text-moonlight">Sleep Systems,</span> Not Sleep Gadgets.
          </h1>
        </motion.div>
      </section>

      {/* ══════ TEAM ══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-6 ring-1 ring-white/[0.06]">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl text-cream font-bold">{person.name}</h3>
              <p className="text-moonlight text-xs uppercase tracking-[0.15em] font-medium mt-1 mb-4">{person.role}</p>
              <p className="text-cream/50 text-sm leading-relaxed max-w-[40ch] mx-auto mb-4">{person.bio}</p>
              <div className="flex items-center justify-center gap-3">
                {person.linkedin && (
                  <a href="#" className="text-mist/30 hover:text-moonlight transition-colors">
                    <LinkedinLogo size={16} weight="fill" />
                  </a>
                )}
                {person.scholar && (
                  <a href="#" className="text-mist/30 hover:text-moonlight transition-colors">
                    <GoogleLogo size={16} weight="fill" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ TIMELINE ══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <div className="space-y-24">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-start`}>
                {/* Text */}
                <div className="flex-1">
                  <span className="font-display text-5xl text-moonlight/10 font-bold leading-none">{item.year}</span>
                  <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mt-3 mb-5">{item.title}</h2>
                  <p className="text-cream/55 text-sm leading-relaxed">{item.body}</p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
                    <img src={item.img} alt={item.title} className="w-full h-64 md:h-80 object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ BRINGING SCIENCE ══════ */}
      <section className="bg-white/[0.015] py-24 mb-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">Bringing science to everyday life</h2>
                <div className="space-y-4 text-cream/55 text-sm leading-relaxed">
                  <p>Most sleep research stays in journals. The average time from a clinical finding to something people can actually use is 17 years. We think that&apos;s too long.</p>
                  <p>Every SOMNI product is built on published, peer-reviewed evidence. The white noise machine is based on a 2021 meta-analysis of 8,242 participants. The CES device references 40 years of clinical research on microcurrent stimulation.</p>
                  <p>We don&apos;t make claims we can&apos;t cite. Every product page links to the research. If a paper doesn&apos;t exist, we don&apos;t ship the feature.</p>
                </div>
              </motion.div>
            </div>
            <div className="flex-1">
              <div className="border-l-2 border-moonlight/20 pl-6 py-2">
                <p className="text-cream/60 text-base italic leading-relaxed font-display">
                  &ldquo;We don&apos;t build devices to fix people. We build gentle tools to help them reconnect with what&apos;s already working within.&rdquo;
                </p>
                <p className="text-moonlight/40 text-xs mt-3 font-medium tracking-wide">— The SOMNI Manifesto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ THE NAME ══════ */}
      <section className="max-w-3xl mx-auto px-6 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="font-display text-2xl text-cream font-bold mb-5">The Name</h2>
          <div className="space-y-3 text-cream/55 text-sm leading-relaxed max-w-[48ch] mx-auto">
            <p>
              <span className="text-moonlight font-bold text-lg">SOMNI</span> comes from the Latin <em>somnus</em> — sleep.
            </p>
            <p>Not passive sleep. Not the kind you wait for. The kind that comes when your brain receives every signal it needs to stand down — light blocked, sound masked, touch soothed, scent signaling safety.</p>
            <p>Four pathways. One system. That&apos;s the idea behind the name.</p>
          </div>
        </motion.div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold text-center mb-10">Mission & Vision</h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-10 text-center">
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Mission</p>
              <p className="text-cream/60 text-sm leading-relaxed">
                To make deep, restorative sleep accessible — not through medication or apps, but by giving your brain the precise sensory signals it evolved to need.
              </p>
            </div>
            <div className="glass-card p-10 text-center">
              <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Vision</p>
              <p className="text-cream/60 text-sm leading-relaxed">
                A world where sleep isn&apos;t something you chase. It&apos;s the natural result of getting the conditions right. Science, not willpower.
              </p>
            </div>
          </div>

          <div className="glass-card p-10 text-center max-w-2xl mx-auto">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">Slogan</p>
            <p className="font-display text-xl text-cream italic font-bold">Sleep Science. Engineered.</p>
          </div>
        </motion.div>
      </section>

      {/* ══════ 1% PLEDGE ══════ */}
      <section className="max-w-3xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 text-center">
          <p className="text-3xl mb-4">🌙</p>
          <p className="text-cream/55 text-sm leading-relaxed max-w-[48ch] mx-auto">
            We dedicate <span className="text-moonlight font-bold">1% of our revenue</span> to independent sleep research and open-access publication. Every purchase funds real science. SOMNI is only the beginning.
          </p>
        </motion.div>
      </section>

      {/* ══════ CTA ══════ */}
      <div className="text-center px-6 pb-24">
        <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3.5">
          Explore Our Products <ArrowRight size={14} className="inline ml-1" />
        </Link>
      </div>
    </main>
  );
}
