/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins', // Adds a new `font-display` class
        roboto: 'Roboto Slab', // Adds a new `font-display` class
      }

    },
  },
  plugins: [require("daisyui")],
}
