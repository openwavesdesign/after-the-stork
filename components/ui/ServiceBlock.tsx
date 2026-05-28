import Media from '@/components/ui/Media'
import type { Service } from '@/types'

interface ServiceBlockProps {
  service: Service
  isLast?: boolean
}

export default function ServiceBlock({ service, isLast = false }: ServiceBlockProps) {
  return (
    <div
      className={`border-t border-stroke ${isLast ? 'border-b' : ''} py-8`}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr_320px]">
        {/* Left: tag + hours */}
        <div className="flex flex-col gap-3 pt-1">
          <span
            className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em]"
            style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}
          >
            {service.tagline}
          </span>
          <span
            className="font-mono text-muted"
            style={{ fontSize: '0.75rem' }}
          >
            {service.hours}
          </span>
        </div>
        {/* Center: heading + copy */}
        <div className="flex flex-col gap-3">
          <h3
            className="font-serif text-ink font-light"
            style={{ fontSize: '1.5rem' }}
          >
            {service.name}
          </h3>
          <p
            className="text-dim"
            style={{ fontSize: '0.9375rem', lineHeight: '1.8' }}
          >
            {service.shortDescription}
          </p>
        </div>
        {/* Right: image */}
        <Media
          alt={`${service.name} — After the Stork`}
          label={service.name}
          className="w-full"
          style={{ height: '160px' }}
        />
      </div>
    </div>
  )
}
