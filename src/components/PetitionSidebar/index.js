import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';

const PetitionSidebar = ({ metrics }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={metrics.timeMetric} />
    </div>
  </aside>
);

export default PetitionSidebar;
