import { CTASection } from '../components/CTASection'
import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'

const solarCategories = [
  {
    title: 'Rooftop Solar',
    type: 'Suitable for commercial buildings and institutional facilities',
    description: 'Solar solutions for rooftops to support on-site generation and energy planning.',
    benefits: ['Reduced grid dependence', 'Space-efficient deployment', 'Scalable capacity'],
  },
  {
    title: 'Commercial Solar',
    type: 'Suitable for offices, retail, and commercial premises',
    description: 'Designed to meet operational energy requirements while helping reduce long-term power costs.',
    benefits: ['Energy planning support', 'Operational flexibility', 'Business sustainability'],
  },
  {
    title: 'Industrial Solar',
    type: 'Suitable for industrial facilities and manufacturing operations',
    description: 'Custom planning for facilities with substantial power consumption and equipment load requirements.',
    benefits: ['Load planning', 'Reliable power support', 'Long-term resilience'],
  },
  {
    title: 'Ground-Mounted Solar',
    type: 'Suitable for large sites and utility-scale planning',
    description: 'Structures designed for land-based installations with scalable capacity planning.',
    benefits: ['High capacity potential', 'Flexible site planning', 'Energy diversification'],
  },
  {
    title: 'Solar EPC',
    type: 'Suitable for project developers and enterprise customers',
    description: 'Procurement, coordination, and project support for end-to-end execution.',
    benefits: ['Single communication channel', 'Execution coordination', 'Scope clarity'],
  },
  {
    title: 'Solar Panel Supply & Procurement',
    type: 'Suitable for project-specific requirements',
    description: 'Assistance in evaluating panel requirements, project specifications, and sourcing support.',
    benefits: ['Project-aligned procurement', 'Specification review', 'Supplier coordination'],
  },
  {
    title: 'Solar O&M',
    type: 'Suitable for operational solar systems',
    description: 'Support services focused on continued reliability and performance monitoring.',
    benefits: ['Operational continuity', 'Preventive support', 'Technical assistance'],
  },
]

const workflow = [
  'Requirement Assessment',
  'Site Evaluation',
  'System Design',
  'Component Procurement',
  'Installation',
  'Testing & Commissioning',
  'Ongoing Support',
]

export default function SolarSolutionsPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Solar Energy Solutions" title="Solar Energy Solutions for a Smarter Tomorrow" text="We are expanding into solar procurement and installation to support businesses with practical renewable energy solutions for commercial and industrial operations." image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85" imageAlt="Large rooftop solar installation" />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Our solar offerings" title="Solution categories built for business energy planning" center />
          <div className="card-grid two-col">
            {solarCategories.map(({ title, type, description, benefits }) => (
              <article key={title} className="info-card solution-card">
                <h3>{title}</h3>
                <p className="muted">{type}</p>
                <p>{description}</p>
                <ul>
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <a href="/request-quote" className="text-link">Request a quote</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container">
          <SectionHeader eyebrow="How We Work" title="A structured approach to solar project support" center />
          <div className="step-grid">
            {workflow.map((step, index) => (
              <div key={step} className="step-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Solar in practice"
          title="Turn available roof and land into a considered energy asset"
          text="From rooftop feasibility to commercial and industrial installations, solar planning should connect the available site with actual operating demand, system performance, and long-term maintenance."
          image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
          imageAlt="Solar panels installed across a large rooftop"
        />
      </section>

      <CTASection
        title="Planning a solar requirement?"
        text="Share your site plans, power expectations, or procurement requirement and we will scope the next steps with you."
        primaryLabel="Send Your Requirement"
        primaryHref="/request-quote"
      />
    </div>
  )
}
