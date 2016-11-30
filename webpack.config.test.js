var webpack = require('webpack');
var setupWebpack = require('./webpack.config.setup');
var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'SITE_NAME': JSON.stringify('iris'),
      'BASE_URL': JSON.stringify('http://localhost:8000'),
      'API_URL': JSON.stringify('http://localhost:8000/api/v1') // dummy API url
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

var testConfig = setupWebpack({
  plugins: plugins,
  loaders: loaders
});

// in order to ignore built-in modules like path, fs, etc.
testConfig.target = 'node';

// in order to ignore all modules in node_modules folder
testConfig.externals = [nodeExternals()];

module.exports = testConfig;
