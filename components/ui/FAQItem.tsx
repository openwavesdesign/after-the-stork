'use client'

interface FAQItemProps {
  question: string
  answer: string
  isLast?: boolean
}

export default function FAQItem({ question, answer, isLast = false }: FAQItemProps) {
  return (
    <div className={`border-t border-stroke ${isLast ? 'border-b' : ''} py-6`}>
      <div className="flex items-start justify-between gap-6">
        <h3
          className="font-serif text-ink font-light flex-1"
          style={{ fontSize: '19px' }}
        >
          {question}
        </h3>
        <span
          className="font-mono text-mid flex-shrink-0 mt-0.5"
          style={{ fontSize: '16px' }}
          aria-hidden="true"
        >
          +
        </span>
      </div>
      {/* Answer always visible in this build; structure supports accordion refactor */}
      <p
        className="font-mono text-dim mt-4 max-w-[640px]"
        style={{ fontSize: '12px', lineHeight: '1.8' }}
      >
        {answer}
      </p>
    </div>
  )
}
