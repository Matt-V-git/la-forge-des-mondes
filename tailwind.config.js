/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          black:  "#0E0E0E",
          dark:   "#161616",
          slate:  "#2A5C6E",
          copper: "#C8723A",
          stone:  "#8A8A8A",
          light:  "#E8E0D5",
        },
      },
      fontFamily: {
        display: ["'Cinzel Decorative'", "serif"],
        body:    ["'Crimson Pro'", "serif"],
      },
    },
  },
  plugins: [],
}