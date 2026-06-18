export default function RefundPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-8">
        Refund Policy
      </h1>

      <div className="space-y-10 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">
            30-Day Money-Back Guarantee
          </h2>
          <p>
            We stand behind every product we make. If you are not completely satisfied
            with your purchase for any reason, you may return it within 30 days of
            delivery for a full refund — no questions asked.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">How It Works</h2>
          <ol className="space-y-3 list-decimal pl-5">
            <li>
              <strong className="text-white">Initiate a return</strong> — Email us at
              returns@somnisleep.com with your order number. We will respond within
              24 hours with a prepaid return shipping label.
            </li>
            <li>
              <strong className="text-white">Pack it up</strong> — Place the item in
              its original packaging (or any secure box) and attach the label.
            </li>
            <li>
              <strong className="text-white">Drop it off</strong> — Take the package
              to any drop-off location for the carrier on the label.
            </li>
            <li>
              <strong className="text-white">Get your refund</strong> — Once we
              receive and inspect the return (typically 2–3 business days after
              arrival), we will issue a full refund to your original payment method.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Return Conditions</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Items must be returned within 30 days of the delivery date.</li>
            <li>
              Products should be in like-new condition with all original accessories
              and packaging included.
            </li>
            <li>
              Return shipping is free for all orders. We cover the cost of the return
              label.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Refund Timeline</h2>
          <p>
            After we process your return, refunds typically appear on your statement
            within 5–10 business days, depending on your card issuer or bank.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Exchanges</h2>
          <p>
            If you would prefer an exchange (different size, color, or model), simply
            let us know when you initiate your return. We will ship the replacement
            as soon as the return is scanned by the carrier — no need to wait for it
            to arrive at our warehouse.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Damaged or Defective Items</h2>
          <p>
            If your order arrives damaged or defective, please contact us within
            7 days of delivery. We will ship a replacement immediately at no cost
            to you and handle the return of the damaged item.
          </p>
        </section>
      </div>
    </main>
  );
}
