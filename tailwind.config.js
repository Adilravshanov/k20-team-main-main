/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC444",
        secondary: "#222222"
      },

      fontFamily: {
        "poppins": ["Poppins", "sans-serif",]
      }
    },
  },
  plugins: [],
};
