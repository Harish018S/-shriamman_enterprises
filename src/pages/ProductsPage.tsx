import { useState } from 'react'
import { ArrowRight, Database, FileText, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { hybridConfigurations, mountingCategories, productCategories, productSegments, products } from '../data/products'
import { productImageByCategory, siteImages } from '../data/images'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Products"
        title="Power equipment and solar components, clearly specified."
        text="Explore reference products and solution categories across generators, solar, storage, electrical distribution, and hybrid power. Manufacturer specifications are distinguished from company commercial information."
        image={siteImages.generator.imagePath}
        imageAlt={siteImages.generator.altText}
      />

      <section className="page-section product-disclaimer-section">
        <div className="container product-disclaimer">
          <ShieldCheck size={22} />
          <p><strong>Reference catalogue.</strong> Product records marked as manufacturer specifications are technical references only. They do not confirm dealership, stock, price, warranty, or delivery until the company confirms them for your enquiry.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Product catalogue" title="Products for the next power decision" text="Select a category to compare the products and reference families currently documented for this website." center />
          <div className="product-filters" role="tablist" aria-label="Product categories">
            {['All', ...productCategories.map((category) => category.label)].map((category) => (
              <button key={category} type="button" role="tab" aria-selected={activeCategory === category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-card-image-wrap"><img className="product-card-image" src={productImageByCategory[product.category].imagePath} alt={productImageByCategory[product.category].altText} loading="lazy" width="800" height="600" /><span>Representative image</span></div>
                <div className="product-card-topline"><span>{product.category}</span><span>{product.segment}</span></div>
                <h3>{product.name}</h3>
                <p className="product-model">{product.manufacturer} · {product.model}</p>
                <p>{product.summary}</p>
                <div className="product-highlights">
                  {product.specifications.slice(0, 3).map((specification) => <span key={specification.label}><strong>{specification.label}</strong>{specification.value}</span>)}
                </div>
                <details className="product-details">
                  <summary><FileText size={16} /> View specifications</summary>
                  <div className="spec-table">
                    {product.specifications.map((specification) => <div key={specification.label}><strong>{specification.label}</strong><span>{specification.value}</span></div>)}
                  </div>
                  <p className="verification-note"><Database size={15} /> {product.verification}</p>
                  <p className="source-note">Source: {product.source}</p>
                </details>
                <div className="product-card-footer"><span>{product.commercialNote}</span><Link className="text-link" to={`/request-quote?product=${product.id}`}>Request quote <ArrowRight size={15} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="Capacity bands" title="Start with the category, then confirm the model" center />
          <div className="catalog-band-grid">
            <article className="info-card"><h3>Diesel generators</h3>{productSegments.generators.map((item) => <p key={item}>{item}</p>)}</article>
            <article className="info-card"><h3>Solar PV modules</h3>{productSegments.modules.map((item) => <p key={item}>{item}</p>)}</article>
            <article className="info-card"><h3>Solar inverters</h3>{productSegments.inverters.map((item) => <p key={item}>{item}</p>)}</article>
            <article className="info-card"><h3>Battery storage</h3>{productSegments.storage.map((item) => <p key={item}>{item}</p>)}</article>
            <article className="info-card"><h3>Stabilizers</h3>{productSegments.stabilizers.map((item) => <p key={item}>{item}</p>)}</article>
            <article className="info-card"><h3>Solar water pumps</h3>{productSegments.pumps.map((item) => <p key={item}>{item}</p>)}</article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Built around the requirement" title="Panels, mounting, lighting, and hybrid systems" center />
          <div className="catalog-detail-grid">
            <article className="info-card"><h3>Electrical panels</h3><p>Categories include LT distribution, MDB, SMDB, PCC, MCC, ACDB, DCDB, APFC, and solar protection panels.</p><p className="muted">Common LT applications may reach up to 415 V AC and 100-4,000 A class depending on the confirmed design. Exact protection, busbar, IP, and certification data are available on request.</p><Link className="text-link" to="/request-quote?product=electrical-panels">Discuss a panel requirement <ArrowRight size={15} /></Link></article>
            <article className="info-card"><h3>Solar mounting structures</h3><p>{mountingCategories.join(' · ')}</p><p className="muted">Material, coating, thickness, tilt, foundation, wind load, snow load, and design standard are confirmed through engineering for the site.</p><Link className="text-link" to="/request-quote?product=mounting-structures">Discuss mounting <ArrowRight size={15} /></Link></article>
            <article className="info-card"><h3>Solar street lighting</h3><p>20 W, 30 W, 40 W, 60 W, 80 W, and 100 W classes can be evaluated against lighting output, pole height, battery, panel, and operating-duration requirements.</p><Link className="text-link" to="/request-quote?product=solar-street-lights">Discuss lighting <ArrowRight size={15} /></Link></article>
            <article className="info-card"><h3>Hybrid solar + generator</h3><p>Indicative configurations combine solar, battery, and generator capacity. They are not packaged-product claims and require load and site assessment.</p><div className="hybrid-list">{hybridConfigurations.map((item) => <span key={item.name}><strong>{item.name}</strong>{item.configuration}</span>)}</div><Link className="text-link" to="/request-quote?product=hybrid-system">Plan a hybrid system <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>
    </div>
  )
}
