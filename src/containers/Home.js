import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchGroupedPetitions, clearPetitions } from 'actions/PetitionsActions';
import Home from 'components/Home';
import getPetitionsGroups from 'selectors/petitionsGroups';
import isClientSideRouting from 'helpers/isClientSideRouting';
import getPetitionsGroupsList from 'helpers/getPetitionsGroupsList';

const PETITIONS_GROUPS = getPetitionsGroupsList();

const HomeContainer = React.createClass({

  componentWillMount () {
    // If there are no petitions, or if the user arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side.
    if (!this.props.petitions.latest.length || isClientSideRouting(this.props.location)) {
      this.props.clearPetitions();
      this.props.fetchGroupedPetitions(this.props, PETITIONS_GROUPS);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Home {...this.props} />
      </div>
    );
  }
});

HomeContainer.fetchData = (props) => {
  const { store } = props;

  return store.dispatch(fetchGroupedPetitions(props, PETITIONS_GROUPS));
};

HomeContainer.propTypes = {
  petitions: React.PropTypes.shape({
    latest: React.PropTypes.array,
    trending: React.PropTypes.array
  }),
  title: React.PropTypes.string
};

export const mapDispatchToProps = (dispatch) => ({
  fetchGroupedPetitions: (options) => dispatch(fetchGroupedPetitions(options)),
  clearPetitions: () => dispatch(clearPetitions())
});

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitionsGroups(petitions, PETITIONS_GROUPS),
  title: settings.homePage.title
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
