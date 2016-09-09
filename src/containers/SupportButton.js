import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/SupportActions';
import { showModalWindow } from 'actions/ModalActions';
import SupportButton from 'components/SupportButton';

const mapStateToProps = ({ me, petition }) => ({ me, petition });

const mapDispatchToProps = (dispatch) => ({
  supportPetition: (petition) => dispatch(supportPetition(petition)),
  showAuthModal: (petition) => dispatch(showModalWindow('auth', `/petitions/${petition.id}?intent=support`))
});

SupportButton.propTypes = {
  petition: React.PropTypes.object,
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ])
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportButton);
