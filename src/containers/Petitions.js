import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isEqual } from 'lodash/lang';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import { fetchPetitionsAndCity } from 'actions/PetitionsActions';
import { clearSuggestionInputValue } from 'actions/AutocompleteActions';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = withRouter(React.createClass({
  componentWillMount () {
    this.props.clearSuggestionInputValue();

    // If there are no petitions, or if we arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side
    if (!this.props.petitions.length ||
        this.props.location.action === 'PUSH') {
      this.props.fetchPetitionsAndCity(this.props);
    }
  },

  componentWillReceiveProps (nextProps) {
    // Deep compare filter params, if they have changes
    // then we fetch petitions again client-side
    if (!isEqual(this.props.params, nextProps.params) ||
        !isEqual(this.props.location.query, nextProps.location.query)) {
      this.props.fetchPetitionsAndCity(nextProps);
    }
  },

  render () {
    console.log(this.props.title);
    return (
      <div>
        <Helmet title={this.props.title} />
        <Petitions {...this.props} />
      </div>
    );
  }
}));

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
  fetchPetitionsAndCity: (options) => dispatch(fetchPetitionsAndCity(options)),
  clearSuggestionInputValue: () => dispatch(clearSuggestionInputValue())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
