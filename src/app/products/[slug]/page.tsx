"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductsBySense } from "@/data/products";
import ProductDetailTop from "@/components/product-detail-top";
import { ProductReviews } from "@/components/product/product-reviews";
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

function generateFaq(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
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

// ─── Generic Sections (used for non-mask products) ──────────────────────

function GenericSections({ product }: { product: NonNullable<ReturnType<typeof getProductBySlug>> }) {
  const relatedProducts = getProductsBySense(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const faqItems = generateFaq(product);
  const icon = scienceIcons[product.category] ?? "✦";

  return (
    <>
      {/* ── How It Works ── */}
      {product.howItWorks && (
        <section className="how-it-works-section">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">{product.howItWorks.title}</h2>
          <p className="section-desc">{product.howItWorks.description}</p>
        </section>
      )}

      {/* ── The Science Section ── */}
      <section className="science-section">
        <div className="section-label">The Science</div>
        <h2 className="section-title">Why {product.name} Works</h2>
        <p className="section-subtitle">
          Every SOMNI product is grounded in peer-reviewed research.
        </p>

        {product.modeCards && product.modeCards.length > 0 ? (
          <div className="modes-grid">
            {product.modeCards.map((card, i) => (
              <div key={i} className="mode-card">
                <div className="mode-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="mode-stat">
                  {card.stats.map((stat, j) => (
                    <span key={j}>{stat}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="science-grid">
            {product.science.map((item, i) => (
              <div key={i} className="science-card">
                <div className="science-icon">{icon}</div>
                <h3 className="science-card-title">{item.title}</h3>
                {"detail" in item && item.detail && (
                  <p className="science-card-detail">{item.detail}</p>
                )}
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
                {"url" in item && !("link" in item) && (item as any).url && (
                  <a
                    href={(item as any).url}
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
        )}
      </section>

      {/* ── Materials & Craft ── */}
      {product.materialSections && product.materialSections.length > 0 && (
        <section className="materials-section">
          <div className="section-label">Materials & Craft</div>
          <h2 className="section-title">What It&apos;s Made Of</h2>
          {product.materialSections.map((mat, i) => (
            <div
              key={i}
              className={`feature-split${mat.reversed ? " reverse" : ""}`}
              style={i > 0 ? { marginTop: "80px" } : { marginTop: "60px" }}
            >
              <div className="feature-text">
                <h3>
                  <span>{mat.title}</span> {mat.subtitle}
                </h3>
                <p>{mat.description}</p>
                <ul className="feature-list">
                  {mat.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="feature-image">
                <img
                  src={mat.image}
                  loading="lazy"
                  alt={`${mat.title} ${mat.subtitle}`}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      )}

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

      {/* ── What's in the Box ── */}
      {product.boxContents && (
        <section className="unboxing-section">
          <div className="section-label">Unboxing</div>
          <h2 className="section-title">What&apos;s in the Box</h2>
          <p className="section-desc">
            Every order comes complete with everything you need — right out of
            the box.
          </p>
          <div className="feature-split" style={{ marginTop: "48px" }}>
            <div className="feature-text">
              <ul className="feature-list">
                {product.boxContents.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="feature-image">
              <img
                src={product.boxContents.image}
                loading="lazy"
                alt="What's in the box"
                style={{
                  maxWidth: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Comparison Table ── */}
      {product.comparisonTable && (
        <section className="comparison-section">
          <div className="section-label">Comparison</div>
          <h2 className="section-title">How {product.name} Compares</h2>
          <div
            className="comparison"
            style={{ marginTop: "48px", overflowX: "auto" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr>
                  {product.comparisonTable.headers.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        textAlign: "left",
                        padding: "16px",
                        borderBottom: "2px solid var(--border)",
                        color: i === 0 ? "var(--text-dim)" : "var(--gold)",
                        fontWeight: 600,
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.comparisonTable.rows.map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "14px 16px",
                        borderBottom: "1px solid var(--border)",
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, j) => {
                      const isObj = typeof val === "object";
                      const text = isObj ? (val as any).text : val;
                      const check = isObj ? (val as any).check : null;
                      return (
                        <td
                          key={j}
                          style={{
                            padding: "14px 16px",
                            borderBottom: "1px solid var(--border)",
                            color:
                              check === null
                                ? "var(--text-dim)"
                                : check
                                  ? "var(--gold)"
                                  : "var(--text-muted)",
                          }}
                        >
                          {check === true ? "✓ " : check === false ? "✗ " : ""}
                          {text}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

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
    </>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [productStyle, setProductStyle] = useState<string>("");
  // HTML body from product.html (only used for 3D contour sleep mask)
  const [htmlBody, setHtmlBody] = useState<string | null>(null);

  const isMask = slug === "3d-contour-sleep-mask";

  // Fetch product.html CSS — needed for all product pages
  useEffect(() => {
    fetch("/product.html")
      .then((r) => r.text())
      .then((html) => {
        // Extract <style> — always needed for all products
        const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
        const style = styleMatch ? styleMatch[1].trim() : "";
        setProductStyle(style);

        if (!isMask) return;

        // Extract <body> — only for the 3D contour sleep mask
        const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<\/body>/);
        let body = bodyMatch ? bodyMatch[1].trim() : "";

        // Strip nav and breadcrumb (rendered by the layout)
        body = body.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, "");
        body = body.replace(/<!-- BREADCRUMB -->[\s\S]*?<\/div>/, "");

        // Strip the product detail top section (rendered as React ProductDetailTop)
        body = body.replace(
          /<!--\s*═+ PRODUCT DETAIL TOP ═+\s*-->[\s\S]*?<\/section>/,
          ""
        );

        // Strip the original Add to Cart / Buy Now buttons (just in case)
        body = body.replace(
          /<button id="btn-add-cart"[\s\S]*?<\/button>\s*<button id="btn-buy-now"[\s\S]*?<\/button>/,
          ""
        );

        // Strip the inline <script> block (React handles interactivity)
        body = body.replace(/<script>[\s\S]*?<\/script>/, "");

        setHtmlBody(body);
      });
  }, [isMask]);

  // ── Not found ──────────────────────────────────────────────────────

  if (!product) {
    notFound();
  }

  // Replace the "5-in-1 Multi-Function Design" image (product_2) with updated asset
  product.images = product.images.map((url) =>
    url.includes("product_2")
      ? "https://res.cloudinary.com/dyektnhyy/image/upload/v1781958406/nocturne/products/juzv2nz3rkx4gj7blaom.png"
      : url
  );

  // ── Loading state (3D contour mask only) ───────────────────────────

  if (isMask && !htmlBody) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050510]">
        <p className="text-[#C9A84C] text-sm tracking-widest animate-pulse">
          Loading…
        </p>
      </div>
    );
  }

  // ── 3D Contour Sleep Mask: rich HTML rendering ─────────────────────

  if (isMask && htmlBody) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: productStyle }} />

        {/* React-rendered top section with gallery, info, Add to Cart, toast */}
        <ProductDetailTop product={product} />

        {/* Bottom sections from product.html (Science, Materials, Specs, etc.) */}
        <div
          className="product-page-content"
          dangerouslySetInnerHTML={{ __html: htmlBody }}
        />

        {/* Reviews */}
        <div className="product-page-content">
          <ProductReviews productId={product.id} />
        </div>
      </>
    );
  }

  // ── All other products: generic React-rendered sections ────────────

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: productStyle }} />
      <ProductDetailTop product={product} />

      {/* Product demo video (matching product.html format) */}
      {product.video && (
        <div className="product-page-content">
        <section>
          <div className="section-label">See It In Action</div>
          <h2 className="section-title">Product Demo Video</h2>
          <div
            style={{
              maxWidth: "800px",
              margin: "32px auto 0",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            }}
          >
            <video
              controls
              preload="none"
              style={{ width: "100%", display: "block" }}
            >
              <source src={product.video} type="video/mp4" />
            </video>
          </div>
        </section>
        </div>
      )}

      <div className="product-page-content">
        <GenericSections product={product} />
      </div>

      {/* Reviews */}
      <div className="product-page-content">
        <ProductReviews productId={product.id} />
      </div>
    </>
  );
}
