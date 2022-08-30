/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {

    fontFamily: {
      "Omnes": ["Omnes", "cursive"],
      "Roboto": ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          100: '#1c1c1c',
          200: '#141414',
          300: '#000000'
        }
      }

    },
  },
  plugins: [],
}
