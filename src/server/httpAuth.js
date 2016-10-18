const Bcrypt = require('bcrypt');
const HTTP_AUTH_USER = process.env.HTTP_AUTH_USER;
const HTTP_AUTH_PASSWORD = process.env.HTTP_AUTH_PASSWORD;

const httpAuthValidate = function (request, username, password, callback) {
  if (!username || username !== HTTP_AUTH_USER) {
    return callback(null, false);
  }

  Bcrypt.compare(password, HTTP_AUTH_PASSWORD, (err, isValid) => {
    callback(err, isValid, {user: username});
  });
};

module.exports = httpAuthValidate;
