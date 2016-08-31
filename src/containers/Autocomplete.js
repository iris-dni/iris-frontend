import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'components/Autocomplete';
import { typeaheadSearch, clearSearchResults } from 'actions/AutocompleteActions';

const AutocompleteContainer = (props) => {
  return <Autocomplete {...props} />;
};

AutocompleteContainer.propTypes = {
  options: React.PropTypes.array
};

export const mapStateToProps = ({ autocomplete }) => ({
  options: autocomplete.results
});

export const mapDispatchToProps = (dispatch) => {
  return {
    typeaheadSearch: (endpoint, query) => (
      dispatch(typeaheadSearch(endpoint, query))
    ),
    clearSearchResults: () => (
      dispatch(clearSearchResults())
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
