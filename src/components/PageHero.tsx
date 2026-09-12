type PageHeroProps = {
  eyebrow: string
  title: string
  text?: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, text, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero small-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {text ? <p className="lead compact-lead">{text}</p> : null}
        </div>
            <div className="page-hero-image live-image">
          <img src={image} alt={imageAlt} loading="eager" />
        </div>
      </div>
    </section>
  )
}
