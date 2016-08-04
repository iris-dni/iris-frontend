import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';

const PetitionSidebar = ({ daysRemaining }) => (
  <aside role='complementary' className={styles.root}>
    <Countdown remaining={daysRemaining} />
  </aside>
);

export default PetitionSidebar;
