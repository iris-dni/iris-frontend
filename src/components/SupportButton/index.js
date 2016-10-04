import React from 'react';
import ModalTrigger from 'containers/ModalTrigger';
import settings from 'settings';

const modal = {
  ...settings.petitionPage.supportButton.modal,
  type: 'auth'
};

const SupportButton = ({ petition, supportPetition }) => (
  <ModalTrigger
    authenticating
    modal={modal}
    onClick={() => supportPetition(petition)}
    href={`/petitions/${petition.id}?intent=support`}
    text={settings.petitionPage.supportButton.text}
    block
    modifier={'accent'}
  />
);

export default SupportButton;
