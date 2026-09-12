import { SectionHeader } from '../components/SectionHeader'
import { PageHero } from '../components/PageHero'
import { VisualBreak } from '../components/VisualBreak'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="About Us" title="From Reliable Backup Power to Sustainable Energy" image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85" imageAlt="Solar panels in a green landscape" />

      <section className="page-section">
        <div className="container two-col-layout">
          <div>
            <SectionHeader eyebrow="Company Overview" title="A power and energy business built for dependable infrastructure" />
            <p className="content-text">
              Shri Amman Enterprises is a power and electrical solutions company operating since 2005. We provide sales and service of all types of generators, manufacturers of all types of electrical panels and stabilizers, and are expanding our capabilities into solar energy solutions for commercial and industrial needs.
            </p>
          </div>

          <div className="info-panel">
            <h3>Mission</h3>
            <p>To help businesses secure reliable, efficient, and future-ready power and electrical solutions through practical consultation, dependable service, and sustainable energy planning.</p>
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container two-col-layout">
          <div className="info-panel">
            <h3>Vision</h3>
            <p>To become a trusted name in power, generator support, electrical infrastructure, and renewable energy solutions for business growth and long-term reliability.</p>
          </div>

          <div className="info-panel">
            <h3>Values</h3>
            <p>Technical understanding, responsible execution, transparent business engagement, and customer-focused service delivery.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Built from the field"
          title="Experience that starts with how a facility really operates"
          text="Power requirements are shaped by production schedules, critical equipment, site constraints, and the people who maintain the system. Our approach keeps those practical details in view."
          image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
          imageAlt="Engineer reviewing industrial power equipment"
        />
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="How we help" title="One partner across the power requirement" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>Assess</h3><p>We start with your load, site conditions, operating hours, expansion plans, and service expectations.</p></article>
            <article className="info-card"><h3>Coordinate</h3><p>We bring procurement, equipment, electrical integration, installation, and commissioning into one conversation.</p></article>
            <article className="info-card"><h3>Support</h3><p>We stay involved after handover through maintenance planning, technical assistance, and responsive service.</p></article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container narrow">
          <SectionHeader eyebrow="Our business" title="Existing generator business and strategic solar expansion" />
          <p className="content-text">
            Shri Amman Enterprises has built its foundation on generator sales and service, as well as the manufacturing of electrical panels and stabilizers. As part of its long-term growth strategy, the company is expanding into solar energy solutions to support businesses with renewable and sustainable power options.
          </p>
          <p className="content-text">
            This growth reflects a broader business objective: to support customers with power continuity, energy planning, and future-ready infrastructure while maintaining strong service reliability.
          </p>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container narrow">
          <SectionHeader eyebrow="Our direction" title="Building a more complete energy partner for businesses" />
          <p className="content-text">Our solar expansion is focused on practical adoption: helping customers understand the right system, source suitable components, and coordinate dependable execution.</p>
          <p className="content-text">The result is a balanced approach to energy planning, combining backup power experience with renewable energy opportunities and long-term service thinking.</p>
        </div>
      </section>
    </div>
  )
}
