import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import TrustForm from 'components/TrustForm';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const Trust = ({
  isLoggedIn,
  petition,
  location
}) => (
  <FormLayout
    title={settings.trustPage.title}
    intro={settings.trustPage.intro}>
    <p>You are supporting {petition.title}</p>
    {!isLoggedIn &&
      <SsoProviders providers={generateSsoProviders(
        settings.ssoProviders,
        getReturnUrlFromLocation(location)
      )} />
    }
    <TrustForm />
  </FormLayout>
);

export default Trust;
