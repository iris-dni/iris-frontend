import React from 'react';
import styles from './petition-stats.scss';
import settings from 'settings';

const PetitionStats = ({ figure, total }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      {settings.supportersText} <b className={styles.figure}>{figure}</b>
    </li>
    <li className={styles.item}>
      {settings.milestoneText} {total}
    </li>
  </ul>
);

export default PetitionStats;
