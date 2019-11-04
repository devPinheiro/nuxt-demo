const { defaultTheme, backgroundColor } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {

    extend: {
      colors: {
        gray: {
            ...colors.gray,
            '10': '#f5f5f5',  
        }
      },
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    }
  },
  variants: {},
  plugins: [],
}
