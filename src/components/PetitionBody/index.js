import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import MarkdownParagraph from 'components/MarkdownParagraph';
import AdContainer from 'components/AdContainer';

const PetitionBody = ({ description, suggestedSolution, city }) => (
  <div>
    <Heading2 text={settings.petitionPage.description} />
    <MarkdownParagraph text={description} />
    <AdContainer
      currentCity={city}
      type='rectangle'
    />
    {suggestedSolution &&
      <div>
        <Heading2 text={settings.petitionPage.suggestedSolution} />
        <MarkdownParagraph text={suggestedSolution} />
      </div>
    }
  </div>
);

export default PetitionBody;
