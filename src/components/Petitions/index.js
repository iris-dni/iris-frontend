import React from 'react';
import PetitionListItem from 'components/PetitionListItem';
import settings from 'settings';

const Petitions = ({ total, petitions, currentPage, perPage }) => (
  <div>
    <h1>{settings.petitionsText}</h1>
    <ul>
      {petitions.map((petition) => <PetitionListItem {...petition} key={petition.id} />)}
    </ul>
  </div>
);

export default Petitions;
