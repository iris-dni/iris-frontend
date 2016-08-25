import React from 'react';
import { connect } from 'react-redux';
import PetitionHeader from 'components/PetitionHeader';
import getPetitionHeader from 'selectors/petitionHeader';

const PetitionHeaderContainer = (props) => (
  <PetitionHeader {...props} />
);

const mapStateToProps = ({ petition }) => {
  return getPetitionHeader(petition);
};

PetitionHeaderContainer.propTypes = {
  title: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionHeaderContainer);
