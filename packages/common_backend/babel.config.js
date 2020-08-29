module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
      },
    ],
    '@babel/typescript',
  ],

  plugins: [
    'const-enum',
    '@babel/transform-typescript',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/plugin-transform-runtime'],
  ],
};
