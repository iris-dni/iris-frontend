/* eslint-disable */
var fs = require('fs-extra');

fs.copy('src/index.html', 'static/dist/index.html', function (err) {
  if (err) return console.error(err);
});
