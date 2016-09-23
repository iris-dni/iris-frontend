import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';
import PetitionResponse from 'components/PetitionResponse';

const PetitionBody = ({ description, suggestedSolution, cityResponse }) => (
  <div>
    <Heading2
      text={settings.petitionPage.description}
    />
    <Paragraph
      text={description}
    />
    {suggestedSolution &&
      <div>
        <Heading2
          text={settings.petitionPage.suggestedSolution}
        />
        <Paragraph
          text={suggestedSolution}
        />
      </div>
    }
    <PetitionResponse cityResponse={cityResponse} />
  </div>
);

export default PetitionBody;
