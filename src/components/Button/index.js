import React from 'react';
import styles from './button.scss';

const Button = ({ children, text, type, modifier, disabled }) => (
  <button type={type || 'submit'} className={disabled ? styles.disabled : styles[modifier || 'default']} disabled={disabled}>
    {children || text}
  </button>
);

export default Button;
