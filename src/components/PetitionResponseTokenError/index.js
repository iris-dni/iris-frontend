import React from 'react';
import { translation } from 'translations';
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
        title={translation('petitionResponseTokenErrorPage.title')}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <img src={'/dist/assets/images/Error.svg'} alt='Error illustration' />
        <div className={styles.notice}>
          <Paragraph>{translation('petitionResponseTokenErrorPage.intro')}</Paragraph>
          <Paragraph>{translation('petitionResponseTokenErrorPage.hint')}</Paragraph>
          <Paragraph>
            <ButtonLink
              href={petitionsPath()}
              text={translation('petitionResponseTokenErrorPage.homeButton.text')}
            />
          </Paragraph>
        </div>
      </TextCenter>
    </Notice>
  </Container>
);

export default PetitionResponseTokenError;
