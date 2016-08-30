import React from 'react';
import {Typeahead} from 'react-typeahead';
import styles from './autocomplete.scss';

const displayOption = (option) => {
  return option.name + ' - ' + option.zips[0];
};

const Autocomplete = ({ options, isOpen, endpoint, typeaheadSearch, toggleTypeaheadOpening }) => (
  <Typeahead
    className={isOpen ? styles.open : ''}
    onKeyUp={(e) => typeaheadSearch(endpoint, e.target.value)}
    onOptionSelected={() => toggleTypeaheadOpening(false)}
    options={options}
    maxVisible={5}
    filterOption='name'
    displayOption={displayOption}
    defaultClassNames={false}
    customClasses={{
      input: styles.input,
      results: styles.list,
      listItem: styles.result
    }}
  />
);

export default Autocomplete;
