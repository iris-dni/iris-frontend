import React from 'react';
import styles from './petition-stats.scss';
import settings from 'settings';
import Rezponsive from 'rezponsive';

const PetitionStats = ({ total, required, daysLeft, currentMedia }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <span className={styles.figure}>{total}</span>
      <span className={styles.label}>{settings.supportersText}</span>
    </li>
    {required > 0 &&
      <li className={styles.item}>
        <span className={styles.figure}>{required}</span>
        <span className={styles.label}>{settings.milestoneText}</span>
      </li>
    }
    {currentMedia && currentMedia.small &&
      <li className={styles.item}>
        <span className={styles.figure}>{daysLeft}</span>
        <span className={styles.label}>{settings.daysRemaining}</span>
      </li>
    }
  </ul>
);

export default Rezponsive(PetitionStats);
