/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000017',
        'highlight': '#84FBFD',
        'borders': '#707070',
        'footer': '#0B0B2C'
      },
      color: {
        'highlight': '#84FBFD',
      },
      borderColor: {
        'highlight': '#84FBFD',
      },
    },
  },
  plugins: [],
}
