/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pri: '#000',
        sec: '#fff',
        accent: '#cdcdcd',
      },
      container: {
        screens: {
          lg: '1100px',
          '2xl': '1200px',
        },
        center: true,
        padding: '1rem',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
}
