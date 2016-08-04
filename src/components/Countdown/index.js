import React from 'react';
import styles from './countdown.scss';
import settings from 'settings';

const Countdown = ({ remaining }) => (
  <p className={styles.root}>
    <span className={styles.counter}>
      <strong className={styles.total}>{remaining || 0}</strong> <span className={styles.text}>{settings.daysRemaining}</span>
    </span>
  </p>
);

export default Countdown;
