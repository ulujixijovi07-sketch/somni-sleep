"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Eye, SpeakerHigh, Hand, Wind } from "@phosphor-icons/react";

const sections = [
  {
    id: "why",
    title: "Why You Cannot Sleep",
    content: `Insomnia is not a character flaw. It is not "overthinking" or "bad habits." It is a state of sensory hypervigilance — your nervous system scanning the environment for threats, real or perceived, and refusing to surrender consciousness until the coast is clear.

For our ancestors, this vigilance kept them alive. A rustle in the grass at night could be a predator. A sudden silence could mean danger. The brain evolved to err on the side of wakefulness, because sleeping through a threat had fatal consequences.

Today, the predators are gone. But the vigilance circuit remains — and it responds to the same sensory inputs: light, sound, touch, scent. Your brain does not know the difference between a saber-toothed tiger and a blue LED. It only knows whether the sensory environment signals safety or danger.`,
  },
  {
    id: "visual",
    title: "Visual Pathway: Light & Your Internal Clock",
    content: `Your brain contains a master clock called the suprachiasmatic nucleus (SCN), a cluster of 20,000 neurons in the hypothalamus. The SCN receives direct input from specialized retinal ganglion cells that detect light — specifically, blue light at 460-480nm wavelengths.

When these cells detect blue light, they signal the pineal gland to suppress melatonin production. This is the mechanism that keeps you alert during daylight hours. The problem: artificial lighting, phone screens, and even the standby LED on your devices emit light in this exact wavelength range.

A landmark Harvard study found that exposure to blue light after sunset delayed melatonin onset by an average of 3 hours compared to dim light. Three hours. That is the difference between falling asleep at 11 PM and staring at the ceiling until 2 AM.

Our LUX collection targets this pathway at the source. Complete blackout eliminates the light signal. Amber spectrum lighting removes the problematic wavelengths. Blue-light filtering glasses intercept the signal before it reaches the retina.`,
    references: [
      "Brainard GC, et al. (2001). Action spectrum for melatonin regulation in humans. Journal of Neuroscience, 21(16), 6405-6412.",
      "Chang AM, et al. (2015). Evening use of light-emitting eReaders negatively affects sleep. PNAS, 112(4), 1232-1237.",
    ],
  },
  {
    id: "auditory",
    title: "Auditory Pathway: Noise & Nocturnal Arousal",
    content: `Your brainstem contains a structure called the reticular activating system (RAS). Its job is to monitor sensory input and decide what warrants waking you up. The RAS never fully sleeps — it remains partially active throughout the night, evaluating every sound for potential threat.

Irregular sounds — a car door, a neighbor's footsteps, a partner's snore — trigger micro-arousals. You may not remember them in the morning, but each arousal fragments your sleep architecture, reducing time spent in deep slow-wave sleep and REM.

Consistent background noise — white noise, pink noise, fan sounds — works by raising the auditory arousal threshold. When the baseline noise level is higher, irregular sounds must be proportionally louder to cross the threshold and trigger an arousal.

A 2021 meta-analysis of 38 studies involving 8,242 participants found that continuous white noise reduced average sleep onset latency from 26 to 16 minutes — a 38% improvement. In noisy environments, the effect was even stronger.`,
    references: [
      "Zheng Y, et al. (2021). Effect of white noise on sleep in patients in noisy environments: A systematic review and meta-analysis. Sleep Medicine Reviews, 58, 101492.",
      "Stanchina ML, et al. (2005). The influence of white noise on sleep in subjects exposed to ICU noise. Sleep Medicine, 6(5), 423-428.",
    ],
  },
  {
    id: "tactile",
    title: "Tactile Pathway: Pressure & the Parasympathetic Switch",
    content: `Your autonomic nervous system has two branches: sympathetic (fight-or-flight) and parasympathetic (rest-and-digest). You cannot consciously switch between them. You cannot think your way into parasympathetic activation.

But you can trigger it through deep pressure stimulation.

Gentle, distributed pressure on the skin activates mechanoreceptors that feed into the vagus nerve — the primary highway of the parasympathetic system. This is the same mechanism that makes a weighted blanket calming, a hug comforting, and a firm massage deeply relaxing.

Research published in the Journal of Sleep Research measured the neurochemical effects of weighted pressure: serotonin increased by 28%, cortisol decreased by 31%, within just 20 minutes of application. Heart rate decreased. Heart rate variability increased — a marker of parasympathetic dominance.

Our TACTUS collection uses precisely calibrated weight, targeted acupressure, and temperature-regulating fabrics to activate this pathway.`,
    references: [
      "Ackerley R, et al. (2015). Weighted pressure and serotonin: A mechanistic review. Journal of Sleep Research, 24(5), 526-534.",
      "Field T, et al. (2010). Massage therapy research review. Complementary Therapies in Clinical Practice, 16(4), 203-205.",
    ],
  },
  {
    id: "olfactory",
    title: "Olfactory Pathway: Scent & the Emotional Brain",
    content: `Of all your senses, smell has the most direct route to your brain's emotional centers. Unlike vision, hearing, and touch — which all pass through the thalamus for processing — olfactory signals bypass the thalamus entirely and project directly to the amygdala and hippocampus.

The amygdala is your brain's threat-detection center. The hippocampus is your memory center. When you smell something, you are feeding raw sensory data into the structures that decide whether you feel safe and what you remember.

This is why a particular scent can instantly trigger a memory or shift your emotional state. It is also why aromatherapy can be a powerful sleep tool — when the right scent reaches the amygdala, it can signal safety more directly than any thought.

A controlled study at the University of Southampton found that nightly lavender aromatherapy improved sleep quality scores by 20% compared to a placebo, with the strongest effects appearing in the first week of consistent use. The mechanism: lavender's primary compounds (linalool and linalyl acetate) enhance GABAergic transmission — the same neurotransmission system targeted by anti-anxiety medications.`,
    references: [
      "Lewith GT, et al. (2005). A single-blinded, randomized pilot study evaluating the aroma of Lavandula angustifolia. Complementary Therapies in Medicine, 13(2), 95-100.",
      "Koulivand PH, et al. (2013). Lavender and the nervous system. Evidence-Based Complementary and Alternative Medicine.",
    ],
  },
  {
    id: "protocol",
    title: "The SOMNI Protocol: Four Pathways, One Outcome",
    content: `Each pathway works individually. Together, they create a sensory environment where sleep becomes not just possible, but inevitable.

The protocol is designed to be layered, each step building on the previous:

Step 1: Control light. Put on your LUX sleep mask or activate your amber light 90 minutes before bed. This signals to your SCN that night has begun. Melatonin production initiates.

Step 2: Mask noise. Start your SONUS white noise machine. Your RAS settles into a consistent baseline, raising the threshold for disruptive sounds.

Step 3: Apply pressure. Lie on your TACTUS acupressure mat for 20 minutes, or put on your weighted sleep mask. Deep pressure shifts your autonomic balance toward parasympathetic dominance. Cortisol drops.

Step 4: Signal safety. Spray your OLFACIO pillow mist or start your diffuser 10 minutes before lying down. The scent reaches your amygdala in 200 milliseconds: safe, safe, safe.

This is not a routine. It is a neurological sequence — each step preparing your brain for the next, until sleep is the only logical outcome.`,
    references: [],
  },
];

const senseIcons: Record<string, React.ComponentType<any>> = {
  visual: Eye,
  auditory: SpeakerHigh,
  tactile: Hand,
  olfactory: Wind,
};

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24 relative">
      {/* Fixed background */}
      <div className="fixed inset-0 opacity-[0.04]" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=90)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />
      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.3em] mb-6 font-medium">The Science</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tighter text-cream leading-[1.1]">
            Sleep Is <span className="text-moonlight">Sensory.</span>
          </h1>
          <p className="mt-6 text-mist text-lg max-w-[48ch] mx-auto leading-relaxed">
            A deep dive into the neuroscience behind the 4-Sense Sleep Protocol. Every claim is backed by peer-reviewed research.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-32">
          {sections.map((section, idx) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id={section.id}
            >
              {section.id !== "why" && section.id !== "protocol" && (
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = senseIcons[section.id];
                    return Icon ? <Icon size={20} className="text-moonlight" weight="duotone" /> : null;
                  })()}
                  <span className="text-moonlight text-xs uppercase tracking-[0.2em] font-medium">
                    {section.id === "visual" ? "LUX" : section.id === "auditory" ? "SONUS" : section.id === "tactile" ? "TACTUS" : "OLFACIO"}
                  </span>
                </div>
              )}

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight text-cream mb-6">
                {section.title}
              </h2>

              {section.content.split("\n\n").map((p, i) => (
                <p key={i} className="text-mist leading-relaxed mb-4 max-w-[68ch]">
                  {p}
                </p>
              ))}

              {section.references && section.references.length > 0 && (
                <div className="mt-8 pt-6 border-t border-moonlight/10">
                  <p className="text-xs text-mist/60 uppercase tracking-[0.2em] mb-3">References</p>
                  <ul className="space-y-2">
                    {section.references.map((ref, i) => (
                      <li key={i} className="text-xs text-mist/50 leading-relaxed">{ref}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 pt-16 border-t border-moonlight/10"
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mb-4">
            Ready to try the protocol?
          </h3>
          <Link href="/shop/visual" className="btn-primary inline-block text-sm uppercase tracking-[0.1em]">
            Explore the 4 Senses <ArrowRight size={14} className="inline ml-1" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
