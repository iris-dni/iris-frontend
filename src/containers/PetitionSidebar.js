import React from 'react';
import { connect } from 'react-redux';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetric from 'selectors/petitionTimeMetric';

const PetitionSidebarContainer = ({ timeMetric }) => (
  <PetitionSidebar timeMetric={timeMetric} />
);

const mapStateToProps = ({ petition }) => {
  return {
    timeMetric: getPetitionTimeMetric(petition)
  };
};

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
