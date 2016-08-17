import React from 'react';
import styles from './form-error.scss';

export default ({ children, text }) => (
  <strong className={styles.root}>
    {children || text}
  </strong>
);
