import React from 'react';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';

const SsoLink = ({ text, url }) => {
  return (
    <ButtonLink fill external href={url}>
      <ButtonIcon id={'User'} fill={'Dark'}>
        {text}
      </ButtonIcon>
    </ButtonLink>
  );
};

export default SsoLink;
