import React from 'react';
import settings from 'settings';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';

const PetitionResponseTokenError = ({ petition, petitionResponse, router }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={settings.petitionResponseTokenErrorPage.title}
        centered
      />
    </Header>
    <Notice>
      <img src={'/dist/assets/images/error-graphic.svg'} alt={''} />
      <Paragraph>{settings.petitionResponseTokenErrorPage.hint}</Paragraph>
      <ButtonLink
        href={'/'}
        text={settings.petitionResponseTokenErrorPage.link}
      />
    </Notice>
  </Container>
);

export default PetitionResponseTokenError;
