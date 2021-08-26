module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          100: '#d9d3d3',
          200: '#b3a7a7',
          300: '#8e7b7b',
          400: '#684f4f',
          500: '#422323',
          600: '#351c1c',
          700: '#281515',
          800: '#1a0e0e',
          900: '#0d0707',
        },
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
