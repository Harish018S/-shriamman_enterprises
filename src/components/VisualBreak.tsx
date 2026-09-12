type VisualBreakProps = {
  eyebrow: string
  title: string
  text: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export function VisualBreak({ eyebrow, title, text, image, imageAlt, reverse = false }: VisualBreakProps) {
  return (
    <section className={`visual-break ${reverse ? 'visual-break-reverse' : ''}`}>
      <div className="visual-break-image live-image">
        <img src={image} alt={imageAlt} loading="lazy" width="1200" height="800" />
      </div>
      <div className="visual-break-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
