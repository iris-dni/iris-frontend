var assetsUrl = 'http://localhost:8080';

module.exports = {
  assetsUrl: assetsUrl,
  publicPath: assetsUrl + '/dist/',
  contentBase: './static',
  hot: true,
  inline: true,
  lazy: false,
  quiet: true,
  noInfo: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  host: '0.0.0.0'
};
