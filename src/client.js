import 'assets/styles/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers';
import Routes from './routes';

const initialState = window.__INITIAL_STATE__ || {};

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware)
  )
);

syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
), document.getElementById('app'));
