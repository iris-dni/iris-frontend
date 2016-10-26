require('dotenv').config();
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
    loaders: ['react-hot', 'babel?cacheDirectory'],
    exclude: /node_modules/
  },
  {
    test: /\.s?css/,
    loaders: ['style', cssloader, 'postcss', 'sass']
  }
];

var plugins = [
  new webpack.EnvironmentPlugin(config.envVars),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.cache = true;
// config.debug = true;
config.devtool = 'eval';
config.pathinfo = true;
config.devServer = devServer;
config.entry.client.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);
config.entry.widget.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);
config.output.publicPath = 'http://localhost:8080/dist/';
config.output.hotUpdateMainFilename = 'update/[hash]/update.json';
config.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js';

config.module = { loaders: loaders };
config.plugins = plugins;

// needed for enzyme
config.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = config;
