const faqs: { question: string; answer: string }[] = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping is free worldwide and takes 5–10 business days. Express shipping (2–4 business days) is available for $29 or free on orders over $350.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We ship to over 60 countries. All duties, taxes, and customs fees are included in the price you see at checkout — no surprise charges on delivery.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not satisfied for any reason, return your item within 30 days for a full refund. Return shipping is free.",
  },
  {
    question: "How do I initiate a return or exchange?",
    answer:
      "Email returns@somnisleep.com with your order number. We will respond within 24 hours with a prepaid return label. For exchanges, we ship the replacement as soon as your return is scanned by the carrier.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and PayPal. All payments are processed securely through PCI-compliant gateways.",
  },
  {
    question: "What materials are your products made from?",
    answer:
      "Our products use premium, sustainably sourced materials. Specific details — including fabric composition, fill materials, and certifications — are listed on each product page.",
  },
  {
    question: "Do your products come with a warranty?",
    answer:
      "Yes. All SOMNI products are covered by a 2-year warranty against manufacturing defects. If your product fails due to a defect in materials or workmanship, we will repair or replace it free of charge.",
  },
  {
    question: "How do I care for my SOMNI products?",
    answer:
      "Care instructions vary by product. Generally, we recommend spot cleaning or gentle machine washing in cold water and air drying. Detailed care instructions are included with each product and on its product page.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or cancelled within 2 hours of placement. After that, orders enter processing and cannot be modified. Contact support@somnisleep.com as soon as possible if you need to make changes.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You will receive a shipping confirmation email with a tracking number once your order ships. You can also track your order on our website using your order number and email address.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes. Gift wrapping is available for $5 per item at checkout. Each item is wrapped in premium paper with a SOMNI ribbon and includes a personalized gift note.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Email us at support@somnisleep.com. Our team is available Monday through Friday, 9 AM to 6 PM EST, and we typically respond within a few hours.",
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-neutral-400 mb-12 text-lg">
        Everything you need to know about SOMNI.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-neutral-800 rounded-lg bg-neutral-900/50 overflow-hidden"
          >
            <summary className="px-6 py-4 cursor-pointer text-white font-medium hover:text-amber-300 transition-colors list-none flex justify-between items-center">
              {faq.question}
              <span className="text-amber-400 text-xl group-open:rotate-45 transition-transform duration-200 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-neutral-300 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
