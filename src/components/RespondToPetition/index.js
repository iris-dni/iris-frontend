import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionDetails from 'components/RespondToPetitionDetails';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionPath from 'helpers/getPetitionPath';

const RespondToPetition = ({ petition, petitionResponse }) => (
  <FormLayout
    title={settings.respondToPetitionPage.title}
    intro={settings.respondToPetitionPage.intro}>
    <RespondToPetitionDetails
      title={petition.title}
      link={getPetitionPath(petition.id)}
      author={getPetitionOwner(petition)}
      city={getPetitionCity(petition).name}
      supporters={petition.supporters.amount}
    />
    <RespondToPetitionHints />
    <RespondToPetitionForm
      initialValues={petitionResponse}
      petition={petition}
      petitionResponse={petitionResponse}
    />
  </FormLayout>
);

export default RespondToPetition;
