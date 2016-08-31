import React from 'react';
import styles from './close-button.scss';
import Icon from 'components/Icon';

const CloseButton = ({ onClick, attrs }) => (
  <button type='button'
    className={styles.root}
    onClick={() => onClick()}
    {...attrs}>
    <Icon
      id={'Close'}
      size={'large'}
      modifier={'dimmed'}
    />
  </button>
);

export default CloseButton;
