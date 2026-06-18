"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, SpeakerHigh, Hand, Wind, Brain, Clock, Moon, Microscope } from "@phosphor-icons/react";

const stats = [
  { value: "30%", label: "of adults have insomnia symptoms globally", icon: Moon },
  { value: "3 hrs", label: "melatonin delay from evening blue light", icon: Clock },
  { value: "38%", label: "faster sleep onset with white noise", icon: SpeakerHigh },
  { value: "200ms", label: "for scent to reach the amygdala", icon: Brain },
];

const pathways = [
  {
    id: "visual",
    icon: Eye,
    sense: "LUX",
    title: "Visual Pathway",
    body: "Blue light at 460-480nm hits your retina and tells your brain it's daytime. Melatonin gets blocked. A Harvard study found evening blue light delays melatonin by 3 hours on average. You need total darkness. Your biology demands it.",
    ref: "Brainard GC, et al. (2001). Journal of Neuroscience, 21(16), 6405-6412.",
  },
  {
    id: "auditory",
    icon: SpeakerHigh,
    sense: "SONUS",
    title: "Auditory Pathway",
    body: "A part of your brainstem monitors sound all night. Irregular noises trigger micro-wakeups that fragment your sleep. Steady background noise raises the threshold for what wakes you. Across 38 studies, white noise cut average sleep onset from 26 to 16 minutes.",
    ref: "Zheng Y, et al. (2021). Sleep Medicine Reviews, 58, 101492.",
  },
  {
    id: "tactile",
    icon: Hand,
    sense: "TACTUS",
    title: "Tactile Pathway",
    body: "Deep pressure on your skin activates the vagus nerve and shifts your body into rest mode. Research shows serotonin increases 28% and cortisol drops 31% within 20 minutes of weighted pressure. Same mechanism that makes a hug feel good.",
    ref: "Ackerley R, et al. (2015). Journal of Sleep Research, 24(5), 526-534.",
  },
  {
    id: "olfactory",
    icon: Wind,
    sense: "OLFACIO",
    title: "Olfactory Pathway",
    body: "Smell has a direct line to your brain's emotion center. It skips the usual relay station. A Southampton University study found lavender improved sleep quality 20% over placebo, strongest in the first week. The active compounds bind to GABA receptors, same ones anti-anxiety drugs target.",
    ref: "Lewith GT, et al. (2005). Complementary Therapies in Medicine, 13(2), 95-100.",
  },
];

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24 relative">
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=90)",
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Microscope size={18} className="text-moonlight" weight="duotone" />
            <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium">The Science</p>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-normal tracking-tight text-cream leading-[1.1] max-w-[14ch] mx-auto">
            Sleep Is <span className="text-moonlight">Sensory.</span>
          </h1>
          <p className="mt-5 text-mist text-lg max-w-[48ch] mx-auto leading-relaxed">
            The neuroscience behind the 4-Sense Protocol. Every claim backed by peer-reviewed research.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1100px] mx-auto px-6 mb-28"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={value} className="glass-card p-6 text-center">
                <Icon size={20} className="text-moonlight/50 mx-auto mb-3" weight="duotone" />
                <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-1">{value}</p>
                <p className="text-xs text-mist/70 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* "Why You Cannot Sleep" */}
        <section className="max-w-[800px] mx-auto px-6 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-8">
              Why You Cannot Sleep
            </h2>
            <div className="space-y-5 text-mist/80 leading-relaxed text-[15px]">
              <p>Insomnia is not a character flaw. It's not overthinking. Your nervous system is scanning for threats, real or imagined, and it won't let you sleep until it decides the coast is clear.</p>
              <p>For our ancestors, this made sense. A rustle in the grass could be a predator. Your brain learned to err on the side of staying awake. Sleeping through a threat got you killed.</p>
              <p>The predators are gone. The circuit is still there. Your brain doesn't know the difference between a tiger and a blue LED. It only knows safe vs. not safe.</p>
            </div>
          </motion.div>
        </section>

        {/* Four Pathways — visual card layout */}
        <section className="max-w-[1100px] mx-auto px-6 mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-12 text-center"
          >
            The Four Sensory Pathways
          </motion.h2>

          <div className="space-y-6">
            {pathways.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-moonlight/10 flex items-center justify-center shrink-0">
                    <p.icon size={24} className="text-moonlight" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-moonlight font-medium bg-moonlight/10 px-2 py-0.5 rounded">
                        {p.sense}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-cream">{p.title}</h3>
                    </div>
                    <p className="text-mist/80 leading-relaxed text-[15px]">{p.body}</p>
                    <p className="mt-3 text-xs text-mist/40 italic leading-relaxed">{p.ref}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Protocol */}
        <section className="max-w-[800px] mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream mb-6">The SOMNI Protocol</h2>
            <p className="text-mist/80 leading-relaxed text-[15px] max-w-[60ch] mx-auto mb-8">
              Each pathway works on its own. Layer them together and your brain runs out of reasons to stay awake:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { step: "1", sense: "LUX", text: "Put on your sleep mask or turn on the amber light 90 minutes before bed. Your brain's clock gets the signal: night has started." },
                { step: "2", sense: "SONUS", text: "Start your white noise machine. Your brainstem settles into a baseline. Irregular sounds have to work harder to wake you." },
                { step: "3", sense: "TACTUS", text: "20 minutes on the acupressure mat, or put on the weighted mask. Deep pressure shifts your body into rest mode. Cortisol drops." },
                { step: "4", sense: "OLFACIO", text: "Spray your pillow or start the diffuser. Scent reaches your amygdala in 200 milliseconds. Safe. Safe. Sleep." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-4">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-moonlight/20 shrink-0 leading-none">{s.step}</span>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-moonlight font-medium">{s.sense}</span>
                    <p className="text-sm text-mist/80 leading-relaxed mt-1">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <div className="text-center px-6">
          <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em]">
            Explore the 4 Senses <ArrowRight size={14} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
