// Core
import { merge } from 'webpack-merge';

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

export default () => merge(
  {
    // mode: 'none',
    entry: ['@babel/polyfill', SOURCE_DIRECTORY],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'js/main.js',
    },
  },
  modules.cleanDirectories(),
  modules.defineEnvVariables(),
  modules.provideGlobals(),
  modules.loadJavascript(),
  // modules.extractCss(),
  modules.loadImages(),
  modules.loadFonts(),
  modules.setupHtml(),
);
