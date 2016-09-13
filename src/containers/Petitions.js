import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import { petitionsPath } from 'helpers/petitionUrls';
import {
  fetchPetitions,
  fetchCity,
  updateCurrentCity
} from 'actions/PetitionsActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = withRouter(React.createClass({
  componentWillMount () {
    this.props.fetchPetitions(this.props);
    this.props.fetchCity(this.props);
  },

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchPetitions(nextProps);
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
          title={this.props.title}
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
  citySuggestionFormatter: React.PropTypes.func,
  currentCity: React.PropTypes.object
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  isLoading: petitions.isLoading,
  currentCity: petitions.currentCity,
  title: getPetitionsPageTitle(petitions.currentCity)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  fetchCity: (options) => dispatch(fetchCity(options)),
  updateCurrentCity: (newValue) => dispatch(updateCurrentCity(newValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
