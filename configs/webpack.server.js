var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var path = require('path')
var fs = require('fs')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var postCssImport = require('postcss-import')
var postCssNested = require('postcss-nested')
var postCssSimpleVars = require('postcss-simple-vars')
var postCssAutoprefixer = require('autoprefixer')

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
      test: /\.base\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
    }, {
      test: /\.css$/,
      exclude: /\.base\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }],
		postLoaders: [
			{test: /\.js$/, loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'], exclude: /node_modules/}
		],
		noParse: /\.min\.js/
	},
  postcss: function () {
    return {
      defaults: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer],
      base: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer]
    };
  },
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
