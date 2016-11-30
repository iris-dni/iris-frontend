var path = require('path');
var autoprefixer = require('autoprefixer');

var modulesDirs = [
  'src',
  'node_modules',
  'web_modules'
];

var sassLoader = {
  includePaths: [
    path.resolve(__dirname, './src/theme/styles'),
    path.resolve(__dirname, './src/assets/styles')
  ]
};

if (process.env.THEME_PATH) {
  sassLoader.includePaths.unshift(
    path.resolve(__dirname, process.env.THEME_PATH, 'styles')
  );
}

var postcss = [
  autoprefixer({ browsers: ['last 2 versions'] })
];

module.exports = function (options) {
  return {
    entry: {
      client: ['babel-polyfill', './src/client'],
      widget: ['babel-polyfill', './src/widget'],
      embed: ['babel-polyfill', './src/embed']
    },
    cache: false,
    context: __dirname,
    devtool: false,
    output: {
      path: path.join(__dirname, 'static/dist'),
      filename: '[name].js',
      chunkFilename: '[name]-[id].js',
      publicPath: 'dist/'
    },
    module: { loaders: options.loaders },
    plugins: options.plugins,
    resolve: {
      modulesDirectories: modulesDirs,
      extensions: ['', '.json', '.js', '.jsx']
    },
    node: {
      __dirname: true,
      fs: 'empty'
    },
    postcss: postcss,
    sassLoader: sassLoader
  };
};
