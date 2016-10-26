import React from 'react';
import ButtonLink from 'components/ButtonLink';
import TextCenter from 'components/TextCenter';
import baseUrl from 'helpers/baseUrl';
import settings from 'settings';
import styles from './widget-support-button.scss';

const WidgetSupportButton = ({ petition }) => (
  <div className={styles.root}>
    <TextCenter>
      <ButtonLink
        href={`${baseUrl()}/petitions/${petition.id}`}
        text={settings.petitionPage.supportButton.text}
        block
        external
        modifier={'accent'}
      />
    </TextCenter>
  </div>
);

export default WidgetSupportButton;
