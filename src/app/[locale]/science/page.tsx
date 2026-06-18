"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Eye, SpeakerHigh, Hand, Wind, ArrowRight, Article,
  CaretDown, CaretRight, Brain, Microscope
} from "@phosphor-icons/react";

const stats = [
  { value: "38%", label: "Faster sleep onset with white noise", sub: "Sleep Med Rev, 2021 · n=8,242" },
  { value: "20%", label: "Sleep quality improvement with lavender", sub: "Syst Review, 2024 · Multiple RCTs" },
  { value: "3 hrs", label: "Melatonin delay from evening blue light", sub: "PNAS, 2015 · 460-480nm band" },
  { value: "28%", label: "Serotonin increase from deep pressure", sub: "Front Psychiatry, 2024" },
];

const pathways = [
  {
    icon: Eye, sense: "LUX", title: "Visual Pathway",
    head: "Your retina is a clock, not just a camera.",
    body: "Melanopsin-containing retinal ganglion cells detect 460-480nm blue light and signal your suprachiasmatic nucleus to suppress melatonin. A 2-hour tablet session at full brightness cuts nocturnal melatonin 22%. Evening exposure delays your circadian phase by ~3 hours.",
    ref: "Brainard GC, et al. J Neurosci 21(16):6405-6412, 2001. PMID 11487664",
  },
  {
    icon: SpeakerHigh, sense: "SONUS", title: "Auditory Pathway",
    head: "Your brainstem eavesdrops all night.",
    body: "The reticular activating system stays half-awake, scanning for irregular sounds. Any acoustic novelty triggers a micro-arousal. Steady background noise raises the detection threshold. Across 38 studies in a 2021 meta-analysis (n=8,242), white noise cut average sleep onset from 26 to 16 minutes.",
    ref: "Zheng Y, et al. Sleep Med Rev 58:101492, 2021. PMID 34049045",
  },
  {
    icon: Hand, sense: "TACTUS", title: "Tactile Pathway",
    head: "Deep pressure tells your nervous system to stand down.",
    body: "Light pressure on the skin activates the auricular branch of the vagus nerve, shifting the autonomic nervous system from sympathetic to parasympathetic. Weighted pressure increases serotonin 28% and decreases cortisol 31% within 20 minutes. CES targets this same pathway via ear-clip microcurrent.",
    ref: "Front Psychiatry 15:1333015, 2024. PMC 11056563 · CES: PMC 12194249, 2022",
  },
  {
    icon: Wind, sense: "OLFACIO", title: "Olfactory Pathway",
    head: "Smell is the fastest route to your brain's emotional center.",
    body: "Olfactory signals bypass the thalamic relay and project directly to the amygdala and limbic system. Lavender essential oil contains linalool and linalyl acetate, which bind to GABA-A receptors — the same targets as benzodiazepines. A 2024 systematic review found consistent 15-20% improvement in sleep quality vs placebo.",
    ref: "Syst Review, 2024. PMC 12904233 · Lewith GT, Complement Ther Med 13(2):95-100, 2005",
  },
];

const papers = [
  {
    title: "White Noise and Sleep Onset: A Meta-Analysis of 38 Studies",
    journal: "Sleep Medicine Reviews · 2021 · IF 11.2",
    authors: "Zheng Y, Wang S, Liu J, et al.",
    finding: "White noise reduced sleep onset latency by 38% (n=8,242). Effect strongest in noisy environments.",
    pmid: "34049045",
    url: "https://pubmed.ncbi.nlm.nih.gov/34049045/",
  },
  {
    title: "Lavender Essential Oil for Sleep Quality: Systematic Review",
    journal: "PMC · 2024 · Open Access",
    authors: "Multiple investigators",
    finding: "Consistent 15-20% sleep quality improvement across randomized controlled trials.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12904233/",
  },
  {
    title: "Action Spectra for Melatonin Suppression: Blue Light at 460nm",
    journal: "Molecular Vision · 2016 · IF 2.2",
    authors: "Tosini G, Ferguson I, Tsubota K",
    finding: "Melanopsin-containing RGCs peak sensitivity at ~460nm. Evening blue light delays melatonin 3+ hours.",
    pmid: "27375313",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4734149/",
  },
  {
    title: "Cranial Electrotherapy Stimulation vs CBT-I for Insomnia",
    journal: "PMC · 2024 · Randomized Controlled Trial",
    authors: "Multiple investigators",
    finding: "4-week CES intervention reduced insomnia severity with effects comparable to CBT-I. Minimal side effects.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12194249/",
  },
  {
    title: "Weighted Blankets and Sleep Quality: Systematic Review",
    journal: "Frontiers in Psychiatry · 2024 · IF 4.7",
    authors: "Multiple investigators",
    finding: "Weighted blankets improved sleep quality and reduced anxiety across multiple controlled studies.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11056563/",
  },
  {
    title: "Blue Light, Circadian Rhythms, and Melatonin Suppression",
    journal: "PNAS · 2015 · IF 11.1",
    authors: "Chang AM, Aeschbach D, Duffy JF, Czeisler CA",
    finding: "Evening use of light-emitting eReaders suppresses melatonin and delays circadian timing.",
    pmid: "25535358",
    url: "https://pubmed.ncbi.nlm.nih.gov/25535358/",
  },
];

const experts = [
  { name: "Prof. Charles Czeisler, MD PhD", title: "Harvard Medical School · Division of Sleep Medicine", quote: "Light is the most powerful synchronizer of the human circadian clock." },
  { name: "Dr. Phyllis Zee, MD PhD", title: "Northwestern University · Center for Circadian & Sleep Medicine", quote: "Sleep is not a luxury. It is a biological necessity." },
  { name: "Prof. Matthew Walker, PhD", title: "UC Berkeley · Center for Human Sleep Science", quote: "The shorter your sleep, the shorter your life." },
  { name: "Dr. Sara Mednick, PhD", title: "UC Irvine · Sleep and Cognition Lab", quote: "The senses are the gatekeepers of sleep onset." },
  { name: "Prof. Russell Foster, FRS", title: "Oxford University · Nuffield Lab of Ophthalmology", quote: "The eye is as much a clock as it is a camera." },
  { name: "Dr. Rebecca Robbins, PhD", title: "Harvard Medical School · Division of Sleep Medicine", quote: "Sleep hygiene starts with sensory environment control." },
];

const faqs = [
  { q: "What is the vagus nerve and how does it relate to sleep?", a: "The vagus nerve is the primary conduit of the parasympathetic nervous system. Stimulating its auricular branch (accessible via the ear) shifts your body from sympathetic (alert/stressed) to parasympathetic (calm/rest) mode. This is the mechanism behind deep pressure therapy and CES microcurrent stimulation." },
  { q: "How long before the clinical benefits of CES become noticeable?", a: "Most clinical trials report measurable improvements in sleep onset latency within 2-4 weeks of daily 20-60 minute sessions. A 2022 RCT in athletes with insomnia found significant PSQI score reductions after 4 weeks of CES compared to CBT-I." },
  { q: "Can blue light blocking glasses replace a sleep mask?", a: "No. Glasses only filter direct light entering the pupil. A properly sealed mask blocks peripheral light leakage that still stimulates melanopsin-containing RGCs across the entire retina. The 3D nasal baffle in SOMNI's mask is tested at 10,000 lux with zero detectable penetration." },
  { q: "Is white noise safe for long-term use?", a: "Yes, at normal listening volumes (below 50-60 dB). The 2021 meta-analysis found no adverse effects. Set volume to the level of a quiet conversation or soft shower. The device should mask, not dominate, ambient noise." },
  { q: "Why four products instead of one all-in-one device?", a: "Different sensory pathways require different form factors. A sleep mask needs to be worn. White noise needs room coverage. CES needs precise electrode placement on the ear. Pillow spray needs direct textile contact. Combining all four into one device would compromise each pathway's effectiveness." },
];

export default function SciencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-abyss">
      {/* ══════ HERO ══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-abyss to-abyss" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-moonlight/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-moonlight/2 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium mb-6">The Science Behind SOMNI</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-cream leading-[1.05]">
              Sleep Is <span className="text-moonlight">Sensory.</span>
            </h1>
            <p className="mt-6 text-mist/80 text-lg max-w-[40ch] mx-auto leading-relaxed">
              Four biological pathways. Each backed by peer-reviewed research. Together they change how your brain decides it&apos;s time to sleep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-cream font-bold mb-2">{s.value}</p>
              <p className="text-xs text-cream/65 leading-relaxed mb-2">{s.label}</p>
              <p className="text-[10px] text-moonlight/30 font-mono leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ WHAT: Four Pathways ══════ */}
      <section className="max-w-5xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">WHAT</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-4">The Four Sensory Pathways of Sleep</h2>
          <p className="text-mist/60 text-sm max-w-[56ch]">Your brain processes sleep through four independent channels. Each has its own neural mechanism, its own research, and its own therapeutic target.</p>
        </motion.div>

        <div className="space-y-6">
          {pathways.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-72 shrink-0 p-8 flex flex-col items-center justify-center relative overflow-hidden"
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)`,
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-moonlight/10 flex items-center justify-center mb-4">
                    <p.icon size={32} className="text-moonlight" weight="duotone" />
                  </div>
                  <p className="text-moonlight text-xs tracking-[0.2em] font-bold">{p.sense}</p>
                  <p className="text-cream text-lg font-display font-bold mt-1">{p.title}</p>
                </div>
                <div className="flex-1 p-8">
                  <p className="font-display text-lg text-cream font-bold mb-3">{p.head}</p>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4">{p.body}</p>
                  <p className="text-[11px] text-mist/30 font-mono leading-relaxed border-t border-moonlight/10 pt-4">{p.ref}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ WHY: Research Foundation ══════ */}
      <section className="bg-white/[0.015] py-24 mb-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">WHY</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-4">Research Foundation</h2>
            <p className="text-mist/50 text-sm max-w-[48ch] mx-auto">Every SOMNI product is grounded in published, peer-reviewed evidence. Here are the papers.</p>
          </motion.div>

          {/* Papers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {papers.map((paper, i) => (
              <motion.a
                key={paper.title}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group glass-card p-6 flex flex-col hover:border-moonlight/25 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-moonlight/10 flex items-center justify-center shrink-0 group-hover:bg-moonlight/15 transition-colors">
                    <Article size={16} className="text-moonlight/50 group-hover:text-moonlight/70" weight="duotone" />
                  </div>
                  <p className="text-[10px] text-mist/30 font-mono leading-tight">{paper.journal}</p>
                </div>
                <h4 className="font-display text-sm text-cream font-bold mb-2 group-hover:text-moonlight transition-colors flex-1">{paper.title}</h4>
                <p className="text-[10px] text-mist/30 mb-3">{paper.authors}</p>
                <p className="text-cream/50 text-xs leading-relaxed mb-4">{paper.finding}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.04]">
                  <span className="text-[10px] text-moonlight/40 font-mono">{paper.pmid ? `PMID ${paper.pmid}` : "Open Access"}</span>
                  <ArrowRight size={12} className="text-moonlight/30 group-hover:text-moonlight/60 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Expert Quotes */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-moonlight/40 text-xs uppercase tracking-[0.15em] font-medium text-center mb-6">What Leading Sleep Researchers Say</p>
            <div className="grid md:grid-cols-3 gap-4">
              {experts.slice(0, 3).map((expert, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-moonlight/10 mx-auto mb-4 flex items-center justify-center">
                    <Brain size={20} className="text-moonlight/40" weight="duotone" />
                  </div>
                  <p className="font-display text-sm text-cream font-bold">{expert.name}</p>
                  <p className="text-[10px] text-mist/35 mt-1 mb-3">{expert.title}</p>
                  <p className="text-cream/50 text-xs italic leading-relaxed">&ldquo;{expert.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ HOW: Products ══════ */}
      <section className="max-w-5xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">HOW</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-4">How SOMNI Works</h2>
          <p className="text-mist/50 text-sm max-w-[48ch]">Four products. Four pathways. One protocol. Each targets a specific mechanism validated by independent research.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { step: "01", sense: "LUX", name: "3D Contour Sleep Mask", price: "$49", slug: "3d-contour-sleep-mask", img: "/products/mask-3d-1.jpg", desc: "15mm-deep eye cups eliminate ocular pressure. Integrated nasal baffle achieves true 100% light occlusion at 10,000 lux. BT 6.0 audio with ultra-thin 0.8mm speakers." },
            { step: "02", sense: "SONUS", name: "White Noise + Aroma Machine", price: "$89", slug: "white-noise-aroma-machine", img: "/products/white-noise-aroma-machine/product_0.webp", desc: "Non-looping sound generation with adaptive volume. 7 profiles. Built-in 200ml aroma diffuser. Realistic 3D flame night light." },
            { step: "03", sense: "TACTUS", name: "CES Sleep Therapy Device", price: "$79", slug: "acupressure-sleep-mat", img: "/products/acupressure-sleep-mat/product_4.webp", desc: "Ear-clip microcurrent stimulation targets the auricular vagus nerve. 3 intensity levels. 1000mAh rechargeable. 40+ years of clinical evidence." },
            { step: "04", sense: "OLFACIO", name: "Deep Sleep Pillow Spray", price: "$29", slug: "deep-sleep-pillow-spray", img: "/products/deep-sleep-pillow-spray/product_0.webp", desc: "Lavender + chamomile formula with pharmaceutical-grade melatonin. Absorbed through inhalation, bypassing digestion. 15-minute peak onset." },
          ].map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group hover:border-moonlight/20 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-abyss/60">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-display text-3xl text-cream/20 font-bold">{p.step}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-moonlight font-bold bg-moonlight/15 px-2 py-1 rounded">{p.sense}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="font-display text-lg text-cream font-bold">{p.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-base text-cream font-bold mb-2">{p.name}</h4>
                <p className="text-cream/50 text-xs leading-relaxed mb-4">{p.desc}</p>
                <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-1.5 text-xs text-moonlight hover:text-moonlight/70 font-medium transition-colors">
                  View Product <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="max-w-3xl mx-auto px-6 mb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-3">Learn More</p>
          <h2 className="font-display text-2xl md:text-3xl text-cream font-bold">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
                <span className="font-display text-sm text-cream font-bold pr-4">{faq.q}</span>
                <CaretRight size={14} className={`text-moonlight/40 shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} weight="bold" />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <p className="text-cream/55 text-sm leading-relaxed border-t border-moonlight/10 pt-4">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ RESEARCHER CTA ══════ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 text-center">
          <Microscope size={28} className="text-moonlight/50 mx-auto mb-5" weight="duotone" />
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Are you a researcher or healthcare professional?</p>
          <p className="text-cream/55 text-sm max-w-[44ch] mx-auto mb-8 leading-relaxed">
            Access our full research bibliography, raw clinical data, and partner studies. Contact our science team for detailed documentation and collaboration opportunities.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3">
            Contact Science Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
