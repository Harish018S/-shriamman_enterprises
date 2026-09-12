import { QuoteForm } from '../components/QuoteForm'
import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

export default function RequestQuotePage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Request a Quote" title="Tell us about your power or solar requirement" image={siteImages.rfq.imagePath} imageAlt={siteImages.rfq.altText} />

      <section className="page-section">
        <div className="container form-shell">
          <SectionHeader eyebrow="RFQ / Enquiry" title="Share the details and our team will respond" />
          <QuoteForm />
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container narrow">
          <SectionHeader eyebrow="What happens next" title="A simple path from enquiry to recommendation" />
          <ul className="check-list">
            <li>We review your requirement and identify any missing technical details.</li>
            <li>We contact you to understand the site, timeline, and decision criteria.</li>
            <li>We outline the practical scope, information required, and next project step.</li>
            <li>We continue toward a proposal or procurement discussion when the brief is clear.</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          reverse
          eyebrow="Prepare your brief"
          title="The more context you share, the more useful our response can be"
          text="A drawing, BOQ, recent bill, equipment list, site photograph, or simple description can help us understand the requirement and ask better follow-up questions."
          image={siteImages.rfq.imagePath}
          imageAlt={siteImages.rfq.altText}
        />
      </section>
    </div>
  )
}
