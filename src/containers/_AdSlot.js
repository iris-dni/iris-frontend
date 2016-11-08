import React from 'react';
import { connect } from 'react-redux';
import AdSlot from 'components/AdSlot';
import getTagsForContext from 'helpers/getTagsForContext';

const AdSlotContainer = (props) => (
  <AdSlot {...props} />
);

export const mapStateToProps = (state, props) => ({
  tags: getTagsForContext(state, props.context),
  type: props.type
});

AdSlotContainer.propTypes = {
  tags: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(AdSlotContainer);
