import React from 'react';
import styles from './petition-stats.scss';
import settings from 'settings';

const PetitionStats = ({ total, required }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      {settings.supportersText} <b className={styles.total}>{total}</b>
    </li>
    <li className={styles.item}>
      {settings.milestoneText} {required}
    </li>
  </ul>
);

export default PetitionStats;
