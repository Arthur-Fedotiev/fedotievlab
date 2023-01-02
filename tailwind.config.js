/** @type {import('tailwindcss').Config} */
// @ts-ignore
const colors = require("tailwindcss/colors");
// @ts-ignore
const disabledCss = {
  "code::before": false,
  "code::after": false,
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.teal,
        neutral: colors.gray,
        charcoal: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        "2xl": { css: disabledCss },
        "3xl": { css: disabledCss },
        "4xl": { css: disabledCss },
        "5xl": { css: disabledCss },
      },
      flex: {
        0: "0 1 0%",
      },
      transitionProperty: {
        "max-h": "max-height",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
