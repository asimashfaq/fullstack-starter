const { BABEL_ENV } = process.env;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    babelrcRoots: [
      // Keep the root as a root
      '.',
      // Also consider monorepo packages "root" and load their .babelrc files.
      './packages/*',
    ],
    presets,
    plugins,
    env: {
      test: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              targets: {
                browsers: ['> 1%'],
              },
            },
          ],
          '@babel/typescript',
          '@babel/react',
        ],
      },
    },
  };
};
