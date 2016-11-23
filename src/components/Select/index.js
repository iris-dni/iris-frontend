import React from 'react';
import styles from './select.scss';
import domOnlyProps from 'form/domOnlyProps';

const Select = ({
  value,
  name,
  options,
  helper,
  handleChange = () => {}
}) => (
  <div className={styles.wrapper}>
    <select
      className={styles.select}
      name={name}
      id={name}
      value={value || helper.value || ''}
      onChange={handleChange}
      {...domOnlyProps(helper)}
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
