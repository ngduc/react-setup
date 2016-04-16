var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var postCssImport = require('postcss-import')
var postCssNested = require('postcss-nested')
var postCssSimpleVars = require('postcss-simple-vars')
var postCssAutoprefixer = require('autoprefixer')

module.exports = {
	target: 'web',
	cache: false,
	context: __dirname,
	debug: false,
	devtool: false,
	entry: ['../src/client'],
	output: {
		path: path.join(__dirname, '../static'),
		filename: 'client.js',
		chunkFilename: '[name].[id].js'
	},
	plugins: [
    new CopyWebpackPlugin([{
      from: '../src/static',
      to: '../static'   // copy to dist/views
    }]),
		new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new ExtractTextPlugin('../static/[name].css')
	],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.base\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
    }, {
      test: /\.css$/,
      exclude: /\.base\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }],
    postLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react']
    }],
    noParse: /\.min\.js/
  },
  postcss: function () {
    return {
      defaults: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer],
      base: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer]
    };
  },
	resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
      'web_modules'
    ],
    extensions: ['', '.json', '.js']
	},
	node:    {
    __dirname: true,
    fs: 'empty'
	}
}
