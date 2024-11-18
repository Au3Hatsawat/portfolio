/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#FFF8F3",
        primaryContent: "#F7E7DC",
        primarySubContent: "#758694",
        primaryBg: "#405D72",
      }
    },
  },
  plugins: [],
}

