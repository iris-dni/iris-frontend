import React from 'react';
import ButtonLink from 'components/ButtonLink';
import TextCenter from 'components/TextCenter';
import getPetitionURL from 'helpers/getPetitionURL';
import settings from 'settings';

const WidgetSupportButton = ({ petition }) => (
  <TextCenter>
    <ButtonLink
      size={'slim'}
      href={getPetitionURL(petition.id)}
      text={settings.petitionPage.supportButton.text}
      block
      external
      newTab
      modifier={'accent'}
    />
  </TextCenter>
);

export default WidgetSupportButton;
