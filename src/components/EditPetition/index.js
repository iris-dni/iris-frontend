import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import PetitionForm from 'components/PetitionForm';

const EditPetition = ({ petition }) => (
  <FormLayout
    title={settings.editPetitionPage.title}
    intro={settings.editPetitionPage.intro}>
    <PetitionForm
      initialValues={petition}
      petition={petition}
    />
  </FormLayout>
);

export default EditPetition;
