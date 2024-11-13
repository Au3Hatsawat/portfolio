/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#EEEEEE",
        primaryContent: "#D4BEE4",
        primarySubContent: "#9B7EBD",
        primaryBg: "#3B1E54",
      }
    },
  },
  plugins: [],
}

