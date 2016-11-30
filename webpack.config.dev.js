require('dotenv').config();
var webpack = require('webpack');
var setupWebpack = require('./webpack.config.setup');
var devServer = require('./dev-server');

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
  new webpack.EnvironmentPlugin(envVars),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

var developmentConfig = setupWebpack({
  plugins: plugins,
  loaders: loaders
});

developmentConfig.cache = true;
// config.debug = true;
developmentConfig.devtool = 'eval';
developmentConfig.pathinfo = true;
developmentConfig.devServer = devServer;
developmentConfig.entry.client.unshift(
  'webpack-dev-server/client?' + devServer.assetsUrl,
  'webpack/hot/only-dev-server'
);
developmentConfig.entry.widget.unshift(
  'webpack-dev-server/client?' + devServer.assetsUrl,
  'webpack/hot/only-dev-server'
);
developmentConfig.output.publicPath = devServer.publicPath;
developmentConfig.output.hotUpdateMainFilename = 'update/[hash]/update.json';
developmentConfig.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js';

developmentConfig.module = { loaders: loaders };
developmentConfig.plugins = plugins;

// needed for enzyme
developmentConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = developmentConfig;
