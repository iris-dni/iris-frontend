import React from 'react';
import settings from 'settings';
import styles from './responded-to-petition.scss';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';
import { petitionPath } from 'helpers/petitionUrls';

const RespondedToPetition = ({ petition, petitionResponse, router }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.respondedToPetitionPage.title}
        centered
      />
    </Header>
    <Notice>
      <TextCenter>
        <img src={'/dist/assets/images/RespondedToPetition.svg'} />
        <div className={styles.notice}>
          <Paragraph>
            <ButtonLink
              href={petitionPath(petition, { responseAnchor: true })}
              text={settings.respondedToPetitionPage.link}
            />
          </Paragraph>
        </div>
      </TextCenter>
    </Notice>
  </Container>
);

export default RespondedToPetition;
