import React from 'react';
import styles from './heading2.scss';

const Heading2 = ({ children, text, size }) => (
  <h2 className={styles[size || 'root']}>
    {children || text}
  </h2>
);

export default Heading2;
