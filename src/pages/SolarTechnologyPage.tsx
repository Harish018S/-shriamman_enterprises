import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

const techStack = [
  {
    title: 'Mono PERC',
    text: 'A widely used high-efficiency module technology suitable for a broad range of commercial and industrial applications.',
  },
  {
    title: 'TOPCon',
    text: 'Advanced module technology focused on higher efficiency and strong performance characteristics based on project-specific design requirements.',
  },
  {
    title: 'Bifacial Modules',
    text: 'Modules designed to capture sunlight from both sides, often considered for applications where rear-side gain can improve energy yield.',
  },
  {
    title: 'High-Efficiency Modules',
    text: 'Premium module options selected based on project constraints, available installation area, and expected generation goals.',
  },
  {
    title: 'Inverters',
    text: 'Conversion equipment selected based on system capacity, configuration, and operational requirements for solar installations.',
  },
  {
    title: 'Mounting Structures',
    text: 'Support systems for rooftop, ground-mounted, and site-specific solar deployments, chosen according to structural and environmental conditions.',
  },
  {
    title: 'Solar BOS Components',
    text: 'Balance of system components such as protection, cabling, connectors, and associated electrical accessories based on approved project specifications.',
  },
]

export default function SolarTechnologyPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Solar Products / Technology" title="Technology options for practical solar system planning" image={siteImages.solar.imagePath} imageAlt={siteImages.solar.altText} />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Technology overview" title="Module and system technology suited to project requirements" center />
          <div className="card-grid two-col">
            {techStack.map(({ title, text }) => (
              <article key={title} className="info-card simple-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container narrow">
          <SectionHeader eyebrow="Supplier flexibility" title="Looking for a specific module or manufacturer?" />
          <p className="content-text">
            Available based on project requirements and approved supplier specifications. We can support requirement review and supplier alignment for the right technical fit.
          </p>
          <a className="btn btn-primary" href="/request-quote">Send Your Requirement</a>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          reverse
          eyebrow="System thinking"
          title="Every component has a job in the final energy yield"
          text="Modules, inverters, structures, protection, cabling, and monitoring work as one system. We help align those choices with the site, capacity, installation conditions, and service expectations."
          image={siteImages.solar.imagePath}
          imageAlt={siteImages.solar.altText}
        />
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="How technology is selected" title="The right component depends on the project, not just the datasheet" center />
          <div className="card-grid three-col">
            <article className="info-card"><h3>Site and structure</h3><p>Available area, roof condition, orientation, shading, wind exposure, and access influence the system layout.</p></article>
            <article className="info-card"><h3>Energy objective</h3><p>Self-consumption, peak demand, backup expectations, generation target, and expansion plans shape the design brief.</p></article>
            <article className="info-card"><h3>Lifecycle fit</h3><p>Serviceability, warranties, monitoring, replacement planning, and supplier support matter throughout system operation.</p></article>
          </div>
        </div>
      </section>
    </div>
  )
}
