import { SectionHeader } from '../components/SectionHeader'

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
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Generator Solutions</p>
          <h1>Dependable power backup for business continuity</h1>
        </div>
      </section>

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
    </div>
  )
}
