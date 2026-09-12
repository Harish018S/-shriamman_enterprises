import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Contact Us" title="Connect with our business development team" image={siteImages.assistant.imagePath} imageAlt={siteImages.assistant.altText} />

      <section className="page-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionHeader eyebrow="Business Contact" title="shriammanenterprises" />
            <ul className="contact-list">
              <li><MapPin size={18} /><span>No 55/6, P.H Road, Arumbakkam, Chennai - 600106</span></li>
              <li><Phone size={18} /><a href="tel:+0000000000">Phone [PLACEHOLDER]</a></li>
              <li><Mail size={18} /><a href="mailto:hello@example.com">Email [PLACEHOLDER]</a></li>
              <li><MessageCircle size={18} /><span>WhatsApp [PLACEHOLDER]</span></li>
            </ul>
            <div className="cta-stack">
              <a className="btn btn-primary" href="mailto:hello@example.com">Email Us</a>
              <a className="btn btn-secondary" href="tel:+0000000000">Call Us</a>
              <a className="btn btn-secondary" href="#">WhatsApp Chat</a>
            </div>
          </div>

          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Chennai and beyond"
          title="Start with a conversation about your site"
          text="Whether you are planning a new system, replacing aging equipment, or looking for service support, a clear first discussion helps define the right technical path."
          image={siteImages.assistant.imagePath}
          imageAlt={siteImages.assistant.altText}
        />
      </section>

      <section className="page-section alt-bg">
        <div className="container map-box">
          <div className="map-placeholder">
            <span>Google Maps Placeholder</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Before you reach out" title="Helpful information for a faster first conversation" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>For solar enquiries</h3><p>Share the site location, roof or land details, approximate monthly consumption, and whether you need supply, EPC, or maintenance support.</p></article>
            <article className="info-card"><h3>For generator enquiries</h3><p>Share the required capacity if known, critical loads, existing system details, and whether the need is a new installation, service, or AMC.</p></article>
            <article className="info-card"><h3>For partnerships</h3><p>Include your company profile, product or service portfolio, operating region, certifications, and the kind of collaboration you have in mind.</p></article>
          </div>
        </div>
      </section>
    </div>
  )
}
