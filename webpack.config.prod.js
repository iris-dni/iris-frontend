require('dotenv').config();
var webpack = require('webpack');
var setupWebpack = require('./webpack.config.setup');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var envVars = [
  'PORT',
  'THEME_PATH',
  'SITE_NAME',
  'API_URL',
  'BASE_URL',
  'SSO_PROVIDER_TEXT',
  'SSO_PROVIDER_URL'
];

var cssloader = [
  'css?modules',
  'sourceMap',
  'localIdentName=[hash:base64:5]'
].join('&');

var loaders = [
  {
    include: /\.json$/,
    loader: 'json'
  },
  {
    include: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/
  },
  {
    test: /\.s?css$/,
    loader: ExtractTextPlugin.extract('style', cssloader + '!postcss!sass')
  }
];

var plugins = [
  new webpack.EnvironmentPlugin(envVars),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('[name].css')
];

module.exports = setupWebpack({
  plugins: plugins,
  loaders: loaders
});
