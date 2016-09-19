import React from 'react';
import Link from 'components/Link';
import getPetitionLink from 'helpers/getPetitionLink';
import getPetitionURL from 'helpers/getPetitionURL';

const PetitionLink = ({ id }) => (
  <Link href={getPetitionLink(id)} text={getPetitionURL(id)} />
);

export default PetitionLink;
