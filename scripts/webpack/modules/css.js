import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import postcssSortMediaQueries from 'postcss-sort-media-queries';

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
    postcssSortMediaQueries({
      sort: 'desktop-first',
    }),
    autoprefixer,
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
        test: /\.s[ac]ss$|\.css$/i,
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

export const loadSimpleCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
});
