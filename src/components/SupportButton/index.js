import React from 'react';
import ModalTrigger from 'containers/ModalTrigger';
import settings from 'settings';

const SupportButton = ({ petition, supportable, supportPetition }) => (
  <ModalTrigger
    authenticating
    modal={'auth'}
    onClick={() => supportPetition(petition)}
    href={`/petitions/${petition.id}?intent=support`}
    text={settings.petition.supportButton}
    size={'smaller'}
    modifier={'accent'}
    disabled={!supportable}
  />
);

export default SupportButton;
