/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Inter': ['Inter', 'sans-serif',],
      'Poppins': ['Poppins', 'sans-serif',]
    }
  },
  plugins: [],
}
