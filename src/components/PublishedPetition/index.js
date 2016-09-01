import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ButtonLink from 'components/ButtonLink';
import Paragraph from 'components/Paragraph';
import TextCenter from 'components/TextCenter';

const PublishedPetition = ({ petition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.publishedPetitionPageTitle}
        centered
      />
    </Header>
    <TextCenter>
      <Paragraph text={settings.publishedPetitionPage.copy1} />
      <Paragraph>
        <ButtonLink
          href={`/petitions/${petition.id}`}
          text={'Preview your Petition'}
          modifier={'accent'}
        />
      </Paragraph>
    </TextCenter>
  </Container>
);

export default PublishedPetition;
