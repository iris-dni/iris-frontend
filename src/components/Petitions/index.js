import React from 'react';
import PetitionListItem from 'components/PetitionListItem';

const Petitions = ({ total, petitions, page, per }) => (
  <ul>
    {petitions.map((petition, index) => {
      return (
        <PetitionListItem {...petition} key={petition.id} />
      );
    })}
  </ul>
);

export default Petitions;
