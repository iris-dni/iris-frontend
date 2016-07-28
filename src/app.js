import 'assets/styles/reset.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'reducers/index';
import router from 'routes';

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
