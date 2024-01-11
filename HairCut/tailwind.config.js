/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
      'open' : ['Open Sans', 'sans serif'],
      'murecho': ['Murecho', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
