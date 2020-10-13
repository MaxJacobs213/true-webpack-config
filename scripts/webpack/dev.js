// Core
import webpack from 'webpack';
import chalk from 'chalk';
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

compiler.run((error, stats) => {
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    modules: false,
    colors: true,
    entrypoints: false,
    version: false,
    hash: false,
    env: true,
  });

  console.log(chalk.greenBright('Build completed'));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright('Error!'));
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('Warning!'));
  }
});
