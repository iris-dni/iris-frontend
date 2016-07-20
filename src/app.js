import 'assets/styles/global.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from 'routes';
import reducer from 'reducers/index';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.store = createStore(reducer, this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        {this.props.children || router}
      </Provider>
    );
  }
}
