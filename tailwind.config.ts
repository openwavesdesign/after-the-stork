import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4EFE6',
        'paper-2': '#ECE6DA',
        'paper-3': '#E1D9C8',
        canvas: '#ECE6DA',
        ghost: '#D9D2C2',
        stroke: '#8A8170',
        muted: '#5F5949',
        mid: '#524D40',
        dim: '#3F3B30',
        'ink-soft': '#2E2A22',
        ink: '#1B1814',
        accent: '#224068',
        'accent-mid': '#496894',
        'accent-soft': '#94A8C5',
        'accent-tint': '#D3DCE8',
        'accent-deep': '#14273F',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Semantic heading scale — size + line-height + tracking bundled.
        // Larger steps grow more than smaller ones (expanded hierarchy).
        display: ['clamp(2.5rem, 5.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.125rem, 4vw, 3.125rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        h2: ['clamp(1.875rem, 3.25vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        h4: ['1.375rem', { lineHeight: '1.3' }],
        numeral: ['clamp(6.5rem, 11vw, 9rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}

export default config
