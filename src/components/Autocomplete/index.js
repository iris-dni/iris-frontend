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
  displaySuggestion,
  typeaheadSearch,
  clearSuggestions,
  suggestions,
  helper,
  name,
  html
}) => (
  <Autosuggest
    theme={{
      containerOpen: styles.open,
      input: getClassname('input', fieldIsInvalid(helper)),
      suggestionsList: styles.list,
      suggestion: styles.suggestion,
      suggestionFocused: styles.focused
    }}
    id={name}
    suggestions={suggestions || []}
    renderSuggestion={displaySuggestion}
    getSuggestionValue={displaySuggestion}
    onSuggestionsFetchRequested={(e) => typeaheadSearch(endpoint, e.value)}
    onSuggestionsClearRequested={clearSuggestions}
    focusFirstSuggestion
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
