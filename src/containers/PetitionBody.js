import React from 'react';
import { connect } from 'react-redux';
import PetitionBody from 'components/PetitionBody';

const PetitionBodyContainer = (props) => (
  <PetitionBody {...props} />
);

const mapStateToProps = ({ petition }) => {
  return {
    description: petition.description,
    suggestedSolution: petition.suggested_solution
  };
};

PetitionBodyContainer.propTypes = {
  description: React.PropTypes.string,
  suggestedSolution: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionBodyContainer);
