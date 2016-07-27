import React from 'react';
import styles from './heading2.scss';

const Heading2 = ({ children, text }) => (
  <h2 className={styles.root}>
    {children || text}
  </h2>
);

export default Heading2;
