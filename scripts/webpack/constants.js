// Core
import { resolve } from 'path';
import { path as PROJECT_ROOT } from 'app-root-path';
import portFinderSync from 'portfinder-sync';

const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, 'src');

// The path(s) that should be cleaned
const BUILD_DIRECTORY = resolve(PROJECT_ROOT, 'dist');
const PAGES_DIRECTORY = resolve(SOURCE_DIRECTORY, 'pages');
const PARTIALS_DIRECTORY = resolve(SOURCE_DIRECTORY, 'partials');
const CSS_DIRECTORY = resolve(SOURCE_DIRECTORY, 'css');
const FONTS_DIRECTORY = resolve(SOURCE_DIRECTORY, 'fonts');
const IMAGES_DIRECTORY = resolve(SOURCE_DIRECTORY, 'images');
const HOST = '0.0.0.0';
const PORT = portFinderSync.getPort(3000);

export {
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
  PAGES_DIRECTORY,
  PARTIALS_DIRECTORY,
  CSS_DIRECTORY,
  FONTS_DIRECTORY,
  IMAGES_DIRECTORY,
  HOST,
  PORT,
};
