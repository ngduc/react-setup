'use strict';
require('babel-core/register'); // so we can use babel for other files except this file.

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//import { getLocaleMessages } from './tools/i18n'; // to have messages for injecting, run this first: "$ npm run build:msg"
var i18n = require('./tools/i18n');
var messagesJsonString = i18n.getLocaleMessages('en-US');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    "webpack-dev-server/client?http://localhost:8000/",
    "webpack/hot/only-dev-server",
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/static',
      to: 'static'
    }]),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      i18nMessages: messagesJsonString || 'undefined'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
    }]
  },
  postcss: [
    require('postcss-modules-values'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')
  ],
  _hotPort: 8000,
  devServer: {
    publicPath: 'http://localhost:8000/',
        hot:        true,
        inline:     false,
        lazy:       false,
        quiet:      true,
        noInfo:     true,
        headers:    {"Access-Control-Allow-Origin": "*"},
        stats:      {colors: true},
        port: 8000,
        host: 'localhost'
  }
};
