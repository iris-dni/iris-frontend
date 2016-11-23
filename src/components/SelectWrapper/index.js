import React from 'react';
import styles from './select-wrapper.scss';

const SelectWrapper = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default SelectWrapper;
