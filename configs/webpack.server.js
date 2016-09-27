var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var path = require('path')
var fs = require('fs')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var commonConfig = require('./webpack.common')
const time = new Date().toISOString().slice(0,19)

var config = {
	target: 'node',
	cache: false,
	context: __dirname,
	debug: false,
	devtool: 'source-map',
	entry: ['../src/server'],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'server.js'
	},
	plugins: [
    new CopyWebpackPlugin([{
      from: '../src/server/views',
      to: './views'   // copy to dist/views
    }]),
    new webpack.DefinePlugin({
      __CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false, __VER__: `"${time}"`
    }),
    new ExtractTextPlugin('../static/[name].css')
	],
	externals: [nodeExternals({
		whitelist: ['webpack/hot/poll?1000']
	})],
    node: {
      __dirname: true,
      fs: 'empty'
    }
}
Object.assign(config, commonConfig)

module.exports = config
