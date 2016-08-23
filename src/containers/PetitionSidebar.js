import React from 'react';
import { connect } from 'react-redux';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => {
  return {
    timeMetric: getPetitionTimeMetrics(petition)
  };
};

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
