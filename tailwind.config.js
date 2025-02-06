/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff640a',
        dark: '#131212'
      }
     },
    fontFamily: {
      'k2d': ["K2D", 'serif'],
      'workSans': ["Work Sans", "serif"],
      'montserrat': ["Montserrat", "serif"],
      'poppins': ["Poppins", "serif"],
    },
  },
  plugins: [],
}

