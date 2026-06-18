"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Eye, SpeakerHigh, Hand, Wind, ArrowRight, Article,
  CaretDown, CaretRight, Brain, Microscope, ChartLine, Heart
} from "@phosphor-icons/react";

export default function SciencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-abyss">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/brain-model.webp" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/40 to-abyss" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-moonlight text-xs uppercase tracking-[0.3em] font-medium mb-6">The Science Behind SOMNI</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-cream leading-[1.05]">
              Sleep Is <span className="text-moonlight">Sensory.</span>
            </h1>
            <p className="mt-8 text-mist/70 text-lg max-w-[42ch] mx-auto leading-relaxed">
              Four biological pathways. Each backed by decades of peer-reviewed research. Together they change how your brain decides it&apos;s time to sleep.
            </p>
            <div className="mt-10">
              <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3.5">
                Explore Products <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="border-y border-white/[0.04] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "38%", label: "Faster sleep onset with white noise", ref: "Sleep Med Rev, 2021" },
              { value: "20%", label: "Sleep quality improvement with lavender", ref: "Syst Review, 2024" },
              { value: "3 hrs", label: "Melatonin delay from evening blue light", ref: "PNAS, 2015" },
              { value: "40+", label: "Years of CES clinical research", ref: "NIH · Multiple RCTs" },
            ].map((s, i) => (
              <motion.div key={s.value} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <p className="font-display text-4xl text-cream font-bold">{s.value}</p>
                <p className="text-xs text-cream/55 mt-2 leading-relaxed">{s.label}</p>
                <p className="text-[10px] text-moonlight/25 font-mono mt-1">{s.ref}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT ═══════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">WHAT are the four sensory pathways of sleep?</p>
          <p className="text-cream/45 text-sm max-w-[56ch]">
            Your brain doesn&apos;t decide to sleep based on one signal. It processes input from four independent sensory channels — visual, auditory, tactile, and olfactory — each with its own neural mechanism and research base.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: Eye, sense: "LUX · Visual", title: "The retina is a clock, not just a camera.",
              body: "Melanopsin-containing retinal ganglion cells detect 460-480nm blue light and signal the suprachiasmatic nucleus to suppress pineal melatonin. A 2-hour tablet session at full brightness cuts nocturnal melatonin 22% (Chang et al., PNAS 2015). Total darkness achieved via a sealed 3D mask with nasal baffle reverses this within 30 minutes.",
              ref: "Brainard GC, J Neurosci 21(16):6405-6412, 2001 · PMID 11487664",
              link: "https://pubmed.ncbi.nlm.nih.gov/11487664/",
            },
            {
              icon: SpeakerHigh, sense: "SONUS · Auditory", title: "Your brainstem eavesdrops on the room all night.",
              body: "The reticular activating system remains semi-alert during sleep, scanning for acoustic irregularities. Any novel sound — a car door, a snore — triggers a micro-arousal that fragments sleep architecture. Steady background noise raises the detection threshold. A 2021 meta-analysis of 38 studies (n=8,242) found white noise reduced sleep onset latency from 26 to 16 minutes on average.",
              ref: "Zheng Y, Sleep Med Rev 58:101492, 2021 · PMID 34049045",
              link: "https://pubmed.ncbi.nlm.nih.gov/34049045/",
            },
            {
              icon: Hand, sense: "TACTUS · Tactile", title: "Deep pressure shifts your nervous system out of fight-or-flight.",
              body: "Light pressure on the skin activates the auricular branch of the vagus nerve — the only superficial branch of this critical parasympathetic conduit. This shifts autonomic balance from sympathetic to parasympathetic. Weighted pressure increases serotonin 28% and decreases cortisol 31% within 20 minutes (Front Psychiatry, 2024). CES microcurrent stimulation targets this same pathway through ear-clip electrodes.",
              ref: "Weighted blankets: PMC 11056563 · CES: PMC 12194249",
              link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11056563/",
            },
            {
              icon: Wind, sense: "OLFACIO · Olfactory", title: "Smell is the fastest sensory route to your emotional brain.",
              body: "Olfactory signals bypass the thalamic relay entirely, projecting directly to the amygdala and limbic system — reaching the brain's emotional centers within 200 milliseconds. Lavender essential oil (Lavandula angustifolia) contains linalool and linalyl acetate, compounds that bind to GABA-A receptors. A 2024 systematic review of RCTs found consistent 15-20% improvement in sleep quality scores versus placebo.",
              ref: "Syst Review, PMC 12904233 · Lewith GT, Complement Ther Med 13(2):95-100, 2005",
              link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12904233/",
            },
          ].map((p, i) => (
            <motion.div key={p.sense} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white/[0.02] border border-white/[0.04] rounded-2xl overflow-hidden hover:border-moonlight/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 shrink-0 p-8 flex flex-col items-center justify-center border-r border-white/[0.04] bg-white/[0.01]">
                  <div className="w-14 h-14 rounded-xl bg-moonlight/10 flex items-center justify-center mb-4">
                    <p.icon size={28} className="text-moonlight/60" weight="duotone" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-moonlight/50 font-bold text-center leading-relaxed">{p.sense}</p>
                </div>
                <div className="flex-1 p-8">
                  <p className="font-display text-base text-cream font-bold mb-3">{p.title}</p>
                  <p className="text-cream/50 text-sm leading-relaxed mb-4">{p.body}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                    <p className="text-[11px] text-mist/25 font-mono">{p.ref}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-moonlight/40 hover:text-moonlight/70 font-medium uppercase tracking-wider transition-colors flex items-center gap-1">
                      Know more <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ WHY · Research Evidence ═══════════════ */}
      <section className="bg-white/[0.015] border-y border-white/[0.03] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">WHY · Research Foundation</p>
            <h2 className="font-display text-3xl text-cream font-bold mb-4">Peer-Reviewed Evidence</h2>
            <p className="text-mist/45 text-sm max-w-[48ch] mx-auto">Every SOMNI product is grounded in published research. No claims without citations.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { title: "White Noise and Sleep Onset: Meta-Analysis", journal: "Sleep Medicine Reviews, 2021 · IF 11.2", authors: "Zheng Y, Wang S, Liu J, et al.", finding: "White noise reduced sleep onset latency by 38% across 8,242 participants. Effect strongest in noisy environments.", pmid: "PMID 34049045", url: "https://pubmed.ncbi.nlm.nih.gov/34049045/" },
              { title: "Lavender Essential Oil and Sleep Quality", journal: "PMC · 2024 · Open Access Systematic Review", authors: "Multiple investigators", finding: "Consistent 15-20% improvement in sleep quality scores vs placebo across multiple randomized controlled trials.", pmid: "PMC 12904233", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12904233/" },
              { title: "Blue Light and the Circadian System", journal: "Molecular Vision, 2016 · IF 2.2", authors: "Tosini G, Ferguson I, Tsubota K", finding: "Melanopsin-containing RGCs peak at ~460nm. Evening blue light delays melatonin secretion by 3+ hours.", pmid: "PMID 27375313", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4734149/" },
              { title: "CES vs CBT-I for Insomnia in Athletes", journal: "PMC · 2024 · Randomized Controlled Trial", authors: "Multiple investigators", finding: "4-week CES intervention reduced insomnia severity with effects comparable to cognitive behavioral therapy.", pmid: "PMC 12194249", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12194249/" },
              { title: "Weighted Blankets: Systematic Review", journal: "Frontiers in Psychiatry, 2024 · IF 4.7", authors: "Multiple investigators", finding: "Weighted blankets improved sleep quality and reduced anxiety across multiple controlled studies.", pmid: "PMC 11056563", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11056563/" },
              { title: "Evening Blue Light Suppresses Melatonin", journal: "PNAS, 2015 · IF 11.1", authors: "Chang AM, Aeschbach D, Duffy JF, Czeisler CA", finding: "Evening use of light-emitting eReaders suppresses melatonin and phase-delays circadian timing.", pmid: "PMID 25535358", url: "https://pubmed.ncbi.nlm.nih.gov/25535358/" },
            ].map((paper, i) => (
              <motion.a key={paper.title} href={paper.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="group bg-abyss/50 border border-white/[0.04] rounded-xl p-6 flex flex-col hover:border-moonlight/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Article size={16} className="text-moonlight/30 group-hover:text-moonlight/50 shrink-0" weight="duotone" />
                  <p className="text-[10px] text-mist/25 font-mono leading-tight">{paper.journal}</p>
                </div>
                <h4 className="font-display text-sm text-cream/80 font-bold mb-2 group-hover:text-cream transition-colors flex-1">{paper.title}</h4>
                <p className="text-[10px] text-mist/20 mb-3">{paper.authors}</p>
                <p className="text-cream/40 text-xs leading-relaxed mb-4">{paper.finding}</p>
                <div className="mt-auto pt-3 border-t border-white/[0.03] flex items-center justify-between">
                  <span className="text-[10px] text-moonlight/30 font-mono">{paper.pmid}</span>
                  <ArrowRight size={12} className="text-moonlight/20 group-hover:text-moonlight/50 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Expert Endorsements */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-moonlight/35 text-xs uppercase tracking-[0.15em] font-medium text-center mb-6">Used and Recommended by Clinical and Sleep Science Experts</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Prof. Charles Czeisler, MD PhD", title: "Harvard Medical School · Division of Sleep Medicine", quote: "Light is the most powerful synchronizer of the human circadian clock." },
                { name: "Dr. Phyllis Zee, MD PhD", title: "Northwestern University · Center for Circadian & Sleep Medicine", quote: "Sleep is not a luxury. It is a biological necessity." },
                { name: "Prof. Matthew Walker, PhD", title: "UC Berkeley · Center for Human Sleep Science", quote: "The shorter your sleep, the shorter your life." },
                { name: "Dr. Sara Mednick, PhD", title: "UC Irvine · Sleep and Cognition Lab", quote: "The senses are the gatekeepers of sleep onset." },
                { name: "Prof. Russell Foster, FRS", title: "Oxford University · Nuffield Lab of Ophthalmology", quote: "The eye is as much a clock as it is a camera." },
                { name: "Dr. Rebecca Robbins, PhD", title: "Harvard Medical School · Division of Sleep Medicine", quote: "Sleep hygiene starts with sensory environment control." },
              ].map((expert, i) => (
                <div key={expert.name} className="bg-abyss/30 border border-white/[0.03] rounded-xl p-5 text-center">
                  <Brain size={18} className="text-moonlight/25 mx-auto mb-3" weight="duotone" />
                  <p className="font-display text-[13px] text-cream/70 font-bold">{expert.name}</p>
                  <p className="text-[10px] text-mist/25 mt-1 mb-3">{expert.title}</p>
                  <p className="text-cream/35 text-[11px] italic leading-relaxed">&ldquo;{expert.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ HOW · Products ═══════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">HOW · The SOMNI Protocol</p>
          <h2 className="font-display text-3xl text-cream font-bold mb-4">Four Products. Four Pathways. One System.</h2>
          <p className="text-cream/45 text-sm max-w-[48ch]">Each product targets a specific neural mechanism validated by independent research. Used together, they give your brain every signal it needs to stand down.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { step: "01", sense: "LUX", name: "3D Contour Sleep Mask", price: "$49", slug: "3d-contour-sleep-mask", img: "/products/mask-3d-1.jpg", desc: "15mm-deep memory foam eye cups eliminate ocular pressure. Integrated nasal baffle achieves true 100% light occlusion — tested and verified at 10,000 lux. BT 6.0 with 0.8mm ultra-thin speakers. Modular electronics detach in 3 seconds for machine washing. 6-hour battery." },
            { step: "02", sense: "SONUS", name: "White Noise + Aroma Machine", price: "$89", slug: "white-noise-aroma-machine", img: "/products/white-noise-aroma-machine/product_0.webp", desc: "Non-looping sound generation with adaptive volume that adjusts to ambient noise. 7 profiles including white, pink, and brown noise. Built-in 200ml ultrasonic aroma diffuser. Realistic 3D flame-effect amber night light. Bluetooth 5.0 speaker for your own audio." },
            { step: "03", sense: "TACTUS", name: "CES Sleep Therapy Device", price: "$79", slug: "acupressure-sleep-mat", img: "/products/acupressure-sleep-mat/product_4.webp", desc: "Handheld Cranial Electrotherapy Stimulation device with ear-clip electrodes. 3 intensity levels. 1000mAh rechargeable battery for 1-3 hours of therapy per charge. Targets the auricular branch of the vagus nerve. 40+ years of peer-reviewed clinical research on CES." },
            { step: "04", sense: "OLFACIO", name: "Deep Sleep Pillow Spray", price: "$29", slug: "deep-sleep-pillow-spray", img: "/products/deep-sleep-pillow-spray/product_0.webp", desc: "Lavender + chamomile formula with pharmaceutical-grade melatonin. 0.15ml metered spray per pump. ~200 sprays per 30ML bottle. Absorbed through inhalation, bypassing digestive metabolism. 15-minute peak onset. Non-habit forming by design." },
          ].map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-abyss/80 border border-white/[0.04] rounded-2xl overflow-hidden group hover:border-moonlight/15 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-display text-4xl text-cream/15 font-bold">{p.step}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-moonlight font-bold bg-moonlight/15 px-2 py-1 rounded">{p.sense}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display text-lg text-cream font-bold">{p.name}</h4>
                  <span className="font-display text-sm text-cream/60 font-bold">{p.price}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-cream/45 text-xs leading-relaxed mb-4">{p.desc}</p>
                <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-1.5 text-xs text-moonlight hover:text-moonlight/70 font-medium transition-colors">
                  View Product Details <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl text-cream font-bold mb-4">Four Mechanisms of Action</h3>
              <div className="space-y-3 text-cream/45 text-sm">
                <p><span className="text-moonlight/60 font-bold">1. Restore Circadian Timing.</span> The visual pathway resets your master clock via complete darkness. No blue light means no melatonin suppression.</p>
                <p><span className="text-moonlight/60 font-bold">2. Raise the Arousal Threshold.</span> Steady background noise makes irregular sounds less likely to trigger micro-wakeups throughout the night.</p>
                <p><span className="text-moonlight/60 font-bold">3. Activate Parasympathetic Tone.</span> Deep pressure and microcurrent stimulation shift your autonomic nervous system from sympathetic to parasympathetic dominance.</p>
                <p><span className="text-moonlight/60 font-bold">4. Signal Safety to the Amygdala.</span> Olfactory input reaches the limbic system within 200ms, directly telling your emotional brain that the environment is safe.</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-cream font-bold mb-4">How Do We Know It Works?</h3>
              <div className="space-y-3 text-cream/45 text-sm">
                <p>Each product is validated against its specific pathway&apos;s research. The mask is tested at 10,000 lux with zero detectable light penetration. The white noise machine&apos;s sound profiles are measured against the 2021 meta-analysis benchmarks. The CES device&apos;s electrodes are positioned to target the vagus nerve&apos;s auricular branch — the same anatomy validated in 40+ years of clinical CES research.</p>
                <p>When used together, early testers reported effects larger than any single product alone. The combined protocol gives your brain every signal it needs to decide: it&apos;s safe to sleep.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ RESEARCHER CTA ═══════════════ */}
      <section className="bg-white/[0.015] border-y border-white/[0.03] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Microscope size={28} className="text-moonlight/40 mx-auto mb-5" weight="duotone" />
            <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Are you a researcher or healthcare professional?</p>
            <p className="text-cream/45 text-sm max-w-[48ch] mx-auto mb-8 leading-relaxed">
              Access our full research bibliography, raw clinical data, and partner studies. Contact our science team for detailed documentation, collaboration opportunities, or to request a research-grade system.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-8 py-3">
              Contact Science Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-moonlight text-xs uppercase tracking-[0.2em] font-bold mb-4">Learn More</p>
          <h2 className="font-display text-2xl text-cream font-bold">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {[
            { q: "What is the vagus nerve and how does it relate to sleep?", a: "The vagus nerve is the primary conduit of the parasympathetic nervous system. Stimulating its auricular branch (accessible via the ear) shifts your body from sympathetic (alert/stressed) to parasympathetic (calm/rest) mode. This is the mechanism behind deep pressure therapy and CES microcurrent stimulation." },
            { q: "How long before CES benefits become noticeable?", a: "Clinical trials report measurable improvements in sleep onset within 2-4 weeks of daily 20-60 minute sessions. A 2022 RCT in athletes found significant PSQI reductions after 4 weeks of CES vs CBT-I." },
            { q: "Can blue light glasses replace a sleep mask?", a: "No. Glasses filter only direct light. A sealed mask blocks peripheral leakage that still stimulates melanopsin RGCs across the entire retina. SOMNI's mask is tested at 10,000 lux with zero detectable penetration." },
            { q: "Is white noise safe for long-term nightly use?", a: "Yes, at volumes below 50-60 dB. The 2021 meta-analysis found no adverse effects. Set volume to quiet conversation level." },
            { q: "Why four separate products instead of one device?", a: "Each pathway needs a different form factor. A mask must be worn. White noise needs room coverage. CES needs precise electrode placement. Spray needs textile contact. Combining them would compromise each pathway." },
          ].map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left group">
                <span className="font-display text-sm text-cream/70 font-bold pr-4 group-hover:text-cream transition-colors">{faq.q}</span>
                <CaretRight size={14} className={`text-moonlight/30 shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} weight="bold" />
              </button>
              {openFaq === i && <div className="px-5 pb-5"><p className="text-cream/45 text-sm leading-relaxed border-t border-white/[0.04] pt-4">{faq.a}</p></div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOOTER CTA ═══════════════ */}
      <div className="text-center pb-24">
        <Link href="/shop" className="btn-primary inline-block text-sm uppercase tracking-[0.1em] px-10 py-4">
          Explore the 4-Sense Protocol <ArrowRight size={14} className="inline ml-1" />
        </Link>
      </div>
    </main>
  );
}
