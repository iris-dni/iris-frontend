import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import ButtonIcon from 'components/ButtonIcon';
import FakeButton from 'components/FakeButton';
import ShowWhen from 'components/ShowWhen';
import SupportButton from 'containers/SupportButton';
import SharePetition from 'containers/SharePetition';
import settings from 'settings';

const PetitionSidebar = ({
  timeMetric,
  isSupportable,
  userHasSupported,
  startDate,
  runningTime
}) => (
  <aside role='complementary' className={styles.root}>
    <ShowWhen when={'medium'}>
      <div className={styles.counter}>
        <Countdown timeMetric={timeMetric} />
      </div>
    </ShowWhen>
    <div className={styles['support-button']}>
      {isSupportable && !userHasSupported &&
        <SupportButton />
      }

      {isSupportable && userHasSupported &&
        <FakeButton disabled block>
          <ButtonIcon id={'Checkmark'} modifier={'dimmed'}>
            {settings.petitionPage.supportButton.supportedText}
          </ButtonIcon>
        </FakeButton>
      }

      {!isSupportable &&
        <FakeButton disabled block>
          {settings.petitionPage.supportButton.unsupportableText}
        </FakeButton>
      }
    </div>
    <div className={styles.specifics}>
      <p>{startDate}</p>
      <p>{runningTime}</p>
    </div>
    <ShowWhen when={'medium'}>
      <div className={styles.share}>
        <SharePetition />
      </div>
    </ShowWhen>
  </aside>
);

export default PetitionSidebar;
