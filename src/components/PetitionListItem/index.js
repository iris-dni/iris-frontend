import React from 'react';

const PetitionListItem = ({ id, title, description, suggestedSolution }) => (
  <li>
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
);

export default PetitionListItem;
