import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from 'actions/CounterActions';
import Counter from 'components/Counter';

/**
 * Redux connecting to the Main React application entry-point for both the server and client.
 */
@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => ({
    dispatch
  })
)

export default class Basic extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired
  }

  render () {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <h1>Basic Component {counter}</h1>
        <Counter
          counter={counter}
          {...bindActionCreators(CounterActions, dispatch)}
        />
      </div>
    );
  }
}
