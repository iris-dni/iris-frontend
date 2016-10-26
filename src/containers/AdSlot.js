import React from 'react';
import { connect } from 'react-redux';
import AdSlot from 'components/AdSlot';
import getCityDataForRoute from 'helpers/getCityDataForRoute';

const AdSlotContainer = (props) => (
  <AdSlot {...props} />
);

export const mapStateToProps = (state, ownProps) => ({
  tags: getCityDataForRoute(state),
  type: ownProps.type
});

AdSlotContainer.propTypes = {
  tags: React.PropTypes.array,
  type: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(AdSlotContainer);
