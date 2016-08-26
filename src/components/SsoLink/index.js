import React from 'react';
import ButtonLink from 'components/ButtonLink';

const SsoLink = ({ text, url }) => {
  return (
    <ButtonLink
      text={text}
      href={url}
      modifier={'accent'}
    />
  );
};

export default SsoLink;
