var webpack = require('webpack');
var config = require('./webpack.config.prod.js');
var devServer = require('./dev-server');

var cssloader = [
  'css?modules',
  'sourceMap',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&');

var loaders = [
  {
    include: /\.json$/,
    loader: 'json'
  },
  {
    include: /\.jsx?/,
    loaders: ['react-hot', 'babel'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loaders: ['style', cssloader, 'postcss']
  }
];

var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  }),
  new webpack.NoErrorsPlugin()
];

config.cache = true;
config.debug = true;
config.devtool = 'eval';
config.devServer = devServer;
config.entry.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);

config.output.publicPath = 'http://localhost:8080/dist/';
config.output.hotUpdateMainFilename = 'update/[hash]/update.json';
config.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js';

config.module = { loaders: loaders };
config.plugins = plugins;

module.exports = config;
