import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';

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
    {cityResponse.text &&
      <div>
        <Heading2
          text={settings.petitionPage.cityResponse}
        />
        <Paragraph
          text={cityResponse.text}
        />
      </div>
    }
  </div>
);

export default PetitionBody;
