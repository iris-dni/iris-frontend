import React from 'react';
import styles from './styles.css';

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
      <div className={styles.hello}>
        <span>Redux counter {count}</span>
        <div>
          <button onClick={plus} className={styles.world}>+</button>
          <button onClick={minus}>-</button>
        </div>
      </div>
    );
  }
}
