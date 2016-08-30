import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'components/Autocomplete';
import { typeaheadSearch, toggleTypeaheadOpening } from 'actions/AutocompleteActions';

const AutocompleteContainer = (props) => {
  return <Autocomplete {...props} />;
};

AutocompleteContainer.propTypes = {
  options: React.PropTypes.array,
  isOpen: React.PropTypes.bool
};

export const mapStateToProps = ({ autocomplete }) => ({
  options: autocomplete.results,
  isOpen: autocomplete.isOpen
});

export const mapDispatchToProps = (dispatch) => {
  return {
    typeaheadSearch: (query) => dispatch(typeaheadSearch(query)),
    toggleTypeaheadOpening: (isOpen) => dispatch(toggleTypeaheadOpening(isOpen))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteContainer);
