import React from 'react';
import { connect } from 'react-redux';
import PetitionStats from 'components/PetitionStats';
import getPetitionMetrics from 'selectors/petitionMetrics';

const PetitionStatsContainer = (props) => (
  <PetitionStats {...props} />
);

const mapStateToProps = ({ petition }) => {
  const {timeMetric, supportersMetric} = getPetitionMetrics(petition);

  return {
    total: supportersMetric.figure,
    required: supportersMetric.total,
    daysLeft: timeMetric.figure
  };
};

PetitionStatsContainer.propTypes = {
  total: React.PropTypes.number,
  required: React.PropTypes.number,
  daysLeft: React.PropTypes.number
};

export default connect(
  mapStateToProps
)(PetitionStatsContainer);
