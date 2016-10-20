import React from 'react';
import ButtonLink from 'components/ButtonLink';
import settings from 'settings';

const SupportButton = ({ petition }) => (
  <ButtonLink
    href={`/trust/support/${petition.id}`}
    text={settings.petitionPage.supportButton.text}
    block
    modifier={'accent'}
  />
);

export default SupportButton;
