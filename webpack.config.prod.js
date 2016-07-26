require('dotenv').config();
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var theme = require('postcss-theme');

var envVars = [
  'THEME_PATH'
];

var cssloader = [
  'css?modules',
  'localIdentName=[hash:base64:5]'
].join('&');

var postcss = [
  theme({ themePath: 'theme/styles' }),
  autoprefixer({ browsers: ['last 2 versions'] })
];

var loaders = [
  {
    include: /\.json$/,
    loader: 'json'
  },
  {
    include: /\.jsx?/,
    loader: 'babel',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', cssloader + '!postcss')
  }
];

var plugins = [
  new webpack.EnvironmentPlugin(envVars),
  new webpack.DefinePlugin({
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
  new ExtractTextPlugin('styles.css')
];

module.exports = {
  entry: ['./src/client'],
  cache: false,
  context: __dirname,
  devtool: false,
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: 'client.js',
    chunkFilename: '[name]-[id].js',
    publicPath: 'dist/'
  },
  module: { loaders: loaders },
  plugins: plugins,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
      'web_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  node: {
    __dirname: true,
    fs: 'empty'
  },
  postcss: postcss,
  envVars: envVars
};
