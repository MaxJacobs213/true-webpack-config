import ESLintPlugin from 'eslint-webpack-plugin';

export const loadJavascript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: 'src',
    }),
  ],
});
