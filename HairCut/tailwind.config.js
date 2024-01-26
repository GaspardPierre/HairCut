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
   
    extend: {
      colors : {
        'hair' : '#986C4A',
        'hair-hover' : '#d4b26a',
        'custom-brown': '#A17D60',
         'custom-cream': '#F8F7F6',
         'custom-dark': '#260C0',
         'footer': '#000000'
  
      },
    },
  },
  plugins: [],
}
