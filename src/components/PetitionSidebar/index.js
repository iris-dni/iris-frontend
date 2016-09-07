import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import SupportButton from 'containers/SupportButton';
import TextCenter from 'components/TextCenter';

const PetitionSidebar = ({ timeMetric, supportable }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    {supportable && timeMetric && timeMetric.votingActive &&
      <div className={styles.supportButton}>
        <TextCenter>
          <SupportButton />
        </TextCenter>
      </div>
    }
  </aside>
);

export default PetitionSidebar;
