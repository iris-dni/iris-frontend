import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitions } from 'actions/PetitionActions';
import { showModalWindow } from 'actions/ModalActions';
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

PetitionsContainer.fetchData = ({ store, location, params }) => {
  return store.dispatch(fetchPetitions({ location, params }));
};

PetitionsContainer.propTypes = {
  petitions: React.PropTypes.array,
  total: React.PropTypes.number,
  currentPage: React.PropTypes.number,
  perPage: React.PropTypes.number,
  fetchPetitions: React.PropTypes.func
};

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  total: petitions.total,
  currentPage: petitions.currentPage,
  perPage: petitions.perPage
});

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPetitions: (options) => dispatch(fetchPetitions(options)),
    showModalWindow: () => dispatch(showModalWindow())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
