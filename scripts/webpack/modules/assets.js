// Core
import CopyPlugin from 'copy-webpack-plugin';
import { FONTS_DIRECTORY, IMAGES_DIRECTORY } from '../constants';
import ImageminWebpack from "imagemin-webpack";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

export const loadImages = () => ({
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: IMAGES_DIRECTORY,
  //         to: 'images',
  //       },
  //     ],
  //   }),
  // ],
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      //   options: {
      //     minimize: false,
      //   },
      // },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[folder]/[name].[ext]',
      //         publicPath: '../images',
      //         outputPath: 'images',
      //       }
      //     },
      //   ],
      // },
    ],
  },
});

export const loadFonts = () => ({
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: FONTS_DIRECTORY,
          to: 'fonts',
        },
        {
          from: IMAGES_DIRECTORY,
          to: 'images',
        },
      ],
    }),
  ],
});
