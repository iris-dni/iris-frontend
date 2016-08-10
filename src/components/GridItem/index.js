import React from 'react';
import styles from './grid-item.scss';

const GridItem = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default GridItem;
