// Core
import { DefinePlugin, ProvidePlugin } from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
});

export const connectBuildProgressIndicator = () => ({
  plugins: [
    new WebpackBar(),
  ],
});

export const connectFriendlyErrors = () => ({
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
});

export const connectBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});

export const defineEnvVariables = () => {
  const { NODE_ENV } = process.env;

  debugger;

  return {
    plugins: [
      new DefinePlugin({
        __ENV__: JSON.stringify(NODE_ENV),
        __DEV__: NODE_ENV === 'development',
        __STAGE__: NODE_ENV === 'stage',
        __PROD__: NODE_ENV === 'production',
      }),
    ],
  };
};


export const provideGlobals = () => ({
  plugins: [
    new ProvidePlugin({
      // _: 'lodash-es',
    }),
  ],
});
