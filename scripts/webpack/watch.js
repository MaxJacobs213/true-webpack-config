// Core
import webpack from 'webpack';
import { merge } from 'webpack-merge';

// Config
import getDevConfig from './config/webpack.dev';

// Modules
import { loadDevCss } from './modules';

const compiler = webpack(
  merge(
    getDevConfig(),
    loadDevCss(),
  ),
);

compiler.watch({}, (err) => {
  if (err) {
    console.log(err);
  }
});
