import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchLatestPetitions, clearPetitions } from 'actions/PetitionsActions';
import Home from 'components/Home';
import getPetitions from 'selectors/petitions';
import isClientSideRouting from 'helpers/isClientSideRouting';

const HomeContainer = React.createClass({

  componentWillMount () {
    // If there are no petitions, or if the user arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side.
    if (!this.props.petitions.length || isClientSideRouting(this.props.location)) {
      this.props.clearPetitions();
      this.props.fetchLatestPetitions(this.props);
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

  return store.dispatch(fetchLatestPetitions(props));
};

HomeContainer.propTypes = {
  petitions: React.PropTypes.array
};

export const mapDispatchToProps = (dispatch) => ({
  fetchLatestPetitions: (options) => dispatch(fetchLatestPetitions(options)),
  clearPetitions: () => dispatch(clearPetitions())
});

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  title: settings.homePage.title
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
