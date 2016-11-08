import React from 'react';
import { translation } from 'translations';
import FormLayout from 'components/FormLayout';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionDetails from 'components/RespondToPetitionDetails';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
import Paragraph from 'components/Paragraph';

const RespondToPetition = ({ petition, petitionResponse, router }) => (
  <FormLayout
    title={translation('respondToPetitionPage.title')}>
    <RespondToPetitionDetails petition={petition} />
    <Paragraph>{translation('respondToPetitionPage.intro')}</Paragraph>
    <RespondToPetitionHints petition={petition} />
    <RespondToPetitionForm
      initialValues={petitionResponse}
      petition={petition}
      petitionResponse={petitionResponse}
    />
  </FormLayout>
);

export default RespondToPetition;
