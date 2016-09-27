import React from 'react';
import settings from 'settings';
import styles from './edit-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const EditPetition = ({ petition, openGraph }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.editPetitionPage.title}
          intro={settings.editPetitionPage.intro}
        />
      </Header>
      <div className={styles.form}>
        <PetitionForm
          initialValues={petition}
          petition={petition}
          openGraph={openGraph}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default EditPetition;
