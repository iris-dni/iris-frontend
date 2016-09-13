import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import Autocomplete from 'components/Autocomplete';
import {
  typeaheadSearch,
  clearSuggestions,
  updateSuggestionInputValue
} from 'actions/AutocompleteActions';

const QUERY_THROTTLE_TIME = 700;

const AutocompleteContainer = (props) => {
  return <Autocomplete {...props} />;
};

AutocompleteContainer.propTypes = {
  endpoint: React.PropTypes.string.isRequired,
  suggestionFormatter: React.PropTypes.func.isRequired,
  typeaheadSearch: React.PropTypes.func.isRequired,
  clearSuggestions: React.PropTypes.func.isRequired,
  updateSuggestionInputValue: React.PropTypes.func.isRequired,
  getFormValue: React.PropTypes.func.isRequired,
  suggestionsLimit: React.PropTypes.number,
  suggestions: React.PropTypes.array,
  initialValue: React.PropTypes.string,
  value: React.PropTypes.string,
  helper: React.PropTypes.object.isRequired,
  name: React.PropTypes.string,
  html: React.PropTypes.object
};

export const mapStateToProps = ({ autocomplete }, {helper, suggestionFormatter}) => {
  let value = '';

  if (!autocomplete.value && helper.value) {
    value = suggestionFormatter(helper.value.data);
  } else {
    value = autocomplete.value;
  }

  return {
    suggestions: autocomplete.suggestions,
    value
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    typeaheadSearch: throttle((endpoint, query, limit) => (
      dispatch(typeaheadSearch(endpoint, query, limit))
    ), QUERY_THROTTLE_TIME),
    clearSuggestions: () => (
      dispatch(clearSuggestions())
    ),
    updateSuggestionInputValue: (newValue) => (
      dispatch(updateSuggestionInputValue(newValue))
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
