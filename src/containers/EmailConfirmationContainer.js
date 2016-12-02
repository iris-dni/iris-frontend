import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import EmailConfirmation from 'components/EmailConfirmation';

const EmailConfirmationContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.emailConfirmationPage.title} />
        <EmailConfirmation />
      </div>
    );
  }
});

export default EmailConfirmationContainer;
