import React from 'react';
import styles from './countdown.scss';
import { translation } from 'translations';
import CircleProgressBar from 'components/CircleProgressBar';

const Countdown = ({ timeMetric }) => (
  <div className={styles.root}>
    <CircleProgressBar percentage={timeMetric.percentage} aria={timeMetric.aria} size='large' animated>
      <span className={styles.counter}>
        <strong className={styles.total}>{timeMetric.figure || 0}</strong> <span className={styles.text}>{translation('daysRemaining')}</span>
      </span>
    </CircleProgressBar>
  </div>
);

export default Countdown;
