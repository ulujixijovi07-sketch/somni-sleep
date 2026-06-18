export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4">
        Contact Us
      </h1>
      <p className="text-neutral-400 mb-12 text-lg">
        We would love to hear from you. Reach out and we will get back within a few hours.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-amber-300 font-semibold mb-1">Email</h3>
            <p className="text-neutral-300">support@somnisleep.com</p>
          </div>
          <div>
            <h3 className="text-amber-300 font-semibold mb-1">Press & Media</h3>
            <p className="text-neutral-300">press@somnisleep.com</p>
          </div>
          <div>
            <h3 className="text-amber-300 font-semibold mb-1">Partnerships</h3>
            <p className="text-neutral-300">partners@somnisleep.com</p>
          </div>
          <div>
            <h3 className="text-amber-300 font-semibold mb-1">Hours</h3>
            <p className="text-neutral-300">
              Monday – Friday
              <br />
              9 AM – 6 PM EST
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-amber-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-amber-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm text-amber-300 mb-1">
              Topic
            </label>
            <select
              id="topic"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">Select a topic</option>
              <option value="order">Order inquiry</option>
              <option value="return">Returns & exchanges</option>
              <option value="product">Product question</option>
              <option value="press">Press & media</option>
              <option value="partnership">Partnerships</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-amber-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
