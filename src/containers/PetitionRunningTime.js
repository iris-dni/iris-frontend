import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import PetitionRunningTime from 'components/PetitionRunningTime';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

const PetitionRunningTimeContainer = (props) => (
  <PetitionRunningTime {...props} />
);

const mapStateToProps = ({ petition }) => ({
  startDate: getPetitionStartDate(petition),
  runningTime: settings.runningTime
});

PetitionRunningTimeContainer.propTypes = {
  startDate: React.PropTypes.string,
  runningTime: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionRunningTimeContainer);
