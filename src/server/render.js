import App from 'containers/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'routes';
import config from './config';
import assetIncludes from './assetIncludes';

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

      reply.view('index', Object.assign({}, {
        reactMarkup: reactString,
        initialState: JSON.stringify(initialState),
        assetIncludes: assetIncludes(config)
      }, config));
    }
  });
};
