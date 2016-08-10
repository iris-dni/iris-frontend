import React from 'react';
import Icon from 'components/icon';
import styles from './icon-and-info.scss';

const IconAndInfo = ({ children, icon, info, size }) => (
  <span>
    <span className={styles.icon}>
      <Icon id={icon} size={size} />
    </span>
    {children || info}
  </span>
);

export default IconAndInfo;
