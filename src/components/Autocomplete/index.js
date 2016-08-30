import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import {Typeahead} from 'react-typeahead';
import styles from './autocomplete.scss';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

const Autocomplete = ({
  isOpen,
  endpoint,
  typeaheadSearch,
  toggleTypeaheadOpening,
  displayOption,
  filterOption,
  options,

  inputClass,
  helper,
  name,
  html
}) => (
  <Typeahead
    onKeyUp={(e) => typeaheadSearch(endpoint, e.target.value)}
    onBlur={helper.onBlur}
    onOptionSelected={() => toggleTypeaheadOpening(false)}
    options={isOpen ? options : []}
    maxVisible={5}
    filterOption={filterOption}
    displayOption={displayOption}

    className={isOpen ? styles.open : ''}
    inputProps={{
      name: name,
      id: name,
      required: html.required,
      autoComplete: html.autocomplete || 'off',
      ...domOnlyProps(helper)
    }}
    placeholder={html.placeholder}
    defaultClassNames={false}
    customClasses={{
      input: getClassname('input', fieldIsInvalid(helper)),
      results: styles.list,
      listItem: styles.result
    }}
  />
);

export default Autocomplete;
