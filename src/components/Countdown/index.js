import React from 'react';
import styles from './countdown.scss';
import settings from 'settings';
import CircleProgressBar from 'components/CircleProgressBar';
import Rezponsive from 'rezponsive';

const Countdown = ({ timeMetric, currentMedia }) => (
  <div className={styles.root}>
    {currentMedia.medium &&
      <CircleProgressBar percentage={timeMetric.percentage} aria={timeMetric.aria} size='large' animated>
        <span className={styles.counter}>
          <strong className={styles.total}>{timeMetric.figure || 0}</strong> <span className={styles.text}>{settings.daysRemaining}</span>
        </span>
      </CircleProgressBar>
    }
  </div>
);

export default Rezponsive(Countdown);
