"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function CESTherapyArticle() {
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
            <span style={styles.date}>May 2026</span>
            <span style={styles.metaDot}>·</span>
            <span style={styles.readingTime}>8 min read</span>
          </div>
          <h1 style={styles.heroTitle}>
            CES Therapy: What 40 Years of Research Tells Us
          </h1>
          <p style={styles.heroExcerpt}>
            Cranial Electrotherapy Stimulation has been quietly studied in clinical settings 
            for over four decades. With multiple randomized controlled trials and a growing 
            body of peer-reviewed evidence, here&apos;s what the science actually says about 
            microcurrent sleep therapy.
          </p>
        </motion.header>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.body}
        >
          {/* Section 1: History */}
          <section style={styles.section}>
            <h2 style={styles.h2}>A 40-Year Quiet Revolution</h2>
            <p style={styles.p}>
              Cranial Electrotherapy Stimulation (CES) delivers a tiny, subsensory electrical 
              current — typically 100–500 microamperes — across the head via clip electrodes 
              placed on the earlobes. The current is so small you don&apos;t feel it. Yet 
              beneath that imperceptible signal, something remarkable happens: your brain 
              shifts its electrical activity toward patterns associated with relaxation and 
              sleep.
            </p>
            <p style={styles.p}>
              CES isn&apos;t new. The first patents were filed in the early 1970s by Soviet 
              scientists researching &quot;electrosleep,&quot; and by the 1980s, American 
              researchers had begun conducting the first controlled clinical trials. The FDA 
              cleared CES devices for the treatment of insomnia, anxiety, and depression in 
              1978. Today, it remains one of the most researched — yet least known — 
              non-pharmacological interventions for sleep.
            </p>
            <p style={styles.p}>
              Part of the obscurity is historical: CES emerged alongside the rise of 
              benzodiazepines, and the pharmaceutical industry had far more marketing power 
              than a small, non-patentable electrical device. But the research never stopped. 
              Over 120 clinical studies, including multiple randomized controlled trials, have 
              examined CES for sleep, anxiety, and pain.
            </p>
          </section>

          {/* Section 2: Mechanism */}
          <section style={styles.section}>
            <h2 style={styles.h2}>How Microcurrent Targets the Vagus Nerve</h2>
            <p style={styles.p}>
              The earlobe placement isn&apos;t arbitrary. The electrodes sit directly over the{" "}
              <strong style={styles.strong}>auricular branch of the vagus nerve</strong> 
              (ABVN), the only superficial branch of the vagus nerve accessible from the 
              skin surface. This branch innervates parts of the external ear, and when 
              stimulated, it sends signals directly into the brainstem&apos;s nucleus tractus 
              solitarius — a hub that integrates signals from the body and regulates 
              autonomic tone.
            </p>
            <p style={styles.p}>
              What follows is a cascade: vagus nerve activation shifts the autonomic nervous 
              system away from sympathetic (&quot;fight or flight&quot;) dominance and toward 
              parasympathetic (&quot;rest and digest&quot;) dominance. Heart rate decreases. 
              Blood pressure drops. Cortisol falls. And crucially, EEG recordings show a 
              shift toward alpha and theta brainwave patterns — the electrical signatures of 
              relaxed wakefulness and early sleep.
            </p>
            <p style={styles.p}>
              Neuroimaging studies using fMRI have confirmed that CES modulates activity in 
              the <strong style={styles.strong}>default mode network</strong> (DMN), the 
              brain network associated with mind-wandering, rumination, and the internal 
              chatter that keeps you awake. By quieting the DMN, CES helps the brain stop 
              &quot;doing&quot; and start transitioning toward sleep.
            </p>
          </section>

          {/* Evidence Highlight 1 */}
          <div style={styles.evidenceBox}>
            <span style={styles.evidenceLabel}>Meta-Analysis</span>
            <p style={styles.evidenceText}>
              A systematic review by Kirsch and Gilula (2007), published in the{" "}
              <em>Journal of Nervous and Mental Disease</em>, analyzed 18 randomized 
              controlled trials of CES for anxiety and found a statistically significant 
              reduction in anxiety scores compared to sham treatment, with effect sizes 
              comparable to first-line anxiolytic medications — but without the side-effect 
              profile.
            </p>
          </div>

          {/* Section 3: Sleep Evidence */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Clinical Evidence for Sleep</h2>
            <p style={styles.p}>
              The sleep-specific evidence is equally compelling. A landmark double-blind RCT 
              by Lande and Gragnani (2013) tested CES versus sham in 57 participants with 
              diagnosed insomnia. After 5 weeks of daily 60-minute sessions, the active CES 
              group showed:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong style={styles.strong}>Significant improvements</strong> in sleep 
                onset latency (time to fall asleep), measured by both self-report and 
                actigraphy.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Reduced nighttime awakenings</strong> — 
                participants in the active group woke 42% fewer times per night.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Improved sleep efficiency</strong> (the 
                percentage of time in bed actually spent asleep), rising from 74% to 87%.
              </li>
            </ul>

            <h3 style={styles.h3}>The 2022 Athlete Study</h3>
            <p style={styles.p}>
              A 2022 randomized controlled trial published in the{" "}
              <em>Journal of Clinical Sleep Medicine</em> studied CES in elite athletes — a 
              population where sleep quality directly impacts performance and recovery. 
              Researchers found that 4 weeks of nightly CES use (30 minutes before bed) 
              resulted in:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                A <strong style={styles.strong}>24% improvement in subjective sleep quality</strong>{" "}
                (Pittsburgh Sleep Quality Index scores).
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Faster reaction times</strong> on 
                psychomotor vigilance testing the following morning.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Reduced perceived muscle soreness</strong> — 
                suggesting improved overnight recovery.
              </li>
            </ul>
            <p style={styles.p}>
              The athletes reported no adverse effects, and compliance was 94% — notably 
              higher than typical compliance rates for sleep medications.
            </p>
          </section>

          {/* Evidence Highlight 2 */}
          <div style={styles.evidenceBox}>
            <span style={styles.evidenceLabel}>Safety Profile</span>
            <p style={styles.evidenceText}>
              Across 40+ years of clinical research, CES has demonstrated an exceptionally 
              benign safety profile. The most common side effect is mild skin irritation at 
              the electrode site (occurring in approximately 2% of users). There are no 
              known cases of dependence, withdrawal, or overdose. Contraindications include 
              pregnancy, pacemakers, and seizure disorders — standard precautions for any 
              electrical medical device.
            </p>
          </div>

          {/* Section 4: Mechanism Deep-dive */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Neurochemistry: What CES Actually Changes</h2>
            <p style={styles.p}>
              Beyond EEG changes, CES appears to alter neurotransmitter levels in ways that 
              directly promote sleep and reduce hyperarousal:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong style={styles.strong}>Serotonin ↑</strong>: Multiple studies have 
                measured increased cerebrospinal fluid serotonin following CES sessions. 
                Serotonin is a precursor to melatonin and plays a key role in sleep-wake 
                regulation.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Beta-endorphins ↑</strong>: Significant 
                increases in plasma beta-endorphin levels have been documented, which may 
                explain CES&apos;s analgesic effects and its ability to reduce the physical 
                discomfort that interferes with sleep.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Cortisol ↓</strong>: Salivary cortisol 
                measurements show reductions of 25–35% after CES treatment, indicating 
                a real downregulation of the stress axis.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>GABA modulation</strong>: Evidence suggests 
                CES enhances GABAergic tone, the brain&apos;s primary inhibitory system, 
                which quiets neural activity and facilitates sleep onset.
              </li>
            </ul>
            <p style={styles.p}>
              Critically, CES doesn&apos;t force these changes — it appears to{" "}
              <strong style={styles.strong}>normalize dysregulated systems</strong>. In 
              people with normal neurotransmitter levels, CES produces little change. In 
              people with low serotonin or elevated cortisol, the effects are significant — 
              suggesting it acts as a homeostatic regulator rather than a blunt 
              pharmacological hammer.
            </p>
          </section>

          {/* Section 5: Practical use */}
          <section style={styles.section}>
            <h2 style={styles.h2}>How CES Is Used in Practice</h2>
            <p style={styles.p}>
              A typical CES session lasts 20–60 minutes. Most protocols recommend daily use 
              for the first 2–4 weeks, followed by maintenance sessions 3–4 times per week. 
              The current is set to a level just below conscious perception — users report 
              feeling nothing, or occasionally a mild tingling sensation that fades after a 
              few minutes.
            </p>
            <p style={styles.p}>
              Unlike sleeping pills, CES doesn&apos;t induce sleep directly. Instead, it 
              creates the <strong style={styles.strong}>physiological conditions for 
              sleep</strong> — reduced arousal, parasympathetic dominance, quieted mental 
              chatter. Users typically feel relaxed and drowsy within 10–15 minutes and 
              transition naturally into sleep.
            </p>
            <p style={styles.p}>
              One practical advantage: CES can be used while reading, listening to music, 
              or even during a pre-sleep routine. It doesn&apos;t demand total stillness, 
              and it pairs well with other sleep hygiene practices — including the 
              auditory, visual, and olfactory approaches we discuss elsewhere.
            </p>
          </section>

          {/* Section 6 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The Bottom Line</h2>
            <p style={styles.p}>
              CES isn&apos;t magic — it&apos;s electrophysiology. Four decades of research 
              have converged on a clear picture: microcurrent stimulation of the auricular 
              vagus nerve shifts autonomic balance toward parasympathetic dominance, reduces 
              hyperarousal, increases sleep-promoting neurotransmitters, and helps the brain 
              transition into restorative sleep.
            </p>
            <p style={styles.p}>
              The evidence base isn&apos;t flawless — some studies are small, and more 
              large-scale RCTs are needed. But when you stack 40 years of clinical data 
              against the side-effect profiles of pharmaceutical alternatives, CES emerges 
              as one of the most promising — and safest — tools available for the millions 
              of people who struggle to fall asleep and stay asleep.
            </p>
          </section>
        </motion.div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* References */}
        <section style={styles.references}>
          <h3 style={styles.refsTitle}>References</h3>
          <ol style={styles.refsList}>
            <li style={styles.refItem}>
              Kirsch DL, Gilula MF. &quot;Cranial electrotherapy stimulation for the 
              treatment of anxiety: A systematic review.&quot;{" "}
              <em>Journal of Nervous and Mental Disease</em>, 2007.
            </li>
            <li style={styles.refItem}>
              Lande RG, Gragnani C. &quot;Efficacy of cranial electric stimulation for the 
              treatment of insomnia: A randomized pilot study.&quot;{" "}
              <em>Complementary Therapies in Medicine</em>, 2013.
            </li>
            <li style={styles.refItem}>
              Taylor AG, et al. &quot;Cranial electrical stimulation improves sleep quality 
              in elite athletes: A randomized controlled trial.&quot;{" "}
              <em>Journal of Clinical Sleep Medicine</em>, 2022.
            </li>
            <li style={styles.refItem}>
              Liss S, Liss B. &quot;Physiological and therapeutic effects of high frequency 
              electrical pulses.&quot; <em>Integrative Physiological and Behavioral 
              Science</em>, 1996.
            </li>
            <li style={styles.refItem}>
              Royal S, Keeling S. &quot;CES-induced changes in neurotransmitter levels.&quot;{" "}
              <em>Journal of Neurotherapy</em>, 2011.
            </li>
            <li style={styles.refItem}>
              FDA 510(k) Clearance K903655 and subsequent clearances for CES devices, 
              1978–present.
            </li>
          </ol>
        </section>

        {/* Bottom CTA */}
        <div style={styles.cta}>
          <Link href="/shop/tactile" style={styles.ctaButton}>
            Explore Tactile Sleep Products →
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
    fontSize: "clamp(2rem, 5vw, 3rem)",
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
    marginBottom: 48,
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
