import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { petitionsPath } from 'helpers/petitionUrls';
import { fetchPetitions, updateCityFilterValue } from 'actions/PetitionsActions';
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
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchPetitions(nextProps);
    }
  },

  getAutocompleteProps () {
    const router = this.props.router;
    const updateCityFilterValue = this.props.updateCityFilterValue;
    const cityFilterValue = this.props.cityFilterValue;

    return {
      name: 'city-filter',
      endpoint: 'cities',
      suggestionFormatter: (suggestion) => {
        if (suggestion.name && suggestion.zips) {
          return suggestion.name + ' - ' + suggestion.zips[0];
        }

        return '';
      },
      getFormValue: (suggestion) => {
        return suggestion;
      },
      suggestionsLimit: 4,
      helper: {
        value: {
          data: cityFilterValue
        },
        onChange (newValue) {
          updateCityFilterValue(newValue);

          if (newValue.id) {
            router.push(petitionsPath({city: newValue}));
          } else {
            router.push(petitionsPath());
          }
        },
        onBlur () {}
      },
      html: {
        placeholder: 'Filter by city'
      }
    };
  },

  render () {
    return (
      <div>
        <Helmet title={settings.petitionsPage.title} />
        <Petitions
          {...this.props}
          autocompleteProps={this.getAutocompleteProps()}
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
  fetchPetitions: React.PropTypes.func,
  cityFilterValue: React.PropTypes.object
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  isLoading: petitions.isLoading,
  cityFilterValue: petitions.cityFilterValue
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  updateCityFilterValue: (newValue) => dispatch(updateCityFilterValue(newValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
