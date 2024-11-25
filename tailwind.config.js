/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0b3c49",
        secondary: "#0B2D4A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        },
      },
    },
  },
  plugins: [],
}

