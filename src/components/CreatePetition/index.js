import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const CreatePetition = ({ createdPetition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.createPetitionPageTitle}
        centered
      />
    </Header>
    {createdPetition
      ? <div>
        <h2>Your petition has been saved</h2>
        <a href={`/petitions/${createdPetition}`}>Click here to see a draft of it</a>
      </div>
      : <PetitionForm />
    }
  </Container>
);

export default CreatePetition;
