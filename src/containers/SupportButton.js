import React from 'react';
import { connect } from 'react-redux';
import { supportPetition } from 'actions/SupportActions';
import SupportButton from 'components/SupportButton';
import getPetition from 'selectors/petition';

const mapStateToProps = ({ me, petition }) => ({
  petition: getPetition(petition)
});

const mapDispatchToProps = (dispatch) => ({
  supportPetition: (petition) => dispatch(supportPetition(petition))
});

SupportButton.propTypes = {
  petition: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportButton);
