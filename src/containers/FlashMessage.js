import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from 'components/FlashMessage';
import { hideFlashMessage } from 'actions/FlashActions';

const FlashMessageContainer = (props) => (
  props.text
    ? <FlashMessage {...props} />
    : null
);

FlashMessageContainer.propTypes = {
  text: React.PropTypes.string,
  modifier: React.PropTypes.string,
  duration: React.PropTypes.number
};

export const mapStateToProps = ({ flashMessage }) => ({
  flashMessage
});

export const mapDispatchToProps = (dispatch) => ({
  hideFlashMessage: () => dispatch(hideFlashMessage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessageContainer);
