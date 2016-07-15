var nodeExternals = require('webpack-node-externals');
var config = require('./webpack.config.prod.js');

// in order to ignore built-in modules like path, fs, etc.
config.target = 'node';

// in order to ignore all modules in node_modules folder
config.externals = [nodeExternals()];

module.exports = config;
