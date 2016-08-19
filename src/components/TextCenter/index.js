import React from 'react';
import styles from './text-center.scss';

const TextCenter = ({ children, text }) => (
  <div className={styles.root}>
    {children || text}
  </div>
);

export default TextCenter;
