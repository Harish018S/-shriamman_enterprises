import { useState } from 'react'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { company } from '../data/company'

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" aria-label={company.companyName}>
            <span className="brand-mark">{company.companyName.slice(0, 1).toUpperCase()}</span>
            <span>
              <strong>{company.companyName}</strong>
              <small>{company.tagline}</small>
            </span>
          </NavLink>

          <nav className={`main-nav ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
            {company.navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm" href="/request-quote">
              Request a Quote
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">{company.companyName.slice(0, 1).toUpperCase()}</span>
              <span>
                <strong>{company.companyName}</strong>
                <small>{company.tagline}</small>
              </span>
            </div>
            <p className="footer-copy">{company.shortDescription}</p>
            <div className="footer-socials">
              <a href={company.socialLinks.linkedin} aria-label="LinkedIn">in</a>
              <a href={company.socialLinks.facebook} aria-label="Facebook">f</a>
              <a href={company.socialLinks.instagram} aria-label="Instagram">◎</a>
              <a href={company.socialLinks.x} aria-label="X">x</a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {company.navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Solutions</h3>
            <ul className="footer-links">
              <li><NavLink to="/generator-solutions">Generator Solutions</NavLink></li>
              <li><NavLink to="/solar-solutions">Solar Energy Solutions</NavLink></li>
              <li><NavLink to="/solar-technology">Solar Technology</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>{company.address}</span>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {company.companyName}. All rights reserved.</span>
          <div className="legal-links">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-conditions">Terms &amp; Conditions</NavLink>
          </div>
        </div>
      </footer>
    </>
  )
}
