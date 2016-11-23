import React from 'react';
import { connect } from 'react-redux';
import PetitionResponseStatus from 'components/PetitionResponseStatus';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';
import getPetitionClosed from 'selectors/petitionClosed';

const PetitionResponseStatusContainer = (props) => (
  <PetitionResponseStatus {...props} />
);

const mapStateToProps = ({ petition, petitionResponse }) => ({
  title: getPetitionResponseStatusTitle(petition),
  text: getPetitionResponseStatusText(petition),
  closed: getPetitionClosed(petition)
});

PetitionResponseStatusContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  closed: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(PetitionResponseStatusContainer);
