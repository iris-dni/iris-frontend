import React from 'react';
import styles from './progress-bar.scss';

const ProgressBar = ({ aria, percentage, size = 'regular' }) => (
  <div
    className={styles[size]}
    role={'progressbar'}
    aria-valuenow={aria.value}
    aria-valuemin={aria.minimum}
    aria-valuemax={aria.maximum}>
    <span
      role={'presentation'}
      className={styles.bar}
      style={{ width: percentage + '%' }}
    />
  </div>
);

export default ProgressBar;
