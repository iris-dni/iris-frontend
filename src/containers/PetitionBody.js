import React from 'react';
import { connect } from 'react-redux';
import getCityResponse from 'selectors/petitionResponse';
import PetitionBody from 'components/PetitionBody';

const PetitionBodyContainer = (props) => (
  <PetitionBody {...props} />
);

const mapStateToProps = ({ petition }) => ({
  description: petition.description,
  suggestedSolution: petition.suggested_solution,
  cityResponse: getCityResponse(petition)
  links: petition.links || []
});

PetitionBodyContainer.propTypes = {
  description: React.PropTypes.string,
  suggestedSolution: React.PropTypes.string,
  cityResponse: React.PropTypes.object
  links: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default connect(
  mapStateToProps
)(PetitionBodyContainer);
