import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Link from 'components/Link';
import Paragraph from 'components/Paragraph';
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
        <Link
          href={`${process.env.BASE_URL}/petitions/${petition.id}`}
          text={`${process.env.BASE_URL}/petitions/${petition.id}`}
        />
      </Paragraph>
    </TextCenter>
  </Container>
);

export default PublishedPetition;
