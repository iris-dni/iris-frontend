import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'components/Autocomplete';
import { typeaheadSearch, clearSuggestions } from 'actions/AutocompleteActions';

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
    typeaheadSearch: (endpoint, query) => (
      dispatch(typeaheadSearch(endpoint, query))
    ),
    clearSuggestions: () => (
      dispatch(clearSuggestions())
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
