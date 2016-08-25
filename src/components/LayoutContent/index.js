import React from 'react';
import styles from './layout-content.scss';

const LayoutContent = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default LayoutContent;
