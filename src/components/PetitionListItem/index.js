import React from 'react';
import { Link } from 'react-router';

const PetitionListItem = ({ id, title, description, suggestedSolution }) => (
  <li>
    <h2><Link to={`/petitions/${id}`}>{title}</Link></h2>
    <p>{description}</p>
  </li>
);

export default PetitionListItem;
