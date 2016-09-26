import React from 'react';
import settings from 'settings';
import styles from 'components/EditPetition/edit-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionHints from 'components/RespondToPetitionHints';

const RespondToPetition = ({ petition }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.respondToPetitionPage.title}
          intro={settings.respondToPetitionPage.intro}
        />
      </Header>
      <RespondToPetitionHints petition={petition} />
      <div className={styles.form}>
        <RespondToPetitionForm
          initialValues={petition}
          petition={petition}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default RespondToPetition;
