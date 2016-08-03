import React from 'react';
import styles from './petition-sidebar.scss';

const PetitionSidebar = ({ daysRemaining }) => (
  <aside className={styles.root} role='complementary'>
    <strong className={styles.counter}>
      <span className={styles.number}>{daysRemaining}</span> Tage übrig
    </strong>
  </aside>
);

export default PetitionSidebar;
