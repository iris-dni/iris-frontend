import React from 'react';
import { connect } from 'react-redux';
import { showModalWindow, hideModalWindow } from 'actions/ModalActions';
import EmbedPetitionLink from 'components/EmbedPetitionLink';

const EmbedPetitionLinkContainer = React.createClass({
  componentWillUnmount () {
    this.props.hideModalWindow({});
  },

  render () {
    return (
      <EmbedPetitionLink {...this.props} />
    );
  }
});

export const mapDispatchToProps = (dispatch) => ({
  showModalWindow: (modal, location) => dispatch(showModalWindow(modal, location)),
  hideModalWindow: () => dispatch(hideModalWindow())
});

export default connect(
  null,
  mapDispatchToProps
)(EmbedPetitionLinkContainer);
