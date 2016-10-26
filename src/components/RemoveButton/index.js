import React from 'react';
import settings from 'settings';
import Icon from 'components/Icon';
import styles from './remove-button.scss';

const RemoveButton = ({ onClick }) => (
  <button
    className={styles.root}
    type='button'
    onClick={onClick}
  >
    <Icon
      size={'smaller'}
      id={'Close'}
      modifier={'invert'}
    />

    <span className={styles.label}>
      {settings.petitionFields.links.removeLinkLabel}
    </span>
  </button>
);

export default RemoveButton;
