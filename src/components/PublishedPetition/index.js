import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import PageTitle from 'components/PageTitle';
import PetitionLink from 'components/PetitionLink';
import TextCenter from 'components/TextCenter';
import Notice from 'components/Notice';

const PublishedPetition = ({ id }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.publishedPetitionPage.title}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <Paragraph>{settings.publishedPetitionPage.intro}</Paragraph>
        <Paragraph>{settings.publishedPetitionPage.preview}</Paragraph>
        <Paragraph>
          <PetitionLink id={id} />
        </Paragraph>
      </TextCenter>
    </Notice>
  </Container>
);

export default PublishedPetition;
