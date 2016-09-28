import React from 'react';
import settings from 'settings';
import styles from 'components/EditPetition/edit-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionDetails from 'components/RespondToPetitionDetails';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
import Paragraph from 'components/Paragraph';

const RespondToPetition = ({ petition, petitionResponse, router }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.respondToPetitionPage.pageTitle}
        />
      </Header>

      <RespondToPetitionDetails petition={petition} />

      <Paragraph>{settings.respondToPetitionPage.intro}</Paragraph>

      <RespondToPetitionHints petition={petition} />

      <div className={styles.form}>
        <RespondToPetitionForm
          initialValues={petitionResponse}
          petition={petition}
          petitionResponse={petitionResponse}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default RespondToPetition;
