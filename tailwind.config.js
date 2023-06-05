/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        md: "480px",
        lg: "768px",
        vl: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "#010725",
        secondary: "#010D50",
        grey: "#353447",
        white: "#FFFFFF",
        blue: "#0328EE",
        red: "#BA3131",
        "neutral-900": "#141414",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
