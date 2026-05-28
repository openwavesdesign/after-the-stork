interface TestimonialProps {
  quote: string
  attribution: string
  className?: string
}

export default function Testimonial({ quote, attribution, className = '' }: TestimonialProps) {
  return (
    <div className={`border border-stroke p-9 ${className}`}>
      <div
        className="font-serif text-ghost leading-none mb-3 select-none"
        style={{ fontSize: '80px', lineHeight: '0.8' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <p
        className="font-serif italic text-dim"
        style={{ fontSize: '17px', lineHeight: '1.55' }}
      >
        {quote}
      </p>
      <p
        className="font-mono text-stroke uppercase tracking-[0.12em] mt-5"
        style={{ fontSize: '9px' }}
      >
        {attribution}
      </p>
    </div>
  )
}
