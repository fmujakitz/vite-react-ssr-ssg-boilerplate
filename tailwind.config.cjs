/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      transitionTimingFunction: {
        'in-out-2': 'cubic-bezier(0.6,0,0.5,1)'
      }
    },
  },
  plugins: [],
}
