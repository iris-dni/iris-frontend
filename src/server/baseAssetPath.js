export default [
  process.env.NODE_ENV === 'production' ? '' : '//localhost:8080',
  'dist'
].join('/');
