import React from 'react';
import styles from './petition-running-time.scss';

const PetitionRunningTime = ({ startDate, runningTime }) => (
  <div className={styles.root}>
    <p>
      {startDate}
    </p>
    <p>
      {runningTime}
    </p>
  </div>
);

export default PetitionRunningTime;
