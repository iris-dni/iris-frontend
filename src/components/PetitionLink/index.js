import React from 'react';
import Link from 'components/Link';
import getPetitionLink from 'helpers/getPetitionLink';

const PetitionLink = ({ id }) => (
  <Link href={getPetitionLink(id)} text={getPetitionLink(id, true)} />
);

export default PetitionLink;
