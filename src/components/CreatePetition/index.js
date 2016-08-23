import React from 'react';
import settings from 'settings';
import styles from './create-petition.scss';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionForm from 'components/PetitionForm';

const CreatePetition = ({ petition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.createPetitionPageTitle}
        intro={settings.createPetitionPageIntro}
        centered
      />
    </Header>
    {petition.published
      ? <div className={styles.success}>
        <h2>Your petition has been published</h2>
        <a href={`/petitions/${petition.id}`}>Click here to see a draft of it</a>
      </div>
      : <div className={styles.form}>
        <PetitionForm />
      </div>
    }
  </Container>
);

export default CreatePetition;
