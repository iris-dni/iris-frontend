import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash/lang';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import { petitionsPath } from 'helpers/petitionUrls';
import {
  fetchPetitions,
  fetchAll,
  updateCurrentCity
} from 'actions/PetitionsActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = withRouter(React.createClass({
  componentWillMount () {
    // If there are no petitions, or deep compare filter params;
    // if they have changed then we fetch petitions client-side
    if (!this.props.petitions.length ||
      !isEqual(this.props.params, this.props.routeParams)) {
      this.props.fetchPetitions(this.props);
    }

    // Fetch the city to popular autocomplete
    this.props.fetchCity(this.props);
  },

  componentWillReceiveProps (nextProps) {
    // Deep compare filter params, if they have changes
    // then we fetch petitions again client-side
    if (!isEqual(this.props.params, nextProps.params)) {
      this.props.fetchPetitions(nextProps);

      // If no city given in new props
      if (!nextProps.params.cityName) {
        // Force clear autocomplete
        this.props.updateCurrentCity({});
      }
    }
  },

  getAutocompleteProps: ({ router, updateCurrentCity, currentCity }) => ({
    name: 'city-filter',
    endpoint: 'cities',
    suggestionFormatter: citySuggestionFormatter,
    getFormValue: (suggestion) => suggestion,
    suggestionsLimit: 4,
    helper: {
      value: { data: currentCity },
      onChange (newValue) {
        updateCurrentCity(newValue);

        router.push(petitionsPath({
          city: (newValue.id ? newValue : '')
        }));
      },
      onBlur () {}
    },
    html: { placeholder: settings.petitionsPage.filters.city.placeholder }
  }),

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Petitions
          {...this.props}
          autocompleteProps={this.getAutocompleteProps(this.props)}
        />
      </div>
    );
  }
}));

PetitionsContainer.fetchData = ({ store, location, params }) => {
  return store.dispatch(fetchAll(location, params));
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
  title: getPetitionsPageTitle(petitions.currentCity),
  currentCity: petitions.currentCity
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  updateCurrentCity: (newValue) => dispatch(updateCurrentCity(newValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
