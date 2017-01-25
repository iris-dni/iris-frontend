import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { resendVerification } from 'actions/SupportActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustSupportConfirmationContainer = (props) => (
  <div>
    <Helmet title={settings.trustConfirmationPage.title} />
    <TrustConfirmation {...props} action={'support'} />
  </div>
);

TrustSupportConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, me }) => ({
  petition,
  me
});

export const mapDispatchToProps = (dispatch) => ({
  resendVerification: (petition, user) => dispatch(resendVerification({ petition, user }))
});

TrustSupportConfirmationContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustSupportConfirmationContainer);
