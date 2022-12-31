/** @type {import('tailwindcss').Config} */

// @ts-ignore
const disabledCss = {
  "code::before": false,
  "code::after": false,
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
