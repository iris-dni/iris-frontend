import React from 'react';
import settings from 'settings';
import styles from './new-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const NewPetition = ({ petition }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.newPetitionPage.title}
          intro={settings.newPetitionPage.intro}
        />
      </Header>
      <div className={styles.form}>
        <PetitionForm
          petition={petition}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default NewPetition;