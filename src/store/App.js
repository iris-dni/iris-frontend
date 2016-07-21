import 'assets/styles/global.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import router from 'routes';
import reducer from 'reducers/index';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    /**
     * <Provider store> cannot be updated on-the-fly with hot reloading
     * and Redux 2.x, so use a constructor to create it here first.
     */
    this.store = createStore(reducer, this.props.state);
  }

  render () {
    return (
      <Provider store={this.store}>
        {this.props.children || router}
      </Provider>
    );
  }
}
