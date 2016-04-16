var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var path = require('path')
var fs = require('fs')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
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
    new webpack.DefinePlugin({ __CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false }),
    new ExtractTextPlugin('../static/[name].css')
	],
	module:  {
    loaders: [{
      test: /\.json$/, loaders: ['json']
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }],
		postLoaders: [
			{test: /\.js$/, loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'], exclude: /node_modules/}
		],
		noParse: /\.min\.js/
	},
  postcss: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')
  ],
	externals: [nodeExternals({
		whitelist: ['webpack/hot/poll?1000']
	})],
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules',
			'web_modules'
		],
		extensions: ['', '.json', '.js']
	},
	node: {
		__dirname: true,
		fs: 'empty'
	}
}
