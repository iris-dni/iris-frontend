import React from 'react';
import ProgressBar from 'components/ProgressBar';

const PetitionProgress = ({ votingActive, percentage, aria, id }) => (
  <div>
    <ProgressBar
      animated
      percentage={percentage}
      aria={aria}
      id={id}
    />
  </div>
);

export default PetitionProgress;
