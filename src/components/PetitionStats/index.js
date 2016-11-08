import React from 'react';
import styles from './petition-stats.scss';
import { translation } from 'translations';
import Statistic from 'components/Statistic';

const PetitionStats = ({ total, required, daysLeft }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <Statistic
        figure={total}
        label={translation('supportersText')}
      />
    </li>
    {required > 0 &&
      <li className={styles.item}>
        <Statistic
          figure={required}
          label={translation('milestoneText')}
        />
      </li>
    }
    <li className={styles['days-item']}>
      <Statistic
        figure={daysLeft}
        label={translation('daysRemaining')}
      />
    </li>
  </ul>
);

export default PetitionStats;
