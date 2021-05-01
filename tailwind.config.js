const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "media",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      IranianSans: ["IranianSans"],
      Vazir: ["Vazir"],
      Seogi: ["SegoeUi"],
      Bmitra: ["BMitra"],
    },
    extend: {
      backgroundImage: (theme) => ({
        landing: "url('/img/show.png')",
      }),
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      tasis: {
        DEFAULT: "#f3e6dd",
      },
      black: colors.black,
    },
    screens: {
      xs: { max: "1024px" },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
