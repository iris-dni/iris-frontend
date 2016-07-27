import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

// import App from 'app';
import routes from 'routes';
import config from 'config';
// import endpoint from 'services/api/endpoint';

export default (request, reply) => {
  match({ routes: routes(), location: { pathname: request.path } }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      reply(error.message).code(500);
    } else if (renderProps == null) {
      reply('Not found').code(404);
    } else {
      const initialState = { counter: 1 };
      const store = createStore(reducers, initialState);
      // const { location, params, history } = renderProps;

      // const initialState = endpoint(request.path).request();

      const reactString = ReactDOMServer.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const state = store.getState();

      reply.view('index', Object.assign({}, {
        reactMarkup: reactString,
        initialState: JSON.stringify(state)
      }, config));
    }
  });
};
