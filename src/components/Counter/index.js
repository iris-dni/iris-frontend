import React from 'react';
import styles from './Counter.css';

export default class Counter extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    plus: React.PropTypes.func.isRequired,
    minus: React.PropTypes.func.isRequired
  }

  render () {
    const count = this.props.counter.toString();
    const { plus, minus } = this.props;

    return (
      <div className={styles.root}>
        <span>Redux counter {count}</span>
        <div>
          <button onClick={plus} className={styles.button}>+</button>
          <button onClick={minus}>-</button>
        </div>
      </div>
    );
  }
}
