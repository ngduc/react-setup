/* eslint-disable */
'use strict';
var path = require('path');
var webpack = require('webpack');

var _port = 3001;
var _webpackDevPort = 3009;

process.env._PORT = _port;
process.env._WEBPACK_DEV_PORT = _webpackDevPort;

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:' + _webpackDevPort,
    'webpack/hot/only-dev-server',
    './src/client/app'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:'+ _webpackDevPort + '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env._PORT': _port
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?stage=0&experimental&optional[]=runtime'],
      exclude: /node_modules/
    }]
  },
  _webpackDevPort: _webpackDevPort,
  _port: _port
};
