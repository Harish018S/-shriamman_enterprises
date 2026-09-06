import { SectionHeader } from '../components/SectionHeader'

const projects = [
  { name: 'Project Name', location: 'Location', solution: 'Solution', capacity: 'Capacity', year: 'Year' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Generator / Solar', capacity: 'To be confirmed', year: 'Year placeholder' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Commercial solar', capacity: 'To be confirmed', year: 'Year placeholder' },
  { name: 'Project details coming soon', location: 'Location placeholder', solution: 'Industrial power', capacity: 'To be confirmed', year: 'Year placeholder' },
]

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero small-hero">
        <div className="container narrow">
          <p className="eyebrow">Projects</p>
          <h1>Project showcase and planning portfolio</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Portfolio" title="Placeholder project structures for future updates" center />
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
    </div>
  )
}
