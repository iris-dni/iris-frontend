import React from 'react';
import settings from 'settings';
import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';

const EmbedPetitionLink = ({ showModalWindow }) => (
  <Button type={'button'} block
    onClick={() => showModalWindow(settings.shareButtons.embed.modal)}
    size={'compact'}
    brand={'email'}>
    <ButtonIcon id={'Link'}>
      {settings.shareButtons.embed.label}
    </ButtonIcon>
  </Button>
);

export default EmbedPetitionLink;
