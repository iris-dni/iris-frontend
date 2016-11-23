import React from 'react';
import styles from './filter.scss';
import SelectWrapper from 'components/SelectWrapper';

const Filter = ({
  value = '',
  id,
  name,
  placeholder,
  options,
  handleChange = () => {}
}) => (
  <SelectWrapper>
    <select
      id={id || name}
      name={name}
      value={value}
      onChange={handleChange}
      className={styles[value ? 'select' : 'placeholder']}>
      {placeholder &&
        <option value=''>{placeholder}</option>
      }
      {options.map((option, key) => (
        <option
          key={key}
          disabled={option.disabled}
          value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

export default Filter;
