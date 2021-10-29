module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        space: {
          black: 'rgb(11, 13, 23)',
          accent: 'rgb(208, 214, 249)',
        },
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        heading1: ['150px', '172px'],
        heading2: ['100px', '115px'],
        heading3: ['56px', '64px'],
        heading4: ['32px', '37px'],
        heading5: [
          '28px',
          {
            lineHeight: '34px',
            letterSpacing: '4.725px',
          },
        ],
        subheading1: ['28px', '32px'],
        subheading2: [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '2.7px',
          },
        ],
        body: ['18px', '32px'],
      },
      backgroundImage: {
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'technology-desktop':
          "url('/technology/background-technology-desktop.jpg')",
        'technology-tablet':
          "url('/technology/background-technology-tablet.jpg')",
        'technology-mobile':
          "url('/technology/background-technology-mobile.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
