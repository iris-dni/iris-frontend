import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import Autosuggest from 'react-autosuggest';
import styles from './autocomplete.scss';

const MIN_QUERY_LENGTH = 2;

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

// We handle the query length validation here as we don‘t want to do it in the
// (throttled) typeahead search. If we did, the first input after
// MIN_QUERY_LENGTH would be delayed.
const handleFetchRequest = (endpoint, e, typeaheadSearch, clearSuggestions) => {
  let query = e.value;

  if (query) {
    query = query.trim().toLowerCase();

    if (query.length > MIN_QUERY_LENGTH) {
      return typeaheadSearch(endpoint, query);
    }
  }

  return clearSuggestions();
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
    onSuggestionsFetchRequested={(e) => (
      handleFetchRequest(endpoint, e, typeaheadSearch, clearSuggestions)
    )}
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
