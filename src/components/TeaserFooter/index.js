import React from 'react';
import settings from 'settings';
import styles from './teaser-footer.scss';
import PetitionMetric from 'components/PetitionMetric';
import TeaserInfo from 'components/TeaserInfo';

const TeaserFooter = ({ info, timeMetric, supportersMetric }) => (
  <footer className={styles.root}>
    <div className={styles.info}>
      <TeaserInfo {...info} />
    </div>
    <div className={styles.metric}>
      <div className={styles['first-metric']}>
        <PetitionMetric
          {...timeMetric}
          icon={'Clock'}
          caption={settings.teaserDaysRemaining}
        />
      </div>
      <div className={styles.metric}>
        <PetitionMetric
          {...supportersMetric}
          icon={'Signature'}
          caption={settings.teaserSupportersText}
        />
      </div>
    </div>
  </footer>
);

export default TeaserFooter;
