export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-neutral-300 leading-relaxed">
        <p>
          <strong className="text-white">Effective Date:</strong> January 1, 2025
        </p>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">1. Information We Collect</h2>
          <p>
            When you place an order or create an account, we collect your name, email
            address, shipping address, billing address, and payment information. We
            also collect browsing data such as pages visited, products viewed, and
            time spent on the site through cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">2. How We Use Your Information</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to customer service inquiries</li>
            <li>Improve our website and product offerings</li>
            <li>Send marketing communications (only with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">3. Payment Processing</h2>
          <p>
            We do not store your full credit card details. All payments are processed
            through PCI-compliant third-party payment processors including Stripe and
            PayPal. These processors receive only the information necessary to complete
            the transaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">4. Cookies</h2>
          <p>
            We use cookies to keep items in your cart, remember your preferences,
            analyze site traffic, and deliver relevant advertising. You can disable
            cookies in your browser settings, though some features of the site may
            not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">5. Data Sharing</h2>
          <p>
            We do not sell your personal information. We share data only with service
            providers who help us operate the business — payment processors, shipping
            carriers, email platforms, and analytics services. These partners are
            contractually bound to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at
            any time. You may also opt out of marketing emails by clicking the
            unsubscribe link in any email or by contacting us directly. To exercise
            any of these rights, email privacy@somnisleep.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">7. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active
            or as needed to provide our services. If you close your account, we will
            delete your data within 90 days, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">8. Contact</h2>
          <p>
            For questions about this Privacy Policy, contact us at
            privacy@somnisleep.com.
          </p>
        </section>
      </div>
    </main>
  );
}
