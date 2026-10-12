/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#14110F',
          surface: '#1C1714',
          card: '#231D18',
          border: '#362E27',
          ivory: '#FAF7F2',
          cream: '#F4EFE6',
          sand: '#ECE4D8',
          gold: '#C5A371',
          goldLight: '#E8D4B8',
          goldMuted: '#9B7E55',
          rose: '#B8867B',
          roseLight: '#F3E8E4',
          espresso: '#2D241D',
          muted: '#85786E',
          softText: '#BFB3A6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #DFCAAE 0%, #C5A371 50%, #9B7E55 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(197, 163, 113, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
