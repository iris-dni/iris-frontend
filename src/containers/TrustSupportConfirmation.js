import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { resendVerification } from 'actions/SupportActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustSupportConfirmationContainer = (props) => (
  <div>
    <Helmet title={settings.trustConfirmationPage.title} />
    <TrustConfirmation {...props} action={'support'} />
  </div>
);

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
