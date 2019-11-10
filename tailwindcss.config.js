const { defaultTheme, colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    inset: {
      '-5': '-2rem',
    },
    fontFamily: {
      Montserrat: [
        'Montserrat'
      ]
    },
    extend: {
      colors: {
        gray: {
            '10': '#f5f5f5'
        },
        blue: {
          '45': '#0CAADC'
        }
      },
      height: {
          '452': '452px'
      }
    }
  },
  variants: {}, 
  plugins: [],
};
