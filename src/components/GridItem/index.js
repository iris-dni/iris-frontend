import React from 'react';
import styles from './grid-item.scss';

const GridItem = ({ cols, children }) => (
  <div className={styles[cols === 2 ? 'two-up' : 'three-up']}>
    {children}
  </div>
);

export default GridItem;
