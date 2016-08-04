import React from 'react';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';

const PetitionBody = ({ description, suggestedSolution }) => (
  <div>
    <Heading2
      text={'Begründung'}
    />
    <Paragraph
      text={description}
    />
    <Heading2
      text={'Lösung'}
    />
    <Paragraph
      text={suggestedSolution}
    />
  </div>
);

export default PetitionBody;
