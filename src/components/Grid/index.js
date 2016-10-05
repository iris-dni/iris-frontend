import React from 'react';
import styles from './grid.scss';

const Grid = ({ children, modifier }) => (
  <div className={modifier ? styles[modifier] : styles.root}>
    {children}
  </div>
);

export default Grid;
