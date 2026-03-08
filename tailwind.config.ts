import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F1EB',
        surface: '#E8E4DE',
        elevated: '#DDD9D3',
        border: '#D0CCC6',
        primary: '#1A1917',
        secondary: '#6E6A64',
        tertiary: '#9E9A94',
        accent: '#C8C0B4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        hero: [
          'clamp(2.75rem, 5.5vw, 5rem)',
          { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '300' },
        ],
        display: [
          'clamp(2.25rem, 4.5vw, 4rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '300' },
        ],
        title: [
          'clamp(1.5rem, 2.5vw, 2rem)',
          { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '400' },
        ],
        'body-lg': [
          '1.125rem',
          { lineHeight: '1.75', letterSpacing: '-0.005em', fontWeight: '400' },
        ],
        body: [
          '1rem',
          { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' },
        ],
        small: [
          '0.875rem',
          { lineHeight: '1.6', letterSpacing: '0.005em', fontWeight: '400' },
        ],
        xs: [
          '0.75rem',
          { lineHeight: '1.5', letterSpacing: '0.06em', fontWeight: '500' },
        ],
      },
      maxWidth: {
        content: '680px',
        wide: '980px',
        page: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
