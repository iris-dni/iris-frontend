import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import TrustConfirmationForm from 'components/TrustConfirmationForm';

const TrustConfirmation = ({
  isLoggedIn,
  petition
}) => (
  <FormLayout
    title={settings.trustConfirmationPage.title}
    intro={settings.trustConfirmationPage.intro}>
    <TrustConfirmationForm />
  </FormLayout>
);

export default TrustConfirmation;
