import React from 'react';
import styles from './countdown.scss';

const Countdown = ({ remaining }) => (
  <p className={styles.root}>
    <span className={styles.counter}>
      <strong className={styles.total}>{remaining || 0}</strong> Tage übrig
    </span>
  </p>
);

export default Countdown;
