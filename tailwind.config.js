/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '540px',
        md: '640px',
        lg: '728px',
        xl: '984px',
        '2xl': '1280px',
      },
    },
    extend: {
      spacing:{
        '0.1': '0.070rem'
      },
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      }),
      colors: theme => ({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
      })
    },
  },
  plugins: [],
}
