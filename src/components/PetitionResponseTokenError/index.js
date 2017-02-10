import React from 'react';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';
import IconBullet from 'components/IconBullet';
import { translationForResponse } from 'selectors/petitionResponse';

const PetitionResponseTokenError = ({ petition, petitionResponse, router }) => {
  const { title, hint, link } = translationForResponse(petitionResponse);
  const icon = petitionResponse.hasCityAnswerAlreadySubmitted ? (
    <Paragraph>
      <IconBullet size={'huge'} id={'Checkmark'} modifier={'success'} />
    </Paragraph>
  ) : (
    <img src={'/dist/assets/images/error-graphic.svg'} alt={''} />
  );
  return (
    <Container>
      <Header padding>
        <PageTitle
          title={title}
          centered
        />
      </Header>
      <Notice>
        {icon}
        <Paragraph text={hint} />
        <ButtonLink
          href={'/'}
          text={link}
        />
      </Notice>
    </Container>
  );
};

export default PetitionResponseTokenError;
