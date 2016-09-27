var webpack = require('webpack')
var config = require('./webpack.server.js')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const time = new Date().toISOString().slice(0,19)

config.cache   = true
config.debug   = true

config.entry.unshift(
  'webpack/hot/poll?1000'
)

config.plugins = [
  new CopyWebpackPlugin([{
    from: '../src/server/views',
    to: './views'   // copy to dist/views
  }]),
  new CopyWebpackPlugin([{
    from: '../src/static',
    to: '../static'   // copy to static
  }]),
  new webpack.DefinePlugin({
    __CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true, __VER__: `"${time}"`
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('../static/[name].css')
]

module.exports = config
