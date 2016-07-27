import React from 'react';
import styles from './container.scss';

const Button = ({ children, text, type }) => (
  <button type={type || 'button'} className={styles.root}>
    {children || text}
  </button>
);

export default Button;
