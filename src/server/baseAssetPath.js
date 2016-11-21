export default [
  process.env.NODE_ENV === 'production' ? '' : '//dhcp133.de.edenspiekermann.com:8080',
  'dist'
].join('/');
