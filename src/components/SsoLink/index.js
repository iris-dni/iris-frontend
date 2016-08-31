import React from 'react';
import ButtonLink from 'components/ButtonLink';

const SsoLink = ({ text, url }) => {
  return (
    <ButtonLink
      fill
      external
      text={text}
      href={url}
    />
  );
};

export default SsoLink;
