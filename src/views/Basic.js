import React from 'react';
import { connect } from 'react-redux';

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
    const { counter } = this.props;
    return (
      <div>
        <h1>Basic Component { counter }</h1>
      </div>
    );
  }
}
