import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

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

const serviceImages = [siteImages.generator, siteImages.services, siteImages.solar, siteImages.panel, siteImages.assistant, siteImages.services, siteImages.services, siteImages.services, siteImages.assistant]

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Services" title="Support across the full power and energy lifecycle" image={siteImages.services.imagePath} imageAlt={siteImages.services.altText} />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Service overview" title="From concept to commissioning and support" center />
          <div className="card-grid three-col">
            {services.map((service, index) => (
              <article key={service} className="info-card simple-card image-card">
                <img src={serviceImages[index].imagePath} alt={serviceImages[index].altText} loading="lazy" width="900" height="600" />
                <h3>{service}</h3>
                <p>End-to-end support tailored to the operating environment and business requirements.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="Delivery model" title="A clear handoff from requirement to reliable operation" center />
          <div className="step-grid">
            <div className="step-item"><span>01</span><h3>Understand</h3><p>Clarify the site, load, timeline, budget, and operating priorities.</p></div>
            <div className="step-item"><span>02</span><h3>Plan</h3><p>Define the equipment, scope, responsibilities, and project sequence.</p></div>
            <div className="step-item"><span>03</span><h3>Execute</h3><p>Coordinate supply, installation, testing, commissioning, and documentation.</p></div>
            <div className="step-item"><span>04</span><h3>Maintain</h3><p>Support ongoing performance with service, AMC, and technical assistance.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Service in the field"
          title="Good project delivery continues after the switch-on"
          text="Commissioning is a milestone, not the finish line. Clear documentation, planned maintenance, responsive troubleshooting, and technical support help protect the value of the installation."
          image={siteImages.services.imagePath}
          imageAlt={siteImages.services.altText}
        />
      </section>
    </div>
  )
}
