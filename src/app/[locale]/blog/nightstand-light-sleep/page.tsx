"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function NightstandLightArticle() {
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
            <span style={styles.date}>March 2026</span>
            <span style={styles.metaDot}>·</span>
            <span style={styles.readingTime}>6 min read</span>
          </div>
          <h1 style={styles.heroTitle}>
            Why Your Nightstand Light Is Ruining Your Sleep
          </h1>
          <p style={styles.heroExcerpt}>
            That dim glow from your phone, your alarm clock, even the LED on your charger — 
            it&apos;s not as harmless as it looks. Research shows that even light too dim to 
            read by can suppress melatonin and shift your internal clock by over an hour. 
            Here&apos;s the science and exactly what to do about it.
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
          {/* Section 1 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Your Eyes Were Never Meant to See Light at Night</h2>
            <p style={styles.p}>
              Your retina contains a specialized class of cells that have nothing to do 
              with vision. These <strong style={styles.strong}>intrinsically photosensitive 
              retinal ganglion cells</strong> (ipRGCs) contain a photopigment called 
              melanopsin, and their sole job is to detect ambient light levels and relay 
              that information to your brain&apos;s master clock.
            </p>
            <p style={styles.p}>
              Melanopsin is exquisitely tuned to one narrow band of the spectrum: blue light 
              between <strong style={styles.strong}>460–480 nanometers</strong>. This is 
              not a coincidence. The sky is blue-rich during the middle of the day, and 
              red-rich at sunset. Your circadian system evolved to use the blue:red ratio 
              as a proxy for time of day. Blue = wake. Red = sleep.
            </p>
            <p style={styles.p}>
              The problem: most artificial light sources — LEDs, compact fluorescents, 
              smartphone screens, even &quot;warm white&quot; bulbs — emit significant 
              energy in the 460–480 nm range. Your nightstand lamp, the one you&apos;ve 
              dimmed to &quot;cozy,&quot; is still telling your brain it&apos;s noon.
            </p>
          </section>

          {/* Section 2 - Chang 2015 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The Chang Study: What Happens When You Read Before Bed</h2>
            <p style={styles.p}>
              The landmark study everyone cites for a reason is Chang et al. (2015), 
              published in the <em>Proceedings of the National Academy of Sciences</em> 
              (PMID: 25535358). The design was elegant: 12 healthy adults spent two weeks 
              in a controlled laboratory. For five consecutive nights, they either:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Read a light-emitting iPad for 4 hours before bed (the screen was set to 
                maximum brightness), or
              </li>
              <li style={styles.li}>
                Read a printed book in dim reflected light.
              </li>
            </ul>
            <p style={styles.p}>
              Then they switched conditions after a washout period. Blood samples were 
              taken hourly to measure melatonin. Sleep was measured via polysomnography 
              (the gold standard). The results were striking:
            </p>
          </section>

          {/* Evidence box */}
          <div style={styles.evidenceBox}>
            <span style={styles.evidenceLabel}>Chang et al., PNAS 2015 — Results</span>
            <ul style={{ ...styles.ul, marginBottom: 0 }}>
              <li style={styles.li}>
                <strong style={styles.strong}>55% lower evening melatonin</strong> in the 
                iPad condition compared to the printed book.
              </li>
              <li style={styles.li}>
                The melatonin rise that normally begins 2 hours before sleep was{" "}
                <strong style={styles.strong}>delayed by nearly 90 minutes</strong>.
              </li>
              <li style={styles.li}>
                iPad readers took an <strong style={styles.strong}>average of 10 minutes 
                longer</strong> to fall asleep.
              </li>
              <li style={styles.li}>
                They had <strong style={styles.strong}>significantly less REM sleep</strong>{" "}
                — the stage critical for emotional regulation and memory consolidation.
              </li>
              <li style={styles.li}>
                Next-morning alertness was <strong style={styles.strong}>subjectively 
                reduced</strong>, and objective performance on vigilance tests was worse.
              </li>
              <li style={styles.li}>
                The circadian phase delay was approximately{" "}
                <strong style={styles.strong}>1.5 hours</strong> — their internal clock 
                was shifted later, making subsequent nights progressively harder.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>It&apos;s Not Just Screens — Any Light Counts</h2>
            <p style={styles.p}>
              The Chang study used a screen at maximum brightness, which makes the effect 
              dramatic. But follow-up research has shown that much dimmer light still 
              affects sleep. A 2016 study in <em>Sleep</em> found that exposure to just{" "}
              <strong style={styles.strong}>5 lux</strong> of light — approximately the 
              brightness of a dim nightlight — during sleep reduced melatonin and increased 
              next-day insulin resistance.
            </p>
            <p style={styles.p}>
              Even more concerning: the melanopsin system works through closed eyelids. 
              Your eyelids attenuate light by approximately 50%, not 100%. If your bedroom 
              has 20 lux of ambient light (a typical nightstand lamp), your retina still 
              receives ~10 lux — enough to measurably suppress melatonin.
            </p>
            <p style={styles.p}>
              This means your glowing alarm clock. The LED on your air purifier. The 
              charger indicator. The light sneaking under your door. They all add up. Your 
              brain doesn&apos;t distinguish &quot;meaningful&quot; light from &quot;just 
              an LED.&quot; Any photon in the 460–480 nm range landing on your retina tells 
              your SCN to suppress melatonin.
            </p>
          </section>

          {/* Section 4 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>How Light Controls Your Internal Clock</h2>
            <p style={styles.p}>
              Here&apos;s the pathway, step by step:
            </p>
            <ol style={styles.ol}>
              <li style={styles.li}>
                <strong style={styles.strong}>Photon absorption:</strong> Blue light 
                (460–480 nm) hits melanopsin in ipRGCs in your retina.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Signal transmission:</strong> ipRGCs send 
                signals via the retinohypothalamic tract directly to the{" "}
                <strong style={styles.strong}>suprachiasmatic nucleus</strong> (SCN) in the 
                hypothalamus.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>SCN response:</strong> The SCN interprets 
                this as &quot;daytime&quot; and sends inhibitory signals to the{" "}
                <strong style={styles.strong}>pineal gland</strong>.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Melatonin suppression:</strong> The pineal 
                gland stops producing melatonin, the hormone that initiates sleep onset 
                and regulates sleep architecture.
              </li>
              <li style={styles.li}>
                <strong style={styles.strong}>Phase delay:</strong> If this happens night 
                after night, your circadian rhythm shifts later — you can&apos;t fall 
                asleep at your normal time, and can&apos;t wake up without an alarm.
              </li>
            </ol>
            <p style={styles.p}>
              The SCN is remarkably sensitive. Under optimal dark conditions, it responds 
              to changes of less than 1 lux. A single photon cascade in a single ipRGC is 
              enough to trigger a neural response. This is not a system you can &quot;trick&quot; 
              with dimming — it&apos;s designed to detect the faintest light of dawn.
            </p>
          </section>

          {/* Section 5: Practical fixes */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Practical Fixes for a Truly Dark Bedroom</h2>
            <p style={styles.p}>
              The fix isn&apos;t complicated, but it&apos;s also not what most people do. 
              Here&apos;s a checklist, ordered from most to least impactful:
            </p>

            <h3 style={styles.h3}>1. Kill the LEDs (Free, 5 Minutes)</h3>
            <p style={styles.p}>
              Walk through your bedroom at night with the lights off. Find every LED: 
              alarm clocks, chargers, power strips, air purifiers, humidifiers, smoke 
              detectors, TV standby lights. Cover them with black electrical tape, 
              light-dimming stickers (available for a few dollars), or simply unplug 
              devices you don&apos;t need overnight. A single blue LED emits 2–5 lux at 
              close range — enough to register in your ipRGCs.
            </p>

            <h3 style={styles.h3}>2. Upgrade Your Bulbs ($5–15)</h3>
            <p style={styles.p}>
              Replace any bulbs you use in the 2 hours before bed with red-spectrum or 
              amber bulbs (&lt; 550 nm emission, sometimes marketed as &quot;sleep 
              bulbs&quot; or &quot;circadian bulbs&quot;). These emit almost no energy in 
              the melanopsin-sensitive range. If you need light for reading, use a 
              dedicated amber book light that doesn&apos;t illuminate the whole room.
            </p>

            <h3 style={styles.h3}>3. Blackout Your Windows ($20–50)</h3>
            <p style={styles.p}>
              Streetlights, car headlights, and early morning sun all penetrate most 
              curtains. True blackout curtains or a properly fitted blackout liner can 
              reduce ambient light to below 0.1 lux. The target: so dark you can&apos;t see 
              your hand in front of your face. If you can see shapes after 30 seconds of 
              dark adaptation, your room isn&apos;t dark enough.
            </p>

            <h3 style={styles.h3}>4. Use a Sleep Mask ($10–30)</h3>
            <p style={styles.p}>
              If blacking out your room isn&apos;t feasible (renters, travelers, shift 
              workers), a well-fitted contoured sleep mask is the next best thing. Look 
              for masks with eye cups that don&apos;t press on your eyelids, a nose bridge 
              that blocks light from below, and an adjustable strap. A 2017 study in{" "}
              <em>Critical Care</em> found that ICU patients using eye masks had 
              significantly higher melatonin levels and better sleep quality than controls.
            </p>

            <h3 style={styles.h3}>5. Screen Discipline (Free, Requires Willpower)</h3>
            <p style={styles.p}>
              If you must use screens within 2 hours of bed, enable night mode / blue light 
              filter and reduce brightness to the minimum usable level. Better: switch to 
              audio content (podcasts, audiobooks) or e-ink readers (Kindle without 
              backlight) for the last hour before sleep. The Chang study&apos;s printed-book 
              condition is essentially what an e-ink reader replicates.
            </p>
          </section>

          {/* Section 6 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The 90-Minute Window That Matters Most</h2>
            <p style={styles.p}>
              Your pineal gland begins ramping up melatonin production approximately{" "}
              <strong style={styles.strong}>90–120 minutes before your natural sleep 
              time</strong> — a period researchers call the &quot;dim light melatonin 
              onset&quot; (DLMO). This is the critical window: light exposure during DLMO 
              is 2–3 times more suppressive than light exposure earlier in the evening, 
              because the melatonin synthesis machinery is already running.
            </p>
            <p style={styles.p}>
              Practically, this means the 90 minutes before you get into bed are more 
              important than any other part of the evening. If you&apos;re going to be 
              strict about light management, focus on this window. A 2019 study in{" "}
              <em>Chronobiology International</em> found that wearing blue-blocking glasses 
              during the 2 hours before bed for just one week shifted DLMO earlier by an 
              average of 49 minutes — effectively resetting a delayed circadian clock.
            </p>
          </section>

          {/* Section 7 */}
          <section style={styles.section}>
            <h2 style={styles.h2}>The Somni Visual Solution</h2>
            <p style={styles.p}>
              At SOMNI, we approach the visual pathway as the foundation of sleep — because 
              it is. Light is the most powerful zeitgeber (time-giver) your brain has. 
              Before sound matters, before touch matters, before scent matters, your 
              circadian system needs the right light signal. Our visual sleep products are 
              designed to create the complete darkness your brain evolved to expect, 
              whether through precision-engineered sleep masks, red-spectrum ambient 
              lighting, or blackout systems.
            </p>
            <p style={styles.p}>
              The research is clear: if you change nothing else about your sleep, fix your 
              light. Everything else — white noise, weighted blankets, lavender — works 
              better when your brain isn&apos;t fighting a chemical signal that says 
              it&apos;s still daytime.
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
              Chang AM, Aeschbach D, Duffy JF, Czeisler CA. &quot;Evening use of 
              light-emitting eReaders negatively affects sleep, circadian timing, and 
              next-morning alertness.&quot; <em>Proceedings of the National Academy of 
              Sciences</em>, 2015. PMID: 25535358.
            </li>
            <li style={styles.refItem}>
              Gooley JJ, et al. &quot;Exposure to room light before bedtime suppresses 
              melatonin onset and shortens melatonin duration in humans.&quot;{" "}
              <em>Journal of Clinical Endocrinology &amp; Metabolism</em>, 2011.
            </li>
            <li style={styles.refItem}>
              Mason IC, et al. &quot;Impact of blue-depleted white light on pupil dynamics, 
              melatonin suppression and subjective alertness.&quot;{" "}
              <em>Journal of Biological Rhythms</em>, 2018.
            </li>
            <li style={styles.refItem}>
              Prayag AS, et al. &quot;Melatonin suppression is exquisitely sensitive to 
              light.&quot; <em>Journal of Pineal Research</em>, 2019.
            </li>
            <li style={styles.refItem}>
              Berson DM, Dunn FA, Takao M. &quot;Phototransduction by retinal ganglion 
              cells that set the circadian clock.&quot; <em>Science</em>, 2002.
            </li>
            <li style={styles.refItem}>
              Hu RF, et al. &quot;Effects of earplugs and eye masks on nocturnal sleep, 
              melatonin and cortisol in a simulated intensive care unit 
              environment.&quot; <em>Critical Care</em>, 2017.
            </li>
          </ol>
        </section>

        {/* Bottom CTA */}
        <div style={styles.cta}>
          <Link href="/shop/visual" style={styles.ctaButton}>
            Explore Visual Sleep Products →
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
  ol: { paddingLeft: 20, marginBottom: 24 },
  li: {
    fontSize: "1rem",
    color: "rgba(232, 227, 221, 0.82)",
    lineHeight: 1.8,
    marginBottom: 10,
  },
  evidenceBox: {
    background: "rgba(201, 168, 76, 0.06)",
    border: "1px solid rgba(201, 168, 76, 0.15)",
    borderRadius: 12,
    padding: "24px 28px",
    marginBottom: 40,
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
