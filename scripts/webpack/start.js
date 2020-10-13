// Core
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import DevServer from 'webpack-dev-server';
import chalk from 'chalk';
import chokidar from 'chokidar';

// Config
import getDevConfig from './config/webpack.dev';

// Constants
import { HOST, PORT, SOURCE_DIRECTORY, PAGES_DIRECTORY, BUILD_DIRECTORY, PARTIALS_DIRECTORY } from './constants';

// Modules
import { loadCssInJs } from './modules';

const startConfig = {
  output: {
    publicPath: '/',
  },
};

const compiler = webpack(
  merge(
    startConfig,
    getDevConfig(),
    loadCssInJs(),
  ),
);

// startConfig,
//   loadStartCss(),
//   getDevConfig(),

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  // watchContentBase: true,
  // quiet: true,
  // clientLogLevel: 'none',
  // noInfo: true,
  // contentBase: PAGES_DIRECTORY,
  hot: true,
  // inline: true,
  // liveReload: false,
  before(app, server) {
    chokidar.watch([
      `${SOURCE_DIRECTORY}/*/*.ejs`
    ]).on('all', () => {
      server.sockWrite(server.sockets, 'content-changed');
    });
  },
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('Server listening on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`
    )}`
  );
});
