var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var config = require('./webpack.config.prod.js');

// in order to ignore built-in modules like path, fs, etc.
config.target = 'node';

// in order to ignore all modules in node_modules folder
config.externals = [nodeExternals()];

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'TEST_ENV': JSON.stringify('true')
    }
  })
]);

module.exports = config;
