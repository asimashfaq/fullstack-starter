const tailwindcss = require('tailwindcss');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }),
    require('autoprefixer'),
    tailwindcss(path.resolve(__dirname, './tailwind.config.js')),

    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./**/*.tsx', './**/*.js'],
    //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
    require('postcss-preset-env'),
    require('cssnano'),
  ],
};
