import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitions } from 'actions/PetitionsActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = React.createClass({
  componentWillReceiveProps (nextProps) {
    if (nextProps.params.page !== this.props.params.page) {
      this.props.fetchPetitions(nextProps);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.petitionsPage.title} />
        <Petitions {...this.props} />
      </div>
    );
  }

});

PetitionsContainer.fetchData = ({ store, location, params }) => {
  return store.dispatch(fetchPetitions({ location, params }));
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  fetchPetitions: React.PropTypes.func
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  isLoading: petitions.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
