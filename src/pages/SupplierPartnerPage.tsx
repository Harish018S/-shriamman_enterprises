import { SupplierForm } from '../components/SupplierForm'
import { SectionHeader } from '../components/SectionHeader'

export default function SupplierPartnerPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Partner With Us</p>
          <h1>We welcome supplier and partnership enquiries</h1>
        </div>
      </section>

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
    </div>
  )
}
