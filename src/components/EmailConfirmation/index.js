import React from 'react';
import settings from 'settings';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';
import IconBullet from 'components/IconBullet';

const RespondedToPetition = ({ petition }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={settings.emailConfirmationPage.title}
        centered
      />
    </Header>
    <Notice>
      <Paragraph>
        <IconBullet size={'huge'} id={'Checkmark'} modifier={'success'} />
      </Paragraph>
      <Paragraph>{settings.emailConfirmationPage.hint}</Paragraph>
      <ButtonLink
        href={'/petitions'}
        text={settings.emailConfirmationPage.link}
      />
    </Notice>
  </Container>
);

export default RespondedToPetition;
