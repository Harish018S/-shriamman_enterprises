import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type HeroSectionProps = {
  eyebrow?: string
  title: string
  text: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  image: string
  imageAlt: string
  badge?: string
  children?: ReactNode
}

export function HeroSection({
  eyebrow,
  title,
  text,
  primaryAction,
  secondaryAction,
  image,
  imageAlt,
  badge,
  children,
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          {badge ? <div className="hero-badge">{badge}</div> : null}
          {(primaryAction || secondaryAction) && (
            <div className="button-row">
              {primaryAction ? (
                <a className="btn btn-primary" href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight size={16} />
                </a>
              ) : null}
              {secondaryAction ? (
                <a className="btn btn-secondary" href={secondaryAction.href}>
                  {secondaryAction.label}
                </a>
              ) : null}
            </div>
          )}
          {children}
        </div>

        <div className="hero-visual">
          <img src={image} alt={imageAlt} loading="eager" />
        </div>
      </div>
    </section>
  )
}
