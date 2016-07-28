import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from 'reducers';

import routes from 'routes';
import config from 'config';

export default (request, reply, next) => {
  match({ routes: routes(), location: { pathname: request.path } }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      reply(error.message).code(500);
    } else if (renderProps == null) {
      reply('Not found').code(404);
    } else {
      const initialState = {};

      // Create our store
      const store = createStore(
        reducers,
        initialState,
        compose(
          applyMiddleware(thunkMiddleware)
        )
      );

      // Get the component tree
      const components = renderProps.components;
      // Extract our page component
      const Comp = components[components.length - 1].WrappedComponent;
      // Extract `fetchData` if exists
      const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());
      // Get from renderProps
      const { location, params, history } = renderProps;

      fetchData({ store, location, params, history })
        .then(() => {
          const reactString = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          const state = store.getState();

          return reply.view('index', Object.assign({}, {
            reactMarkup: reactString,
            initialState: JSON.stringify(state)
          }, config));
        })
        .catch((err) => next(err));
    }
  });
};
