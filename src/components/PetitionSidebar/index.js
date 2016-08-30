import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import SupportButton from 'components/SupportButton';
import TextCenter from 'components/TextCenter';

const PetitionSidebar = ({ timeMetric }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    <div className={styles.supportButton}>
      <TextCenter>
        <SupportButton />
      </TextCenter>
    </div>
  </aside>
);

export default PetitionSidebar;
