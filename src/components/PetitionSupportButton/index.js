import React from 'react';
import ButtonIcon from 'components/ButtonIcon';
import FakeButton from 'components/FakeButton';
import SupportButton from 'containers/SupportButton';
import settings from 'settings';

const PetitionSupportButton = ({ isSupportable, userHasSupported }) => (
  <div>
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
);

export default PetitionSupportButton;
