import AnimatedSection from '../animation/AnimatedSection'

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
  }

  return (
    <AnimatedSection className={`mb-12 lg:mb-16 ${alignClasses[align]} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-neon-blue mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}
