/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif']
      },

      colors: {

        'colorBg': '#011e3a',
        'colorLightGrey': '#f4f4f4',
        'colorPrimary': '#4db5ff',
        'colorLight': 'rgba(255, 255, 255, 0.7)',
        'transparentBlack': 'rgba(0, 0, 0, 0.7)',
        'transparentBlackSm': 'rgba(0, 0, 0, 0.3)'
      }

    },
  },
  plugins: [],
}

