import stylesheet from './stylesheet';

export default (reactString, initialData, webserver, config) => {
  return (
    `<!doctype html>
    <html lang='${config.lang}'>
      <head>
        <meta charset='${config.charset}'>
        <title>${config.title}</title>
        ${stylesheet(webserver)}
      </head>
      <body>
        <div id='app'>${reactString}</div>
        <script>window.__INITIAL_STATE__='${initialData}'</script>
        <script src="${webserver}/dist/client.js"></script>
      </body>
    </html>`
  );
};
