/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
        50: "#FFF7F8",
        100: "#FAE8EC",
        200: "#F2CDD6",
        300: "#E4A6B5",
        500: "#A93E5F",
        700: "#6D1835",
        800: "#55122A",
        900: "#3B0C1D",
        },

        gold: {
          300: "#DCBF86",
          500: "#B58A45",
        },

        ivory: "#FFFAF2",

        beige: "#EAD8BD"

      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      }


    },
    plugins: [],
  }
}