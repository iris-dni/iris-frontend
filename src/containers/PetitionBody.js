import React from 'react';
import { connect } from 'react-redux';
import PetitionBody from 'components/PetitionBody';
import getPetitionImage from 'selectors/petitionImage';

const PetitionBodyContainer = (props) => (
  <PetitionBody {...props} />
);

const mapStateToProps = ({ petition }) => ({
  image: getPetitionImage(petition),
  description: petition.description,
  suggestedSolution: petition.suggested_solution
});

PetitionBodyContainer.propTypes = {
  image: React.PropTypes.object,
  description: React.PropTypes.string.isRequired,
  suggestedSolution: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionBodyContainer);
