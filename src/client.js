import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';

const initialState = JSON.parse(window.__INITIAL_STATE__) || {};

ReactDOM.render(
  <App state={initialState} />,
  document.getElementById('app')
);
