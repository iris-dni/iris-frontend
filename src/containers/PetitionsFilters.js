import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PetitionsFilters from 'components/PetitionsFilters';
import {
} from 'actions/PetitionsFiltersActions';

const PetitionsFiltersContainer = withRouter(React.createClass({
  render () {
    return <PetitionsFilters {...this.props} />;
  }
}));

PetitionsFiltersContainer.propTypes = {
  autocompleteProps: React.PropTypes.object.isRequired
};

export const mapStateToProps = ({ petitionsFilters }) => ({
});

export const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsFiltersContainer);
