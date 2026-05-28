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
        paper: '#F7F6F3',
        canvas: '#EEECEA',
        ghost: '#E3E1DD',
        stroke: '#C5C1BA',
        mid: '#9C9690',
        dim: '#76716A',
        ink: '#1E1C19',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
