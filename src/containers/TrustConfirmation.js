import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';
// import getPetitionPath from 'selectors/petitionPath';
import getTrustParams from 'selectors/trustParams';

const TrustConfirmationContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustConfirmationPage.title} />
        <TrustConfirmation {...this.props} />
      </div>
    );
  }
}));

TrustConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ me, petition, trust }) => ({
  petition,
  isLoggedIn: me && !!me.id,
  ...getTrustParams(trust)
});

TrustConfirmationContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  trustId: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(TrustConfirmationContainer);
