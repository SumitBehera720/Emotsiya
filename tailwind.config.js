/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0e7490',
          darkTeal: '#085166',
          lightTeal: '#22d3ee',
          navy: '#0f172a',
          ocean: '#1e293b',
          accent: '#f59e0b',
          gold: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
