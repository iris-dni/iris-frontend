import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'components/ProgressBar';
import getPetitionProgress from 'selectors/petitionProgress';

const PetitionProgressContainer = ({ votingActive, percentage, aria }) => (
  votingActive
    ? <ProgressBar animated percentage={percentage} aria={aria} />
  : null
);

const mapStateToProps = ({ petition }) => {
  return getPetitionProgress(petition);
};

PetitionProgressContainer.propTypes = {
  percentage: React.PropTypes.number,
  aria: React.PropTypes.object,
  votingActive: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionProgressContainer);
