import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';

const PetitionSidebar = ({ timeMetric }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
  </aside>
);

export default PetitionSidebar;
