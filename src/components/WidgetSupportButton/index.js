import React from 'react';
import ButtonLink from 'components/ButtonLink';
import TextCenter from 'components/TextCenter';
import baseUrl from 'helpers/baseUrl';
import settings from 'settings';

const WidgetSupportButton = ({ petition }) => (
  <TextCenter>
    <ButtonLink
      href={`${baseUrl()}/petitions/${petition.id}`}
      text={settings.petitionPage.supportButton.text}
      block
      external
      newTab
      modifier={'accent'}
    />
  </TextCenter>
);

export default WidgetSupportButton;
