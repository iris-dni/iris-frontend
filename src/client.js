import 'assets/styles/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from 'reducers';
import Routes from './routes';

const initialState = JSON.parse(window.__INITIAL_STATE__) || {};
const store = createStore(reducers, initialState);

syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
), document.getElementById('app'));
