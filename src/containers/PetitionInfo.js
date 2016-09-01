import React from 'react';
import { connect } from 'react-redux';
import PetitionInfo from 'components/PetitionInfo';
import getPetitionInfo from 'selectors/petitionInfo';

const PetitionInfoContainer = (props) => (
  <PetitionInfo {...props} />
);

const mapStateToProps = ({ petition }) => {
  return getPetitionInfo(petition);
};

PetitionInfoContainer.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.string,
  dateRange: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionInfoContainer);
