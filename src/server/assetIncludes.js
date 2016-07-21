export default (config) => {
  const basePath = process.env.NODE_ENV === 'production'
    ? ''
    : '//localhost:8080';

  return {
    javascripts: [`${basePath}/dist/client.js`],
    stylesheets: process.env.NODE_ENV === 'production'
      ? ['/dist/styles.css']
      : []
  };
};
