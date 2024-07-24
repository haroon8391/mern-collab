// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Add this line to include all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
