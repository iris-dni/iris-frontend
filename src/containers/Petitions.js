import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash/lang';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import isClientSideRouting from 'helpers/isClientSideRouting';
import {
  fetchPetitions,
  clearPetitions,
  fetchPetitionsAndCity
} from 'actions/PetitionsActions';
import { updateCurrentCity } from 'actions/CityActions';
import { clearSuggestionInputValue } from 'actions/AutocompleteActions';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = React.createClass({
  componentWillMount () {
    // If there are no petitions, or if the user arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side.
    if (!this.props.petitions.length || isClientSideRouting(this.props.location)) {
      this.props.clearPetitions();
      this.props.fetchPetitionsAndCity(this.props);
    }
  },

  componentWillReceiveProps (nextProps) {
    // Deep compare filter params, if they have changes
    // then we fetch petitions again client-side. We don’t need to fetch the
    // info on the new/current city, as it has already been updated when we
    // selected the suggestion.
    if (!isEqual(this.props.params, nextProps.params) ||
        !isEqual(this.props.location.query, nextProps.location.query)) {
      if (isClientSideRouting(this.props.location)) {
        this.props.clearSuggestionInputValue();
        this.props.updateCurrentCity({});
        this.props.fetchPetitions(nextProps);
      }
    }
  },

  componentWillUnmount () {
    this.props.clearSuggestionInputValue();
    this.props.updateCurrentCity({});
  },

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Petitions {...this.props} />
      </div>
    );
  }
});

PetitionsContainer.fetchData = ({ store, location, params }) => {
  return store.dispatch(fetchPetitionsAndCity({ location, params }));
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  total: React.PropTypes.number,
  isLoading: React.PropTypes.bool,
  title: React.PropTypes.string,
  currentCity: React.PropTypes.object,
  fetchPetitions: React.PropTypes.func
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  isLoading: petitions.isLoading,
  title: getPetitionsPageTitle(petitions),
  currentCity: petitions.currentCity
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  clearPetitions: () => dispatch(clearPetitions()),
  fetchPetitionsAndCity: (options) => dispatch(fetchPetitionsAndCity(options)),
  clearSuggestionInputValue: () => dispatch(clearSuggestionInputValue()),
  updateCurrentCity: (city) => dispatch(updateCurrentCity(city))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer));
