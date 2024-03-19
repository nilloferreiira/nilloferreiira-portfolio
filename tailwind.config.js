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
      },
      keyframes: {
        typing: {
          '0%': {width: '0'},
          '25%': { width: '100%'},
          '50%': { width: '100%'},
          '75%': { width: '0'},
          '100%': { width: '0'}
          
        },
        blink: {
          '50%': { borderColor: 'transparent'}
        }

      },
      animation: {
        'typing' : 'typing 8s steps(22) infinite, blink 0.5s step-end infinite alternate',
      },
    },
  },
  plugins: [],
}

