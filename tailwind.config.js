/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        inters: ['var(--font-inter)'],
        robotomono: ['var(--font-roboto-mono)'],
        playfair: ['var(--font-playfair)'],
        raleway: ['var(--font-raleway)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
    // require("tailwind-scrollbar"),
  ],
}
