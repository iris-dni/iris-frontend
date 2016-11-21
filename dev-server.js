module.exports = {
  publicPath: 'http://dhcp133.de.edenspiekermann.com:8080/dist/',
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
