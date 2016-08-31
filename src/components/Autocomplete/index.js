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

const handleBlur = (displayedValue, displaySuggestion, updateSuggestionInputValue, helper) => {
  const savedValue = helper.value && displaySuggestion(helper.value.data);

  // If the saved value in the redux-form matches the displayed value in the
  // auto-suggest input, we know that the user hasn‘t changed his choice.
  // If it did, we must reset both values as they aren‘t valid anymore.
  if (savedValue !== displayedValue) {
    updateSuggestionInputValue('');
    helper.onChange('');
  }
};

const handleChange = (newValue, updateSuggestionInputValue, helper) => {
  // We have to manually update the displayed value in the auto-suggest.
  // This has nothing to do with the actual redux-form value.
  updateSuggestionInputValue(newValue);

  // If there is no more value, then we know the user has deleted his choice,
  // and we can update the redux-form store.
  if (!newValue) {
    helper.onChange('');
  }
};

const handleSelection = (e, { suggestion }, helper) => {
  // Disable form submitting when selecting option with ENTER
  e.preventDefault();

  // Update redux-form store manually to reflect the selection
  helper.onChange({
    data: suggestion,
    id: suggestion.id,
    class: 'City'
  });
};

const Autocomplete = ({
  endpoint,
  suggestionFormatter,
  typeaheadSearch,
  clearSuggestions,
  updateSuggestionInputValue,
  suggestions,
  value,
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

    suggestions={suggestions}
    renderSuggestion={suggestionFormatter}
    getSuggestionValue={suggestionFormatter}
    focusFirstSuggestion

    onSuggestionsFetchRequested={(e) => (
      handleFetchRequest(endpoint, e, typeaheadSearch, clearSuggestions)
    )}
    onSuggestionsClearRequested={clearSuggestions}
    onSuggestionSelected={(e, option) => (
      handleSelection(e, option, helper)
    )}

    inputProps={{
      name: name,
      id: name,
      required: html.required,
      placeholder: html.placeholder,
      autoComplete: html.autocomplete || 'off',

      ...domOnlyProps(helper),

      value: value,
      onBlur: () => (
        handleBlur(value, suggestionFormatter, updateSuggestionInputValue, helper)
      ),
      onChange: (e, { newValue }) => (
        handleChange(newValue, updateSuggestionInputValue, helper)
      )
    }}
  />
);

export default Autocomplete;
