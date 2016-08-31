import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'throttle-debounce';
import Autocomplete from 'components/Autocomplete';
import { typeaheadSearch, clearSuggestions } from 'actions/AutocompleteActions';

const QUERY_THROTTLE_TIME = 700;

const AutocompleteContainer = (props) => {
  return <Autocomplete {...props} />;
};

AutocompleteContainer.propTypes = {
  suggestions: React.PropTypes.array
};

export const mapStateToProps = ({ autocomplete }) => ({
  suggestions: autocomplete.suggestions
});

export const mapDispatchToProps = (dispatch) => {
  return {
    typeaheadSearch: throttle(QUERY_THROTTLE_TIME, (endpoint, query) => (
      dispatch(typeaheadSearch(endpoint, query))
    )),
    clearSuggestions: () => (
      dispatch(clearSuggestions())
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
