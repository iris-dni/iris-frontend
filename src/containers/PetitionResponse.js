import React from 'react';
import { connect } from 'react-redux';
import getCityResponse from 'selectors/petitionResponse';
import PetitionResponse from 'components/PetitionResponse';

const PetitionResponseContainer = (props) => (
  <PetitionResponse {...props} />
);

const mapStateToProps = ({ petition }) => ({
  cityResponse: getCityResponse(petition)
});

PetitionResponseContainer.propTypes = {
  cityResponse: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionResponseContainer);
