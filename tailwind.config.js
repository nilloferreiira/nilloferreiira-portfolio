/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter'],
      },
      colors: {
        'bg': '#2C2C2C',
        'shark': '#1D1D1D',
        'text-secondary': '#B3B3B3'
      }
    },
  },
  plugins: [],
}

