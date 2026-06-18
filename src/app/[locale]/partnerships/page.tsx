export default function PartnershipsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4">
        Partnerships
      </h1>
      <p className="text-neutral-400 mb-12 text-lg">
        Join us in shaping the future of sleep.
      </p>

      <section className="space-y-8">
        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Retail Partnerships
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            SOMNI is expanding into select premium retailers worldwide. We partner
            with department stores, boutique hotels, and design-forward concept shops
            that share our commitment to quality and craft. If your retail space
            aligns with the SOMNI aesthetic, we would love to explore a wholesale
            relationship.
          </p>
          <a
            href="mailto:wholesale@somnisleep.com"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Inquire — wholesale@somnisleep.com
          </a>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Hospitality Partnerships
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Elevate your guest experience with SOMNI. We work with luxury hotels,
            resorts, and wellness retreats to create custom sleep programs — from
            pillows and linens to full-room sleep kits. Every partnership includes
            co-branded collateral and dedicated account support.
          </p>
          <a
            href="mailto:hospitality@somnisleep.com"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Inquire — hospitality@somnisleep.com
          </a>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Brand Collaborations
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We believe the best work happens when great brands come together. If you
            represent a brand in wellness, design, travel, or lifestyle — and see a
            natural fit with SOMNI — we are open to limited-edition collaborations,
            co-branded content, and event partnerships.
          </p>
          <a
            href="mailto:collabs@somnisleep.com"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Inquire — collabs@somnisleep.com
          </a>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Creative & Editorial
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We love working with photographers, stylists, writers, and filmmakers who
            can bring the SOMNI world to life. If your portfolio reflects a refined,
            quiet, and intentional aesthetic, reach out. We commission original work
            year-round.
          </p>
          <a
            href="mailto:creative@somnisleep.com"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Inquire — creative@somnisleep.com
          </a>
        </div>
      </section>
    </main>
  );
}
