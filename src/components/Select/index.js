import React from 'react';
import styles from './select.scss';

const Select = ({ value, name, options, handleChange }) => (
  <div className={styles.wrapper}>
    <select
      className={styles.select}
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
  </div>
);

export default Select;
