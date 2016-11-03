import React from 'react';
import Icon from 'components/Icon';
import styles from './icon-and-info.scss';

const IconAndInfo = ({ children, icon, info, size }) => (
  <span className={styles.root}>
    <span className={styles.icon}>
      <Icon id={icon} size={size} inline />
    </span>
    {children || info}
  </span>
);

export default IconAndInfo;
