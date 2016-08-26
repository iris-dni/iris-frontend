import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'components/Autocomplete';
import { typeaheadSearch } from 'actions/AutocompleteActions';

const AutocompleteContainer = (props) => (
  <Autocomplete {...props} />
);

AutocompleteContainer.propTypes = {
  options: React.PropTypes.array
};

export const mapStateToProps = ({ autocomplete }) => ({
  options: autocomplete.results
});

export const mapDispatchToProps = (dispatch) => {
  return { typeaheadSearch: (query) => dispatch(typeaheadSearch(query)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
