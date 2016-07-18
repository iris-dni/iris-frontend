var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/client'],
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: false,
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: 'client.js',
    chunkFilename: '[name].[id].js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // needs to be stringified, else it will be evaluated as a var production
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        include: /\.json$/,
        loader: 'json'
      },
      {
        include: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
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
  }
};
