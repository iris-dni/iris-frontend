import React from 'react';
import styles from './countdown.scss';
import settings from 'settings';
import CircleProgressBar from 'components/CircleProgressBar';

const Countdown = ({ remaining }) => (
  <div className={styles.root}>
    <CircleProgressBar percentage={20} size='large' animated>
      <span className={styles.counter}>
        <strong className={styles.total}>{remaining || 0}</strong> <span className={styles.text}>{settings.daysRemaining}</span>
      </span>
    </CircleProgressBar>
  </div>
);

export default Countdown;
