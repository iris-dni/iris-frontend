import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustSupportConfirmationContainer = (props) => (
  <div>
    <Helmet title={settings.trustConfirmationPage.title} />
    <TrustConfirmation {...props} action={'support'} />
  </div>
);

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
