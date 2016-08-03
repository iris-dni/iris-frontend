import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitions } from 'actions/PetitionActions';
import Petitions from 'components/Petitions';

const PetitionsContainer = React.createClass({
  componentDidMount () {
    this.props.fetchPetitions();
  },

  render () {
    return (
      <div>
        <Helmet title='Petitions' />
        <Petitions {...this.props} />
      </div>
    );
  }
});

PetitionsContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetitions());
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  total: React.PropTypes.number,
  fetchPetitions: React.PropTypes.func
};

const mapStateToProps = ({ petitions }) => ({
  petitions: petitions.data || [],
  total: petitions.total
});

// Add dispatchers to the component props,
// for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
  return { fetchPetitions: () => dispatch(fetchPetitions()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
