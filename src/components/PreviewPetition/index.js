import React from 'react';
import settings from 'settings';
import styles from './preview-petition.scss';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Petition from 'components/Petition';
import ButtonSet from 'components/ButtonSet';
import ButtonLink from 'components/ButtonLink';
import ModalTrigger from 'containers/ModalTrigger';

const publishModal = {
  ...settings.previewPetitionPage.publishButton.modal,
  type: 'auth'
};

const PreviewPetition = ({ petition, fetchPetition, publishPetition }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.previewPetitionPage.title}
        centered
      />
    </Header>
    <div className={styles.form}>
      <Petition />
      {!petition.published &&
        <ButtonSet>
          <ButtonLink
            onClick={fetchPetition && (() => fetchPetition(petition.id))}
            href={`/petitions/${petition.id}/edit`}
            text={settings.previewPetitionPage.editButton.text}
          />
          <ModalTrigger
            authenticating
            modal={publishModal}
            onClick={() => publishPetition(petition)}
            href={`/petitions/${petition.id}/edit?intent=publish`}
            text={settings.previewPetitionPage.publishButton.text}
          />
        </ButtonSet>
      }
    </div>
  </Container>
);

export default PreviewPetition;
