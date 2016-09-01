import React from 'react';
import styles from './close-button.scss';
import Icon from 'components/Icon';

const CloseButton = ({ onClick, attrs, text }) => (
  <button type='button'
    className={styles.root}
    onClick={() => onClick()}
    {...attrs}>
    <span
      className={styles.icon}
      aria-hidden>
      <Icon
        id={'Close'}
        modifier={'dimmed'}
      />
    </span>
    <span className={styles.text}>
      {text}
    </span>
  </button>
);

export default CloseButton;
