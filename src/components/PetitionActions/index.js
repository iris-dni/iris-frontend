import React from 'react';
import settings from 'settings';

import ButtonSet from 'components/ButtonSet';
import ButtonLink from 'components/ButtonLink';
import ModalTrigger from 'containers/ModalTrigger';

const publishModal = {
  ...settings.previewPetitionPage.publishButton.modal,
  type: 'auth'
};

const PetitionActions = ({ petition, actions }) => (
  <ButtonSet>
    <ButtonLink
      onClick={actions.fetchPetition && (() => actions.fetchPetition(petition.id))}
      href={`/petitions/${petition.id}/edit`}
      text={settings.previewPetitionPage.editButton.text}
    />
    <ModalTrigger
      authenticating
      modal={publishModal}
      onClick={() => actions.publishPetition(petition)}
      href={`/petitions/${petition.id}/edit?intent=publish`}
      text={settings.previewPetitionPage.publishButton.text}
    />
  </ButtonSet>
);

export default PetitionActions;
