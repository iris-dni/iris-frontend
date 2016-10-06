import React from 'react';
import { connect } from 'react-redux';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';
import getPetitionSupportable from 'selectors/petitionSupportable';
import getPetitionProcessing from 'selectors/petitionProcessing';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => ({
  processing: getPetitionProcessing(petition),
  timeMetric: getPetitionTimeMetrics(petition),
  isSupportable: getPetitionSupportable(petition)
});

PetitionSidebarContainer.propTypes = {
  processing: React.PropTypes.bool,
  timeMetric: React.PropTypes.object,
  isSupportable: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
