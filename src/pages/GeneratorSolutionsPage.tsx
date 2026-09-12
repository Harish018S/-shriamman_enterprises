import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

const generatorServices = [
  'Generator sourcing',
  'Generator supply',
  'Installation',
  'Electrical integration',
  'Commissioning',
  'Preventive maintenance',
  'Breakdown support',
  'AMC services',
]

export default function GeneratorSolutionsPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Generator Solutions" title="Dependable power backup for business continuity" image={siteImages.generator.imagePath} imageAlt={siteImages.generator.altText} />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Core Offerings" title="Generator solutions designed for business continuity" center />
          <div className="card-grid two-col">
            {generatorServices.map((item) => (
              <article key={item} className="info-card simple-card">
                <h3>{item}</h3>
                <p>Flexible support based on site requirements, load profile, and project scope.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container narrow">
          <SectionHeader eyebrow="Service Focus" title="Practical solution support" />
          <ul className="check-list">
            <li>Generator sourcing and procurement support</li>
            <li>Supply aligned to project specifications and requirements</li>
            <li>Installation and site coordination</li>
            <li>Electrical integration and commissioning</li>
            <li>Preventive maintenance and breakdown assistance</li>
            <li>AMC support for ongoing reliability</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          reverse
          eyebrow="Backup power"
          title="Keep essential operations moving through interruptions"
          text="A dependable generator solution is more than the machine. It includes the right capacity, safe installation, electrical changeover, commissioning, and a service plan that keeps the system ready."
          image={siteImages.services.imagePath}
          imageAlt={siteImages.services.altText}
        />
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Built around your site" title="Generator support that considers the complete installation" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>Capacity planning</h3><p>Review connected load, starting current, critical equipment, backup duration, and future expansion before equipment selection.</p></article>
            <article className="info-card"><h3>Site coordination</h3><p>Plan access, foundation, ventilation, fuel arrangements, cabling, changeover, and safety requirements with the project team.</p></article>
            <article className="info-card"><h3>Continuity after handover</h3><p>Use preventive maintenance, breakdown support, and AMC planning to keep backup power ready when it is needed.</p></article>
          </div>
        </div>
      </section>
    </div>
  )
}
