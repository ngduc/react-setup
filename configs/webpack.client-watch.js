var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = require('./webpack.client.js')
var hostname = process.env.HOSTNAME || 'localhost'
var protocol = process.env.npm_package_config_protocol
const time = new Date().toISOString().slice(0,19)

var webpackPort = 8199

config.cache   = true
config.debug   = true
config.devtool = 'cheap-module-eval-source-map'

config.entry.unshift(
  'webpack-dev-server/client?' + protocol + '://' + hostname + ':' + webpackPort,
  'webpack/hot/only-dev-server'
)

config.output.publicPath = protocol + '://' + hostname + ':' + webpackPort + '/'
config.output.hotUpdateMainFilename = 'update/[hash]/update.json'
config.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js'

config.plugins = [
  new CopyWebpackPlugin([{
    from: '../src/static',
    to: '../static'   // copy to dist/views
  }]),
  new webpack.DefinePlugin({
    __CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true, __VER__: `"${time}"`
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('../static/[name].css')
]

config.module.postLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      cacheDirectory: true,
      presets: ['react', [ "es2015", { "modules": false } ], 'stage-0', 'react-hmre']
    }
  }
]

config.devServer = {
  publicPath: config.output.publicPath,
  hot: true,
  inline: false,
  lazy: false,
  quiet: true,
  noInfo: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  host: hostname,
  port: webpackPort
}

module.exports = config
