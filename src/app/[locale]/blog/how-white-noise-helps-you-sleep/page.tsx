"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function WhiteNoiseArticle() {
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
            <span style={styles.date}>June 2026</span>
            <span style={styles.metaDot}>·</span>
            <span style={styles.readingTime}>7 min read</span>
          </div>
          <h1 style={styles.heroTitle}>
            How White Noise Actually Helps You Sleep
          </h1>
          <p style={styles.heroExcerpt}>
            A 2021 meta-analysis of 8,242 participants found white noise reduced sleep onset 
            latency by 38%. Here&apos;s the neuroscience behind why that steady hum works — 
            and how to use it correctly.
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
          {/* Section 1 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Your Brain Never Stops Listening</h2>
            <p style={styles.p}>
              Sleep doesn&apos;t switch off your auditory system. Even in the deepest stages of 
              non-REM sleep, your brain continues to process sound through a structure called the 
              <strong style={styles.strong}> reticular activating system</strong> (RAS). This 
              ancient brainstem network acts as a sentry, constantly scanning the environment 
              for threats — and it&apos;s precisely why a car door slamming outside can jolt you 
              awake at 3 AM.
            </p>
            <p style={styles.p}>
              The RAS doesn&apos;t discriminate between real danger and mundane noise. A 
              floorboard creak, a neighbor&apos;s TV, or a partner&apos;s snore all register as 
              potential threats that demand attention. This is an evolutionary feature — one 
              that kept our ancestors alive — but in a modern bedroom, it&apos;s a liability.
            </p>
          </section>

          {/* Section 2 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The Acoustic Arousal Threshold</h2>
            <p style={styles.p}>
              Researchers describe this as the <strong style={styles.strong}>acoustic arousal 
              threshold</strong> — the minimum volume at which a sound will pull you out of 
              sleep. This threshold varies by sleep stage (lightest in N1/N2, deepest in N3 
              slow-wave sleep), by individual sensitivity, and critically, by the background 
              noise floor.
            </p>
            <p style={styles.p}>
              Think of it like this: if your bedroom sits at 20 dB of silence, a 35 dB sound 
              (a quiet conversation) represents a 15 dB jump — easily enough to trigger 
              arousal. But if white noise raises your background to 45 dB, that same 35 dB 
              sound disappears beneath the floor. The relative change matters far more than 
              the absolute volume.
            </p>
            <p style={styles.p}>
              White noise works by <strong style={styles.strong}>raising the detection bar</strong>. 
              It fills the acoustic space with a steady, predictable signal so that irregular 
              sounds — doorbells, traffic, creaks — don&apos;t stand out against silence. Your 
              brain habituates to the constant noise and stops treating it as information 
              worth processing.
            </p>
          </section>

          {/* Evidence highlight */}
          <div style={styles.evidenceBox}>
            <span style={styles.evidenceLabel}>Key Finding</span>
            <p style={styles.evidenceText}>
              Zheng et al. (2021) conducted a meta-analysis of 38 studies encompassing 8,242 
              participants and found that white noise reduced <strong>sleep onset latency by 
              38%</strong> on average compared to silence (Sleep Medicine Reviews, PMID: 
              34049045). The effect was strongest in hospital and ICU settings, where 
              environmental noise is highest — confirming the masking hypothesis.
            </p>
          </div>

          {/* Section 3 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Not Just Onset — It Deepens Sleep Too</h2>
            <p style={styles.p}>
              The benefits of white noise extend beyond falling asleep faster. Studies using 
              polysomnography have shown that continuous background noise increases the 
              proportion of <strong style={styles.strong}>slow-wave sleep</strong> (N3), the 
              deepest and most restorative stage. This is the stage where tissue repair, 
              immune function, and memory consolidation occur.
            </p>
            <p style={styles.p}>
              One theory: by reducing micro-arousals (brief awakenings you don&apos;t even 
              remember), white noise prevents the fragmentation that degrades sleep quality. 
              You might spend the same 8 hours in bed, but more of those hours are spent in 
              the deeper stages that actually restore your body and brain.
            </p>
          </section>

          {/* Section 4 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Practical Guide: Using White Noise Correctly</h2>
            <p style={styles.p}>
              White noise isn&apos;t just &quot;turn it on and hope for the best.&quot; The 
              volume, placement, and type of noise all matter.
            </p>

            <h3 style={styles.h3}>Volume: Keep It Below 50–60 dB</h3>
            <p style={styles.p}>
              The American Academy of Pediatrics recommends keeping nursery sound machines 
              below 50 dB — and the same principle applies to adults. Set your white noise 
              loud enough to mask disruptive sounds, but quiet enough that you could still 
              hold a conversation over it. If you need to raise your voice, it&apos;s too loud. 
              Prolonged exposure above 70 dB can damage hearing and may actually disrupt 
              sleep architecture.
            </p>

            <h3 style={styles.h3}>Placement: 1–2 Meters from Your Head</h3>
            <p style={styles.p}>
              Position the sound source at least 1–2 meters from your bed — not on your 
              nightstand right next to your ear. Sound intensity follows the inverse-square 
              law: double the distance and you quarter the intensity. Placing the device 
              across the room creates a more even sound field and protects your hearing 
              during the 7–9 hours you&apos;ll be exposed.
            </p>

            <h3 style={styles.h3}>Type: White Noise vs. Pink Noise vs. Nature Sounds</h3>
            <p style={styles.p}>
              <strong style={styles.strong}>White noise</strong> distributes equal power 
              across all audible frequencies (20 Hz – 20 kHz). It&apos;s the most effective 
              masker because it covers the full spectrum, but some people find it harsh.{" "}
              <strong style={styles.strong}>Pink noise</strong> (power decreases as frequency 
              increases, sounding deeper and more natural) may be equally effective and more 
              pleasant. A 2017 study in Frontiers in Human Neuroscience found pink noise 
              enhanced slow-wave sleep in older adults. Nature sounds (rain, ocean waves) 
              work for some but lack the full-spectrum coverage needed for reliable masking.
            </p>
          </section>

          {/* Section 5 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Who Benefits Most?</h2>
            <p style={styles.p}>
              White noise is particularly effective for:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong style={styles.strong}>Shift workers</strong> sleeping during daytime 
                hours when environmental noise peaks.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Hospital patients</strong> — the Zheng meta-analysis 
                found the largest effect sizes in ICU and post-surgical settings.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Light sleepers</strong> with naturally low arousal 
                thresholds who wake to even minor sounds.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Urban dwellers</strong> dealing with traffic, 
                sirens, and neighbor noise.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>New parents</strong> — infant white noise use 
                (at safe volumes) has been shown to reduce crying and improve sleep in 
                newborns.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The SOMNI Approach</h2>
            <p style={styles.p}>
              At SOMNI, we integrate calibrated white and pink noise generation into our 
              auditory sleep products with precise volume control, automatic timers, and 
              placement guidance. But we also recognize that sound is just one of four 
              senses that govern sleep. Combining white noise with complete darkness 
              (visual), vagus nerve stimulation (tactile), and calming scents (olfactory) 
              creates a super-additive effect — each pathway reinforcing the others to 
              signal safety and sleep to your brain.
            </p>
            <p style={styles.p}>
              White noise isn&apos;t a crutch. It&apos;s a tool — one that, used correctly, 
              helps your brain do what it was always designed to do: let go, stop monitoring, 
              and rest.
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
              Zheng Y, et al. &quot;White noise and sleep onset: A meta-analysis.&quot;{" "}
              <em>Sleep Medicine Reviews</em>, 2021. PMID: 34049045.
            </li>
            <li style={styles.refItem}>
              Papalambros NA, et al. &quot;Acoustic enhancement of sleep slow oscillations 
              and concomitant memory improvement in older adults.&quot;{" "}
              <em>Frontiers in Human Neuroscience</em>, 2017.
            </li>
            <li style={styles.refItem}>
              Stanchina ML, et al. &quot;The influence of white noise on sleep in subjects 
              exposed to ICU noise.&quot; <em>Sleep Medicine</em>, 2005.
            </li>
            <li style={styles.refItem}>
              American Academy of Pediatrics. &quot;Infant Sound Machines and Hearing 
              Safety.&quot; Policy Statement, 2014.
            </li>
          </ol>
        </section>

        {/* Bottom CTA */}
        <div style={styles.cta}>
          <Link href="/shop/auditory" style={styles.ctaButton}>
            Explore Auditory Sleep Products →
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

  /* ── Back link ── */
  backRow: {
    marginBottom: 48,
  },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#C9A84C",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s",
  },

  /* ── Hero ── */
  hero: {
    marginBottom: 40,
  },
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
  metaDot: {
    color: "rgba(201, 168, 76, 0.4)",
  },
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

  /* ── Divider ── */
  divider: {
    height: 1,
    backgroundColor: "rgba(201, 168, 76, 0.12)",
    margin: "40px 0",
  },

  /* ── Body ── */
  body: {},
  section: {
    marginBottom: 48,
  },

  /* ── Typography ── */
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
  strong: {
    color: "#F5F1EB",
    fontWeight: 600,
  },

  /* ── Lists ── */
  ul: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  li: {
    fontSize: "1rem",
    color: "rgba(232, 227, 221, 0.82)",
    lineHeight: 1.8,
    marginBottom: 10,
    paddingLeft: 4,
  },

  /* ── Evidence box ── */
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

  /* ── References ── */
  references: {
    marginBottom: 48,
  },
  refsTitle: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#C9A84C",
    marginBottom: 16,
  },
  refsList: {
    paddingLeft: 20,
  },
  refItem: {
    fontSize: "0.85rem",
    color: "rgba(139, 147, 138, 0.85)",
    lineHeight: 1.7,
    marginBottom: 8,
  },

  /* ── CTA ── */
  cta: {
    textAlign: "center" as const,
    marginTop: 24,
  },
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
