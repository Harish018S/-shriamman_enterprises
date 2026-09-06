import { SectionHeader } from '../components/SectionHeader'

const industries = [
  'Manufacturing',
  'Commercial Buildings',
  'Hospitals',
  'Hotels',
  'Educational Institutions',
  'Data / IT Infrastructure',
  'Warehouses',
  'Retail',
  'Residential / Apartment Communities',
  'Other Industrial Applications',
]

export default function IndustriesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Industries We Serve</p>
          <h1>Solutions suitable for a range of business environments</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Sector focus" title="Industry-ready energy planning" center />
          <div className="card-grid three-col">
            {industries.map((industry) => (
              <article key={industry} className="info-card simple-card">
                <h3>{industry}</h3>
                <p>Solutions suitable for business continuity, operational resilience, and energy planning.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
