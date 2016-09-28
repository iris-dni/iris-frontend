import React from 'react';
import styles from './button-icon.scss';
import Icon from 'components/Icon';

const ButtonIcon = ({ id, modifier, children }) => (
  <span className={styles.root}>
    <span className={styles.icon}>
      <Icon
        id={id}
        inline
        modifier={modifier}
      />
    </span>
    {children}
  </span>
);

export default ButtonIcon;
