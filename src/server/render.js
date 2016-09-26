import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from 'reducers';

import routes from 'routes';
import settings from 'settings';
// import getMetaData from 'server/getMetaData';

export default (request, reply, next) => {
  match({ routes: routes(), location: { pathname: request.path, query: request.query } }, (error, redirectLocation, renderProps) => {
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
      const components = renderProps.components || [];
      // Extract our page component
      const Component = components[components.length - 1];
      // Get component to pass
      // const ComponentObject = Component && Component.WrappedComponent || Component || {};
      // // Get name of component rendered
      // const ComponentName = ComponentObject.displayName || '';
      // Extract `fetchData` if exists
      const fetchData = (Component && Component.fetchData) || (() => Promise.resolve());
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

          // Get <head> meta data
          const headData = Helmet.rewind();
          // Get (initial) state from store
          const initialState = store.getState();

          // Render Nunjucks view with required data
          return reply.view('index', Object.assign({}, {
            reactMarkup: reactString,
            initialState: JSON.stringify(initialState)
          }, settings, { head: {
            title: headData.title.toString(),
            meta: headData.meta.toString(),
            link: headData.link.toString(),
            script: headData.script.toString(),
            style: headData.style.toString()
          }}));
        })
        .catch((err) => {
          return err.response && err.response.status
            ? reply('Not found').code(404)
            : reply(err.message).code(500);
        });
    }
  });
};
