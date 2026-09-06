type CTASectionProps = {
  title: string
  text: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <p className="eyebrow eyebrow-light">Business enquiry</p>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
        <div className="button-row">
          <a className="btn btn-primary" href={primaryHref}>
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a className="btn btn-secondary btn-secondary-light" href={secondaryHref}>
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
