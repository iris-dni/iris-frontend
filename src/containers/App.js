import React from 'react';
import router from 'routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'reducers/index';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.store = createStore(reducer, this.props.initialState);
  }

  render () {
    return (
      <div>
        <Provider store={this.store}>
          {this.props.children ? this.props.children : router}
        </Provider>
      </div>
    );
  }
}
