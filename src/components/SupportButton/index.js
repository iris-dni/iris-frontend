import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/PetitionActions';
import Button from 'components/Button';
import settings from 'settings';

const SupportButton = ({ petition, supportPetition }) => (
  <Button
    type='button'
    onClick={() => supportPetition(petition)}
    text={settings.petition.supportButton} />
);

export const mapStateToProps = ({ petition }) => ({ petition });

export const mapDispatchToProps = (dispatch) => ({
  supportPetition: (petition) => dispatch(supportPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportButton);
