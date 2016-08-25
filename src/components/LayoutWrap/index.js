import React from 'react';
import styles from './layout-wrap.scss';

const LayoutWrapper = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default LayoutWrapper;
