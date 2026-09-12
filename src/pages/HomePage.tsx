import { ArrowRight, BatteryCharging, Building2, Factory, Leaf, ShieldCheck, SunMedium } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { HeroSection } from '../components/HeroSection'
import { QuoteForm } from '../components/QuoteForm'
import { SectionHeader } from '../components/SectionHeader'

const solutionCards = [
  {
    title: 'Generator Solutions',
    icon: BatteryCharging,
    items: ['Generator sourcing', 'Supply', 'Installation', 'Commissioning', 'Maintenance / service', 'Power backup solutions'],
  },
  {
    title: 'Solar Energy Solutions',
    icon: SunMedium,
    items: ['Solar panel procurement', 'Solar system design', 'Supply', 'Installation', 'Commissioning', 'Solar EPC support', 'Operation & maintenance'],
  },
  {
    title: 'Energy Solutions',
    icon: Leaf,
    items: ['Power infrastructure', 'Backup power', 'Energy efficiency', 'Renewable energy transition', 'Customized power solutions'],
  },
]

const benefits = [
  'Reduced dependence on conventional power',
  'Long-term energy cost optimization',
  'Renewable energy adoption',
  'Reduced environmental impact',
  'Scalable solutions',
  'Improved energy planning',
]

const values = [
  { title: 'Single-point coordination', icon: Building2 },
  { title: 'Technical understanding', icon: ShieldCheck },
  { title: 'Procurement support', icon: Factory },
  { title: 'Reliable project execution', icon: ArrowRight },
]

const planningSteps = [
  { number: '01', title: 'Understand', text: 'Review your load, site, operating hours, and business priorities.' },
  { number: '02', title: 'Recommend', text: 'Compare generator backup, solar, or a practical combination of both.' },
  { number: '03', title: 'Deliver', text: 'Coordinate procurement, installation, commissioning, and handover.' },
  { number: '04', title: 'Support', text: 'Keep your power infrastructure dependable with ongoing service.' },
]

const marqueeItems = [
  '• Solar EPC Support',
  '• Reliable Energy Planning',
  '• Generator Sale',
  '• Solar EPC Support',
  '• Reliable Energy Planning',
  '• Generator Sale',
  '• Solar EPC Support',
  '• Reliable Energy Planning',
  '• Generator Sale',
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Complete Power Solutions for Business"
        title="Reliable Power Today. Smarter Energy Tomorrow."
        text="From generator sales, installation and service to solar energy systems, Shri Amman Enterprises helps commercial and industrial facilities stay powered, efficient and ready for growth."
        primaryAction={{ label: 'Explore Solar Solutions', href: '/solar-solutions' }}
        secondaryAction={{ label: 'Explore Generator Solutions', href: '/generator-solutions' }}
        image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Solar panels and industrial power infrastructure"
        imageSlides={[
          { src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80', alt: 'Solar panels and industrial power infrastructure' },
          { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80', alt: 'Industrial generator supplying backup power' },
          { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80', alt: 'Large rooftop solar installation' },
          { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80', alt: 'Generator and electrical equipment in a power facility' },
        ]}
        badge="Generators + Solar | Established 2005"
      />

      <div className="energy-ticker" aria-label="Energy solutions">
        <div className="energy-ticker-track">
          <div className="energy-ticker-group" aria-hidden="true">
            {marqueeItems.map((item, index) => <span key={`first-${index}`}>{item}</span>)}
          </div>
          <div className="energy-ticker-group" aria-hidden="true">
            {marqueeItems.map((item, index) => <span key={`second-${index}`}>{item}</span>)}
          </div>
        </div>
      </div>

      <section className="page-section consultation-section">
        <div className="container consultation-grid">
          <div>
            <SectionHeader
              eyebrow="Start With A Clear Plan"
              title="Plan the right power solution for your facility"
              text="Share your requirement and our team will help you compare generator backup, solar capacity, procurement, installation, and long-term service support."
            />
            <div className="proof-grid">
              <div className="proof-item"><strong>21+</strong><span>Years in power solutions</span></div>
              <div className="proof-item"><strong>End-to-end</strong><span>Procurement to commissioning</span></div>
              <div className="proof-item"><strong>B2B-first</strong><span>Commercial and industrial focus</span></div>
            </div>
            <div className="planning-panel">
              <p className="planning-panel-label">One team from requirement to support</p>
              <div className="planning-steps">
                {planningSteps.map((step) => (
                  <div className="planning-step" key={step.number}>
                    <span>{step.number}</span>
                    <div><strong>{step.title}</strong><p>{step.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="consultation-form-wrap">
            <div className="form-intro">
              <span className="eyebrow">Free consultation</span>
              <h2>Tell us what you need</h2>
              <p>We will get back to you with the next practical step.</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Powering business continuity and long-term energy readiness" center />

          <div className="card-grid three-col">
            {solutionCards.map(({ title, icon: Icon, items }) => (
              <article key={title} className="info-card solution-card">
                <div className="card-icon">
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container split-layout">
          <div>
            <SectionHeader
              eyebrow="Solar Expansion"
              title="Expanding from Power Backup to Clean Energy"
              text="With over 21 years in power and electrical solutions, we have built a strong foundation in generator support, electrical panels, and stabilizers. We are now expanding our capabilities into solar solutions to serve commercial and industrial power requirements."
            />
            <Link className="btn btn-primary" to="/contact">
              Discuss Your Solar Requirement
            </Link>
          </div>

          <div className="mini-panel">
            <div className="metric-box">
              <strong>Solar-ready</strong>
              <span>Procurement, design, and project coordination support</span>
            </div>
            <div className="metric-box">
              <strong>Commercial & Industrial</strong>
              <span>Energy planning for growing business requirements</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Why Solar" title="Business advantages of solar adoption" center />
          <div className="feature-list">
            {benefits.map((benefit) => (
              <div key={benefit} className="feature-pill">
                <span className="check">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="Why Choose Us" title="A practical B2B approach to power and energy solutions" center />
          <div className="card-grid four-col">
            {values.map(({ title, icon: Icon }) => (
              <article key={title} className="info-card value-card">
                <div className="card-icon small-card-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section demo-feedback-section">
        <div className="container">
          <SectionHeader
            eyebrow="Client Feedback - Demo Content"
            title="A place for approved customer experiences"
            text="These sample testimonials are for website demonstration purposes and will be replaced with verified customer feedback."
            center
          />
          <div className="card-grid four-col">
            <article className="info-card demo-testimonial"><strong>★★★★★ 5.0/5</strong><p>“The team was responsive throughout the enquiry and helped us understand the generator requirements clearly. The quotation process was straightforward and professional.”</p><span>Operations Manager<br />Industrial Equipment Buyer<br /><small>Sample / Demo Testimonial</small></span></article>
            <article className="info-card demo-testimonial"><strong>★★★★★ 4.8/5</strong><p>“We appreciated the quick response to our power requirement and the clear technical information provided during the enquiry.”</p><span>Procurement Manager<br />Commercial Projects<br /><small>Sample / Demo Testimonial</small></span></article>
            <article className="info-card demo-testimonial"><strong>★★★★★ 4.9/5</strong><p>“The product information was easy to understand, and the team was helpful in discussing our power and energy requirements.”</p><span>Project Coordinator<br />Engineering &amp; Infrastructure<br /><small>Sample / Demo Testimonial</small></span></article>
            <article className="info-card demo-testimonial"><strong>★★★★★ 4.8/5</strong><p>“The quotation enquiry process was simple, and the technical requirements were captured clearly.”</p><span>Purchase Executive<br />Industrial Buyer<br /><small>Sample / Demo Testimonial</small></span></article>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a tailored energy solution?"
        text="Discuss your power backup, generator, or solar requirement with our team to plan the right solution for your facility."
        primaryLabel="Request a Quote"
        primaryHref="/request-quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
