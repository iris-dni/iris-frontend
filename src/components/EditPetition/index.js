import React from 'react';
import settings from 'settings';
import FormLayout from 'components/FormLayout';
import PetitionForm from 'components/PetitionForm';
import Loading from 'components/Loading';

const EditPetition = ({ petition }) => (
  <FormLayout
    title={settings.editPetitionPage.title}
    intro={settings.editPetitionPage.intro}>
    <Loading isLoading={petition.isLoading} onServer={__SERVER__}>
      <PetitionForm
        initialValues={petition}
        petition={petition}
      />
    </Loading>
  </FormLayout>
);

export default EditPetition;
