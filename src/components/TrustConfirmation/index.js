import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import TrustConfirmationForm from 'components/TrustConfirmationForm';

const TrustConfirmation = ({
  isLoggedIn,
  me
}) => (
  <FormLayout
    title={settings.trustConfirmationPage.title}
    intro={settings.trustConfirmationPage.intro}>
    <p>Thanks {me.firstname} - we send an SMS verification code to <b>{me.mobile}</b></p>
    <TrustConfirmationForm />
  </FormLayout>
);

export default TrustConfirmation;
