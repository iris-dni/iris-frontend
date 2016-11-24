import React from 'react';
import styles from './select-field.scss';
import SelectWrapper from 'components/SelectWrapper';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getFieldClassname from 'form/getFieldClassname';

const SelectField = ({ value, id, name, options, html, helper }) => (
  <SelectWrapper>
    <select {...domOnlyProps(helper)}
      id={id || name}
      name={name}
      value={helper.value || ''}
      className={getFieldClassname(styles, (helper.value ? 'select' : 'placeholder'), fieldIsInvalid(helper))}>
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
