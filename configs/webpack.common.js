var ExtractTextPlugin = require('extract-text-webpack-plugin')
var postCssImport = require('postcss-import')
var postCssNested = require('postcss-nested')
var postCssSimpleVars = require('postcss-simple-vars')
var postCssAutoprefixer = require('autoprefixer')

module.exports = {
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    }, {
      test: /\.base\.css$/,
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader'})
    }, {
      test: /\.css$/,
      exclude: /\.base\.css$/,
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap&&modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader'})
    }],
    postLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', [ "es2015", { "modules": false } ], 'stage-0', 'react-hmre']
      }
    }],
    noParse: /\.min\.js/
  },
  postcss: function () {
    return {
      defaults: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer],
      base: [postCssImport, postCssNested, postCssSimpleVars, postCssAutoprefixer]
    }
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
      'web_modules'
    ],
    extensions: ['', '.json', '.js']
  }
}
