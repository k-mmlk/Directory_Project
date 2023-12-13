/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      san: ["Poppins", "sans-serif"],
      fair:['Playfair Display', "serif"]
    },
    extend: {},
  },
  plugins: [],
}

