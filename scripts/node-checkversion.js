/* eslint-disable */
var exec = require('child_process').exec;
exec('node -v', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout.replace('v','')) < 4) {
    throw new Error('[ERROR: iris-frontend] You need node version @>=4');
    process.exit(1);
  }
});
