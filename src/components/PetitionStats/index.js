import React from 'react';
import styles from './petition-stats.scss';
import settings from 'settings';

const PetitionStats = ({ amount, required }) => (
  <ul className={styles.root}>
    <li className={`${styles.item} ${styles.total}`}>
      {settings.supportersText} {amount}
    </li>
    {required > 0 &&
      <li className={styles.item}>
        {settings.milestoneText} {required}
      </li>
    }
  </ul>
);

export default PetitionStats;
