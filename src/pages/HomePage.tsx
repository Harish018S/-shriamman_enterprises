import { ArrowRight, BatteryCharging, Building2, Factory, Leaf, ShieldCheck, SunMedium } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { HeroSection } from '../components/HeroSection'
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

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Power Solutions for Commercial & Industrial Requirements"
        title="Reliable Power Solutions. Smarter Energy for the Future."
        text="From dependable generator sales and service to solar energy systems, Shri Amman Enterprises helps businesses build reliable, efficient and sustainable power infrastructure."
        primaryAction={{ label: 'Explore Solar Solutions', href: '/solar-solutions' }}
        secondaryAction={{ label: 'Request a Quote', href: '/request-quote' }}
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Solar panels and industrial energy infrastructure"
        badge="Established 2005 • 21 years of service"
      />

      <div className="energy-ticker" aria-label="Energy solutions">
        <div className="energy-ticker-track">
          <span>Solar EPC Support</span><span>•</span><span>Commercial Power Systems</span><span>•</span><span>Reliable Energy Planning</span><span>•</span>
          <span>Solar EPC Support</span><span>•</span><span>Commercial Power Systems</span><span>•</span><span>Reliable Energy Planning</span><span>•</span>
        </div>
      </div>

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
