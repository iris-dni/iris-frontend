/* eslint-disable */
var fs = require('fs-extra');

fs.copy('./src/assets', './static/dist/assets', function (err) {
  if (err) return console.error(err);
});
