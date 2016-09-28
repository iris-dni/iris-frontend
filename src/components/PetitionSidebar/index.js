import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import SupportButton from 'containers/SupportButton';
import SharePetition from 'containers/SharePetition';

const PetitionSidebar = ({ timeMetric, supportable, startDate, runningTime }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    <div className={styles.specifics}>
      <p>{startDate}</p>
      <p>{runningTime}</p>
    </div>
    {supportable &&
      <div className={styles['support-button']}>
        <SupportButton />
      </div>
    }
    <div className={styles.share}>
      <SharePetition />
    </div>
  </aside>
);

export default PetitionSidebar;
