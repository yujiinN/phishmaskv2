/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: {
          50: "#FAD09E", //navbar gradient
          100: "#D3DFFF",
          200: "#A6BAFF",
          300: "#798CFF",
          400: "#5163FF",
          500: "#2B3467", // Your custom blue color
          600: "#0A142F", // Your custom dark blue color
          700: "#090E28",
          800: "#070A1E",
          900: "#050716",
        },
      },
    },
  },
  plugins: [],
};
