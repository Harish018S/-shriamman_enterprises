import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'

const projects = [
  { name: 'Project Name', location: 'Location', solution: 'Solution', capacity: 'Capacity', year: 'Year' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Generator / Solar', capacity: 'To be confirmed', year: 'Year placeholder' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Commercial solar', capacity: 'To be confirmed', year: 'Year placeholder' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Industrial power', capacity: 'To be confirmed', year: 'Year placeholder' },
]

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Projects" title="Project showcase and planning portfolio" image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85" imageAlt="Power infrastructure and transmission lines" />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Portfolio" title="Project categories ready for detailed case studies" text="Project details will be added as customer approvals and technical documentation become available. The structure below shows the information we will capture for each completed engagement." center />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={`${project.name}-${index}`} className="project-card">
                <div className="project-topline">{project.name}</div>
                <ul>
                  <li><strong>Location:</strong> {project.location}</li>
                  <li><strong>Solution:</strong> {project.solution}</li>
                  <li><strong>Capacity:</strong> {project.capacity}</li>
                  <li><strong>Year:</strong> {project.year}</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container narrow">
          <SectionHeader eyebrow="What each case study will cover" title="Useful project information, not just a photograph" />
          <ul className="check-list">
            <li>Customer operating context and project objective</li>
            <li>Load profile, capacity, site conditions, and selected technology</li>
            <li>Scope delivered, including procurement, installation, and commissioning</li>
            <li>Service arrangement and operational support after handover</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          eyebrow="Project delivery"
          title="The finished installation is only one part of the outcome"
          text="Strong project records connect the original requirement to the delivered scope, technical decisions, commissioning results, and service plan. This is how future customers can evaluate a project properly."
          image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
          imageAlt="Power infrastructure and electricity transmission lines"
        />
      </section>
    </div>
  )
}
