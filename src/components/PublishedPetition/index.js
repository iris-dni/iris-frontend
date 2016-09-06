import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import PageTitle from 'components/PageTitle';
import PetitionLink from 'components/PetitionLink';
import TextCenter from 'components/TextCenter';

const PublishedPetition = ({ petition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.publishedPetitionPage.title}
        intro={settings.publishedPetitionPage.intro}
        centered>
        <p>{settings.publishedPetitionPage.preview}</p>
      </PageTitle>
    </Header>
    <TextCenter>
      <Paragraph>
        <PetitionLink id={petition.id} />
      </Paragraph>
    </TextCenter>
  </Container>
);

export default PublishedPetition;
