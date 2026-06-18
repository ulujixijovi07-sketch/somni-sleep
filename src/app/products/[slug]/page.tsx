import { notFound } from "next/navigation";
import { getProductBySlug, getProductsBySense } from "@/data/products";
import ProductDetailTop from "@/components/product-detail-top";
import FaqAccordion from "@/components/faq-accordion";
import Link from "next/link";

// ─── Science Icon Map ───────────────────────────────────────────────────

const scienceIcons: Record<string, string> = {
  visual: "🌑",
  auditory: "🔊",
  tactile: "🤲",
  olfactory: "🌿",
};

// ─── FAQ generator from product data ────────────────────────────────────

function generateFaq(
  product: ReturnType<typeof getProductBySlug> extends undefined ? never : NonNullable<ReturnType<typeof getProductBySlug>>
) {
  return [
    {
      question: "How do I use this product?",
      answer: product.usage,
    },
    {
      question: "What materials is it made from?",
      answer: product.materials,
    },
    {
      question: "How long does shipping take?",
      answer:
        "Free worldwide shipping takes 5-10 business days. Express shipping (2-4 business days) is available at checkout. Duties and taxes are included in the price — no surprise fees at delivery.",
    },
    {
      question: "What is your return policy?",
      answer:
        "30-day money-back guarantee. If you're not sleeping better within 30 nights, return it for a full refund. No questions asked. We'll even cover return shipping.",
    },
    {
      question: "Is there a warranty?",
      answer:
        "All SOMNI products come with a 1-year manufacturer warranty covering defects in materials and workmanship. Extended 2-year warranty available at checkout.",
    },
  ];
}

// ─── Page Component ─────────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsBySense(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const faqItems = generateFaq(product);
  const icon = scienceIcons[product.category] ?? "✦";

  return (
    <>
      <ProductDetailTop product={product} />

      <div className="product-page-content">
        {/* ── The Science Section ── */}
        <section className="science-section">
          <div className="section-label">The Science</div>
          <h2 className="section-title">Why {product.name} Works</h2>
          <p className="section-subtitle">
            Every SOMNI product is grounded in peer-reviewed research. Here is
            the evidence behind {product.name}.
          </p>

          <div className="science-grid">
            {product.science.map((item, i) => (
              <div key={i} className="science-card">
                <div className="science-icon">{icon}</div>
                <h3 className="science-card-title">{item.title}</h3>
                <p className="science-card-detail">{item.detail}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="science-link"
                  >
                    View on PubMed →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Long Description ── */}
        <section className="description-section">
          <div className="section-label">Overview</div>
          <h2 className="section-title">About the {product.name}</h2>
          <p className="description-text">{product.longDescription}</p>
        </section>

        {/* ── Usage Instructions ── */}
        <section className="usage-section">
          <div className="section-label">How to Use</div>
          <h2 className="section-title">Getting Started</h2>
          <p className="usage-text">{product.usage}</p>
        </section>

        {/* ── Specifications ── */}
        <section className="specs-section">
          <div className="section-label">Specifications</div>
          <h2 className="section-title">Technical Details</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Weight</span>
              <span className="spec-value">{product.weight}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Materials</span>
              <span className="spec-value">{product.materials}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Category</span>
              <span className="spec-value">{product.senseLabel} — {product.category}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Rating</span>
              <span className="spec-value">
                {product.rating} ★ ({product.reviewCount} reviews)
              </span>
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <section className="related-section">
            <div className="section-label">Related</div>
            <h2 className="section-title">More from {product.senseLabel}</h2>
            <div className="related-grid">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="related-card"
                >
                  <div className="related-image-wrap">
                    <img src={rp.images[0]} alt={rp.name} />
                  </div>
                  <div className="related-info">
                    <h4>{rp.name}</h4>
                    <span className="related-price">${rp.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="faq-section">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* ── Footer ── */}
        <footer>
          <p>
            © {new Date().getFullYear()} Somni. CE Certified. Designed in
            California. Made with care in Shenzhen.
          </p>
          <p style={{ marginTop: "8px", fontSize: "11px" }}>
            SOMNI and the Somni logo are trademarks of Somni Sleep Technologies.
          </p>
        </footer>
      </div>
    </>
  );
}
