import React from 'react';
import { connect } from 'react-redux';
import getPetitionProcessing from 'selectors/petitionProcessing';
import getPetitionSupporters from 'selectors/petitionSupporters';
import getPetitionClosed from 'selectors/petitionClosed';
import getPetitionResponseDaysPending from 'helpers/getPetitionResponseDaysPending';
import PetitionResponseStatus from 'components/PetitionResponseStatus';

const PetitionResponseStatusContainer = (props) => (
  <PetitionResponseStatus {...props} />
);

const mapStateToProps = ({ petition, petitionResponse }) => ({
  ...getPetitionSupporters(petition),
  daysPending: getPetitionResponseDaysPending(petition.dc),
  name: petition.city_answer && petition.city_answer.name,
  pending: getPetitionProcessing(petition),
  closed: getPetitionClosed(petition)
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
