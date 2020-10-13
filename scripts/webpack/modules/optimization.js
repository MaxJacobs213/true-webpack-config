// Core
import ImageminWebpack from 'imagemin-webpack';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import CopyPlugin from "copy-webpack-plugin";
import { IMAGES_DIRECTORY } from '../constants';

export const optimizeBuild = () => ({
  optimization: {},
});

export const optimizeImages = () => ({
  plugins: [
    // new ImageminWebpack({
    //   // name: '[name].[ext]',
    //   // loader: false,
    //   imageminOptions: {
    //     // options: {
    //     //   destination: 'images',
    //     // },
    //     plugins: [
    //       imageminMozjpeg({
    //         progressive: true,
    //         quality: 10,
    //       }),
    //       imageminPngquant({
    //         quality: 10,
    //       }),
    //       imageminSvgo(),
    //     ],
    //   }
    // }),
  ],
  // plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: IMAGES_DIRECTORY,
    //       to: 'images',
    //     },
    //   ],
    // }),
    // new ImageminWebpack({
    //   // name: '[name].[ext]',
    //   // loader: false,
    //   imageminOptions: {
    //     // options: {
    //     //   destination: 'images',
    //     // },
    //     plugins: [
    //       imageminMozjpeg({
    //         progressive: true,
    //         quality: 10,
    //       }),
    //       imageminPngquant({
    //         quality: 10,
    //       }),
    //       imageminSvgo(),
    //     ],
    //   }
    // }),
  // ],
});
