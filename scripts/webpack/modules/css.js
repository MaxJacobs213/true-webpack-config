import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import cssnano from 'cssnano';
import cssMqpacker from 'css-mqpacker';
import autoprefixer from 'autoprefixer';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';

export const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    sourceMap,
    // url: false,
  },
});

export const loadPostCss = (
  { sourceMap = false, minify = false } = { sourceMap: false, minify: false }
) => {
  const plugins = [
    autoprefixer,
    cssMqpacker,
  ];

  if (minify) {
    plugins.push(cssnano);
  }

  return {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        sourceMap,
        plugins,
      },
    },
  }
};

export const loadCssInJs = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          loadCss({ sourceMap: true }),
          loadPostCss({ sourceMap: true, minify: false }),
          'sass-loader',
        ],
      },
    ],
  },
});

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: true }),
          loadPostCss({ sourceMap: true, minify: false }),
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
  ],
});

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: false }),
          loadPostCss({ sourceMap: false, minify: true }),
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
  ],
});

// export const loadCss = () => ({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           // MiniCssExtractPlugin.loader,
//           'css-loader',
//         ],
//       },
//     ],
//   },
//   plugins: [
//     // new MiniCssExtractPlugin({
//     //   filename: '[name].css',
//     // }),
//     // new HTMLInlineCSSWebpackPlugin({
//     //   filter(fileName) {
//     //     console.log('q', fileName);
//     //     const regexp = /^(_).*\.css$/;
//     //     console.log(regexp.test(fileName));
//     //
//     //     return regexp.test(fileName);
//     //   }
//     // }),
//   ],
// });
