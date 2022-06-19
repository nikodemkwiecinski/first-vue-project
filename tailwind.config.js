/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#6585A3',
        'extra-light-blue': '#CED9E4',
        'dark-blue': '#243950',
        'light-white': '#F5F5F5',
        'grey-bg': '#EAEAEA',
      },
      width: {
        '50vw': '50vw',
      },
      height: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
}
