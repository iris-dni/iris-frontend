import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';

const PetitionResponse = ({ cityResponse }) => {
  if (!cityResponse.text) {
    return null;
  }

  return (
    <div>
      <Heading2
        text={settings.petitionPage.cityResponse}
      />
      <Paragraph
        text={cityResponse.text}
      />
    </div>
  );
};

export default PetitionResponse;
