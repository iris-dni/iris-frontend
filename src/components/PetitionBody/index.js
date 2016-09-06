import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';

const PetitionBody = ({ description, suggestedSolution }) => (
  <div>
    <Heading2
      text={settings.petitionPage.description}
    />
    <Paragraph
      text={description}
    />
    {suggestedSolution &&
      <Heading2
        text={settings.petitionPage.suggestedSolution}
      />
    }
    {suggestedSolution &&
      <Paragraph
        text={suggestedSolution}
      />
    }
  </div>
);

export default PetitionBody;
