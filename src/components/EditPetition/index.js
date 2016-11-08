import React from 'react';
import { translation } from 'translations';
import FormLayout from 'components/FormLayout';
import PetitionForm from 'components/PetitionForm';

const EditPetition = ({ petition }) => (
  <FormLayout
    title={translation('editPetitionPage.title')}
    intro={translation('editPetitionPage.intro')}>
    <PetitionForm
      initialValues={petition}
      petition={petition}
    />
  </FormLayout>
);

export default EditPetition;
