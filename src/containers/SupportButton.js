import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/PetitionActions';
import getPetionSupportable from 'selectors/petitionSupportable';
import SupportButton from 'components/SupportButton';

const mapStateToProps = ({ petition }) => ({
  petition,
  supportable: getPetionSupportable(petition)
});

const mapDispatchToProps = (dispatch) => ({
  supportPetition: (petition) => dispatch(supportPetition(petition))
});

SupportButton.propTypes = {
  petition: React.PropTypes.object,
  supportable: React.PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportButton);
