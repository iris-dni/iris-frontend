import React from 'react';
import ModalTrigger from 'containers/ModalTrigger';
import settings from 'settings';

const modal = {
  ...settings.petitionForm.publishButton.modal,
  type: 'auth'
};

const PublishButton = ({ petition, publishPetition }) => (
  <ModalTrigger
    authenticating
    modal={modal}
    onClick={() => publishPetition(petition)}
    href={`/petitions/${petition.id}/edit?intent=publish`}
    text={settings.petitionForm.publishButton.text}
  />
);

export default PublishButton;
