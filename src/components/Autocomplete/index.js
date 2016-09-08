import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import Autosuggest from 'react-autosuggest';
import styles from './autocomplete.scss';

const MIN_QUERY_LENGTH = 2;

const NULL_VALUE = {};

const Autocomplete = React.createClass({
  getClassname (element, error) {
    return [
      styles[element || 'input'],
      styles[error ? 'invalid' : 'valid']
    ].join(' ');
  },

  handleFetchRequest (e) {
    // We handle the query length validation here as we don‘t want to do it in
    // the (throttled) typeahead search. If we did, the first input after
    // MIN_QUERY_LENGTH would be delayed.
    if (!e.value) {
      return this.props.clearSuggestions();
    }

    const query = e.value.trim().toLowerCase();

    if (query.length >= MIN_QUERY_LENGTH) {
      return this.props.typeaheadSearch(
        this.props.endpoint, query, this.props.suggestionsLimit
      );
    }
  },

  handleBlur () {
    const savedValue = this.props.helper.value &&
      this.props.suggestionFormatter(this.props.helper.value.data);

    // If the saved value in the redux-form matches the displayed value in the
    // auto-suggest input, we know that the user hasn‘t changed his choice.
    // If it did, we must reset both values as they aren‘t valid anymore.
    if (savedValue !== this.props.value) {
      this.props.updateSuggestionInputValue('');
      this.props.helper.onChange(this.props.nullValue || NULL_VALUE);
    }

    this.props.helper.onBlur();
  },

  handleChange (newValue) {
    // We have to manually update the displayed value in the auto-suggest.
    // This has nothing to do with the actual redux-form value.
    this.props.updateSuggestionInputValue(newValue);

    // If there is no more value, then we know the user has deleted his choice,
    // and we can update the redux-form store.
    if (!newValue) {
      this.props.helper.onChange(this.props.nullValue || NULL_VALUE);
    }
  },

  handleSelection (e, suggestion) {
    // Disable form submitting when selecting option with ENTER
    e.preventDefault();

    // Update redux-form store manually to reflect the selection
    this.props.helper.onChange(this.props.getFormValue(suggestion.suggestion));
  },

  render () {
    return (
      <Autosuggest
        theme={{
          containerOpen: styles.open,
          input: this.getClassname('input', fieldIsInvalid(this.props.helper)),
          suggestionsList: styles.list,
          suggestion: styles.suggestion,
          suggestionFocused: styles.focused
        }}
        id={this.props.name}

        suggestions={this.props.suggestions}
        renderSuggestion={this.props.suggestionFormatter}
        getSuggestionValue={this.props.suggestionFormatter}
        focusFirstSuggestion

        onSuggestionsFetchRequested={(e) => (this.handleFetchRequest(e))}
        onSuggestionsClearRequested={this.props.clearSuggestions}
        onSuggestionSelected={(e, suggestion) => (
          this.handleSelection(e, suggestion)
        )}

        inputProps={{
          name: this.props.name,
          id: this.props.name,
          required: this.props.html.required,
          placeholder: this.props.html.placeholder,
          autoComplete: this.props.html.autocomplete || 'off',

          ...domOnlyProps(this.props.helper),

          value: this.props.value || this.props.initialValue,
          onBlur: () => (this.handleBlur()),
          onChange: (e, { newValue }) => (this.handleChange(newValue))
        }}
      />
    );
  }
});

export default Autocomplete;
