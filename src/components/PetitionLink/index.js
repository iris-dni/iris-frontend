import React from 'react';
import Link from 'components/Link';
import getPetitionPath from 'helpers/getPetitionPath';
import getPetitionURL from 'helpers/getPetitionURL';

const PetitionLink = ({ id }) => (
  <Link href={getPetitionPath(id)} text={getPetitionURL(id)} />
);

export default PetitionLink;
