import { SectionHeader } from '../components/SectionHeader'
import { VisualBreak } from '../components/VisualBreak'
import { PageHero } from '../components/PageHero'
import { siteImages } from '../data/images'

const industries = [
  { name: 'Manufacturing', image: siteImages.industryManufacturing },
  { name: 'Commercial Buildings', image: siteImages.industryCommercial },
  { name: 'Hospitals', image: siteImages.industryHealthcare },
  { name: 'Hotels', image: siteImages.industryCommercial },
  { name: 'Educational Institutions', image: siteImages.industryCommercial },
  { name: 'Data / IT Infrastructure', image: siteImages.industryHealthcare },
  { name: 'Warehouses', image: siteImages.industryManufacturing },
  { name: 'Retail', image: siteImages.industryCommercial },
  { name: 'Residential / Apartment Communities', image: siteImages.industryCommercial },
  { name: 'Other Industrial Applications', image: siteImages.industryManufacturing },
]

export default function IndustriesPage() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Industries We Serve" title="Solutions suitable for a range of business environments" image={siteImages.industryManufacturing.imagePath} imageAlt={siteImages.industryManufacturing.altText} />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="Sector focus" title="Industry-ready energy planning" center />
          <div className="card-grid three-col">
            {industries.map((industry) => (
              <article key={industry.name} className="info-card simple-card image-card">
                <img src={industry.image.imagePath} alt={industry.image.altText} loading="lazy" width="900" height="600" />
                <h3>{industry.name}</h3>
                <p>Solutions suitable for business continuity, operational resilience, and energy planning.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-bg">
        <div className="container split-layout">
          <div>
            <SectionHeader eyebrow="Different sites, different priorities" title="Energy planning shaped around how your business operates" />
            <p className="content-text">A hospital may prioritize uninterrupted critical loads. A factory may need to manage motor starting and production continuity. An office or warehouse may focus on rooftop potential and predictable energy costs.</p>
            <p className="content-text">We use the operating context to guide the conversation before recommending a generator, solar system, service plan, or combined approach.</p>
          </div>
          <div className="mini-panel">
            <div className="metric-box"><strong>Critical loads</strong><span>Identify equipment that must remain supported during interruptions.</span></div>
            <div className="metric-box"><strong>Growth planning</strong><span>Keep future capacity, expansion, and maintenance requirements visible.</span></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <VisualBreak
          reverse
          eyebrow="Operational context"
          title="Energy infrastructure should fit the work happening around it"
          text="Production floors, hospitals, offices, warehouses, and campuses all have different load patterns and continuity priorities. The first step is understanding the environment before selecting the solution."
          image={siteImages.industryManufacturing.imagePath}
          imageAlt={siteImages.industryManufacturing.altText}
        />
      </section>
    </div>
  )
}
