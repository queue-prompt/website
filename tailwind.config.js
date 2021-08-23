const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      green: {
        ...colors.emerald,
        light: '#1eca6e',
        DEFAULT: '#10A254',
        dark: '#10A254'
      },
      gray: {
        ...colors.coolGray,

        bg: '#f7fafc',
        card: '#edf2f7',
        light: '#51545b',
        DEFAULT: '#3d3940',
        dark: '#3d3940'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
