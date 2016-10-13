import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchGroupedPetitions } from 'actions/PetitionsActions';
import Home from 'components/Home';
import getPetitionsGroups from 'selectors/petitionsGroups';
import isClientSideRouting from 'helpers/isClientSideRouting';
import hasPetitionGroups from 'helpers/hasPetitionGroups';
import getPetitionsGroupsList from 'helpers/getPetitionsGroupsList';

const PETITIONS_GROUPS = getPetitionsGroupsList();

const HomeContainer = React.createClass({

  componentWillMount () {
    // If there are no petitions, or if the user arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side.
    if (!hasPetitionGroups(this.props) || isClientSideRouting(this.props.location)) {
      this.props.fetchGroupedPetitions(this.props, PETITIONS_GROUPS);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Home />
      </div>
    );
  }
});

HomeContainer.fetchData = (props) => {
  const { store } = props;

  return store.dispatch(fetchGroupedPetitions(props, PETITIONS_GROUPS));
};

HomeContainer.propTypes = {
  groupedPetitions: React.PropTypes.object,
  title: React.PropTypes.string
};

export const mapDispatchToProps = (dispatch) => ({
  fetchGroupedPetitions: (options) => dispatch(fetchGroupedPetitions(options, PETITIONS_GROUPS))
});

export const mapStateToProps = ({ petitions }) => ({
  groupedPetitions: getPetitionsGroups(petitions, PETITIONS_GROUPS),
  title: settings.homePage.title
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
