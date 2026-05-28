import React from 'react'

interface ImagePlaceholderProps {
  label: string
  dimensions?: string
  className?: string
  style?: React.CSSProperties
}

export default function ImagePlaceholder({
  label,
  dimensions,
  className = '',
  style,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-ghost overflow-hidden ${className}`}
      style={style}
    >
      {/* SVG X mark */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0" y1="0" x2="100%" y2="100%"
          stroke="#C5C1BA"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <line
          x1="100%" y1="0" x2="0" y2="100%"
          stroke="#C5C1BA"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      </svg>
      {/* Label */}
      <div className="relative z-10 flex flex-col items-center gap-1 px-4 text-center">
        <span
          className="font-mono text-mid uppercase tracking-[0.15em]"
          style={{ fontSize: '9px' }}
        >
          {label}
        </span>
        {dimensions && (
          <span
            className="font-mono text-stroke"
            style={{ fontSize: '8px' }}
          >
            {dimensions}
          </span>
        )}
      </div>
    </div>
  )
}
