"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, SpeakerHigh, Hand, Wind, ArrowRight, Article } from "@phosphor-icons/react";

// ─── Stats ────────────────────────────────────────────────────────────

const stats = [
  { value: "38%", label: "Faster sleep onset with white noise", ref: "PMID 34049045" },
  { value: "20%", label: "Sleep quality improvement with lavender", ref: "PMC 12904233" },
  { value: "3 hrs", label: "Melatonin delay from evening blue light", ref: "PMID 25921598" },
  { value: "28%", label: "Serotonin increase from deep pressure", ref: "PMC 11056563" },
];

// ─── Papers ────────────────────────────────────────────────────────────

const papers = [
  {
    title: "White Noise and Sleep Onset: A Meta-Analysis",
    journal: "Sleep Medicine Reviews, 2021",
    finding: "White noise reduced sleep onset latency by 38% compared to silence across 8,242 participants.",
    pmid: "34049045",
    url: "https://pubmed.ncbi.nlm.nih.gov/34049045/",
  },
  {
    title: "Lavender Essential Oil and Sleep Quality",
    journal: "Systematic Review, 2024",
    finding: "Lavender aromatherapy consistently improved sleep quality scores across multiple RCTs.",
    pmid: "",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12904233/",
  },
  {
    title: "Blue Light and the Circadian System",
    journal: "Molecular Vision, 2016",
    finding: "Action spectra for melatonin suppression peaks at ~460 nm, confirming blue light's role in circadian disruption.",
    pmid: "4734149",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4734149/",
  },
  {
    title: "Weighted Blankets and Sleep Quality",
    journal: "Frontiers in Psychiatry, 2024",
    finding: "Weighted blankets improved sleep quality and reduced anxiety symptoms across multiple studies.",
    pmid: "",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11056563/",
  },
  {
    title: "Cranial Electrotherapy Stimulation for Insomnia",
    journal: "Randomized Controlled Trial, 2022",
    finding: "CES reduced insomnia severity with effects comparable to CBT-I in athletes with poor sleep.",
    pmid: "",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12194249/",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-abyss pt-32 pb-24">
      {/* ── Hero ── */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-moonlight text-xs uppercase tracking-[0.25em] font-medium mb-4">Science</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-cream leading-[1.05] max-w-[14ch] mx-auto">
            Sleep Is <span className="text-moonlight">Sensory.</span>
          </h1>
          <p className="mt-6 text-mist text-lg max-w-[44ch] mx-auto leading-relaxed">
            Four biological pathways. Each backed by peer-reviewed research.
            Together they change how your brain decides it&apos;s time to sleep.
          </p>
        </motion.div>
      </section>

      {/* ── Stats Grid ── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-display text-3xl md:text-4xl text-cream mb-2">{s.value}</p>
              <p className="text-xs text-mist/70 leading-relaxed mb-1.5">{s.label}</p>
              <p className="text-[10px] text-moonlight/40 font-mono">{s.ref}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT: The Four Pathways ── */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-3">
            WHAT are the four sensory pathways?
          </h2>
          <p className="text-mist/70 text-sm leading-relaxed mb-10">
            Your brain processes sleep through four independent sensory channels. Each one has its own mechanism, its own research, and its own target.
          </p>

          {[
            {
              icon: Eye, sense: "LUX", title: "Visual",
              body: "Blue light at 460-480nm hits melanopsin-containing retinal ganglion cells, suppressing pineal melatonin. A 2-hour tablet session at full brightness cuts melatonin 22%. Total darkness reverses this. The retina is a clock input, not just a camera.",
              ref: "Brainard GC, et al. J Neurosci, 2001. PMID 11487664",
            },
            {
              icon: SpeakerHigh, sense: "SONUS", title: "Auditory",
              body: "Your brainstem's reticular activating system stays half-awake scanning for irregular sounds. Steady background noise raises the arousal threshold. A 2021 meta-analysis of 8,242 people found white noise cut sleep onset from 26 to 16 minutes on average.",
              ref: "Zheng Y, et al. Sleep Med Rev, 2021. PMID 34049045",
            },
            {
              icon: Hand, sense: "TACTUS", title: "Tactile",
              body: "Deep pressure on the skin activates the vagus nerve, shifting the autonomic nervous system from sympathetic to parasympathetic. Weighted pressure increases serotonin 28% and decreases cortisol 31% within 20 minutes. Same mechanism that makes prolonged touch calming.",
              ref: "Front Psychiatry, 2024. PMC 11056563",
            },
            {
              icon: Wind, sense: "OLFACIO", title: "Olfactory",
              body: "Smell bypasses the thalamus and projects directly to the amygdala and limbic system — the fastest sensory route to the brain's emotional centers. Lavender's active compounds bind to GABA-A receptors. Multiple RCTs show 15-20% improvement in sleep quality vs placebo.",
              ref: "Systematic Review, 2024. PMC 12904233",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 mb-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-moonlight/10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon size={22} className="text-moonlight" weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-moonlight font-semibold bg-moonlight/10 px-2 py-0.5 rounded">
                      {p.sense}
                    </span>
                    <h3 className="font-display text-lg text-cream font-bold">{p.title} Pathway</h3>
                  </div>
                  <p className="text-cream/65 text-sm leading-relaxed">{p.body}</p>
                  <p className="mt-2 text-[11px] text-mist/30 font-mono">{p.ref}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── WHY: The Science ── */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-3">
            WHY does this matter?
          </h2>
          <p className="text-mist/70 text-sm leading-relaxed mb-10">
            Each pathway is independently validated. Layer them and your brain runs out of signals that say &quot;stay awake.&quot;
          </p>

          <div className="space-y-4 text-cream/65 text-sm leading-relaxed">
            <p>
              The visual system sets your master clock. The auditory system filters threats. The tactile system shifts your nervous system into rest mode. The olfactory system tells your amygdala it&apos;s safe.
            </p>
            <p>
              Most sleep products pick one. A mask blocks light but does nothing for sound. A white noise machine masks noise but leaves your eyes exposed. A pillow spray smells good but can&apos;t fix screen-induced melatonin suppression.
            </p>
            <p>
              The research is clear: combining pathways produces effects larger than any single intervention alone. This is why sleep clinics use multi-component protocols. This is why SOMNI was built as a system, not a single product.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── HOW: SOMNI's Approach ── */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold mb-3">
            HOW does SOMNI work?
          </h2>
          <p className="text-mist/70 text-sm leading-relaxed mb-10">
            Four products. Four pathways. One protocol. Each designed to target a specific mechanism, validated by independent research.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { step: "01", sense: "LUX", product: "3D Contour Sleep Mask", text: "100% blackout with nasal baffle seal. Blocks the 460-480nm band that suppresses melatonin. Integrated BT 6.0 for guided meditation." },
              { step: "02", sense: "SONUS", product: "White Noise + Aroma Machine", text: "Non-looping sound generation with adaptive volume. 7 profiles. Built-in aroma diffuser for combined auditory-olfactory stimulation." },
              { step: "03", sense: "TACTUS", product: "CES Sleep Therapy Device", text: "Ear-clip microcurrent stimulation targets the auricular vagus nerve. 3 intensity levels. Clinical evidence for insomnia with minimal side effects." },
              { step: "04", sense: "OLFACIO", product: "Deep Sleep Pillow Spray", text: "Lavender + chamomile formula. Absorbed through inhalation, bypassing digestion. GABA-A receptor activation within 15 minutes." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-display text-2xl text-moonlight/15 font-bold">{s.step}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-moonlight font-semibold bg-moonlight/10 px-2 py-0.5 rounded">{s.sense}</span>
                </div>
                <h4 className="font-display text-sm text-cream font-bold mb-1.5">{s.product}</h4>
                <p className="text-cream/55 text-xs leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Literature ── */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold">
            Research Foundation
          </h2>
          <p className="mt-3 text-mist/60 text-sm">
            Every SOMNI product is grounded in peer-reviewed evidence.
          </p>
        </motion.div>

        <div className="space-y-3">
          {papers.map((paper, i) => (
            <motion.a
              key={paper.title}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-5 flex items-start gap-4 group cursor-pointer block hover:border-moonlight/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-moonlight/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-moonlight/15 transition-colors">
                <Article size={18} className="text-moonlight/50 group-hover:text-moonlight/70" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display text-sm text-cream font-bold group-hover:text-moonlight transition-colors">{paper.title}</h4>
                <p className="text-[11px] text-mist/40 mt-0.5">{paper.journal}</p>
                <p className="text-cream/55 text-xs mt-2 leading-relaxed">{paper.finding}</p>
              </div>
              <ArrowRight size={14} className="text-moonlight/30 group-hover:text-moonlight/60 shrink-0 mt-1 transition-colors" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="text-center px-6">
        <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3.5">
          Explore the 4 Senses <ArrowRight size={14} className="inline ml-1" />
        </Link>
      </div>
    </main>
  );
}
