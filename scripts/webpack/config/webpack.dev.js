// Core
import { merge } from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

export default () => merge(
  getCommonConfig(),
  {
    mode: 'development',
    devtool: 'cheap-module-eval-sourcemap',

  },
  modules.connectFriendlyErrors(),
  modules.loadSimpleCss(),
);
