import React from 'react';
import { connect } from 'react-redux';
import getPetitionProcessing from 'selectors/petitionProcessing';
import getPetitionSupporters from 'selectors/petitionSupporters';
import getPetitionClosed from 'selectors/petitionClosed';
import getPetitionResponseTimeMetrics from 'selectors/petitionResponseTimeMetrics';
import PetitionResponseStatus from 'components/PetitionResponseStatus';

const PetitionResponseStatusContainer = (props) => (
  <PetitionResponseStatus {...props} />
);

const mapStateToProps = ({ petition, petitionResponse }) => ({
  ...getPetitionSupporters(petition),
  ...getPetitionResponseTimeMetrics(petition),
  pending: getPetitionProcessing(petition),
  closed: getPetitionClosed(petition),
  name: petition.city_answer && petition.city_answer.name
});

PetitionResponseStatusContainer.propTypes = {
  required: React.PropTypes.number.isRequired,
  amount: React.PropTypes.number.isRequired,
  daysPending: React.PropTypes.number,
  name: React.PropTypes.string,
  pending: React.PropTypes.bool,
  closed: React.PropTypes.bool
};

export default connect(
  mapStateToProps
)(PetitionResponseStatusContainer);
