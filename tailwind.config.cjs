/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(176, 68%, 64%)",
        white: "hsl(0, 0%, 100%)",
        "light-red": "hsl(0, 100%, 63%)",
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonials": "hsl(219, 30%, 18%)",
        "dark-form": "hsla(217, 28%, 15%, 1);",
      },

      fontFamily: {
        raleway: "Raleway, sans-serif",
      },
    },
  },
  plugins: [],
};
