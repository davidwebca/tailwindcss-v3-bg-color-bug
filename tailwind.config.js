module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.56,.01,.28,1)'
    },
    colors: {
        black: '#000000',
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
        green: {
            dark: '#203529',
            light: '#D2D0AF'
        },
        orange: '#B86946',
        gray: '#CFCBC6'
    },
    fontFamily: {
        'sans': ['Lausanne', 'sans-serif']
    },
    extend: {
      transitionDuration: {
          DEFAULT: '500ms'
        }
      }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')
    ],
}
