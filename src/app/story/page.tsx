"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, SpeakerHigh, Hand, Wind, Heart } from "@phosphor-icons/react";

const milestones = [
  {
    year: "2019",
    title: "The Breaking Point",
    body: "Five years staring at the ceiling at 3 AM. Melatonin gummies gave me nightmares. Sleep apps made the anxiety worse. Weighted blankets trapped too much heat. Meditation apps had me wondering if I was meditating right. Every product promised sleep. None of them asked why I couldn't sleep.",
  },
  {
    year: "2020",
    title: "The Realization",
    body: "So I did what any sleep-deprived neuroscience grad would do. I read every paper. And the pattern was staring me in the face. The problem wasn't in my head. It was in my senses. Sleep is sensory. Light kills melatonin. Irregular noise jolts you awake. Deep pressure calms the nervous system. Scent hits the amygdala directly.",
  },
  {
    year: "2021",
    title: "Building the System",
    body: "Every product on the market picked one pathway and called it a day. A sleep mask. A white noise machine. A pillow spray. Nobody put them together. Nobody built a protocol based on how the sensory system actually works. The products worked. They just weren't enough on their own. We spent two years sourcing, testing, and iterating. Every product built as part of the system, not in isolation.",
  },
  {
    year: "2022",
    title: "SOMNI Launches",
    body: "The 3D Contour Mask had to complement the White Noise Machine. The Pillow Spray had to work with the Weighted Mask. Each piece makes the others stronger. We're not a wellness brand. We're a neuroscience company that happens to make good-looking sleep tools.",
  },
];

const beliefs = [
  { icon: Eye, text: "A sleep mask is a light-blocking device for your internal clock. Nothing less." },
  { icon: SpeakerHigh, text: "White noise isn't about relaxation. It's acoustic masking. Your brainstem stops flinching at every sound." },
  { icon: Hand, text: "Deep pressure triggers your vagus nerve. Neurochemistry, not coziness. Serotonin up, cortisol down, measured in studies." },
  { icon: Wind, text: "Pillow spray targets GABA receptors in your amygdala. Same pathway as anti-anxiety meds, just through your nose." },
];

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24 relative">
      <div className="fixed inset-0 opacity-[0.04]" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1499933374294-4584851497cc?w=1920&q=90)",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />

      <div className="relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-6"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.3em] mb-4 font-medium">Our Story</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-normal tracking-tight text-cream leading-[1.1] max-w-[14ch] mx-auto">
            We Couldn{"'"}t Sleep <span className="text-moonlight">Either.</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <section className="max-w-[900px] mx-auto px-6 mb-28">
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Year marker */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <span className="font-[family-name:var(--font-display)] text-4xl text-moonlight/30">{m.year}</span>
                  <div className="w-px flex-1 bg-moonlight/10 mt-3" />
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-8">
                  <span className="md:hidden font-[family-name:var(--font-display)] text-2xl text-moonlight/30 mb-3 block">{m.year}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream mb-4">{m.title}</h3>
                  <p className="text-mist/80 leading-relaxed text-[15px]">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Believe */}
        <section className="max-w-[900px] mx-auto px-6 mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-12 text-center"
          >
            What We <span className="text-moonlight">Believe</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {beliefs.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-moonlight/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-moonlight" weight="duotone" />
                </div>
                <p className="text-mist/80 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="max-w-[800px] mx-auto px-6 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Photo */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 bg-deep border border-moonlight/10">
                <img
                  src="/founder.jpg"
                  alt="Dr. Adrian Voss, SOMNI Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream mb-1">Dr. Adrian Voss</h3>
                <p className="text-moonlight text-xs uppercase tracking-[0.15em] mb-4">Founder &amp; Neuroscientist</p>

                <div className="space-y-3 text-mist/70 text-sm leading-relaxed">
                  <p>PhD in Neuroscience, University of Zurich. Sleep Lab at Max Planck Institute, 2014-2018. Published 12 papers on circadian rhythms and sensory processing. Diagnosed with chronic insomnia in 2016. Tested every protocol on himself for two years before anything worked.</p>
                  <p>Left academia in 2020 to build SOMNI. Now sleeps 7.5 hours a night and spends his days explaining to investors why a sleep mask is actually a medical device.</p>
                </div>

                {/* Credentials badges */}
                <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
                  {[
                    "PhD Neuroscience, UZH",
                    "Max Planck Institute",
                    "12 Published Papers",
                    "Sleep Research Society",
                  ].map((c) => (
                    <span key={c} className="text-[10px] text-mist/50 bg-cream/[0.03] border border-cream/[0.05] px-3 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-6">
                  <p className="font-[family-name:var(--font-display)] text-lg text-cream/60 italic">Adrian Voss</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center px-6 mb-28"
        >
          <div className="inline-block glass-card p-8 mb-10">
            <Heart size={20} className="text-moonlight mx-auto mb-3" weight="fill" />
            <p className="font-[family-name:var(--font-display)] text-xl text-cream italic">
              Combine all four and sleep stops being something you chase. It just happens.
            </p>
            <p className="text-xs text-mist/50 mt-3">Sleeping 7.5 hours a night since 2021</p>
          </div>

          <div className="mt-8">
            <Link href="/shop/visual" className="btn-primary inline-block text-sm uppercase tracking-[0.1em]">
              Explore Our Products <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
