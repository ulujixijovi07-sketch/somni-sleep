export default function AffiliateCollabPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4">
        Affiliate & Collaborator Program
      </h1>
      <p className="text-neutral-400 mb-10 text-lg">
        Earn commissions by sharing products you believe in.
      </p>

      <section className="space-y-10">
        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">How It Works</h2>
          <ol className="space-y-3 list-decimal pl-5 text-neutral-300 leading-relaxed">
            <li>
              <strong className="text-white">Apply</strong> — Fill out the form below.
              We review applications weekly and look for creators, writers, and
              tastemakers whose audience aligns with the SOMNI ethos.
            </li>
            <li>
              <strong className="text-white">Get your link</strong> — Once approved,
              you will receive a unique affiliate link and access to a dashboard with
              banners, product imagery, and tracking data.
            </li>
            <li>
              <strong className="text-white">Share</strong> — Post your link on your
              blog, newsletter, social channels, or YouTube. Every qualifying purchase
              made through your link earns you a commission.
            </li>
            <li>
              <strong className="text-white">Get paid</strong> — Commissions are paid
              monthly via PayPal or direct deposit once your balance reaches $50.
            </li>
          </ol>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Commission Structure
          </h2>
          <ul className="space-y-3 text-neutral-300 leading-relaxed">
            <li>
              <strong className="text-white">10% commission</strong> on all product
              sales referred through your link.
            </li>
            <li>
              <strong className="text-white">30-day cookie window</strong> — if a
              customer clicks your link and purchases within 30 days, you get the
              commission.
            </li>
            <li>
              <strong className="text-white">No cap</strong> — there is no limit on
              how much you can earn. Top partners earn five figures per month.
            </li>
          </ul>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">
            Who We Are Looking For
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We partner with creators who share our values: quality over quantity,
            intentional living, and a deep appreciation for design. Whether you create
            content about interiors, wellness, productivity, minimalism, or parenting —
            if your audience cares about sleep and home, we would love to work with you.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            We especially welcome applications from creators with engaged audiences
            on YouTube, Instagram, TikTok, Substack, and personal blogs.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
          <h2 className="text-xl font-semibold text-amber-300 mb-4">Apply</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="affName" className="block text-sm text-amber-300 mb-1">
                Full Name
              </label>
              <input
                id="affName"
                type="text"
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="affEmail" className="block text-sm text-amber-300 mb-1">
                Email
              </label>
              <input
                id="affEmail"
                type="email"
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="affPlatform" className="block text-sm text-amber-300 mb-1">
                Primary Platform / Channel
              </label>
              <input
                id="affPlatform"
                type="text"
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="e.g. YouTube, Instagram, your blog URL"
              />
            </div>
            <div>
              <label htmlFor="affAudience" className="block text-sm text-amber-300 mb-1">
                Tell us about your audience
              </label>
              <textarea
                id="affAudience"
                required
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                placeholder="Briefly describe your audience and why SOMNI is a good fit..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
