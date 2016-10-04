import React from 'react';
import styles from './petition-sidebar.scss';
import Countdown from 'components/Countdown';
import PetitionResponseStatus from 'containers/PetitionResponseStatus';
import ButtonIcon from 'components/ButtonIcon';
import FakeButton from 'components/FakeButton';
import SupportButton from 'containers/SupportButton';
import SharePetition from 'containers/SharePetition';
import settings from 'settings';

const PetitionSidebar = ({
  processing,
  timeMetric,
  isSupportable,
  userHasSupported,
  startDate,
  runningTime
}) => (
  <aside role='complementary' className={styles.root}>
    {processing &&
      <PetitionResponseStatus />
    }

    <div className={styles.counter}>
      <Countdown timeMetric={timeMetric} />
    </div>
    <div className={styles.specifics}>
      <p>{startDate}</p>
      <p>{runningTime}</p>
    </div>
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
    <div className={styles.share}>
      <SharePetition />
    </div>
  </aside>
);

export default PetitionSidebar;
