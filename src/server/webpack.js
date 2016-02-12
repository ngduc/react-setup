'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config.dev';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(config._webpackDevPort, '0.0.0.0', (err) => {
  if (err) { console.log(err); }
  console.log(`Webpack Dev Server port ${config._webpackDevPort}`);
});
