import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';

const CreatePetition = () => (
  <Container>
    <Header>
      <PageTitle
        title={settings.createPetitionPageTitle}
        centered
      />
    </Header>
  </Container>
);

export default CreatePetition;
