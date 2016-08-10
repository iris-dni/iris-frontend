import React from 'react';
import PetitionListItem from 'components/PetitionListItem';

const Petitions = ({ total, petitions, currentPage, perPage }) => (
  <div>
    <h1>Petitionen</h1>
    <ul>
      {petitions.map((petition) => <PetitionListItem {...petition} key={petition.id} />)}
    </ul>
  </div>
);

export default Petitions;
