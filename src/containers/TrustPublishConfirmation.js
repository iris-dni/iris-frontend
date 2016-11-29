import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, resendVerification } from 'actions/PetitionActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustPublishConfirmationContainer = (props) => (
  <div>
    <Helmet title={settings.trustConfirmationPage.title} />
    <TrustConfirmation {...props} action={'publish'} />
  </div>
);

TrustPublishConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition,
  me: petition.owner || {}
});

export const mapDispatchToProps = (dispatch) => ({
  resendVerification: (petition, user) => dispatch(resendVerification({ petition, user }))
});

TrustPublishConfirmationContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustPublishConfirmationContainer);
