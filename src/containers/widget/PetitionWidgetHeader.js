import React from 'react';
import { connect } from 'react-redux';
import PetitionWidgetHeader from 'components/PetitionWidgetHeader';
import getPetitionHeader from 'selectors/petitionHeader';

const PetitionWidgetHeaderContainer = (props) => (
  <PetitionWidgetHeader {...props} />
);

const mapStateToProps = ({ petition }) => getPetitionHeader(petition);

PetitionWidgetHeaderContainer.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(PetitionWidgetHeaderContainer);
