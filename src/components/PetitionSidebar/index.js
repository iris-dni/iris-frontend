import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import PetitionResponseStatus from 'containers/PetitionResponseStatus';
import PetitionRunningTime from 'containers/PetitionRunningTime';
import PetitionSupportButton from 'containers/PetitionSupportButton';
import ShowWhen from 'components/ShowWhen';
import SharePetition from 'containers/SharePetition';

const PetitionSidebar = ({
  processing,
  timeMetric,
  isSupportable
}) => (
  <aside role='complementary' className={styles.root}>
    {processing &&
      <PetitionResponseStatus />
    }

    {isSupportable &&
      <ShowWhen when={'medium'}>
        <div className={styles.counter}>
          <Countdown timeMetric={timeMetric} />
        </div>
      </ShowWhen>
    }

    <div className={styles['support-button']}>
      <PetitionSupportButton />
    </div>

    <div className={styles.specifics}>
      <PetitionRunningTime />
    </div>

    <ShowWhen when={'medium'}>
      <div className={styles.share}>
        <SharePetition />
      </div>
    </ShowWhen>
  </aside>
);

export default PetitionSidebar;
