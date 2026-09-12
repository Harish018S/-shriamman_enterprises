import { BatteryCharging, Factory, Leaf, ShieldCheck, SunMedium, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'

const solutions = [
  { title: 'Rooftop Solar', text: 'Plan on-site generation around available roof area, consumption, electrical integration, and long-term support.', icon: SunMedium },
  { title: 'Commercial Solar', text: 'Explore daytime generation for offices, retail, institutions, warehouses, and commercial operations.', icon: Factory },
  { title: 'Industrial Solar', text: 'Assess larger loads and operating patterns before selecting a practical PV and power strategy.', icon: Leaf },
  { title: 'Ground-Mounted Solar', text: 'Coordinate land-based solar planning with site, structure, access, and electrical requirements.', icon: SunMedium },
  { title: 'Hybrid Solar + Generator', text: 'Consider solar, battery, and generator coordination for continuity, critical loads, and energy planning.', icon: BatteryCharging },
  { title: 'Solar EPC and O&M', text: 'Support procurement, installation, commissioning, documentation, maintenance, and technical assistance.', icon: Wrench },
  { title: 'Power Distribution', text: 'Connect generator and solar plans with panels, protection, stabilizers, and site distribution needs.', icon: ShieldCheck },
]

export default function SolutionsPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Solutions" title="Power solutions that connect today's reliability with tomorrow's energy plan." text="Shri Amman Enterprises is established in generator and electrical solutions and is expanding into solar energy, storage, pumping, lighting, and hybrid power support." image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85" imageAlt="Large solar installation in an energy facility" />
      <section className="page-section"><div className="container"><SectionHeader eyebrow="Solution areas" title="Start with the operating problem" text="Solutions are not packaged claims. Final design depends on the site, load, application, equipment, and confirmed scope." center /><div className="card-grid three-col">{solutions.map(({ title, text, icon: Icon }) => <article className="info-card solution-card" key={title}><div className="card-icon"><Icon size={25} /></div><h3>{title}</h3><p>{text}</p><Link className="text-link" to="/request-quote">Discuss this solution</Link></article>)}</div></div></section>
      <section className="page-section alt-bg"><div className="container narrow"><SectionHeader eyebrow="Indicative planning inputs" title="The right solution follows the requirement" /><ul className="check-list"><li>Load profile, peak demand, and daily energy consumption</li><li>Solar resource, roof or land area, and electrical integration</li><li>Battery backup duration, generator minimum loading, and critical loads</li><li>Location, delivery requirements, local regulations, and service expectations</li></ul></div></section>
      <CTASection title="Need help choosing a solution?" text="Share the operating context and the team can identify the next practical step." primaryLabel="Request a Quote" primaryHref="/request-quote" secondaryLabel="Explore Products" secondaryHref="/products" />
    </div>
  )
}