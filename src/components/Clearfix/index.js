import React from 'react';
import styles from './container.scss';

const Clearfix = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default Clearfix;
