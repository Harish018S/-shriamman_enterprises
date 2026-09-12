import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

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
      <PageHero eyebrow="Why Choose Us" title="Practical, business-focused support for power and energy requirements" image={siteImages.about.imagePath} imageAlt={siteImages.about.altText} />

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

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="What working with us looks like" title="A more useful experience for busy facility teams" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>Clear recommendations</h3><p>Understand the reasoning behind the proposed equipment, scope, and next step.</p></article>
            <article className="info-card"><h3>Practical coordination</h3><p>Keep commercial, technical, procurement, and site conversations connected.</p></article>
            <article className="info-card"><h3>Long-term thinking</h3><p>Consider maintenance, service access, future growth, and operating reliability from the start.</p></article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="A better working relationship"
          title="Make the technical conversation easier to act on"
          text="Customers need practical decisions, clear ownership, and dependable follow-through. We bring the commercial and technical discussion closer together so the next step is easier to see."
          image={siteImages.about.imagePath}
          imageAlt={siteImages.about.altText}
        />
      </section>
    </div>
  )
}
