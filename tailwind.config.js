/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      san: ["Poppins", "sans-serif"],
      fair:['Playfair Display', "serif"]
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

