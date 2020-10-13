// Core
import { merge } from 'webpack-merge';

// Config
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

export default () => merge(
  getCommonConfig(),
  {
    mode: 'production',
    devtool: false,
  },
  modules.connectBuildProgressIndicator(),
  modules.loadProdCss(),
  modules.optimizeBuild(),
  modules.optimizeImages(),
  modules.connectBundleAnalyzer(),
);
