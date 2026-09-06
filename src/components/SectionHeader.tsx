type SectionHeaderProps = {
  eyebrow: string
  title: string
  text?: string
  center?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? 'section-header section-header-center' : 'section-header'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  )
}
