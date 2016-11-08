import React from 'react';
import { translation } from 'translations';
import styles from './responded-to-petition.scss';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';
import { petitionsByCityPath } from 'helpers/petitionUrls';

const RespondedToPetition = ({ petition, petitionResponse, router }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={translation('respondedToPetitionPage.title')}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <img src={'/dist/assets/images/RespondedToPetition.svg'} />
        <div className={styles.notice}>
          <Paragraph>
            {translation('respondedToPetitionPage.hint')}
          </Paragraph>
          <Paragraph>
            <ButtonLink
              href={petitionsByCityPath(petition)}
              text={translation('respondedToPetitionPage.link')}
            />
          </Paragraph>
        </div>
      </TextCenter>
    </Notice>
  </Container>
);

export default RespondedToPetition;
