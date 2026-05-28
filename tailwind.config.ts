import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './posts/**/*.mdx',
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
        mid: '#524D40',
        dim: '#3F3B30',
        'ink-soft': '#2E2A22',
        ink: '#1B1814',
        accent: '#224068',
        'accent-soft': '#94A8C5',
        'accent-tint': '#D3DCE8',
        'accent-deep': '#14273F',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
