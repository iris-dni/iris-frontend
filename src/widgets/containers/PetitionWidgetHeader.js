import React from 'react';
import { connect } from 'react-redux';
import PetitionWidgetHeader from 'widgets/components/PetitionWidgetHeader';
import getPetitionHeader from 'selectors/petitionHeader';

const mapStateToProps = ({ petition }) => getPetitionHeader(petition);

PetitionWidgetHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(PetitionWidgetHeader);
