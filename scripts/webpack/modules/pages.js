import HtmlWebpackPlugin from 'html-webpack-plugin';
// const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
import { SOURCE_DIRECTORY, PAGES_DIRECTORY, PARTIALS_DIRECTORY } from '../constants';
import fs from 'fs';

const pages = fs.readdirSync(PAGES_DIRECTORY);
const partials = [
  {
    name: 'header',
    priority: 'high',
    location: 'body',
  },
  {
    name: 'footer',
    priority: 'low',
    location: 'body',
  },
  {
    name: 'fonts',
    priority: 'high',
    location: 'head',
  },
];

const pagesListHtml = `
  <ul>
    ${pages.reduce((acc, name) => acc.concat(
      `
        <li>
          <a href="pages/${name.replace('.ejs', '.html')}">${name.replace('.ejs', '')}</a>
        </li>\n
      `
    ), '')}
  </ul>
`;

const pageSettings = {
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1',
  },
  minify: false,
};

const chunks = {

};

const setupIndexPage = () => new HtmlWebpackPlugin({
  ...pageSettings,
  filename: 'index.html',
  template: `${SOURCE_DIRECTORY}/index.ejs`,
  chunks: [],
  title: 'Pages',
  templateParameters: {
    pagesListHtml,
  }
  // publicPath: '/',
});

const setupPages = () => (
  pages.map((name) =>
    new HtmlWebpackPlugin({
      ...pageSettings,
      filename: `pages/${name.replace('.ejs', '.html')}`,
      template: `${PAGES_DIRECTORY}/${name}`,
      // chunks,
    })
  )
);

// const setupPartials = () => (
//   partials.map(({ name, priority, location }) =>
//     new HtmlWebpackPartialsPlugin({
//       path: `${PARTIALS_DIRECTORY}/${name}.html`,
//       template_filename: pages.map(pageName => `pages/${pageName}`),
//       location,
//       priority,
//     })
//   )
// );

export const setupHtml = () => {
  return {
    plugins: [
      setupIndexPage(),
      // ...setupPartials(),
      ...setupPages(),
    ],
}};
