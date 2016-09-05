import React from 'react';
import { connect } from 'react-redux';
import { publishPetition } from 'actions/PetitionActions';
import PublishButton from 'components/PublishButton';

const mapStateToProps = ({ petition }) => ({
  petition
});

const mapDispatchToProps = (dispatch) => ({
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

PublishButton.propTypes = {
  petition: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishButton);
