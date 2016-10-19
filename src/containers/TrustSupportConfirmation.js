import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
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

export const mapStateToProps = ({ me }) => ({ me });

TrustSupportConfirmationContainer.propTypes = {
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired
};

export default connect(
  mapStateToProps
)(TrustSupportConfirmationContainer);
