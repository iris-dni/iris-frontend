import React from 'react';

const Petition = ({ title, description, suggestedSolution }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{suggestedSolution}</p>
  </div>
);

export default Petition;
