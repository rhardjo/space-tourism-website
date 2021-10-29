module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        space: {
          black: 'rgb(11, 13, 23)',
          white: 'rgb(255, 255, 255)',
          accent: 'rgb(208, 214, 249)',
        }
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        'heading1': ['150px', '172px'],
        'heading2': ['100px', '115px'],
        'heading3': ['56px', '64px'],
        'heading4': ['32px', '37px'],
        'heading5': ['28px', {
          lineHeight: '34px',
          letterSpacing: '4.725px',
        }],
        'subheading1': ['28px', '32px'],
        'subheading2': ['16px', {
          lineHeight: '19px',
          letterSpacing: '2.7px',
        }],
        'body': ['18px', '32px']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
