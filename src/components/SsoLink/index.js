import React from 'react';
import ButtonLink from 'components/ButtonLink';

const SsoLink = ({ text, url }) => {
  return (
    <ButtonLink
      external
      text={text}
      href={url}
      modifier={'accent'}
    />
  );
};

export default SsoLink;
