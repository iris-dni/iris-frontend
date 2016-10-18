import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import routes from 'routes';

import stringifyHeadData from 'server/stringifyHeadData';
import getBundles from 'server/getBundles';

export default (request, reply, next) => {
  match({ routes: routes(), location: { pathname: request.path, query: request.query } }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      reply(error.message).code(500);
    } else if (renderProps == null) {
      reply('Not found').code(404);
    } else {
      // Set initial state
      const initialState = {};

      // Create our store
      const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware)
      );

      // Get the component tree
      const components = renderProps.components || [];
      // Extract our page component for this route
      const Component = components[components.length - 1];
      // Extract `fetchData` from component if exists, otherwise return empty promise
      const fetchData = (Component && Component.fetchData) || (() => Promise.resolve());
      // Get from renderProps
      const { location, params, history } = renderProps;

      // Run fetchData to get async data, then render
      fetchData({ store, location, params, history })
        .then(() => {
          // Construct our markup
          const reactString = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          // Get <head> meta data
          const headData = Helmet.rewind();
          // Get (initial) state from store
          const initialState = store.getState();

          // Render Nunjucks view with required data
          return reply.view('index', Object.assign({}, {
            reactMarkup: reactString,
            initialState: JSON.stringify(initialState),
            head: stringifyHeadData(headData),
            bundles: getBundles(),
            siteName: process.env.SITE_NAME // analytics & tracking
          }));
        })
        .catch((err) => {
          return err.response && err.response.status
            ? reply('Not found').code(404)
            : reply(err.message).code(500);
        });
    }
  });
};
