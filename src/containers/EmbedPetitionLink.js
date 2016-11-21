import React from 'react';
import { assign } from 'lodash/object';
import settings from 'settings';
import { connect } from 'react-redux';
import { showModalWindow, hideModalWindow } from 'actions/ModalActions';
import EmbedPetitionLink from 'components/EmbedPetitionLink';
import petitionEmbedCode from 'selectors/petitionEmbedCode';

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

export const mapStateToProps = ({ petition }) => ({
  modal: assign({}, settings.shareButtons.embed.modal, {
    embedCode: petitionEmbedCode(petition)
  })
});

export const mapDispatchToProps = (dispatch) => ({
  showModalWindow: (modal, location) => dispatch(showModalWindow(modal, location)),
  hideModalWindow: () => dispatch(hideModalWindow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedPetitionLinkContainer);
