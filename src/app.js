import 'assets/styles/global.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from './routes';
import reducer from 'reducers/index';

const App = ({ state, children }) => (
  <Provider store={createStore(reducer, state)}>
    {children || router}
  </Provider>
);

App.propTypes = { state: React.PropTypes.object };

export default App;
