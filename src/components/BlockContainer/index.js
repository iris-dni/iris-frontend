import React from 'react';
import styles from './block-container.scss';

const BlockContainer = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default BlockContainer;
