import { QuoteForm } from '../components/QuoteForm'
import { SectionHeader } from '../components/SectionHeader'

export default function RequestQuotePage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Request a Quote</p>
          <h1>Tell us about your power or solar requirement</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container form-shell">
          <SectionHeader eyebrow="RFQ / Enquiry" title="Share the details and our team will respond" />
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
