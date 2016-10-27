import React from 'react';
import { connect } from 'react-redux';
import PetitionWidgetInfo from 'widgets/components/PetitionWidgetInfo';
import getPetitionInfo from 'selectors/petitionInfo';

const mapStateToProps = ({ petition }) => getPetitionInfo(petition);

PetitionWidgetInfo.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.object,
  ending: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionWidgetInfo);
