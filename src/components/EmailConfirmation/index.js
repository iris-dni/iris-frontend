import React from 'react';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';
import IconBullet from 'components/IconBullet';

const RespondedToPetition = ({ title, hint, link }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={title}
        centered
      />
    </Header>
    <Notice>
      <Paragraph>
        <IconBullet size={'huge'} id={'Checkmark'} modifier={'success'} />
      </Paragraph>
      <Paragraph>{hint}</Paragraph>
      <ButtonLink
        href={'/petitions'}
        text={link}
      />
    </Notice>
  </Container>
);

export default RespondedToPetition;
