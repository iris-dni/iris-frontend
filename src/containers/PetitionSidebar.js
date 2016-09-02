import React from 'react';
import { connect } from 'react-redux';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';
import getPetionSupportable from 'selectors/petitionSupportable';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => ({
  timeMetric: getPetitionTimeMetrics(petition),
  supportable: getPetionSupportable(petition)
});

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object,
  supportable: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
