import App from 'containers/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { match, RouterContext } from 'react-router';

import routes from 'routes';

export default (request, reply) => {
  match({ routes, location: { pathname: request.path } }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      reply(error.message).code(500);
    } else if (renderProps == null) {
      reply('Not found').code(404);
    } else {
      const initialState = { counter: 1 };

      const reactString = ReactDOMServer.renderToString(
        <App initialState={initialState}>
          <RouterContext {...renderProps} />
        </App>
      );

      const basePath = process.env.NODE_ENV === 'production' ? '' : '//localhost:8080';

      reply.view('index', {
        reactMarkup: reactString,
        initialState: JSON.stringify(initialState),
        javascripts: [`${basePath}/dist/client.js`],
        stylesheets: process.env.NODE_ENV === 'production' ? ['/dist/styles.css'] : ''
      });
    }
  });
};
