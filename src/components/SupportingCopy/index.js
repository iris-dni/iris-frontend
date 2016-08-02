import React from 'react';
import styles from './supporting-copy.scss';

const SupportingCopy = ({ children, text }) => (
  <p className={styles.root}>
    {children || text}
  </p>
);

export default SupportingCopy;
