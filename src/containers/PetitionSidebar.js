import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import PetitionSidebar from 'components/PetitionSidebar';
import getPetitionTimeMetrics from 'selectors/petitionTimeMetrics';
import getPetitionSupportable from 'selectors/petitionSupportable';
import getPetitionProcessing from 'selectors/petitionProcessing';
import getPetitionUserSupport from 'selectors/petitionUserSupport';
import getPetitionClosed from 'selectors/petitionClosed';
import getPetitionWinning from 'selectors/petitionWinning';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

const PetitionSidebarContainer = (props) => (
  <PetitionSidebar {...props} />
);

const mapStateToProps = ({ petition }) => ({
  timeMetric: getPetitionTimeMetrics(petition),
  processing: getPetitionProcessing(petition),
  winning: getPetitionWinning(petition),
  closed: getPetitionClosed(petition),
  isSupportable: getPetitionSupportable(petition),
  userHasSupported: getPetitionUserSupport(petition),
  startDate: getPetitionStartDate(petition),
  runningTime: settings.runningTime
});

PetitionSidebarContainer.propTypes = {
  timeMetric: React.PropTypes.object,
  processing: React.PropTypes.bool,
  closed: React.PropTypes.bool,
  isSupportable: React.PropTypes.bool,
  userHasSupported: React.PropTypes.bool,
  winning: React.PropTypes.bool,
  startDate: React.PropTypes.string,
  runningTime: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionSidebarContainer);
