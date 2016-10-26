import React from 'react';
import { connect } from 'react-redux';
import PetitionWidgetInfo from 'components/PetitionWidgetInfo';
import getPetitionInfo from 'selectors/petitionInfo';

const PetitionWidgetInfoContainer = (props) => (
  <PetitionWidgetInfo {...props} />
);

const mapStateToProps = ({ petition }) => getPetitionInfo(petition);

PetitionWidgetInfoContainer.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.object,
  ending: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PetitionWidgetInfoContainer);
