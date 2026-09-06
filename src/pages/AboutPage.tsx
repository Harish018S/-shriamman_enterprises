import { SectionHeader } from '../components/SectionHeader'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">About Us</p>
          <h1>From Reliable Backup Power to Sustainable Energy</h1>
        </div>
      </section>

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
    </div>
  )
}
