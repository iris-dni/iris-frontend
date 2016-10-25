import React from 'react';
import { connect } from 'react-redux';
import AdSlot from 'components/AdSlot';
import getCityDataForRoute from 'helpers/getCityDataForRoute';

const AdSlotContainer = (props) => (
  <AdSlot {...props} />
);

export const mapStateToProps = (state, ownProps) => ({
  currentCity: getCityDataForRoute(state),
  type: ownProps.type
});

AdSlotContainer.propTypes = {
  currentCity: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(AdSlotContainer);
