import React from 'react';
import styles from './heading1.scss';

const Heading1 = ({ children, text }) => (
  <h1 className={styles.root}>
    {children || text}
  </h1>
);

export default Heading1;
