import { SectionHeader } from '../components/SectionHeader'

const reasons = [
  'Single-point coordination',
  'Technical understanding',
  'Procurement support',
  'Installation capability',
  'After-sales service',
  'Customized solutions',
  'B2B-focused approach',
  'Reliable project execution',
]

export default function WhyChooseUsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Why Choose Us</p>
          <h1>Practical, business-focused support for power and energy requirements</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Value proposition" title="A reliable partner for business power infrastructure" center />
          <div className="feature-list">
            {reasons.map((reason) => (
              <div key={reason} className="feature-pill">
                <span className="check">✓</span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
