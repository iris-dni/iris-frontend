import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
    if (this.props.location.action === 'PUSH') {
      this.props.fetchPetitions(this.props);
    }
  },

  componentWillReceiveProps (nextProps) {
    console.log(this.props.location);
    if (this.props.location.pathname !== nextProps.location.pathname ||
        this.props.location.search !== nextProps.location.search) {
      this.props.fetchPetitions(nextProps);

      if (!nextProps.params.cityName) {
        this.props.updateCurrentCity({});
      }
    }
  },

  handleSortChange (e) {
    this.props.router.push(petitionsPath({
      // city: this.props.currentCity || '',
      sort: e.target.value
    }));
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
          handleSortChange={this.handleSortChange}
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
