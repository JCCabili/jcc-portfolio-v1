/** @type {import('tailwindcss').Config} */
// https://colorhunt.co/palette/dddddd22283130475ef05454
module.exports = {
  darkMode: 'class',
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#F05454",
      "primary-hover": "#fd3a4a",
      "secondary": "#30475E",
      "seconday-hover": "#00416a",
      "black": "#222831",
      "white": "#DDDDDD"
    },
    extend: {},
  },
  plugins: [],
}
