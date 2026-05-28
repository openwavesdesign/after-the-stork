import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
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
            style={{ fontSize: '8px', padding: '4px 10px' }}
          >
            {service.tagline}
          </span>
          <span
            className="font-mono text-stroke"
            style={{ fontSize: '9px' }}
          >
            {service.hours}
          </span>
        </div>
        {/* Center: heading + copy */}
        <div className="flex flex-col gap-3">
          <h3
            className="font-serif text-ink font-light"
            style={{ fontSize: '24px' }}
          >
            {service.name}
          </h3>
          <p
            className="font-mono text-dim"
            style={{ fontSize: '12px', lineHeight: '1.8' }}
          >
            {service.shortDescription}
          </p>
        </div>
        {/* Right: image */}
        <ImagePlaceholder
          label={service.name}
          dimensions="320 × 200 px"
          className="w-full"
          style={{ height: '160px' }}
        />
      </div>
    </div>
  )
}
