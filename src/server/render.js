import React from 'react';
import settings from 'settings';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { assign } from 'lodash/object';

import stringifyHeadData from 'server/stringifyHeadData';
import baseAssetPath from 'server/baseAssetPath';

import { PAGEVIEW_EVENT_NAME } from 'helpers/logPageview';

/*
 * Define routing and reducers for each of our
 * entry points (main site, and widget for now)
 */
import clientReducer from 'reducers/client';
import clientRouter from 'routers/client';

import widgetReducer from 'reducers/widget';
import widgetRouter from 'routers/widget';

const routerForView = {
  index: clientRouter,
  widget: widgetRouter
};

const reducerForView = {
  index: clientReducer,
  widget: widgetReducer
};

/*
 * Note: this file contains server-side rendering logic, called from server.js.
 *
 * YOU SHOULD NOT NEED TO EDIT THIS FILE unless adding additional server logic /
 * template variables. Data fetching can be handled in route handler containers.
 *
 * Get data on the server by adding a `fetchData` function to a container e.g.
 *
 * PetitionContainer.fetchData = ({ store, params }) => {
 *   return store.dispatch(fetchPetition(params.id));
 * };
 *
 * This function is run on the server before rendering, dispatching an action
 * to pre-fill the Redux store with data for that route.
 */

export default (request, reply, viewName = 'index') => {
  match({
    routes: routerForView[viewName],
    location: {
      pathname: request.path,
      query: request.query
    }
  }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      console.log(error.message);
      reply('Something went wrong').code(500);
    } else if (renderProps == null) {
      return new Error('Missing render props');
    } else {
      // Set default status code
      let statusCode = 200;

      // Set initial state
      const initialState = {};

      // Create our store
      const store = createStore(
        reducerForView[viewName],
        initialState,
        applyMiddleware(thunkMiddleware)
      );

      // Get the component tree
      const components = renderProps.components || [];
      // Extract our page component for this route
      const Component = components[components.length - 1] || {};
      // Extract `fetchData` from component if exists, otherwise return empty promise
      const fetchData = (Component && Component.fetchData) || (() => Promise.resolve());
      // Get from renderProps
      const { location, params, history } = renderProps;

      // If we are showing the 404, change status code to 404
      if (Component.displayName === 'Error404Container') {
        statusCode = 404;
      }

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
          return reply.view(viewName, assign({}, {
            reactMarkup: reactString,
            initialState: JSON.stringify(initialState),
            head: stringifyHeadData(headData),
            baseAssetPath: baseAssetPath,
            isProduction: process.env.NODE_ENV === 'production',
            pageViewEvent: PAGEVIEW_EVENT_NAME,
            googleAnalyticsID: settings.googleAnalyticsID
          })).code(statusCode);
        })
        .catch((err) => {
          console.log(err.message);
          return reply('Something went wrong').code(500);
        });
    }
  });
};
