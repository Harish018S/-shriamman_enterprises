import { SectionHeader } from '../components/SectionHeader'

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
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Solar Products / Technology</p>
          <h1>Technology options for practical solar system planning</h1>
        </div>
      </section>

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
    </div>
  )
}
