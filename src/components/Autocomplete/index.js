import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import Autosuggest from 'react-autosuggest';
import styles from './autocomplete.scss';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

const Autocomplete = ({
  endpoint,
  displayOption,
  typeaheadSearch,
  clearSearchResults,
  options,
  helper,
  name,
  html
}) => (
  <Autosuggest
    theme={{
      containerOpen: styles.open,
      input: getClassname('input', fieldIsInvalid(helper)),
      suggestionsList: styles.list,
      suggestion: styles.result
    }}
    suggestions={options || []}
    renderSuggestion={displayOption}
    getSuggestionValue={displayOption}
    onSuggestionsFetchRequested={(e) => typeaheadSearch(endpoint, e.value)}
    onSuggestionsClearRequested={clearSearchResults}
    inputProps={{
      name: name,
      id: name,
      required: html.required,
      placeholder: html.placeholder,
      autoComplete: html.autocomplete || 'off',
      ...domOnlyProps(helper),
      value: helper.value,
      onBlur: helper.onBlur,
      onChange: (e, { newValue }) => (helper.onChange(newValue))
    }}
  />
);

export default Autocomplete;
