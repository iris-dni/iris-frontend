export default (reactString, initialData, webserver, config) => {
  const stylesheet = process.env.NODE_ENV === 'production'
    ? `<link rel='stylesheet' href='${webserver}/dist/styles.css'>`
    : '';

  return (
    `<!doctype html>
    <html lang='${config.lang}'>
      <head>
        <meta charset='${config.charset}'>
        <title>${config.title}</title>
        ${stylesheet}
      </head>
      <body>
        <div id='app'>${reactString}</div>
        <script>window.__INITIAL_STATE__='${initialData}'</script>
        <script src="${webserver}/dist/client.js"></script>
      </body>
    </html>`
  );
};
