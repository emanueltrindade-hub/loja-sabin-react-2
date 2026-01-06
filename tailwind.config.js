

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        museo: ['Museo Sans Rounded', 'sans-serif'],
      },
      colors: {
        'sabin-red': '#FF3B3B',
        'sabin-purple': '#9B51DF',
        'sabin-green': '#02BE83',
      },
    },
    screens: {
      'md': {'max': '767px'},
    },
  },
  plugins:  [],
}