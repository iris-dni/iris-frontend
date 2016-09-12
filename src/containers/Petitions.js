import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitions } from 'actions/PetitionsActions';
import settings from 'settings';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = React.createClass({
  componentWillMount () {
    // console.log(this.props);

    // this.props.fetchPetitions(this.props);
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
  petitions: getPetitions(petitions.data || [])
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionsContainer);
