require('babel-register');

var cssModulesHook = require('css-modules-require-hook');

cssModulesHook({
  generateScopedName: process.env.NODE_ENV === 'production'
    ? '[hash:base64:5]'
    : '[name]__[local]___[hash:base64:5]',
  mode: 'local'
});

global.__CLIENT__ = false;
global.__SERVER__ = true;

if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({ hook: true })) {
    return;
  }
}

require('./src/index');
