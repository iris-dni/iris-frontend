import React from 'react';
import { connect } from 'react-redux';
import { plus, minus } from 'actions/CounterActions';
import Counter from 'components/Counter';

const BasicContainer = (props) => (
  <div>
    <h1>Basic Component {props.counter}</h1>
    <Counter {...props} />
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  plus: () => dispatch(plus()),
  minus: () => dispatch(minus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicContainer);
