import { ArrowRight, BatteryCharging, Check, ShieldCheck, SunMedium, Zap } from 'lucide-react'
import { QuoteForm } from '../components/QuoteForm'
import { siteImages } from '../data/images'

const statCards = [
  { value: '24-48', label: 'Quick response time' },
  { value: 'Expert Support', label: 'Technical & commercial guidance' },
  { value: 'B2B Focus', label: 'For domestic & industrial buyers' },
]

const benefitBullets = [
  'Generators, solar, electrical and related solutions',
  'Domestic and industrial applications',
  'Technical documentation and datasheets',
  'Competitive quotations and reliable support',
]

const productCards = [
  { name: 'Jinko Solar Tiger Neo 575 Wp', category: 'Solar Module', image: siteImages.solar.imagePath },
  { name: 'Sungrow SG5KCP2', category: 'Inverter', image: siteImages.inverter.imagePath },
  { name: 'Deye SE-G5.1', category: 'Battery', image: siteImages.battery.imagePath },
  { name: 'Cummins Diesel Generator', category: 'Generator', image: siteImages.generator.imagePath },
]

const powerSolutions = [
  { title: 'Generator', text: 'Reliable backup power', icon: BatteryCharging },
  { title: 'Solar PV', text: 'Clean renewable energy', icon: SunMedium },
  { title: 'Battery Storage', text: 'Energy when you need it', icon: Zap },
  { title: 'Hybrid Power', text: 'Maximum efficiency & reliability', icon: ShieldCheck },
]

const industries = [
  'Manufacturing',
  'Commercial Buildings',
  'Healthcare',
  'Construction',
  'Agriculture',
  'Hospitality',
]

const processSteps = [
  { number: '01', title: 'Share your requirement', text: 'Tell us what you need and where the site is located.' },
  { number: '02', title: 'Technical assessment', text: 'We review the application, load and project conditions.' },
  { number: '03', title: 'Product selection', text: 'We shortlist the right equipment and sourcing options.' },
  { number: '04', title: 'Quotation', text: 'We send a clear, practical quotation for review.' },
  { number: '05', title: 'Supply & support', text: 'Delivery, coordination and post-sale support follow.' },
]

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="quote-landing-section">
        <div className="container quote-landing-grid">
          <div className="quote-intro-panel">
            <p className="kicker">Plan your power solution</p>
            <h1>Request a Quote</h1>
            <p className="quote-intro-copy">Get a customized quotation for your power or solar requirements.</p>
            <p className="quote-intro-text">Share your requirements and our team will help you compare options, provide technical guidance and send you a quotation based on your needs.</p>

            <div className="quote-stat-grid">
              {statCards.map((card) => (
                <div key={card.value} className="quote-stat-card">
                  <div className="quote-stat-icon">
                    {card.value === '24-48' ? '◔' : card.value === 'Expert Support' ? '✦' : '⚡'}
                  </div>
                  <div className="quote-stat-copy">
                    <strong>{card.value}</strong>
                    <span>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <ul className="quote-bullets">
              {benefitBullets.map((item) => (
                <li key={item}><Check size={16} />{item}</li>
              ))}
            </ul>

            <div className="quote-image-block">
              <img src={siteImages.hero.imagePath} alt={siteImages.hero.altText} />
            </div>
          </div>

          <div className="quote-form-panel">
            <p className="kicker">Request a quotation</p>
            <h2>Tell us what you need</h2>
            <p>Fill in the details below and our team will get back to you with the right solution and quotation.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="page-section product-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <p className="kicker">Featured products</p>
              <h2>Popular Products</h2>
            </div>
            <button type="button" className="btn btn-secondary">View All Products <ArrowRight size={15} /></button>
          </div>

          <div className="product-card-grid">
            {productCards.map((product) => (
              <article key={product.name} className="product-card-item">
                <div className="product-card-topline">{product.category}</div>
                <div className="product-card-image-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="product-card-actions">
                  <button type="button" className="btn btn-secondary dark">View Details</button>
                  <button type="button" className="btn btn-primary">Request Quote</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section solutions-panel-section">
        <div className="container">
          <div className="section-header-row aligned-row">
            <div>
              <p className="kicker">From conventional to renewable</p>
              <h2>Our Power Solutions</h2>
            </div>
            <button type="button" className="btn btn-secondary">Explore Solutions <ArrowRight size={15} /></button>
          </div>

          <div className="solution-tiles">
            {powerSolutions.map(({ title, text, icon: Icon }) => (
              <div key={title} className="solution-tile">
                <div className="tile-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section industries-section">
        <div className="container industries-grid">
          <div className="industries-copy">
            <p className="kicker">Industries we serve</p>
            <h2>Industries We Serve</h2>
            <p>We provide customized power and solar solutions for a wide range of industries and applications.</p>
            <button type="button" className="btn btn-secondary">View All Industries <ArrowRight size={15} /></button>
          </div>

          <div className="industry-card-grid">
            {industries.map((industry, index) => (
              <article key={industry} className="industry-card">
                <img src={index % 2 === 0 ? siteImages.industryCommercial.imagePath : siteImages.industryManufacturing.imagePath} alt={industry} />
                <span>{industry}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section process-section">
        <div className="container">
          <div className="process-header">
            <p className="kicker">Quick &amp; simple</p>
            <h2>How It Works</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
