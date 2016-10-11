import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import PetitionForm from 'components/PetitionForm';

const NewPetition = ({ petition }) => (
  <FormLayout
    title={settings.newPetitionPage.title}
    intro={settings.newPetitionPage.intro}>
    <PetitionForm
      petition={petition}
    />
  </FormLayout>
);

export default NewPetition;
