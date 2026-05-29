interface TestimonialProps {
  quote: string
  attribution: string
  className?: string
}

export default function Testimonial({ quote, attribution, className = '' }: TestimonialProps) {
  return (
    <div
      className={`border bg-paper p-10 transition-colors duration-300 hover:border-accent ${className}`}
      style={{ borderColor: 'var(--stroke)' }}
    >
      <span
        className="font-serif italic select-none block text-accent-soft text-[5rem] leading-[0.7] mb-3.5"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="font-serif italic text-ink-soft text-[1.375rem] leading-[1.45]">
        {quote}
      </p>
      <div
        className="flex items-center gap-3 mt-6 font-mono uppercase tracking-[0.18em]"
        style={{ fontSize: '0.75rem', color: 'var(--mid)' }}
      >
        <span
          aria-hidden="true"
          style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--stroke)', flexShrink: 0 }}
        />
        {attribution}
      </div>
    </div>
  )
}
