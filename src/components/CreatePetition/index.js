import React from 'react';
import settings from 'settings';
import styles from './create-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const CreatePetition = ({ petition }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.createPetitionPage.title}
          intro={settings.createPetitionPage.intro}
        />
      </Header>
      <div className={styles.form}>
        <PetitionForm />
      </div>
    </FormWrapper>
  </Container>
);

export default CreatePetition;
