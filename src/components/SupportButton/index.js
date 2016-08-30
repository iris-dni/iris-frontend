import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/PetitionActions';
import Button from 'components/Button';
import settings from 'settings';
import getPetionSupportable from 'selectors/petitionSupportable';

const SupportButton = ({ petition, supportable, supportPetition }) => (
  <Button
    type='button'
    onClick={() => supportPetition(petition)}
    size={'smaller'}
    modifier={'accent'}
    disabled={!supportable}
    text={settings.petition.supportButton} />
);

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
