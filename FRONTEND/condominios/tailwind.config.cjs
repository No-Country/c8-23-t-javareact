/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'gray': '#D9D9D9',
        'medium-gray': '#E8E8E8',
        'vencimiento-gray': '#6F6F6F',
        'participacion-gray': '#E8E8E8',
        'light-blue': '#F0F9FD',
        'background-blue': '#5F81FF',
        'medium-blue': '#3FA6F0',
        'medium2-blue': '#1A71FF',
        'black-navbar': '#0B1D46',
        'black-gretting': '#0D0D0D',
        'black-gretting-name': '#464265',
        'blue-swimming': '#6996FF',
        'background-swimming': '#EBF1FF',
        'green-quincho': '#91F483',
        'background-quincho': '#EAF1E9',
        'green-tennis': '#65F1A1',
        'background-tennis': '#C8F7DC',
        'background-dumbbell': '#D5DEFF',
        'background-sauna': '#D5DEFF',
        'sauna': '#856EA4',
        'blue': '#4F3FF0',
        'background-table': '#EFF0F4',
        'border-table': '#F7F8FA',
        'border-rowTable': '#E2E8F0',
        'asunto-rowTable': '#1E293B',
        'reporte-textColor': '#464265',
        'reporte-borderColor': '#ACC4D8',
      },
      screens: {
        '450': '450px',
        '1048': '1048px',
      }
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif',],
      'Poppins': ['Poppins', 'sans-serif',]
    },


  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
