export default function ShippingPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-8">
        Shipping Policy
      </h1>

      <div className="space-y-10 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Delivery Options</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong className="text-white">Standard Shipping</strong> — Free worldwide.
              Delivered in 5–10 business days after dispatch.
            </li>
            <li>
              <strong className="text-white">Express Shipping</strong> — $29 or free on
              orders over $350. Delivered in 2–4 business days after dispatch.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Processing</h2>
          <p>
            All orders are processed within 1–2 business days. You will receive a
            confirmation email with tracking information once your order ships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Duties & Taxes</h2>
          <p>
            All duties, taxes, and customs fees are included in the price you see at
            checkout. There are no surprise charges on delivery — ever.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Where We Ship</h2>
          <p>
            We ship to over 60 countries worldwide including the United States, Canada,
            United Kingdom, European Union, Australia, New Zealand, Japan, South Korea,
            Singapore, and the United Arab Emirates.
          </p>
          <p className="mt-2">
            If your country is not listed at checkout, please contact us — we are
            expanding rapidly and may be able to accommodate your order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-300 mb-3">Lost or Delayed Orders</h2>
          <p>
            If your order has not arrived within 15 business days of dispatch, please
            reach out to our support team. We will investigate and, if necessary,
            send a replacement or issue a full refund at no cost to you.
          </p>
        </section>
      </div>
    </main>
  );
}
