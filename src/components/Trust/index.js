import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import TrustSupportForm from 'components/TrustSupportForm';
import TrustPublishForm from 'components/TrustPublishForm';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const Trust = ({
  isLoggedIn,
  petition,
  location,
  action
}) => (
  <FormLayout
    title={settings.trustPage.title}
    intro={settings.trustPage.intro}>
    {!isLoggedIn &&
      <SsoProviders providers={generateSsoProviders(
        settings.ssoProviders,
        getReturnUrlFromLocation(location)
      )} />
    }
    {action === 'support' &&
      <div>
        <p>You are supporting {petition.title}</p>
        <TrustSupportForm />
      </div>
    }
    {action === 'publish' &&
      <div>
        <p>Creating: {petition.title}</p>
        <TrustPublishForm />
      </div>
    }
  </FormLayout>
);

Trust.propTypes = {
  action: React.PropTypes.oneOf([
    'support',
    'publish'
  ])
};

export default Trust;
