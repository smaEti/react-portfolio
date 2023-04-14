/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      backgroundColor:{
        'darkblack': '#161019',
      },
      fontFamily: {
        'Poppins': ['Poppins'],
      },
 
    },
  },
  plugins: [],
}

