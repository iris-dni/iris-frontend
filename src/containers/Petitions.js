import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import {
  fetchPetitions,
  fetchAll,
  updateCurrentCity
} from 'actions/PetitionsActions';
import Petitions from 'components/Petitions';
import getPetitions from 'selectors/petitions';

const PetitionsContainer = withRouter(React.createClass({
  componentWillMount () {
    if (this.props.location.action === 'PUSH') {
      this.props.fetchPetitions(this.props);
    }
  },

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname ||
        this.props.location.search !== nextProps.location.search) {
      this.props.fetchPetitions(nextProps);

      if (!nextProps.params.cityName) {
        this.props.updateCurrentCity(null);
      }
    }
  },

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Petitions {...this.props} />
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
