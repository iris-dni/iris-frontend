import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';

const PetitionSidebar = ({ daysRemaining }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown remaining={daysRemaining} />
    </div>
  </aside>
);

export default PetitionSidebar;
