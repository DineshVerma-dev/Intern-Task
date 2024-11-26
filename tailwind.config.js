/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"], 
    },
  },
  plugins: [],
}, 
}
