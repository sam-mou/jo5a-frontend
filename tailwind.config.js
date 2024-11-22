/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0E0731",
        customGreen: "#36BA98",
      },
      fontFamily: {
        climate: ['"Climate Crisis"', 'cursive'], // Add the font here
      },
    },
  },
  plugins: [],
};
