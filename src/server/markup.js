export default (reactString, initialData, webserver) => {
  const css = process.env.NODE_ENV === 'production'
    ? `<link rel='stylesheet' href='${webserver}/dist/styles.css'>`
    : '';

  const javascript = `<script src="${webserver}/dist/client.js"></script>`;

  return (
    `<!doctype html>
    <html lang='en-us'>
      <head>
        <meta charset='utf-8'>
        <title>Hapi Universal Redux</title>
        <link rel='shortcut icon' href='/favicon.ico'>
        ${css}
      </head>
      <body>
        <div id='app'>${reactString}</div>
        <script>window.__INITIAL_STATE__='${initialData}'</script>
        ${javascript}
      </body>
    </html>`
  );
};
