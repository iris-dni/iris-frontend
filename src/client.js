// Patches for IE
require('svg4everybody');
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('classlist-polyfill');
require('custom-event-polyfill');
// Begin App code
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers';
import Routes from './routes';

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

ReactDOM.render((
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
), document.getElementById('app'));
