/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#F8F6F0',
        surface: {
          1: '#F8F6F0',
          2: '#FFFFFF',
          3: '#ECE7DA',
          4: '#DAD2C2',
        },
        nw: {
          purple: '#000000',
          mid: '#202020',
          light: '#000000',
          coral: '#000000',
          coral2: '#000000',
          green: '#000000',
          teal: '#000000',
        },
        ink: {
          100: '#000000',
          200: '#161616',
          300: '#242424',
          400: '#343434',
          500: '#4A4A4A',
          600: '#6F6A62',
        },
      },
      fontFamily: {
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"SFMono-Regular"', '"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
