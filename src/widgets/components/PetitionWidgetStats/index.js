import React from 'react';
import styles from './petition-widget-stats.scss';
import settings from 'settings';
import Statistic from 'components/Statistic';

const PetitionWidgetStats = ({ total, required, daysLeft }) => (
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
    <li className={styles.item}>
      <Statistic
        figure={daysLeft}
        label={settings.daysRemaining}
      />
    </li>
  </ul>
);

export default PetitionWidgetStats;
