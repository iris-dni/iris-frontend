import React from 'react';
import { connect } from 'react-redux';
import PetitionStats from 'components/PetitionStats';
import getPetitionSupporters from 'selectors/petitionSupporters';

const PetitionStatsContainer = (props) => (
  <PetitionStats {...props} />
);

const mapStateToProps = ({ petition }) => getPetitionSupporters(petition);

PetitionStatsContainer.propTypes = {
  amount: React.PropTypes.number,
  required: React.PropTypes.number
};

export default connect(
  mapStateToProps
)(PetitionStatsContainer);
