import React from 'react';
import settings from 'settings';
import Button from 'components/Button';
import ButtonIcon from 'components/ButtonIcon';

const EmbedPetitionLink = ({ modal, showModalWindow }) => (
  <Button type={'button'} block
    onClick={() => showModalWindow(modal)}
    size={'compact'}
    brand={'email'}>
    <ButtonIcon id={'Embed'}>
      {settings.shareButtons.embed.label}
    </ButtonIcon>
  </Button>
);

export default EmbedPetitionLink;
