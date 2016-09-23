import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import SupportButton from 'containers/SupportButton';
import TextCenter from 'components/TextCenter';
import ShareButtons from 'components/ShareButtons';

const PetitionSidebar = ({ timeMetric, supportable }) => (
  <aside role='complementary' className={styles.root}>
    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    {supportable &&
      <div className={styles['support-button']}>
        <TextCenter>
          <SupportButton />
        </TextCenter>
      </div>
    }
    <div className={styles.share}>
      <ShareButtons />
    </div>
  </aside>
);

export default PetitionSidebar;
