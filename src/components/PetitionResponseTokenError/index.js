import React from 'react';
import settings from 'settings';
import styles from './petition-not-found-by-response-token.scss';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';
import { petitionsPath } from 'helpers/petitionUrls';

const PetitionResponseTokenError = ({ petition, petitionResponse, router }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={settings.petitionResponseTokenErrorPage.title}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <div className={styles.notice}>
          <Paragraph>{settings.petitionResponseTokenErrorPage.intro}</Paragraph>
          <Paragraph>{settings.petitionResponseTokenErrorPage.hint}</Paragraph>
          <Paragraph>
            <ButtonLink
              href={petitionsPath()}
              text={settings.petitionResponseTokenErrorPage.homeButton.text}
            />
          </Paragraph>
        </div>
      </TextCenter>
    </Notice>
  </Container>
);

export default PetitionResponseTokenError;
