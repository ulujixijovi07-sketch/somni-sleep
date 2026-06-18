Edit src/app/products/[slug]/page.tsx to render rich content sections for products that have modeCards/materialSections/specCards data.

## CURRENT FILE: D:/projects/somni-sleep/src/app/products/[slug]/page.tsx

Find the GenericSections component (or the render path for non-sleep-mask products). Replace the current simple sections (science-grid, simple description, simple specs) with rich sections when the data exists.

## SPECIFIC CHANGES

### 1. After the ProductDetailTop, BEFORE the current sections, add:

```tsx
{/* How It Works */}
{product.howItWorks && (
  <section className="how-it-works-section">
    <div className="section-label">How It Works</div>
    <h2 className="section-title">{product.howItWorks.title}</h2>
    <p className="section-desc">{product.howItWorks.description}</p>
  </section>
)}
```

### 2. Replace the current science section with rich mode cards when available:

```tsx
{product.modeCards && product.modeCards.length > 0 ? (
  <section className="science-section">
    <div className="section-label">The Science</div>
    <h2 className="section-title">Why {product.name} Works</h2>
    <p className="section-subtitle">Every SOMNI product is grounded in peer-reviewed research.</p>
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
  </section>
) : (
  // Keep existing science-grid for products without modeCards
  <section className="science-section">...existing code...</section>
)}
```

### 3. Add Materials & Craft section when materialSections exist:

```tsx
{product.materialSections && product.materialSections.length > 0 && (
  <section className="materials-section">
    <div className="section-label">Materials & Craft</div>
    <h2 className="section-title">What It's Made Of</h2>
    {product.materialSections.map((mat, i) => (
      <div key={i} className={`feature-split${mat.reversed ? ' reverse' : ''}`} style={i > 0 ? {marginTop: '80px'} : {marginTop: '60px'}}>
        <div className="feature-text">
          <h3><span>{mat.title}</span> {mat.subtitle}</h3>
          <p>{mat.description}</p>
          <ul className="feature-list">
            {mat.list.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="feature-image">
          <img src={mat.image} loading="lazy" alt={`${mat.title} ${mat.subtitle}`} style={{maxWidth: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)'}} />
        </div>
      </div>
    ))}
  </section>
)}
```

### 4. Add What's in the Box section:

```tsx
{product.boxContents && (
  <section className="unboxing-section">
    <div className="section-label">Unboxing</div>
    <h2 className="section-title">What's in the Box</h2>
    <p className="section-desc">Every order comes complete with everything you need — right out of the box.</p>
    <div className="feature-split" style={{marginTop: '48px'}}>
      <div className="feature-text">
        <ul className="feature-list">
          {product.boxContents.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="feature-image">
        <img src={product.boxContents.image} loading="lazy" alt="What's in the box" style={{maxWidth: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)'}} />
      </div>
    </div>
  </section>
)}
```

### 5. Replace current specs section with rich spec grid:

```tsx
{product.specCards ? (
  <section className="specs-section">
    <div className="section-label">Technical Specifications</div>
    <h2 className="section-title">By the Numbers</h2>
    <div className="specs-grid">
      {product.specCards.map((spec, i) => (
        <div key={i} className="spec-card">
          <div className="spec-icon">{spec.icon}</div>
          <div className="spec-val">{spec.value}</div>
          <div className="spec-label">{spec.label}</div>
        </div>
      ))}
    </div>
  </section>
) : (
  // Keep existing simple specs grid
  <section className="specs-section">...existing...</section>
)}
```

### 6. Add Comparison Table section:

```tsx
{product.comparisonTable && (
  <section className="comparison-section">
    <div className="section-label">Comparison</div>
    <h2 className="section-title">How {product.name} Compares</h2>
    <div className="comparison" style={{marginTop: '48px', overflowX: 'auto'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
        <thead>
          <tr>
            {product.comparisonTable.headers.map((h, i) => (
              <th key={i} style={{textAlign: 'left', padding: '16px', borderBottom: '2px solid var(--border)', color: i === 0 ? 'var(--text-dim)' : 'var(--gold)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px'}}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {product.comparisonTable.rows.map((row, i) => (
            <tr key={i}>
              <td style={{padding: '14px 16px', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontWeight: 500}}>{row.label}</td>
              {row.values.map((val, j) => {
                const isObj = typeof val === 'object';
                const text = isObj ? (val as any).text : val;
                const check = isObj ? (val as any).check : null;
                return (
                  <td key={j} style={{padding: '14px 16px', borderBottom: '1px solid var(--border)', color: check === null ? 'var(--text-dim)' : (check ? 'var(--gold)' : 'var(--text-muted)')}}>
                    {check === true ? '✓ ' : check === false ? '✗ ' : ''}{text}
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
```

## IMPORTANT RULES
- The 3D contour sleep mask page (slug === "3d-contour-sleep-mask") must use the EXISTING HTML-based approach — DO NOT modify its rendering path
- The rich sections above should ONLY apply to non-sleep-mask products
- Keep the existing GenericSections or inline-render for products without the new fields
- Keep FAQ, Related Products, and Footer sections
- The CSS classes (modes-grid, mode-card, feature-split, specs-grid, spec-card, comparison) already exist in globals.css from product.html styles

Run: cd D:/projects/somni-sleep && npx next build --webpack
