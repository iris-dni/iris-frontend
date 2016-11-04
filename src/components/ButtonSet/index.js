import React from 'react';
import styles from './button-set.scss';

const ButtonSet = ({ children, equal }) => (
  <div className={equal ? styles.equalise : styles.root}>
    {children.map((child, key) => (
      child && <div className={styles.button} key={key}>{child}</div>
    ))}
  </div>
);

export default ButtonSet;
