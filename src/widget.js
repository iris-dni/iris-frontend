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
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers/widget';
import routes from 'routers/widget';
import logPageview from 'helpers/logPageview';

const initialState = window.__INITIAL_STATE__ || {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunkMiddleware)
);

render((
  <Provider store={store}>
    <Router
      history={browserHistory}
      onUpdate={logPageview}
      routes={routes}
    />
  </Provider>
), document.getElementById('app'));
