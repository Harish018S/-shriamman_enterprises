import { SupplierForm } from '../components/SupplierForm'
import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

export default function SupplierPartnerPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Partner With Us" title="We welcome supplier and partnership enquiries" image={siteImages.assistant.imagePath} imageAlt={siteImages.assistant.altText} />

      <section className="page-section">
        <div className="container form-shell">
          <SectionHeader
            eyebrow="Business Partnership"
            title="We are expanding our solar procurement and project capabilities"
            text="We welcome discussions with module manufacturers, distributors, EPC partners and energy solution providers."
          />
          <SupplierForm />
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="Partner profile" title="Where collaboration can create value" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>Product manufacturers</h3><p>Module, inverter, structure, generator, panel, stabilizer, and electrical equipment manufacturers with dependable documentation and support.</p></article>
            <article className="info-card"><h3>Distribution partners</h3><p>Regional distributors who can support availability, commercial terms, delivery planning, and warranty coordination.</p></article>
            <article className="info-card"><h3>Technical and EPC partners</h3><p>Engineering, installation, commissioning, monitoring, and O&amp;M teams who strengthen project execution.</p></article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Partner network"
          title="Reliable delivery is stronger when capable teams work together"
          text="We are building relationships with organizations that bring dependable products, technical knowledge, regional reach, or execution capability to commercial and industrial projects."
          image={siteImages.assistant.imagePath}
          imageAlt={siteImages.assistant.altText}
        />
      </section>
    </div>
  )
}
