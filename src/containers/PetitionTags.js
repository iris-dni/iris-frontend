import React from 'react';
import { connect } from 'react-redux';
import PetitionTags from 'components/PetitionTags';
import getPetitionWinning from 'selectors/petitionWinning';
import getPetitionResponse from 'selectors/petitionResponse';

const PetitionTagsContainer = (props) => (
  <PetitionTags {...props} />
);

const mapStateToProps = ({ petition }) => ({
  winner: getPetitionWinning(petition),
  response: getPetitionResponse(petition)
});

PetitionTagsContainer.propTypes = {
  winner: React.PropTypes.bool.isRequired,
  response: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionTagsContainer);
