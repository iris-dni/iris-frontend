import React from 'react';
import styles from './icon-and-info.scss';

const IconAndInfo = ({ children, icon, info }) => (
  <span className={styles.root}>
    {children || info}
  </span>
);

export default IconAndInfo;
