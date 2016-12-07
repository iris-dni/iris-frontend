import React from 'react';
import ButtonIcon from 'components/ButtonIcon';
import FakeButton from 'components/FakeButton';
import SupportButton from 'containers/SupportButton';
import settings from 'settings';

const PetitionSupportButton = ({
  isSupportable,
  userHasSupported,
  preview,
  closed,
  winning,
  processing
}) => (
  <div>
    {preview &&
      <FakeButton disabled block>
        {settings.petitionPage.supportButton.text}
      </FakeButton>
    }

    {(isSupportable && !userHasSupported) &&
      <SupportButton />
    }

    {(isSupportable && userHasSupported) &&
      <FakeButton disabled block>
        <ButtonIcon id={'Checkmark'} modifier={'dimmed'}>
          {settings.petitionPage.supportButton.supportedText}
        </ButtonIcon>
      </FakeButton>
    }

    {(!isSupportable && !closed) &&
      <FakeButton disabled block>
        {settings.petitionPage.supportButton.endedText}
      </FakeButton>
    }

    {(!isSupportable && closed) &&
      <FakeButton disabled block>
        {settings.petitionPage.supportButton.closedText}
      </FakeButton>
    }
  </div>
);

export default PetitionSupportButton;
