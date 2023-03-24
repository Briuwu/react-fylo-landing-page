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
      width: {
        "clamp-logo": "clamp(100px, 12vw, 176px)",
      },
      padding: {
        "clamp-nav": "clamp(16px, 8vw, 75px)",
      },
      fontSize: {
        "clamp-size": "clamp(.875rem, 2vw, 1rem)",
        "clamp-24-40": ["clamp(1.5rem, 3vw, 2.5rem)", "150%"],
        "clamp-14-20": ["clamp(0.875rem, 1.5vw, 1.25rem)", "150%"],
        "clamp-18-32": ["clamp(1.125rem, 2.5vw, 2rem)", "150%"],
      },
      spacing: {
        "clamp-list": "clamp(.5rem, 5vw, 3.75rem)",
      },
    },
  },
  plugins: [],
};
