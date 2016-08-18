import React from 'react';
import { connect } from 'react-redux';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionMetrics from 'selectors/petitionMetrics';

const PetitionSidebarContainer = ({ timeMetric }) => (
  <PetitionSidebar timeMetric={timeMetric} />
);

const mapStateToProps = ({ petition }) => {
  return getPetitionMetrics(petition);
};

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
