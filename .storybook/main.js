const path = require('path');

module.exports = {
  stories: ['../packages/**/stories/*.stories.tsx'],
  addons: [
    'storybook-addon-performance/register',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: prop =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
  webpackFinal: config => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    mode = 'DEVELOPMENT';
    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './',
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
          //require.resolve('react-docgen-typescript-loader'),
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    );

    config.resolve.extensions.push('.ts', '.tsx');

    // Return the altered config
    return config;
  },
};
