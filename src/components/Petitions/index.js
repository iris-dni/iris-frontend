import React from 'react';
import PetitionListItem from 'components/PetitionListItem';

const Petitions = ({ total, petitions, currentPage, perPage }) => (
  <ul>
    {petitions.map((petition) => <PetitionListItem {...petition} key={petition.id} />)}
  </ul>
);

export default Petitions;
