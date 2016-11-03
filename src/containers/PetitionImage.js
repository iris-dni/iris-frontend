import React from 'react';
import { connect } from 'react-redux';
import PetitionImage from 'components/PetitionImage';
import getPetitionImage from 'selectors/petitionImage';

const PetitionImageContainer = (props) => (
  <PetitionImage {...props} />
);

const mapStateToProps = ({ petition }) => getPetitionImage(petition);

PetitionImageContainer.propTypes = {
  alt: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(PetitionImageContainer);
