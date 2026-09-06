import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { SectionHeader } from '../components/SectionHeader'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Contact Us</p>
          <h1>Connect with our business development team</h1>
        </div>
      </section>

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

      <section className="page-section alt-bg">
        <div className="container map-box">
          <div className="map-placeholder">
            <span>Google Maps Placeholder</span>
          </div>
        </div>
      </section>
    </div>
  )
}
