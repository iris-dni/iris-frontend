import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const CreatePetition = () => (
  <Container>
    <Header>
      <PageTitle
        title={settings.createPetitionPageTitle}
        centered
      />
    </Header>
    <PetitionForm />
  </Container>
);

export default CreatePetition;
