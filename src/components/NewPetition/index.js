import React from 'react';
import settings from 'settings';
import styles from './new-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const NewPetition = ({ petition, openGraph }) => (
  <Container>
    <FormWrapper>
      <Header>
        <div className={styles['form-title-wrapper']}>
          <PageTitle
            title={settings.newPetitionPage.title}
            intro={settings.newPetitionPage.intro}
          />
        </div>
      </Header>
      <div className={styles.form}>
        <PetitionForm
          petition={petition}
          openGraph={openGraph}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default NewPetition;
