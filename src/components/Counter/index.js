import React from 'react';
import styles from './counter.scss';

const Counter = ({ counter, plus, minus }) => (
  <div className={styles.root}>
    <span>Redux counter {counter.toString()}</span>
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  plus: React.PropTypes.func.isRequired,
  minus: React.PropTypes.func.isRequired
};

export default Counter;
