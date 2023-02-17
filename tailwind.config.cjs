// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAnimations } = require("animated-tailwindcss");
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = withAnimations({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#01FF1F",
      },
    },
  },
  plugins: [],
});
