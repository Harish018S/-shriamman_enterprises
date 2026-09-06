import { SectionHeader } from '../components/SectionHeader'

const services = [
  'Consultation',
  'Requirement analysis',
  'Procurement',
  'System design',
  'Installation',
  'Commissioning',
  'Maintenance',
  'AMC',
  'Technical support',
]

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Support across the full power and energy lifecycle</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Service overview" title="From concept to commissioning and support" center />
          <div className="card-grid three-col">
            {services.map((service) => (
              <article key={service} className="info-card simple-card">
                <h3>{service}</h3>
                <p>End-to-end support tailored to the operating environment and business requirements.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
