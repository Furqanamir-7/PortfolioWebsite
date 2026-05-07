/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          glow: 'var(--accent-glow)',
          neon: 'var(--accent-neon)',
        },
        content: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
        border: {
          glass: 'var(--border-glass)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      animation: {
        float: 'float 18s ease-in-out infinite',
        'float-slow': 'float 24s ease-in-out infinite reverse',
        shimmer: 'shimmer 2.5s linear infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
        'glow-sm': '0 0 20px rgba(139, 92, 246, 0.25)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
