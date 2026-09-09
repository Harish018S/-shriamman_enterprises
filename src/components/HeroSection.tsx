import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { ArrowRight, Maximize2, X } from 'lucide-react'

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
  imageSlides?: { src: string; alt: string }[]
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
  imageSlides,
  badge,
  children,
}: HeroSectionProps) {
  const [imageZoomed, setImageZoomed] = useState(false)
  const slides = imageSlides?.length ? imageSlides : [{ src: image, alt: imageAlt }]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const currentSlide = slides[activeSlide] ?? slides[0]

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
          <button
            type="button"
            className="hero-image-button"
            onClick={() => setImageZoomed(true)}
            aria-label={`View larger image: ${currentSlide.alt}`}
          >
            <img key={currentSlide.src} src={currentSlide.src} alt={currentSlide.alt} loading="eager" />
            <span className="image-zoom-hint"><Maximize2 size={16} /> View image</span>
          </button>
          {slides.length > 1 ? (
            <div className="hero-slide-controls" aria-label="Hero image slides">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.src}
                  className={index === activeSlide ? 'active' : ''}
                  aria-label={`Show slide ${index + 1}: ${slide.alt}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {imageZoomed ? (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Expanded solar image" onClick={() => setImageZoomed(false)}>
          <button type="button" className="lightbox-close" onClick={() => setImageZoomed(false)} aria-label="Close expanded image">
            <X size={24} />
          </button>
          <img src={currentSlide.src} alt={currentSlide.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </section>
  )
}
