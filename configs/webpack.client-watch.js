var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')

var config = require('./webpack.client.js')
var hostname = process.env.HOSTNAME || 'localhost'
var protocol = process.env.npm_package_config_protocol

var webpackPort = 8199

config.cache   = true
config.debug   = true
config.devtool = 'inline-source-map' // 'cheap-module-eval-source-map'

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
    __CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('../static/[name].css'),
  new WebpackBuildNotifierPlugin({
    title: 'React-setup'
  })
]

config.module.loaders = [
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: ['json']
  },
  {
    // *.base.css has global css unaltered class names (postcss without modules option)
    test: /\.base\.css$/,
    exclude: /node_modules/,
    loader: ['style', 'css?sourceMap&&importLoaders=1', 'postcss?sourceMap']
  },
  {
    test: /\.css$/,
    exclude: [ /node_modules/, /\.base\.css$/ ],
    loader: ['style', 'css?sourceMap&&modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]', 'postcss?sourceMap']
  }
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
  contentBase: "static",
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
