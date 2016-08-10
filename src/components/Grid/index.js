import React from 'react';
import styles from './grid.scss';

const Grid = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default Grid;
