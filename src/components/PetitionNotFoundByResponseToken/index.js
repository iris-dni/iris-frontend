import React from 'react';
import settings from 'settings';
import styles from './petition-not-found-by-response-token.scss';
import Link from 'components/Link';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';
import { petitionsPath, respondToPetitionUrl } from 'helpers/petitionUrls';

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
        <div className={styles.notice}>
          <Paragraph>{settings.petitionNotFoundByResponseTokenPage.intro}</Paragraph>
          <Paragraph><Link href={respondToPetitionUrl(petitionResponse)} /></Paragraph>
          <Paragraph>{settings.petitionNotFoundByResponseTokenPage.hint}</Paragraph>
          <Paragraph>
            <ButtonLink
              href={petitionsPath()}
              text={settings.petitionNotFoundByResponseTokenPage.homeButton.text}
            />
          </Paragraph>
        </div>
      </TextCenter>
    </Notice>
  </Container>
);

export default PetitionNotFoundByResponseToken;
