import React from 'react';
import styles from './petition-widget-support-button.scss';
import ButtonLink from 'components/ButtonLink';
import getPetitionURL from 'helpers/getPetitionURL';
import settings from 'settings';

const PetitionWidgetSupportButton = ({ petition }) => (
  <div className={styles.root}>
    <ButtonLink
      size={'compact'}
      href={getPetitionURL(petition && petition.id)}
      text={settings.petitionPage.supportButton.text}
      block
      external
      newTab
      modifier={'accent'}
    />
  </div>
);

export default PetitionWidgetSupportButton;
