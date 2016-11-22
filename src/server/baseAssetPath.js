const isProduction = process.env.NODE_ENV === 'production';

export default [
  !isProduction ? '//localhost:8080' : '',
  'dist'
].join('/');
