const { defaultTheme, colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      Montserrat: [
        'Montserrat'
      ]
    },
    extend: {
      colors: {
        gray: {
            '10': '#f5f5f5'
        }
      },
    }
  },
  variants: {}, 
  plugins: [],
};
