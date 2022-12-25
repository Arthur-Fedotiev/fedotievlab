/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      flex: {
        0: "0 1 0%",
      },
      transitionProperty: {
        "max-h": "max-height",
      },
    },
  },
  plugins: [],
};
