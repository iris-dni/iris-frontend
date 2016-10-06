import React from 'react';
import SharePetition from 'containers/SharePetition';
import DisabledShareButtons from 'components/DisabledShareButtons';

const PetitionShareButtons = ({ preview }) => (
  <div>
    {!preview &&
      <SharePetition />
    }

    {preview &&
      <DisabledShareButtons />
    }
  </div>
);

export default PetitionShareButtons;
