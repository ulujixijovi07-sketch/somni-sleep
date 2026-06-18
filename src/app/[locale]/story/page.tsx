"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react";

const team = [
  {
    initials: "EC",
    name: "Elara Chen",
    role: "Founder & CEO",
    bio: "Sleep researcher turned entrepreneur. Six years at Stanford's Sleep Epidemiology Research Center studying why standard interventions fail. Published 8 papers on sensory sleep modulation. Left academia in 2023 to build tools that work outside the lab — for real people, in real bedrooms, not just study participants.",
    linkedin: true,
    scholar: true,
  },
  {
    initials: "MW",
    name: "Dr. Marcus Webb",
    role: "Chief Science Officer",
    bio: "PhD in Chronobiology, University of Basel. Postdoctoral fellow at the Max Planck Institute for Biophysical Chemistry, researching circadian rhythm disruption and its metabolic consequences. Leads SOMNI's clinical validation protocols, research partnerships, and evidence standards.",
    linkedin: true,
    scholar: true,
  },
];

const timeline = [
  {
    year: "2021",
    title: "The spark of an idea",
    body: "The question was simple: why do people buy sleep masks, white noise machines, weighted blankets, and pillow sprays — and still not sleep? Each product had solid research behind it. The problem was that nobody put them together. Sleep isn't one sense. It's four independent biological pathways. The products weren't failing. The approach was.",
  },
  {
    year: "2022",
    title: "Building the system",
    body: "Fourteen months of sourcing, testing, and iterating. Every prototype tested against its pathway's research: Does it block 460-480nm light? Does the sound profile mask irregular noise without becoming a distraction? Does the ear-clip electrode hit the auricular branch of the vagus nerve? If a peer-reviewed paper didn't support it, we didn't ship it. That rule still holds.",
  },
  {
    year: "2023",
    title: "From prototype to product",
    body: "Early testers reported something unexpected: when they used all four products together, the combined effect was larger than any single product alone. The mask blocked light. The white noise masked sound. The CES device calmed the nervous system. The pillow spray signaled safety. Together, the brain had no reason to stay awake. The data confirmed what the neuroscience predicted.",
  },
  {
    year: "2024",
    title: "SOMNI launches",
    body: "Four products. Four pathways. One protocol. Not a wellness brand — a neuroscience approach to an engineering problem. Every product page links directly to the research it's built on. If a paper doesn't exist, we don't ship the feature. SOMNI is for people who've tried everything and still can't sleep. You're not the problem. Your sensory environment is.",
  },
];

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss">
      {/* ══════ HERO ══════ */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-abyss to-abyss" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-moonlight/2 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-moonlight/1 rounded-full blur-3xl" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium mb-6">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-cream leading-[1.05]">
              We Build <span className="text-moonlight">Sleep Systems,</span> Not Sleep Gadgets.
            </h1>
            <p className="mt-6 text-mist/70 text-lg max-w-[36ch] mx-auto leading-relaxed">
              Because sleep shouldn&apos;t be hard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ TEAM ══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="grid sm:grid-cols-2 gap-10">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center"
            >
              {/* Initials Avatar */}
              <div
                className="w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center ring-1 ring-white/[0.06]"
                style={{
                  background: `radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.15), transparent 70%), rgba(201,168,76,0.05)`,
                }}
              >
                <span className="font-display text-3xl text-moonlight/50 font-bold tracking-tight">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-display text-xl text-cream font-bold">{person.name}</h3>
              <p className="text-moonlight text-xs uppercase tracking-[0.15em] font-medium mt-1 mb-4">{person.role}</p>
              <p className="text-cream/50 text-sm leading-relaxed max-w-[40ch] mx-auto mb-4">{person.bio}</p>
              <div className="flex items-center justify-center gap-3">
                {person.linkedin && (
                  <span className="text-mist/25">
                    <LinkedinLogo size={16} weight="fill" />
                  </span>
                )}
                {person.scholar && (
                  <span className="text-mist/25">
                    <GoogleLogo size={16} weight="fill" />
                  </span>
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
                {/* Text side */}
                <div className="flex-1">
                  <span className="font-display text-6xl text-moonlight/[0.06] font-bold leading-none select-none">
                    {item.year}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mt-1 mb-5">{item.title}</h2>
                  <p className="text-cream/55 text-sm leading-relaxed">{item.body}</p>
                </div>

                {/* Visual side */}
                <div className="flex-1">
                  <div
                    className="rounded-2xl h-64 md:h-72 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `
                        radial-gradient(ellipse at ${i % 2 === 0 ? "70%" : "30%"} 50%, rgba(201,168,76,0.06) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(255,255,255,0.01), transparent)
                      `,
                    }}
                  >
                    <span className="font-display text-8xl text-moonlight/[0.04] font-bold select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ MANIFESTO ══════ */}
      <section className="bg-white/[0.012] py-24 mb-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-6">Bringing science to everyday life</h2>
                <div className="space-y-4 text-cream/55 text-sm leading-relaxed">
                  <p>Most sleep research stays in journals. The average time from a clinical finding to something people can actually use is 17 years.</p>
                  <p>Every SOMNI product is built on published, peer-reviewed evidence. The white noise machine is based on a 2021 meta-analysis of 8,242 participants. The CES device references 40 years of clinical research on microcurrent stimulation.</p>
                  <p>We don&apos;t make claims we can&apos;t cite. Every product page links to the research. If a paper doesn&apos;t exist, we don&apos;t ship the feature.</p>
                </div>
              </motion.div>
            </div>
            <div className="flex-1">
              <div className="border-l-2 border-moonlight/20 pl-6 py-2">
                <p className="text-cream/60 text-lg italic leading-relaxed font-display">
                  &ldquo;We don&apos;t build devices to fix people. We build gentle tools to help them reconnect with what&apos;s already working within.&rdquo;
                </p>
                <p className="text-moonlight/40 text-xs mt-4 font-medium tracking-wide">— The SOMNI Manifesto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ THE NAME ══════ */}
      <section className="max-w-3xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 text-center">
          <h2 className="font-display text-2xl text-cream font-bold mb-5">The Name</h2>
          <div className="space-y-3 text-cream/55 text-sm leading-relaxed max-w-[48ch] mx-auto">
            <p><span className="text-moonlight font-bold text-xl">SOMNI</span> comes from the Latin <em>somnus</em> — sleep.</p>
            <p>Not passive sleep. Not the kind you wait for. The kind that comes when your brain receives every signal it needs to stand down — light blocked, sound masked, touch soothed, scent signaling safety.</p>
            <p>Four pathways. One system. That&apos;s the idea behind the name.</p>
          </div>
        </motion.div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold text-center mb-10">Mission & Vision</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
