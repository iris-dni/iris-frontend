import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitions } from 'actions/PetitionActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = React.createClass({
  componentDidMount () {
    this.props.fetchPetitions(this.props);
  },

  render () {
    return (
      <div>
        <Helmet title={settings.petitionsText} />
        <Petitions {...this.props} />
      </div>
    );
  }

});

PetitionsContainer.fetchData = ({ store, location, params, history }) => {
  return store.dispatch(fetchPetitions({ location, params, history }));
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  total: React.PropTypes.number,
  currentPage: React.PropTypes.number,
  perPage: React.PropTypes.number,
  fetchPetitions: React.PropTypes.func
};

const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  total: petitions.total,
  currentPage: petitions.currentPage,
  perPage: petitions.perPage
});

// Add dispatchers to the component props,
// for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
  return { fetchPetitions: (options) => dispatch(fetchPetitions(options)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
