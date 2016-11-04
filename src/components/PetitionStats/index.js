import React from 'react';
import styles from './petition-stats.scss';
import settings from 'settings';
import Statistic from 'components/Statistic';

const PetitionStats = ({ total, required, daysLeft }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <Statistic
        figure={total}
        label={settings.supportersText}
      />
    </li>
    {required > 0 &&
      <li className={styles.item}>
        <Statistic
          figure={required}
          label={settings.milestoneText}
        />
      </li>
    }
    <li className={styles['days-item']}>
      <Statistic
        figure={daysLeft}
        label={settings.daysRemaining}
      />
    </li>
  </ul>
);

export default PetitionStats;
