import React from 'react';
import settings from 'settings';
import Link from 'components/Link';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';
import { respondToPetitionUrl } from 'helpers/petitionUrls';

const PetitionNotFoundByResponseToken = ({ petition, petitionResponse, router }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.petitionNotFoundByResponseTokenPage.title}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <Paragraph>{settings.petitionNotFoundByResponseTokenPage.intro}</Paragraph>
        <Paragraph><Link href={respondToPetitionUrl(petitionResponse)} /></Paragraph>
        <Paragraph>{settings.petitionNotFoundByResponseTokenPage.hint}</Paragraph>
      </TextCenter>
    </Notice>
  </Container>
);

export default PetitionNotFoundByResponseToken;
