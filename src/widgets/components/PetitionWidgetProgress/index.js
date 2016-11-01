import React from 'react';
import ProgressBar from 'components/ProgressBar';

const PetitionWidgetProgress = ({ percentage, aria, id }) => (
  <ProgressBar
    animated
    percentage={percentage}
    aria={aria}
    id={id}
    size={'small'}
  />
);

export default PetitionWidgetProgress;
