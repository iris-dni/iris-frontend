import React from 'react';
import { connect } from 'react-redux';
import PetitionInfo from 'components/PetitionInfo';
import getPetitionInfo from 'selectors/petitionInfo';

const PetitionInfoContainer = (props) => (
  <PetitionInfo {...props} />
);

const mapStateToProps = ({ petition }) => getPetitionInfo(petition);

PetitionInfoContainer.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.object,
  ending: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionInfoContainer);
