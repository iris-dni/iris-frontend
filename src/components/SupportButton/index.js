import React from 'react';
import Button from 'components/Button';
import settings from 'settings';

const SupportButton = ({ petition, supportable, supportPetition }) => (
  <Button
    type='button'
    onClick={() => supportPetition(petition)}
    size={'smaller'}
    modifier={'accent'}
    disabled={!supportable}
    text={settings.petition.supportButton} />
);

export default SupportButton;
