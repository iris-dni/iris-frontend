import React from 'react';
import { connect } from 'react-redux';
import PetitionSupportButton from 'components/PetitionSupportButton';
import getPetitionSupportable from 'selectors/petitionSupportable';
import getPetitionUserSupport from 'selectors/petitionUserSupport';

const PetitionSupportButtonContainer = (props) => (
  <PetitionSupportButton {...props} />
);

const mapStateToProps = ({ petition }) => ({
  isSupportable: getPetitionSupportable(petition),
  userHasSupported: getPetitionUserSupport(petition)
});

PetitionSupportButtonContainer.propTypes = {
  isSupportable: React.PropTypes.bool,
  userHasSupported: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionSupportButtonContainer);
