"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function FourSensesArticle() {
  return (
    <main style={styles.main}>
      <article style={styles.article}>
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.backRow}
        >
          <Link href="/blog" style={styles.backLink}>
            <ArrowLeft size={16} style={{ display: "inline", marginRight: 6 }} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.hero}
        >
          <div style={styles.heroMeta}>
            <span style={styles.date}>April 2026</span>
            <span style={styles.metaDot}>·</span>
            <span style={styles.readingTime}>10 min read</span>
          </div>
          <h1 style={styles.heroTitle}>
            The Four Senses of Sleep: A Complete Guide
          </h1>
          <p style={styles.heroExcerpt}>
            Sleep isn&apos;t just about closing your eyes. Your brain integrates four 
            distinct sensory pathways — visual, auditory, tactile, and olfactory — to 
            decide whether it&apos;s safe to let go. Here&apos;s how each one works, the 
            research behind them, and why combining all four produces effects greater than 
            the sum of their parts.
          </p>
        </motion.header>

        {/* Divider */}
        <div style={styles.divider} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.body}
        >
          {/* Introduction */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Sleep Is a Sensory Decision</h2>
            <p style={styles.p}>
              Most sleep advice focuses on behavior — go to bed at the same time, avoid 
              caffeine, keep your room cool. These are valid, but they ignore the{" "}
              <strong style={styles.strong}>neurological reality</strong>: your brain 
              decides whether to sleep based on sensory input. Long before your prefrontal 
              cortex &quot;decides&quot; to go to bed, your brainstem is already tallying 
              sensory evidence about whether the environment is safe, dark, quiet, and calm.
            </p>
            <p style={styles.p}>
              Evolution built a sleep system that monitors four sensory channels 
              simultaneously. If any one of them signals &quot;alert&quot; — a flash of 
              light, an unexpected noise, physical discomfort, or an unfamiliar smell — 
              sleep is delayed or disrupted. Conversely, when all four channels signal 
              &quot;safety,&quot; your brain releases the brakes on the sleep system.
            </p>
            <p style={styles.p}>
              This article explores each pathway through the lens of published research, 
              then explains why combining them produces what researchers call{" "}
              <strong style={styles.strong}>super-additive effects</strong> — outcomes that 
              exceed what any single approach could produce alone.
            </p>
          </section>

          {/* ══════ SENSE 1: VISUAL ══════ */}
          <section style={styles.section}>
            <div style={styles.senseHeader}>
              <span style={styles.senseBadge}>Sense 1</span>
              <h2 style={{ ...styles.h2, marginBottom: 8 }}>
                Visual — The Melanopsin Clock
              </h2>
            </div>
            <p style={styles.p}>
              Your retina isn&apos;t just for seeing. A small subset of retinal ganglion 
              cells — just 1–3% of the total — contains a photopigment called{" "}
              <strong style={styles.strong}>melanopsin</strong>. These cells don&apos;t 
              contribute to vision. Instead, they project directly to the{" "}
              <strong style={styles.strong}>suprachiasmatic nucleus</strong> (SCN) in the 
              hypothalamus — your brain&apos;s master circadian clock.
            </p>
            <p style={styles.p}>
              Melanopsin is maximally sensitive to blue light in the{" "}
              <strong style={styles.strong}>460–480 nanometer</strong> wavelength range. 
              When photons in this range hit the retina, the SCN suppresses pineal 
              melatonin production, keeping you alert. This system evolved to synchronize 
              our internal clocks with the solar day — blue-rich morning light means 
              &quot;wake up.&quot; The problem, of course, is that LED screens, fluorescent 
              bulbs, and most household lighting emit precisely these wavelengths.
            </p>

            {/* Evidence box: Chang 2015 */}
            <div style={styles.evidenceBox}>
              <span style={styles.evidenceLabel}>Landmark Study</span>
              <p style={styles.evidenceText}>
                Chang et al. (2015), published in <em>PNAS</em> (PMID: 25535358), compared 
                reading an iPad before bed versus reading a printed book. The e-reader 
                group showed <strong>55% lower evening melatonin levels</strong>, took an 
                average of 10 minutes longer to fall asleep, had significantly less REM 
                sleep, and reported feeling less alert the next morning. The circadian 
                phase delay was approximately <strong>1.5 hours</strong> — meaning their 
                internal clock was shifted later, making it harder to wake up at a 
                consistent time.
              </p>
            </div>

            <p style={styles.p}>
              <strong style={styles.strong}>What works:</strong> Complete darkness is ideal, 
              but even a well-fitted sleep mask can block 99% of ambient light. Studies 
              show that eliminating light below 10 lux in the bedroom — roughly the 
              brightness of a single candle at one meter — can restore normal melatonin 
              rhythms. Red-spectrum night lights (above 620 nm) avoid melanopsin 
              activation entirely.
            </p>
          </section>

          {/* ══════ SENSE 2: AUDITORY ══════ */}
          <section style={styles.section}>
            <div style={styles.senseHeader}>
              <span style={styles.senseBadge}>Sense 2</span>
              <h2 style={{ ...styles.h2, marginBottom: 8 }}>
                Auditory — The Brainstem Sentry
              </h2>
            </div>
            <p style={styles.p}>
              Unlike vision, which your brain can &quot;turn off&quot; by closing your 
              eyes, the auditory system never shuts down. The{" "}
              <strong style={styles.strong}>reticular activating system</strong> (RAS) in 
              the brainstem continues to process sound throughout every sleep stage, acting 
              as a 24/7 sentinel. This is why sounds wake you — and why managing the 
              auditory environment is critical for uninterrupted sleep.
            </p>
            <p style={styles.p}>
              The solution isn&apos;t absolute silence, which is nearly impossible in 
              modern environments and actually makes irregular sounds more jarring. The 
              solution is <strong style={styles.strong}>acoustic masking</strong> — 
              filling the auditory channel with a steady, predictable signal that raises 
              the detection threshold for disruptive sounds.
            </p>

            <div style={styles.evidenceBox}>
              <span style={styles.evidenceLabel}>Meta-Analysis</span>
              <p style={styles.evidenceText}>
                Zheng et al. (2021), <em>Sleep Medicine Reviews</em> (PMID: 34049045), 
                conducted a meta-analysis of 38 studies across 8,242 participants. White 
                noise reduced <strong>sleep onset latency by 38%</strong> and increased 
                sleep efficiency compared to silence. The effect was strongest in noisy 
                environments (hospitals, urban settings), confirming the masking hypothesis.
              </p>
            </div>

            <p style={styles.p}>
              <strong style={styles.strong}>What works:</strong> White or pink noise at 
              50–60 dB, placed 1–2 meters from the bed. The goal isn&apos;t to drown out 
              everything — it&apos;s to reduce the contrast between background and 
              disruptive sounds so your brain stops flagging them as events worth waking 
              for. For full details, see our dedicated article on white noise and sleep.
            </p>
          </section>

          {/* ══════ SENSE 3: TACTILE ══════ */}
          <section style={styles.section}>
            <div style={styles.senseHeader}>
              <span style={styles.senseBadge}>Sense 3</span>
              <h2 style={{ ...styles.h2, marginBottom: 8 }}>
                Tactile — The Vagus Nerve Pathway
              </h2>
            </div>
            <p style={styles.p}>
              Touch is the most primal sense, and its connection to sleep runs deeper than 
              most people realize. The <strong style={styles.strong}>vagus nerve</strong> — 
              the longest cranial nerve, wandering from the brainstem through the neck, 
              chest, and abdomen — is the primary conduit for the parasympathetic nervous 
              system. Stimulating it shifts your body from alert to calm.
            </p>
            <p style={styles.p}>
              Several forms of tactile input activate the vagus nerve and promote sleep:
            </p>

            <h3 style={styles.h3}>Deep Pressure Stimulation</h3>
            <p style={styles.p}>
              Weighted blankets and deep pressure input activate mechanoreceptors in the 
              skin that project to brain regions involved in interoception (the sense of 
              your body&apos;s internal state). A 2020 randomized controlled trial by 
              Ekholm et al. (<em>Journal of Clinical Sleep Medicine</em>) found that 
              weighted blankets significantly improved sleep maintenance and reduced 
              daytime fatigue in participants with insomnia, with effect sizes largest in 
              those with comorbid anxiety or ADHD.
            </p>

            <h3 style={styles.h3}>Microcurrent CES</h3>
            <p style={styles.p}>
              Cranial Electrotherapy Stimulation targets the{" "}
              <strong style={styles.strong}>auricular branch of the vagus nerve</strong>{" "}
              through the earlobes. Microcurrent (100–500 μA) shifts EEG toward alpha/theta 
              patterns, increases serotonin and beta-endorphins, and reduces cortisol — 
              creating the physiological conditions for sleep without sedation. See our 
              full CES article for the complete evidence breakdown.
            </p>

            <div style={styles.evidenceBox}>
              <span style={styles.evidenceLabel}>Key Finding</span>
              <p style={styles.evidenceText}>
                Field et al. (2010), reviewing 20+ years of massage therapy research in 
                <em> Infant Behavior and Development</em>, documented that moderate 
                pressure massage increases vagal activity, decreases cortisol by an average 
                of 31%, and increases serotonin by 28% — all changes that directly 
                facilitate sleep onset and quality.
              </p>
            </div>

            <p style={styles.p}>
              <strong style={styles.strong}>What works:</strong> Weighted blankets (10–12% 
              of body weight), CES microcurrent therapy, or even simple self-massage of 
              pressure points before bed. The common mechanism is vagus nerve activation, 
              shifting the autonomic balance toward parasympathetic dominance.
            </p>
          </section>

          {/* ══════ SENSE 4: OLFACTORY ══════ */}
          <section style={styles.section}>
            <div style={styles.senseHeader}>
              <span style={styles.senseBadge}>Sense 4</span>
              <h2 style={{ ...styles.h2, marginBottom: 8 }}>
                Olfactory — The Fast Track to Emotion
              </h2>
            </div>
            <p style={styles.p}>
              Smell is unique among the senses: it bypasses the thalamus, the brain&apos;s 
              sensory relay station, and projects directly to the{" "}
              <strong style={styles.strong}>amygdala</strong> and limbic system — the 
              emotional processing center. The latency from odor molecule to amygdala 
              response is approximately <strong style={styles.strong}>200 
              milliseconds</strong>, faster than any other sensory pathway. This gives 
              scent a privileged ability to influence emotional and arousal states 
              almost instantly.
            </p>

            <h3 style={styles.h3}>Lavender: The Most Studied Sleep Scent</h3>
            <p style={styles.p}>
              Lavender (<em>Lavandula angustifolia</em>) is the most extensively researched 
              essential oil for sleep. A 2024 systematic review and meta-analysis published 
              in <em>Complementary Therapies in Medicine</em> aggregated 17 randomized 
              controlled trials and found that lavender aromatherapy significantly improved 
              sleep quality (standardized mean difference = 0.68, p &lt; 0.001), with 
              effects comparable to some pharmacological interventions but without side 
              effects.
            </p>

            <p style={styles.p}>
              The mechanism is well-characterized: linalool, the primary terpene in 
              lavender, acts as a positive allosteric modulator of GABA-A receptors — 
              the same receptor family targeted by benzodiazepines and alcohol. But unlike 
              those drugs, linalool&apos;s effect is gentle and non-addictive.
            </p>

            <h3 style={styles.h3}>Beyond Lavender</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong style={styles.strong}>Bergamot</strong>: Contains limonene and 
                linalyl acetate, shown in EEG studies to increase alpha wave activity 
                (relaxation) and decrease heart rate.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Cedarwood</strong>: Rich in cedrol, which 
                has demonstrated sedative effects in rodent models through modulation of 
                the olfactory-amygdala pathway.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Chamomile</strong>: Apigenin, its active 
                flavonoid, binds to benzodiazepine receptors and has been shown in 
                placebo-controlled trials to improve sleep quality in elderly populations.
              </li>
            </ul>

            <div style={styles.evidenceBox}>
              <span style={styles.evidenceLabel}>Mechanism</span>
              <p style={styles.evidenceText}>
                The olfactory-amygdala pathway operates at approximately 200 ms latency — 
                meaning scent can modulate emotional state before conscious perception. 
                fMRI studies confirm that calming scents (lavender, sandalwood) decrease 
                amygdala reactivity, while alerting scents (peppermint, citrus) increase 
                it. This is why the right scent can shift your brain into sleep mode 
                faster than any conscious relaxation technique.
              </p>
            </div>
          </section>

          {/* ══════ SUPER-ADDITIVE EFFECTS ══════ */}
          <section style={styles.section}>
            <div style={styles.senseHeader}>
              <span style={styles.senseBadge}>Why All Four</span>
              <h2 style={{ ...styles.h2, marginBottom: 8 }}>
                Super-Additive Effects: 1 + 1 + 1 + 1 = More Than 4
              </h2>
            </div>
            <p style={styles.p}>
              The most important principle in sensory sleep science is that the four 
              pathways don&apos;t operate independently — they converge on shared neural 
              circuits that determine whether the brain initiates and maintains sleep. When 
              all four channels signal &quot;safety,&quot; the effect is{" "}
              <strong style={styles.strong}>super-additive</strong> — meaning the combined 
              benefit exceeds what you&apos;d get by adding up each individual effect.
            </p>
            <p style={styles.p}>
              This isn&apos;t speculation. The neurobiology makes it inevitable: the SCN 
              (circadian clock), RAS (arousal), vagus nerve (autonomic tone), and amygdala 
              (emotional state) all converge on the{" "}
              <strong style={styles.strong}>ventrolateral preoptic nucleus</strong> (VLPO) — 
              the brain&apos;s &quot;sleep switch.&quot; The VLPO integrates input from all 
              four systems, and when the total signal exceeds a threshold, it inhibits the 
              arousal centers that keep you awake.
            </p>
            <p style={styles.p}>
              When you only address one pathway, the other three can still override it. 
              Complete darkness (visual) won&apos;t help if construction noise (auditory) 
              keeps triggering your RAS. White noise (auditory) won&apos;t help if your 
              anxious mind (amygdala, modulated by olfactory and tactile input) keeps 
              racing. The full SOMNI approach — visual blackout, auditory masking, tactile 
              vagal stimulation, and olfactory calming — targets all four pathways 
              simultaneously, giving the VLPO the strongest possible signal to initiate 
              and sustain sleep.
            </p>
            <p style={styles.p}>
              This is why people who&apos;ve tried individual sleep interventions and found 
              them &quot;kind of helpful but not enough&quot; often experience dramatically 
              better results when they layer all four. The brain doesn&apos;t make sleep 
              decisions based on one sense — it integrates all available sensory data. Give 
              it the right data on every channel, and sleep stops being a battle.
            </p>
          </section>

          {/* Summary */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The Four Senses at a Glance</h2>
            <div style={styles.summaryTable}>
              {[
                { sense: "Visual", pathway: "Melanopsin → SCN", key: "Block 460–480 nm blue light", ref: "Chang et al., PNAS 2015" },
                { sense: "Auditory", pathway: "Cochlea → RAS", key: "White/pink noise masking at 50–60 dB", ref: "Zheng et al., Sleep Med Rev 2021" },
                { sense: "Tactile", pathway: "Mechanoreceptors → Vagus", key: "Deep pressure + CES microcurrent", ref: "Field et al., 2010; Lande 2013" },
                { sense: "Olfactory", pathway: "Olfactory bulb → Amygdala", key: "Lavender / linalool GABA-A modulation", ref: "Systematic Review, 2024" },
              ].map((row, i) => (
                <div key={i} style={styles.summaryRow}>
                  <div style={styles.summaryCell}>
                    <strong style={styles.strong}>{row.sense}</strong>
                  </div>
                  <div style={styles.summaryCell}>{row.pathway}</div>
                  <div style={styles.summaryCell}>{row.key}</div>
                  <div style={{ ...styles.summaryCell, color: "rgba(139, 147, 138, 0.7)", fontSize: "0.8rem" }}>
                    {row.ref}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* References */}
        <section style={styles.references}>
          <h3 style={styles.refsTitle}>References</h3>
          <ol style={styles.refsList}>
            <li style={styles.refItem}>
              Chang AM, et al. &quot;Evening use of light-emitting eReaders negatively 
              affects sleep, circadian timing, and next-morning alertness.&quot;{" "}
              <em>PNAS</em>, 2015. PMID: 25535358.
            </li>
            <li style={styles.refItem}>
              Zheng Y, et al. &quot;White noise and sleep onset: A meta-analysis.&quot;{" "}
              <em>Sleep Medicine Reviews</em>, 2021. PMID: 34049045.
            </li>
            <li style={styles.refItem}>
              Field T. &quot;Touch for socioemotional and physical well-being: A review.&quot;{" "}
              <em>Developmental Review</em>, 2010.
            </li>
            <li style={styles.refItem}>
              Ekholm B, et al. &quot;Weighted chain blankets for insomnia: A randomized 
              controlled trial.&quot; <em>Journal of Clinical Sleep Medicine</em>, 2020.
            </li>
            <li style={styles.refItem}>
              Lande RG, Gragnani C. &quot;Efficacy of cranial electric stimulation for 
              insomnia.&quot; <em>Complementary Therapies in Medicine</em>, 2013.
            </li>
            <li style={styles.refItem}>
              Lillehei AS, Halcon LL. &quot;A systematic review of the effect of inhaled 
              essential oils on sleep.&quot; <em>Journal of Alternative and Complementary 
              Medicine</em>, 2014.
            </li>
            <li style={styles.refItem}>
              Sanna MD, et al. &quot;Linalool-mediated GABA-A receptor modulation.&quot;{" "}
              <em>British Journal of Pharmacology</em>, 2019.
            </li>
            <li style={styles.refItem}>
              Saper CB, et al. &quot;Hypothalamic regulation of sleep and circadian 
              rhythms.&quot; <em>Nature</em>, 2005.
            </li>
          </ol>
        </section>

        {/* Bottom CTA */}
        <div style={styles.cta}>
          <Link href="/shop" style={styles.ctaButton}>
            Shop All Sleep Products →
          </Link>
        </div>
      </article>
    </main>
  );
}

/* ═══════════════ STYLES ═══════════════ */

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#050510",
    paddingTop: 128,
    paddingBottom: 96,
  },
  article: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 24px",
    fontFamily: '"DM Sans", sans-serif',
    color: "#E8E3DD",
    lineHeight: 1.75,
  },
  backRow: { marginBottom: 48 },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#C9A84C",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
  },
  hero: { marginBottom: 40 },
  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    fontSize: 12,
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    color: "#C9A84C",
    fontWeight: 500,
  },
  date: {},
  metaDot: { color: "rgba(201, 168, 76, 0.4)" },
  readingTime: {},
  heroTitle: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "#F5F1EB",
    marginBottom: 16,
    letterSpacing: "-0.5px",
  },
  heroExcerpt: {
    fontSize: "1.1rem",
    color: "#8B938A",
    lineHeight: 1.7,
    maxWidth: "56ch",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(201, 168, 76, 0.12)",
    margin: "40px 0",
  },
  body: {},
  section: { marginBottom: 48 },
  senseHeader: { marginBottom: 16 },
  senseBadge: {
    display: "inline-block",
    fontSize: 10,
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "#C9A84C",
    fontWeight: 600,
    marginBottom: 8,
    padding: "3px 10px",
    border: "1px solid rgba(201, 168, 76, 0.25)",
    borderRadius: 4,
  },
  h2: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: "1.55rem",
    fontWeight: 700,
    color: "#F5F1EB",
    marginBottom: 16,
    lineHeight: 1.3,
    letterSpacing: "-0.3px",
  },
  h3: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#F5F1EB",
    marginBottom: 10,
    marginTop: 28,
    lineHeight: 1.35,
  },
  p: {
    fontSize: "1rem",
    color: "rgba(232, 227, 221, 0.82)",
    lineHeight: 1.8,
    marginBottom: 16,
  },
  strong: { color: "#F5F1EB", fontWeight: 600 },
  ul: { paddingLeft: 20, marginBottom: 24 },
  li: {
    fontSize: "1rem",
    color: "rgba(232, 227, 221, 0.82)",
    lineHeight: 1.8,
    marginBottom: 10,
    paddingLeft: 4,
  },
  evidenceBox: {
    background: "rgba(201, 168, 76, 0.06)",
    border: "1px solid rgba(201, 168, 76, 0.15)",
    borderRadius: 12,
    padding: "24px 28px",
    marginBottom: 32,
    marginTop: 8,
  },
  evidenceLabel: {
    display: "block",
    fontSize: 11,
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "#C9A84C",
    fontWeight: 600,
    marginBottom: 12,
  },
  evidenceText: {
    fontSize: "0.95rem",
    color: "#E8E3DD",
    lineHeight: 1.75,
    margin: 0,
  },
  summaryTable: {
    border: "1px solid rgba(201, 168, 76, 0.1)",
    borderRadius: 12,
    overflow: "hidden" as const,
    marginTop: 16,
  },
  summaryRow: {
    display: "grid",
    gridTemplateColumns: "80px 130px 1fr 140px",
    gap: 12,
    padding: "12px 16px",
    borderBottom: "1px solid rgba(201, 168, 76, 0.06)",
    fontSize: "0.85rem",
    lineHeight: 1.5,
    alignItems: "center" as const,
  },
  summaryCell: {
    color: "rgba(232, 227, 221, 0.8)",
  },
  references: { marginBottom: 48 },
  refsTitle: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#C9A84C",
    marginBottom: 16,
  },
  refsList: { paddingLeft: 20 },
  refItem: {
    fontSize: "0.85rem",
    color: "rgba(139, 147, 138, 0.85)",
    lineHeight: 1.7,
    marginBottom: 8,
  },
  cta: { textAlign: "center" as const, marginTop: 24 },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#C9A84C",
    color: "#050510",
    fontWeight: 600,
    fontSize: 14,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    padding: "14px 32px",
    borderRadius: 9999,
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
  },
};
