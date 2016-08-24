import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from 'components/FlashMessage';
import { hideFlashMessage } from 'actions/FlashActions';

const FlashMessageContainer = React.createClass({
  render () {
    return (
      <FlashMessage {...this.props} />
    );
  }
});

FlashMessageContainer.propTypes = {
  text: React.PropTypes.string,
  modifier: React.PropTypes.string
};

export const mapStateToProps = ({ flashMessage }) => ({
  flashMessage
});

export const mapDispatchToProps = (dispatch) => {
  return { hideFlashMessage: () => dispatch(hideFlashMessage()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessageContainer);
