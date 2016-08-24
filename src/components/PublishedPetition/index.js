import React from 'react';
import settings from 'settings';
import styles from './published-petition.scss';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ButtonLink from 'components/ButtonLink';
import Paragraph from 'components/Paragraph';

const PublishedPetition = ({ petition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.publishedPetitionPageTitle}
        centered
      />
    </Header>

    <div className={styles.success}>
      <Paragraph>{settings.publishedPetition.copy1}</Paragraph>
      <Paragraph>
        <ButtonLink href={`/petitions/${petition.id}`} >
          {settings.publishedPetition.previewButton}
        </ButtonLink>
      </Paragraph>
      <Paragraph>
        {settings.publishedPetition.copy2}
        {settings.publishedPetition.copy3}
      </Paragraph>
    </div>
  </Container>
);

export default PublishedPetition;
