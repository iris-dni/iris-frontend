import React from 'react';
import { connect } from 'react-redux';
import getPetitionResponsePending from 'selectors/petitionResponsePending';
import getPetitionSupporters from 'selectors/petitionSupporters';
import getPetitionResponseTimeMetrics from 'selectors/petitionResponseTimeMetrics';
import PetitionResponseStatus from 'components/PetitionResponseStatus';

const PetitionResponseStatusContainer = (props) => (
  <PetitionResponseStatus {...props} />
);

const mapStateToProps = ({ petition, petitionResponse }) => ({
  ...getPetitionSupporters(petition),
  ...getPetitionResponseTimeMetrics(petition),
  pending: getPetitionResponsePending(petition),
  name: petition.city_answer && petition.city_answer.name
});

PetitionResponseStatusContainer.propTypes = {
  required: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired, // @TODO: change to `amount` since selector is different in another branch.
  daysPending: React.PropTypes.number,
  name: React.PropTypes.string,
  pending: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionResponseStatusContainer);
