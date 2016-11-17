import React from 'react';
import settings from 'settings';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';
import { petitionsByCityPath } from 'helpers/petitionUrls';

const RespondedToPetition = ({ petition }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={settings.respondedToPetitionPage.title}
        centered
      />
    </Header>
    <Notice>
      <img src={'/dist/assets/images/responded-graphic.svg'} alt={''} />
      <Paragraph>{settings.respondedToPetitionPage.hint}</Paragraph>
      <ButtonLink
        href={petitionsByCityPath(petition)}
        text={settings.respondedToPetitionPage.link}
      />
    </Notice>
  </Container>
);

export default RespondedToPetition;
