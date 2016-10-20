#!/usr/bin/env node

require('dotenv').config();
var Bcrypt = require('bcrypt');
var password = process.argv[0];

var generateAuthPassword = function (password) {
  return Bcrypt.hashSync(password, 10);
};

console.log(generateAuthPassword(password));
