import React from 'react';
import { connect } from 'react-redux';
import { showModalWindow } from 'actions/ModalActions';
import EmbedPetitionLink from 'components/EmbedPetitionLink';

const EmbedPetitionLinkContainer = (props) => (
  <EmbedPetitionLink {...props} />
);

export const mapDispatchToProps = (dispatch) => ({
  showModalWindow: (modal, location) => dispatch(showModalWindow(modal, location))
});

export default connect(
  null,
  mapDispatchToProps
)(EmbedPetitionLinkContainer);
