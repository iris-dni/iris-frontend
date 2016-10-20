import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import MarkdownParagraph from 'components/MarkdownParagraph';

const PetitionBody = ({ description, suggestedSolution }) => (
  <div>
    <Heading2 text={settings.petitionPage.description} />
    <MarkdownParagraph text={description} />
    {suggestedSolution &&
      <div>
        <Heading2 text={settings.petitionPage.suggestedSolution} />
        <MarkdownParagraph text={suggestedSolution} />
      </div>
    }
  </div>
);

export default PetitionBody;
