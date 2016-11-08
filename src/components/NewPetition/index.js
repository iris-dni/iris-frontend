import React from 'react';
import { translation } from 'translations';
import FormLayout from 'components/FormLayout';
import PetitionForm from 'components/PetitionForm';

const NewPetition = ({ petition }) => (
  <FormLayout
    title={translation('newPetitionPage.title')}
    intro={translation('newPetitionPage.intro')}>
    <PetitionForm petition={petition} />
  </FormLayout>
);

export default NewPetition;
