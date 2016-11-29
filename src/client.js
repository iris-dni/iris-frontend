/* eslint-disable handle-callback-err */
// Patches for IE
require('svg4everybody')();
require('es6-promise').polyfill();
require('classlist-polyfill');
require('custom-event-polyfill');
// Begin App code
import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { match, Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import reducers from 'reducers/client';
import routes from 'routers/client';

import logPageview from 'helpers/logPageview';
import getHistory from 'helpers/getHistory';

const initialState = window.__INITIAL_STATE__ || {};

const enhancer = compose(
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunkMiddleware
  ),
  persistState(['me', 'petition', 'form'], { key: 'iris' })
);

const store = createStore(reducers, initialState, enhancer);

syncHistoryWithStore(browserHistory, store);

// Async Routes:
//
// So we can do async fetches in onEnter for things like
// authentication and redirecting rejected petitions
//
// https://github.com/ReactTraining/react-router/blob/v2.4.1/docs/guides/ServerRendering.md#async-routes
//
match({
  history: getHistory(store),
  routes
}, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router
        {...renderProps}
        onUpdate={logPageview}
        render={applyRouterMiddleware(useScroll())}
      />
    </Provider>
  , document.getElementById('app'));
});
