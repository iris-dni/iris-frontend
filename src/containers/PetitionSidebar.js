import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';
import getPetitionSupportable from 'selectors/petitionSupportable';
import getPetitionUserSupport from 'selectors/petitionUserSupport';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => ({
  timeMetric: getPetitionTimeMetrics(petition),
  isSupportable: getPetitionSupportable(petition),
  userHasSupported: getPetitionUserSupport(petition),
  startDate: getPetitionStartDate(petition),
  runningTime: settings.runningTime
});

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object,
  isSupportable: React.PropTypes.bool,
  userHasSupported: React.PropTypes.bool,
  startDate: React.PropTypes.string,
  runningTime: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
