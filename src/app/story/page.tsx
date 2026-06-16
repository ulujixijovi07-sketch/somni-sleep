'use client';

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24 relative">
      <div className="fixed inset-0 opacity-[0.05]" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1499933374294-4584851497cc?w=1920&q=90)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />
      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.3em] mb-6 font-medium">Our Story</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tighter text-cream leading-[1.1]">
            We Couldn{"'"}t Sleep Either.
          </h1>
        </motion.div>

        <div className="space-y-24">
          {[
            {
              title: "2019: The Breaking Point",
              content: `After five years of 3 AM ceiling-staring, I had tried everything. Melatonin gummies that gave me vivid nightmares. A sleep app that told me I slept 4.2 hours and made my anxiety worse. A weighted blanket that trapped too much heat. Meditation apps where I spent 20 minutes thinking about whether I was meditating correctly.

Every product promised sleep. None of them understood why I could not sleep in the first place.

So I did what any sleep-deprived person with a neuroscience degree would do: I read every paper I could find. What I discovered changed everything. Insomnia was not in my head. It was in my senses.`,
            },
            {
              title: "The Insight: Sensory Dysregulation",
              content: `The research was consistent across disciplines: sleep is a sensory process. Light suppresses melatonin. Irregular noise triggers micro-arousals. Deep pressure activates the parasympathetic nervous system. Scent modulates amygdala activity.

Every product on the market targeted one of these pathways in isolation. A sleep mask here. A white noise machine there. A pillow spray over there. But no one had put them together into a coherent system — a protocol based on how the sensory system actually works.

The problem was not that the products did not work. The problem was that one product alone was never going to be enough.`,
            },
            {
              title: "Building SOMNI",
              content: `SOMNI was built on a simple premise: if insomnia is a sensory problem, the solution must address all four sensory pathways. Not as a product line. As a protocol.

We spent two years sourcing materials, testing formulations, and iterating on designs. Every product was developed not in isolation, but as part of the 4-Sense System. The 3D Contour Mask had to complement the White Noise Machine. The Pillow Spray had to work with the Weighted Mask. Each product makes the others more effective.

We are not a "wellness brand." We are a sensory neuroscience company that happens to make beautifully designed sleep tools.`,
            },
            {
              title: "What We Believe",
              content: `We believe that you do not have insomnia. Your sensory environment is failing you.

We believe that a sleep mask is not an accessory — it is a light-blocking medical device for your circadian rhythm.

We believe that white noise is not a relaxation gimmick — it is acoustic masking for your brainstem.

We believe that deep pressure is not "cozy" — it is vagus nerve stimulation backed by neurochemistry.

We believe that pillow spray is not perfume — it is a GABAergic olfactory signal to your amygdala.

And we believe that when you combine all four, sleep stops being something you chase and becomes something that happens to you.`,
            },
          ].map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight text-cream mb-6">
                {section.title}
              </h2>
              {section.content.split("\n\n").map((p, i) => (
                <p key={i} className="text-mist leading-relaxed mb-4 max-w-[68ch]">{p}</p>
              ))}
            </motion.section>
          ))}
        </div>

        {/* Founder signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-moonlight/10 text-center"
        >
          <p className="font-[family-name:var(--font-display)] text-xl text-cream italic">&mdash; SOMNI Founder</p>
          <p className="text-xs text-mist mt-2">Sleeping 7.5 hours a night since 2021</p>

          <div className="mt-12">
            <Link href="/shop/visual" className="btn-primary inline-block text-sm uppercase tracking-[0.1em]">
              Explore Our Products <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
