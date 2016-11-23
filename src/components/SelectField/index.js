import React from 'react';
import styles from './select-field.scss';
import SelectWrapper from 'components/SelectWrapper';
import domOnlyProps from 'form/domOnlyProps';

const SelectField = ({ value, name, options, html, helper }) => (
  <SelectWrapper>
    <select {...domOnlyProps(helper)}
      id={name}
      name={name}
      value={helper.value || ''}
      className={styles[helper.value ? 'select' : 'placeholder']}>
      {html.placeholder &&
        <option value=''>{html.placeholder}</option>
      }
      {options.map((option, key) => (
        <option
          key={key}
          value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

export default SelectField;
