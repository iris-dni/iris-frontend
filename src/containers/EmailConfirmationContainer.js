import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import EmailConfirmation from 'components/EmailConfirmation';

const ImprintContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.emailConfirmationPage.title} />
        <EmailConfirmation />
      </div>
    );
  }
});

export default connect(
  null,
  null
)(ImprintContainer);
