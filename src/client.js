// Patches for IE
require('svg4everybody');
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('classlist-polyfill');
require('custom-event-polyfill');
// Begin App code
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers/client';
import routes from 'routers/client';

import logPageview from 'helpers/logPageview';
import getHistory from 'helpers/getHistory';

const initialState = window.__INITIAL_STATE__ || {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunkMiddleware
  )
);

syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router
      history={getHistory(store)}
      onUpdate={logPageview}
      render={applyRouterMiddleware(useScroll())}
      routes={routes}
    />
  </Provider>
), document.getElementById('app'));
