import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import { petitionsPath } from 'helpers/petitionUrls';
import {
  fetchPetitions,
  fetchCity,
  updateCityFilterValue
} from 'actions/PetitionsActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = withRouter(React.createClass({
  componentWillMount () {
    if (this.props.location.action === 'PUSH') {
      this.props.fetchPetitions(this.props);
      this.props.fetchCity(this.props);
    }
  },

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchPetitions(nextProps);
      this.props.fetchCity(nextProps);
    }
  },

  getAutocompleteProps: ({ router, updateCityFilterValue, cityFilterValue }) => ({
    name: 'city-filter',
    endpoint: 'cities',
    suggestionFormatter: citySuggestionFormatter,
    getFormValue: (suggestion) => suggestion,
    suggestionsLimit: 4,
    helper: {
      value: { data: cityFilterValue },
      onChange (newValue) {
        updateCityFilterValue(newValue);

        router.push(petitionsPath({
          city: (newValue.id ? newValue : '')
        }));
      },
      onBlur () {}
    },
    html: { placeholder: 'Filter by city' }
  }),

  getTitle () {
    return this.props.city
      ? `${settings.petitionsPage.titleLocalized} ${this.props.city.name}`
      : settings.petitionsPage.title;
  },

  render () {
    const title = this.getTitle();

    return (
      <div>
        <Helmet title={title} />
        <Petitions
          {...this.props}
          title={title}
          autocompleteProps={this.getAutocompleteProps(this.props)}
        />
      </div>
    );
  }
}));

PetitionsContainer.fetchData = ({ store, location, params }) => {
  return store.dispatch(fetchPetitions({ location, params }));
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  title: React.PropTypes.string,
  fetchPetitions: React.PropTypes.func,
  city: React.PropTypes.object,
  cityFilterValue: React.PropTypes.object
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  isLoading: petitions.isLoading,
  cityFilterValue: petitions.cityFilterValue
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  fetchCity: (options) => dispatch(fetchCity(options)),
  updateCityFilterValue: (newValue) => dispatch(updateCityFilterValue(newValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
