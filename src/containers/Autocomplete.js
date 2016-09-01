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
  suggestions: React.PropTypes.array,
  value: React.PropTypes.string
};

export const mapStateToProps = ({ autocomplete }) => ({
  suggestions: autocomplete.suggestions,
  value: autocomplete.value
});

export const mapDispatchToProps = (dispatch) => {
  return {
    typeaheadSearch: throttle((endpoint, query) => (
      dispatch(typeaheadSearch(endpoint, query))
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
