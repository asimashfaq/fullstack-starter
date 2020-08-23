// tailwind.config.js
module.exports = {
  purge: {
    enabled: false,
    content: ['./packages/**/**/*.tsx'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#16171A',
      white: '#FFFFFF',
      primary: '#7B16FF',
      secondary: '#24292E',
      hello: 'red',
      purple: {
        100: '#F8F6FD',
        200: '#E8E5FF',
        300: '#DDD9FF',
        400: '#5856D6',
        600: '#7e3af2',
      },
      red: {
        100: '#ea4335',
        200: '#fbd5d5',
        300: '#f8b4b4',
        500: '#85000C',
      },
      gray: {
        default: '#67717A',
        100: '#FAFAFA',
        200: '#F6F7F8',
        300: '#EBECED',
        400: '#DFE7EF',
      },
    },
  },
  variants: {},
  plugins: [],
};
