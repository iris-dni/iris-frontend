import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';
import getPetitionSupportable from 'selectors/petitionSupportable';
import getPetitionProcessing from 'selectors/petitionProcessing';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => ({
  timeMetric: getPetitionTimeMetrics(petition),
  supportable: getPetitionSupportable(petition),
  processing: getPetitionProcessing(petition),
  startDate: getPetitionStartDate(petition),
  runningTime: settings.runningTime
});

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object,
  supportable: React.PropTypes.bool,
  startDate: React.PropTypes.string,
  runningTime: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
