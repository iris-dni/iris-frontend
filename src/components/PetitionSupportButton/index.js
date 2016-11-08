import React from 'react';
import ButtonIcon from 'components/ButtonIcon';
import FakeButton from 'components/FakeButton';
import SupportButton from 'containers/SupportButton';
import { translation } from 'translations';

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
        {translation('petitionPage.supportButton.text')}
      </FakeButton>
    }

    {(isSupportable && !userHasSupported) &&
      <SupportButton />
    }

    {(isSupportable && userHasSupported) &&
      <FakeButton disabled block>
        <ButtonIcon id={'Checkmark'} modifier={'dimmed'}>
          {translation('petitionPage.supportButton.supportedText')}
        </ButtonIcon>
      </FakeButton>
    }

    {/* TEMPORARY FOR SANITY */(!preview && !isSupportable && !winning && !closed) &&
      <FakeButton disabled block>
        {translation('petitionPage.supportButton.unsupportableText')}
      </FakeButton>
    }

    {(winning || processing) && !closed &&
      <FakeButton disabled block>
        {translation('petitionPage.supportButton.endedText')}
      </FakeButton>
    }

    {closed &&
      <FakeButton disabled block>
        {translation('petitionPage.supportButton.closedText')}
      </FakeButton>
    }
  </div>
);

export default PetitionSupportButton;
