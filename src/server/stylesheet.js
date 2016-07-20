export default (webserver = '') => {
  return process.env.NODE_ENV === 'production'
    ? `<link rel='stylesheet' href='${webserver}/dist/styles.css'>`
    : '';
};
