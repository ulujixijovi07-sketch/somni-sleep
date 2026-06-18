export default function PaymentMethodsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-8">
        Payment Methods
      </h1>

      <p className="text-neutral-300 leading-relaxed mb-10 text-lg">
        We accept the following payment methods. All transactions are encrypted and
        processed securely through PCI-compliant payment gateways.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: "Visa",
            description: "Credit and debit cards accepted globally.",
          },
          {
            name: "Mastercard",
            description: "Credit, debit, and prepaid cards.",
          },
          {
            name: "American Express",
            description: "All Amex cards, including Platinum and Centurion.",
          },
          {
            name: "Apple Pay",
            description: "Fast, secure checkout on Safari with Face ID or Touch ID.",
          },
          {
            name: "Google Pay",
            description: "One-tap checkout on Chrome and Android devices.",
          },
          {
            name: "PayPal",
            description: "Pay with your PayPal balance or linked bank account.",
          },
        ].map((method) => (
          <div
            key={method.name}
            className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-amber-600/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-amber-300 mb-2">{method.name}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {method.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-amber-300 mb-3">Security</h2>
        <p className="text-neutral-300 leading-relaxed">
          All payment information is transmitted over TLS 1.3 encryption. We do not
          store full credit card numbers on our servers. Our payment processing
          partners — Stripe and PayPal — are certified to PCI DSS Level 1, the
          highest standard in the payments industry.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-amber-300 mb-3">Currency</h2>
        <p className="text-neutral-300 leading-relaxed">
          All prices are listed and charged in US Dollars (USD). If your card is
          issued in a different currency, your bank will convert the charge at their
          prevailing exchange rate. SOMNI does not charge any additional currency
          conversion fees.
        </p>
      </section>
    </main>
  );
}
