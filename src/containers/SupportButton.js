import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/PetitionActions';
import { showModalWindow } from 'actions/ModalActions';
import getPetionSupportable from 'selectors/petitionSupportable';
import SupportButton from 'components/SupportButton';

const mapStateToProps = ({ me, petition }) => ({
  me,
  petition,
  supportable: getPetionSupportable(petition)
});

const mapDispatchToProps = (dispatch) => ({
  supportPetition: (petition) => dispatch(supportPetition(petition)),
  showAuthModal: (petition) => dispatch(showModalWindow('auth', `/petitions/${petition.id}?intent=support`))
});

SupportButton.propTypes = {
  petition: React.PropTypes.object,
  supportable: React.PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportButton);
