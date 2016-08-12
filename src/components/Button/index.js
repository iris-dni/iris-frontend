import React from 'react';
import styles from './button.scss';

const Button = ({ children, text, type, disabled }) => (
  <button type={type || 'submit'} className={disabled ? styles.disabled : styles.active} disabled={disabled}>
    {children || text}
  </button>
);

export default Button;
