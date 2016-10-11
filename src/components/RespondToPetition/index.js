import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionDetails from 'components/RespondToPetitionDetails';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
import Paragraph from 'components/Paragraph';

const RespondToPetition = ({ petition, petitionResponse, router }) => (
  <FormLayout
    title={settings.respondToPetitionPage.title}>
    <RespondToPetitionDetails petition={petition} />
    <Paragraph>{settings.respondToPetitionPage.intro}</Paragraph>
    <RespondToPetitionHints petition={petition} />
    <RespondToPetitionForm
      initialValues={petitionResponse}
      petition={petition}
      petitionResponse={petitionResponse}
    />
  </FormLayout>
);

export default RespondToPetition;
