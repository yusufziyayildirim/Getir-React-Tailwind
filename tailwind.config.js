/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': 'rgb(76, 51, 152)'
      })
    },
  },
  plugins: [],
}
