import React from 'react';
import styles from './select.scss';

const Select = ({ value, name, options, handleChange }) => (
  <select
    className={styles.root}
    name={name}
    id={name}
    value={value}
    onChange={handleChange}
  >
    {options.map((option, key) => (
      <option
        key={key}
        disabled={option.disabled}
        value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
