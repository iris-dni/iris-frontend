import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import SupportButton from 'components/SupportButton';

const PetitionSidebar = ({ timeMetric }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    <div className={styles.supportButton}>
      <SupportButton />
    </div>
  </aside>
);

export default PetitionSidebar;
