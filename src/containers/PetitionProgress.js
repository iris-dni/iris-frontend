import React from 'react';
import { connect } from 'react-redux';
import PetitionProgress from 'components/PetitionProgress';
import getPetitionProgress from 'selectors/petitionProgress';

const PetitionProgressContainer = (props) => (
  <PetitionProgress {...props} />
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
