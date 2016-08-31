import React from 'react';
import styles from './button-icon.scss';
import Icon from 'components/Icon';

const ButtonIcon = ({ id, fill, children }) => (
  <span className={styles.root}>
    <span className={styles.icon}>
      <Icon
        id={id}
        inline
        fill={fill}
      />
    </span>
    {children}
  </span>
);

export default ButtonIcon;
