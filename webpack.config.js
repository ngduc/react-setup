/* eslint-disable */
'use strict';

var path = require('path');
var webpack = require('webpack');

var _port = 3000;
process.env._PORT = _port;

module.exports = {
  devtool: 'source-map',
  entry: './src/client/app',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.min.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env._PORT': _port
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?stage=0&experimental&optional[]=runtime'],
      exclude: /node_modules/
    }]
  },
  _port: _port
};
