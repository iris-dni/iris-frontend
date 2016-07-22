/* eslint-disable */
var fs = require('fs-extra');
require('dotenv').config();

var DEFAULT_THEME_PATH = 'src/theme';
var CUSTOM_THEME_PATH = process.env.THEME_PATH;
var TARGET_PATH = 'static/dist/theme';

/*
 * Copy the custom theme (if given) and over-write
 */
if (CUSTOM_THEME_PATH) {
  fs.copy(CUSTOM_THEME_PATH, TARGET_PATH, function (err) {
    if (err) return console.error(err);
  });
}

/*
 * Sync the default theme with custom one for missing files
 */
fs.copySync(DEFAULT_THEME_PATH, TARGET_PATH, { clobber: true }, function (err) {
  if (err) return console.error(err);
});
