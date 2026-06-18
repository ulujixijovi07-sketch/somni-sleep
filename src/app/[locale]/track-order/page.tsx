export default function TrackOrderPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4 text-center">
        Track Your Order
      </h1>
      <p className="text-neutral-400 mb-10 text-center text-lg">
        Enter your order number and email address to see real-time tracking information.
      </p>

      <form className="space-y-5">
        <div>
          <label htmlFor="orderNumber" className="block text-sm text-amber-300 mb-1">
            Order Number
          </label>
          <input
            id="orderNumber"
            type="text"
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="e.g. SOMNI-12345"
          />
        </div>
        <div>
          <label htmlFor="trackEmail" className="block text-sm text-amber-300 mb-1">
            Email Address
          </label>
          <input
            id="trackEmail"
            type="email"
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Track Order
        </button>
      </form>

      <div className="mt-10 border-t border-neutral-800 pt-8 text-center">
        <p className="text-neutral-500 text-sm">
          You can also find your tracking number in the shipping confirmation email
          we sent after your order was dispatched.
        </p>
        <p className="text-neutral-500 text-sm mt-2">
          Need help?{" "}
          <a href="mailto:support@somnisleep.com" className="text-amber-400 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </main>
  );
}
