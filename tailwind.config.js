/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "300px",
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        playwrite: ["Playwrite GB S", "cursive"],
        gemunu: ["Gemunu Libre", "sans-serif"],
      },
      borderRadius: {
        50: "50%",
      },
      spacing: {
        128: "32rem",
      },
      colors: {
        red: "#d0263b",
      },
    },
  },
  plugins: [],
};
