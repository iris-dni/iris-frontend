import React from 'react';
import styles from './petition-stats.scss';

const PetitionStats = ({ total, required }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      Unterstützer: <b className={styles.total}>{total}</b>
    </li>
    <li className={styles.item}>
      Meilenstein: {required}
    </li>
  </ul>
);

export default PetitionStats;
