import React from 'react';
import styles from './petition-widget-support-button.scss';
import ButtonLink from 'components/ButtonLink';
import settings from 'settings';

const PetitionWidgetSupportButton = ({ link }) => (
  <div className={styles.root}>
    <ButtonLink
      size={'compact'}
      href={link}
      text={settings.widgets.petition.link}
      block
      external
      newTab
      modifier={'accent'}
    />
  </div>
);

export default PetitionWidgetSupportButton;
