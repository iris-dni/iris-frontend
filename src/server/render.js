import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from 'reducers';

import routes from 'routes';
import settings from 'settings';
import getMetaData from 'server/getMetaData';

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
        applyMiddleware(thunkMiddleware)
      );

      // Get the component tree
      const components = renderProps.components;
      // Extract our page component
      const Comp = components[components.length - 1].WrappedComponent;
      // Extract `fetchData` if exists
      const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());
      // Get from renderProps
      const { location, params, history } = renderProps;

      // Fetch async data, then render
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
          }, settings,
            getMetaData(Comp && Comp.displayName, state)
          ));
        })
        .catch((err) => {
          return err.response && err.response.status
            ? reply('Not found').code(404)
            : reply(err.message).code(500);
        });
    }
  });
};
