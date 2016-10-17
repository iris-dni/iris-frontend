import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import TrustSupportConfirmationForm from 'components/TrustSupportConfirmationForm';
import TrustPublishConfirmationForm from 'components/TrustPublishConfirmationForm';

const TrustConfirmation = ({
  isLoggedIn,
  me,
  action
}) => (
  <FormLayout
    title={settings.trustConfirmationPage.title}
    intro={settings.trustConfirmationPage.intro}>
    <p>Thanks {me.firstname}, we sent an SMS verification code to <b>{me.mobile}</b></p>
    {action === 'support' &&
      <TrustSupportConfirmationForm />
    }
    {action === 'publish' &&
      <TrustPublishConfirmationForm />
    }
  </FormLayout>
);

export default TrustConfirmation;
