import React from 'react';
import settings from 'settings';
import styles from './teaser-metrics.scss';
import PetitionMetric from 'components/PetitionMetric';

export default ({ timeMetric, supportersMetric }) => (
  <div className={styles.root}>
    <div className={styles['first-metric']}>
      <PetitionMetric
        {...timeMetric}
        icon={'Clock'}
        caption={settings.teaserDaysRemaining}
      />
    </div>
    {supportersMetric && supportersMetric.votingActive &&
      <div className={styles.metric}>
        <PetitionMetric
          {...supportersMetric}
          icon={'Signature'}
          caption={settings.teaserSupportersText}
        />
      </div>
    }
  </div>
);
