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
        caption={timeMetric.figure === 1
          ? settings.teaserDaysRemainingSingular
          : settings.teaserDaysRemaining
        }
      />
    </div>
    {supportersMetric && supportersMetric.votingActive &&
      <div className={styles.metric}>
        <PetitionMetric
          {...supportersMetric}
          icon={'Signature'}
          caption={supportersMetric.figure === 1
            ? settings.teaserSupportersTextSingular
            : settings.teaserSupportersText
          }
        />
      </div>
    }
  </div>
);
