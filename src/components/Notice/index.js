import React from 'react';
import styles from './notice.scss';

const Notice = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default Notice;
