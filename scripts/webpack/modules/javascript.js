import ESLintPlugin from 'eslint-webpack-plugin';

export const loadJavascript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/, /filters-app/, /src\/js\/filters-app/, /virtual-sales-app/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: 'usage',
            }]],
            plugins: ['@babel/plugin-transform-async-to-generator'],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: 'src',
    }),
  ],
});
