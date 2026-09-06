import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/SectionHeader'

export function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="page-section">
        <div className="container narrow legal-copy">
          <SectionHeader eyebrow="Placeholder notice" title="This policy will be updated with official company information" />
          <p>This privacy policy section is a placeholder and should be replaced with the company’s final legal wording when available.</p>
          <Link className="text-link" to="/contact">Contact the company</Link>
        </div>
      </section>
    </div>
  )
}

export function TermsConditionsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Legal</p>
          <h1>Terms &amp; Conditions</h1>
        </div>
      </section>
      <section className="page-section">
        <div className="container narrow legal-copy">
          <SectionHeader eyebrow="Placeholder notice" title="This document will be finalized with company-approved terms" />
          <p>This terms and conditions section is a placeholder and should be replaced with the final approved policy before public launch.</p>
          <Link className="text-link" to="/contact">Contact the company</Link>
        </div>
      </section>
    </div>
  )
}
